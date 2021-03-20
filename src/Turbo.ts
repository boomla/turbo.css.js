import Config from "./utils/Config";
import { DefaultConfig } from "./CONFIG";
import Compiler from "./Compiler";
import StyleSheet from "./css/StyleSheet";
import replaceTurboSnippets from "./replaceTurboSnippets";

export default class Turbo {
	namespace: string;
	important: boolean;
	compiler: Compiler;
	sheet: StyleSheet;

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

	loadLibrary(path: string, code: string) {
		this.compiler = this.compiler.loadLibrary(path, code);
	}

	// add() registers a Turbo snippet in the Turbo compiler instance.
	// It returns the processed snippet, with namespacing applied if necessary.
	add(classes: string): string {
		let [sheet, namespacedClasses] = this.compiler.addRewrite(this.sheet, this.namespace, classes);
		this.sheet = sheet;
		return namespacedClasses;
	}

	// addSource() source code in any language that contains Turbo snippets.
	// It extracts all such Turbo snippets, registers them in the Turbo
	// compiler instance and applies namespacing if necessary.
	addSource(source: string): string {
		let turbo = this;
		return replaceTurboSnippets(source, function(snippet: string): string {
			return turbo.add(snippet);
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

