import Value from "./Value";

export default class ValueString {
	readonly val: string = "";

	constructor(val: string) {
		this.val = val;
	}

	toCSS(): string {
		return this.val;
	}
	negate(): Value {
		throw new Error('unsupported method');
	}
	toClassName(): string {
		return this.val;
	}
}

