
export default class ValuePercentage {
	readonly val: number;

	constructor(val: number) {
		this.val = val;
	}

	toString(): string {
		if (this.val === 0) {
			return "0";
		}
		return this.val.toString() + "%";
	}
	negate(): ValuePercentage {
		return new ValuePercentage(this.val * (-1));
	}
}

