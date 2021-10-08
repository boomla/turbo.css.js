import { UnitName } from './UnitName';
import { UnitTime } from './UnitTime';

export default class ValueTime {
	readonly value: number;
	readonly unitName: UnitTime;

	constructor(value: number, unitName: UnitTime) {
		this.value = value;
		this.unitName = unitName;
	}

	toCSS(): string {
		if (this.value === 0) {
			return "0";
		}
		return this.value.toString() + this.unitName;
	}
	negate(): ValueTime {
		return new ValueTime(
			this.value * (-1),
			this.unitName,
		);
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

