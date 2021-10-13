import type Config from "./Config";
import type Type from "./Type";
import TypeLength from "./TypeLength";
import TypePercentage from "./TypePercentage";
import type Value from './Value';
import ValueLength from './ValueLength';
import type { UnitName } from './UnitName';

export default class TypeLengthPercentage implements Type {
	readonly defaultUnit: ValueLength;
	readonly requireUnit: boolean = false;

	constructor(unitValue: number, unitName: UnitName, requireUnit?: boolean) {
		this.defaultUnit = new ValueLength(unitValue, unitName);
		if (requireUnit === true) {
			this.requireUnit = true;
		}
	}

	static newWithUnit(): TypeLengthPercentage {
		// Default unit does not matter but is required by the length parser, use anything
		return new TypeLengthPercentage(1, "px", true);
	}

	parse(_: Config, strArgs: Array<string>): [arg: Value, remainder: Array<string>] | undefined {
		let res = TypeLength.parseLength(strArgs, this.defaultUnit)
		if (res !== undefined) {
			let [ arg, remainder, explicitUnit ] = res;
			let unitRequirementFullfilled = explicitUnit || ( ! this.requireUnit);
			if (unitRequirementFullfilled) {
				return [ arg, remainder ];
			}
		}

		return TypePercentage.parsePercentage(strArgs, this.requireUnit);
	}
}

