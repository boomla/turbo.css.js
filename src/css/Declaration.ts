

export default class Declaration {
	readonly property: string = "";
	readonly value: string = "";

	constructor(property: string, value: string) {
		this.property = property;
		this.value = value;
	}

	format(indentation: string, newLine: string): string {
		return indentation + this.property + ": " + this.value + ";" + newLine;
	}
}

