
export default class ValueString {
	readonly val: string = "";

	constructor(val: string) {
		this.val = val;
	}

	toString(): string {
		return this.val;
	}
	negate(): undefined {
		return undefined;
	}
}

