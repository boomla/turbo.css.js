import type { UnitName } from "./UnitName";

export default class ValuePercentage {
	readonly value: number;

	constructor(val: number) {
		this.value = val;
	}

	toCSS(): string {
		if (this.value === 0) {
			return "0";
		}
		return this.value.toString() + "%";
	}
	negate(): ValuePercentage {
		return new ValuePercentage(this.value * (-1));
	}
	toClassName(defaultUnit?: UnitName): string {
		if (this.value === 0) {
			return "0";
		}
		if (defaultUnit === "%") {
			return this.value.toString();
		}
		return this.value.toString() + "%";
	}
}

