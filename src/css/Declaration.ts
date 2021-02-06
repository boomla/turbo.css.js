

export default class Declaration {
	readonly property: string = "";
	readonly value: string = "";

	constructor(source: Partial<Declaration>) {
		Object.assign(this, source);
	}

	// The clone function exists only to match the reference implementation.
	// In TypeScript, we have readonly properties which is a simpler
	// way of implementing immutable instances.
	clone(): Declaration {
		return this;
	}

	format(indentation: string, newLine: string): string {
		return indentation + this.property + ": " + this.value + ";" + newLine;
	}
}

