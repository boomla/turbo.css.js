import Turbo from "../Turbo";
import BASE_CSS from "../base-css/BASE_CSS";

function init() {
	let turbo = new Turbo();

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
	baseStyle.innerHTML = BASE_CSS;

	// Add style tag for Turbo generated styles
	let style = document.createElement('style');
	head.appendChild(style);

	const updateStyle = function() {
		style.innerHTML = turbo.css();
	};

	const add = function(el: Element) {
		let classAttr = el.getAttribute('class');
		if (classAttr) {
			try {
				turbo.add(classAttr);
			}
			catch(e) {
				console.log(e);
			}
		}
	};

	// Compile all current Turbo classes
	let els = window.document.getElementsByClassName('t1');
	for (let i=0; i<els.length; i++) {
		let el = els[i];
		add(el);
	}

	// Hot-compile on changes
	const config = {
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
	observer.observe(document.documentElement, config);

	// Update styles upon init
	updateStyle();
}

if (document.readyState === "loading") {
	window.addEventListener('DOMContentLoaded', init);
}
else {
	init();
}

