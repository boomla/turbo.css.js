import type Config from "./utils/Config";
import { DefaultConfig } from "./CONFIG";
import { NoCompatConfig } from "./CONFIG";
import Compiler from "./Compiler";
import StyleSheet from "./css/StyleSheet";
import replaceTurboSnippets from "./replaceTurboSnippets";
import normalizeAndSplitClassNames from "./helper/normalizeAndSplitClassNames";

export default class Turbo {
	namespace: string;
	important: boolean;
	compiler: Compiler;
	sheet: StyleSheet;

	static defaultConfig: Config = DefaultConfig;
	static noCompatConfig: Config = NoCompatConfig;

	constructor(config?: Config, namespace?: string, important?: boolean) {
		if (config === undefined) {
			config = DefaultConfig;
		}
		if (namespace === undefined) {
			namespace = "";
		}
		if (important === undefined) {
			important = false;
		}
		this.namespace = namespace;
		this.important = important;
		this.compiler = new Compiler(config);
		this.sheet = new StyleSheet();
	}

	eval(path: string, code: string) {
		this.compiler = this.compiler.eval(path, code);
	}

	// add() registers a Turbo code block in the Turbo compiler instance.
	// It returns the processed code block, with namespacing applied if necessary.
	add(classes: string): string {
		let [compiler, sheet, namespacedClasses] = this.compiler.addRewrite(this.sheet, this.namespace, classes);
		this.compiler = compiler;
		this.sheet = sheet;
		return namespacedClasses;
	}

	// addClassAttr() registers a HTMLElement's class attribute in the Turbo compiler instance.
	// The class attribute may contain zero or more Turbo code blocks.
	// A Turbo code blocks starts with the [t1] class, followed by zero or more Turbo classes,
	// followed by either a terminating semicolon or the end of the class attribute.
	// Class names before, after and between Turbo code blocks are ignored.
	// It returns the class attribute normalized into a single Turbo code block that is at the
	// start of the class attribute, with namespacing applied if necessary.
	addClassAttr(classAttr: string): string {
		let [ turboClasses, otherClasses ] = normalizeAndSplitClassNames(classAttr);
		let turboCodeBlock = turboClasses.join(' ');

		let [compiler, sheet, namespacedClasses] = this.compiler.addRewrite(this.sheet, this.namespace, turboCodeBlock);
		this.compiler = compiler;
		this.sheet = sheet;

		if (otherClasses.length === 0) {
			return namespacedClasses;
		}
		if (namespacedClasses === '') {
			return otherClasses.join(' ');
		}
		return namespacedClasses + ' ; ' + otherClasses.join(' ');
	}

	// addSource() source code in any language that contains Turbo code blocks.
	// It extracts all such Turbo code blocks, registers them in the Turbo
	// compiler instance and applies namespacing if necessary.
	addSource(source: string): string {
		return replaceTurboSnippets(source, (snippet: string) => {
			return this.add(snippet);
		});
	}

	meta(): string {
		return `<meta name="viewport" content="` + this.metaContent() + `">`;
	}

	metaContent(): string {
		return "width=device-width, initial-scale=1";
	}

	css(): string {
		let indentWith = "\t";
		let newLine = "\n";
		return this.compiler.format(this.sheet, this.namespace, indentWith, newLine, this.important);
	}

	style(): string {
		return ""+
			"<style>\n" +
			this.css() +
			"</style>";
	}

	head(): string {
		return ""+
			this.meta() + "\n" +
			this.style();
	}
}

