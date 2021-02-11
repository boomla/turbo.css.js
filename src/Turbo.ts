import Config from "./utils/Config";
import Compiler from "./Compiler";
import StyleSheet from "./css/StyleSheet";

export default class Turbo {
	namespace: string;
	compiler: Compiler;
	sheet: StyleSheet;

	constructor(config: Config, namespace: string) {
		this.namespace = namespace;
		this.compiler = new Compiler(config);
		this.sheet = new StyleSheet();
	}

	loadLibrary(path: string, code: string) {
		this.compiler = this.compiler.loadLibrary(path, code);
	}

	add(classes: string): string {
		let [sheet, namespacedClasses] = this.compiler.addRewrite(this.sheet, this.namespace, classes);
		this.sheet = sheet;
		return namespacedClasses;
	}

	meta(): string {
		return `<meta name="viewport" content="width=device-width, initial-scale=1">`;
	}

	css(): string {
		let indentWith = "\t";
		let newLine = "\n";
		return this.compiler.format(this.sheet, this.namespace, indentWith, newLine);
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

