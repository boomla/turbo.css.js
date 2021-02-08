
export default class ValueFloat32 {
	readonly val: number = 0;

	constructor(val: number) {
		this.val = val;
	}

	toString(): string {
		return this.val.toString();
	}
	negate(): ValueFloat32 {
		return new ValueFloat32(0 - this.val);
	}
}

