
export default class ValueString {
	readonly val: string = "";

	constructor(val: string) {
		this.val = val;
	}

	toCSS(): string {
		return this.val;
	}
	negate(): undefined {
		return undefined;
	}
	toClassName(): string {
		return this.val;
	}
}

