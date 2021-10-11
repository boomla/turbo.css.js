import { UnitName } from "./UnitName";

export default class ValueAngle {
	readonly value: number;
	readonly unitName: UnitName;

	constructor(value: number, unitName: UnitName) {
		this.value = value;
		this.unitName = unitName;
	}

	toCSS(): string {
		return this.value.toString() + this.unitName;
	}
	negate(): ValueAngle {
		return new ValueAngle(this.value * -1, this.unitName);
	}
	toClassName(defaultUnit?: UnitName): string {
		if (this.value === 0) {
			return "0";
		}
		if (defaultUnit === this.unitName) {
			return this.value.toString();
		}
		return this.value.toString() + this.unitName;
	}
}
