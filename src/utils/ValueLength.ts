import { UnitName } from "./UnitName";

export default class ValueLength {
	readonly value: number;
	readonly unitName: UnitName;

	constructor(value: number, unitName: UnitName) {
		this.value = value;
		this.unitName = unitName;
	}

	toString(): string {
		if (this.value === 0) {
			return "0";
		}
		return this.value.toString() + this.unitName;
	}
	negate(): ValueLength {
		return new ValueLength(
			this.value * (-1),
			this.unitName,
		);
	}
}

