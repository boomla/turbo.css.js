import Turbo from "../Turbo";
import type Config from "../utils/Config";
import { DefaultConfig } from "../CONFIG";
import ConfigStatic from "../utils/ConfigStatic";
import BASE_CSS_MIN from "../base-css/BASE_CSS_MIN";
import extractTurboExpressionsFromClassAttr from '../helper/extractTurboExpressionsFromClassAttr';

function compileAndWatch() {
	let contextPath = "";
	let namespace = "";
	let important = true;

	let config: Config|undefined = undefined;

	if ((window as any).turboLoadLibrary !== undefined) {
		let loadLibraryFn = (window as any).turboLoadLibrary as (libPath: string) => string;

		config = new ConfigStatic({
			colorPoints: DefaultConfig.colorPoints,
			colorScales: DefaultConfig.colorScales,
			shadows: DefaultConfig.shadows,
			commonBrowsers: DefaultConfig.commonBrowsers,
			resolveLibraryFn: function(_contextPath: string, libName: string): string | undefined {
				return libName;
			},
			loadLibraryFn: loadLibraryFn,
		})
	}
	
	let turbo = new Turbo(config, contextPath, namespace, important);

	let head = document.getElementsByTagName('head')[0];

	// Set/Add meta viewport
	let viewport = document.querySelector("meta[name=viewport]");
	if (viewport) {
		viewport.setAttribute('content', turbo.metaContent());
	}
	else {
		let meta = document.createElement('meta');
		meta.name = "viewport";
		meta.content = turbo.metaContent();
		head.appendChild(meta);
	}

	// Add style tag for base CSS
	let baseStyle = document.createElement('style');
	head.appendChild(baseStyle);
	baseStyle.innerHTML = BASE_CSS_MIN;

	// Add style tag for Turbo generated styles
	let style = document.createElement('style');
	head.appendChild(style);

	const updateStyle = function() {
		style.innerHTML = turbo.css();
	};

	const add = function(el: Element) {
		let classAttr = el.getAttribute('class');
		if ( ! classAttr) {
			return;
		}

		let turboExpression = extractTurboExpressionsFromClassAttr(classAttr);
		if ( ! turboExpression) {
			return;
		}
		
		try {
			turbo.add(turboExpression);
		}
		catch(e) {
			console.log(e);
		}
	};

	// Compile all current Turbo classes
	let els = window.document.getElementsByClassName('t1');
	for (let i=0; i<els.length; i++) {
		let el = els[i];
		add(el);
	}

	// Hot-compile on changes
	const observerConfig = {
		attributes: true,
		attributeFilter: [ "class" ],
		childList: true,
		subtree: true,
	};

	const callback = function(mutationsList: Array<MutationRecord>, _observer: MutationObserver) {
		let updated = false;

		for(const mutation of mutationsList) {
			if (mutation.type === 'attributes') {
				if (mutation.target && (mutation.target instanceof HTMLElement) && mutation.target.classList.contains('t1')) {
					add(mutation.target);
					updated = true;
				}
			}
			else if (mutation.type === 'childList') {
				for (let i=0; i<mutation.addedNodes.length; i++) {
					let node = mutation.addedNodes[i];
					if ((node instanceof HTMLElement) && node.classList && node.classList.contains('t1')) {
						add(node);

						// Find Turbo classes in the element's subtree
						let els = node.getElementsByClassName('t1');
						for (let i=0; i<els.length; i++) {
							let el = els[i];
							add(el);
						}

						updated = true;
					}
				}
			}
		}
		if (updated) {
			updateStyle();
		}
	};

	const observer = new MutationObserver(callback);
	observer.observe(document.documentElement, observerConfig);

	// Update styles upon init
	updateStyle();
}

if (document.readyState === "loading") {
	window.addEventListener('DOMContentLoaded', compileAndWatch);
}
else {
	compileAndWatch();
}

