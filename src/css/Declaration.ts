

export default class Declaration {
	readonly property: string = "";
	readonly value: string = "";

	constructor(source: Partial<Declaration>) {
		Object.assign(this, source);
	}

	format(indentation: string, newLine: string): string {
		return indentation + this.property + ": " + this.value + ";" + newLine;
	}
}

