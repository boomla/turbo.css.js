import type Config from "./Config";
import type Type from "./Type";
import ValuePercentage from './ValuePercentage';

export default class TypePercentage implements Type {
	readonly requirePercentSign: boolean;

	constructor(requirePercentSign: boolean) {
		this.requirePercentSign = requirePercentSign;
	}

	parse(_: Config, strArgs: Array<string>): [arg: ValuePercentage, remainder: Array<string>] | undefined {
		return TypePercentage.parsePercentage(strArgs, this.requirePercentSign);
	}

	static parsePercentage(strArgs: Array<string>, requirePercentSign: boolean): [arg: ValuePercentage, remainder: Array<string>] | undefined {
		let input = strArgs[0];

		if (requirePercentSign) {
			if ( ! input.endsWith("%")) {
				return undefined;
			}

			input = input.substring(0, input.length-1);
		}
		else {
			if (input.endsWith("%")) {
				input = input.substring(0, input.length-1);
			}
		}

		let f = parseFloat(input);
		if (f.toString() !== input) {
			return undefined;
		}

		return [ new ValuePercentage(f), strArgs.slice(1) ];
	}
}

