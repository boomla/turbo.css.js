import Config from "./Config";
import Type from "./Type";
import ValueLength from './ValueLength';
import { UnitName } from './UnitName';

export default class TypeLength implements Type {
	readonly defaultUnit: ValueLength;

	constructor(unitValue: number, unitName: UnitName) {
		this.defaultUnit = new ValueLength(unitValue, unitName);
	}

	parse(_: Config, strArgs: Array<string>): [arg: ValueLength, remainder: Array<string>] | undefined {
		let res = TypeLength.parseLength(strArgs, this.defaultUnit);
		if (res === undefined) {
			return undefined;
		}

		let [ arg, remainder,  ] = res;
		
		return [ arg, remainder ];
	}

	static parseLength(strArgs: Array<string>, defaultUnit: ValueLength): [arg: ValueLength, remainder: Array<string>, explicitUnit: boolean] | undefined {
		let strArg = strArgs[0];

		let [ numStr, unitValue, unitName, explicitUnit ] = (function(): [string, number, UnitName, boolean] {
			if (strArg.endsWith("px")) {
				return [ strArg.substring(0, strArg.length - ("px").length), 1, "px", true ];
			}
			if (strArg.endsWith("rem")) {
				return [ strArg.substring(0, strArg.length - ("rem").length), 1, "rem", true ];
			}
			if (strArg.endsWith("em")) {
				return [ strArg.substring(0, strArg.length - ("em").length), 1, "em", true ];
			}
			if (strArg.endsWith("vh")) {
				return [ strArg.substring(0, strArg.length - ("vh").length), 1, "vh", true ];
			}
			if (strArg.endsWith("vw")) {
				return [ strArg.substring(0, strArg.length - ("vw").length), 1, "vw", true ];
			}
			if (strArg.endsWith("vmin")) {
				return [ strArg.substring(0, strArg.length - ("vmin").length), 1, "vmin", true ];
			}
			if (strArg.endsWith("vmax")) {
				return [ strArg.substring(0, strArg.length - ("vmax").length), 1, "vmax", true ];
			}

			return [ strArg, defaultUnit.value, defaultUnit.unitName, false];
		})();

		let f = parseFloat(numStr);
		if (f.toString() !== numStr) {
			return undefined;
		}

		let value = new ValueLength(f * unitValue, unitName);
		
		return [value, strArgs.slice(1), explicitUnit];
	}
}

