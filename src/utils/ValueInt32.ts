
export default class ValueInt32 {
	readonly val: number = 0;

	constructor(val: number) {
		this.val = val;
	}

	toString(): string {
		return this.val.toString();
	}
	negate(): [ negatedValue: ValueInt32, ok: boolean ] {
		return [ new ValueInt32(0 - this.val), true ];
	}
}

