import type Config from "./Config";
import type Type from "./Type";
import ValueTime from './ValueTime';
import type { UnitTime } from './UnitTime';

export default class TypeTime implements Type {
	constructor() {
		// NOP
	}

	parse(_: Config, strArgs: Array<string>): [arg: ValueTime, remainder: Array<string>] | undefined {
		let input = strArgs[0];

		let [ numStr, unit ] = (function(): [string, UnitTime] {
			if (input.endsWith("ms")) {
				return [ input.substring(0, input.length - ("ms").length), "ms" ];
			}
			if (input.endsWith("s")) {
				return [ input.substring(0, input.length - ("s").length), "s" ];
			}

			return [ input, "ms" ];
		})();

		let f = parseFloat(numStr);
		if (f.toString() !== numStr) {
			return undefined;
		}

		return [ new ValueTime(f, unit), strArgs.slice(1) ];
	}
}

