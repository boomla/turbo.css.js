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
		throw new Error(`string [${this.val}] cannot be negated`);
	}
	toClassName(): string {
		return this.val;
	}
}

