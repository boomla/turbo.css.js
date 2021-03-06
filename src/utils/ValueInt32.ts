
export default class ValueInt32 {
	readonly val: number = 0;

	constructor(val: number) {
		this.val = val;
	}

	toString(): string {
		return this.val.toString();
	}
	negate(): ValueInt32 {
		return new ValueInt32(0 - this.val);
	}
}

