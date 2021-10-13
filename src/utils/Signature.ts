import type Type from "./Type";
import type Config from "./Config";
import type Value from "./Value";

export default class Signature {
	types: Array<Type>;
	
	constructor(...types: Array<Type>) {
		this.types = types;
	}

	parseArgs(config: Config, strArgs: Array<string>, isNegative: boolean): Array<Value> | undefined {
		if(this.types.length === 0) {
			if (strArgs.length === 0) {
				return [];
			} else {
				return undefined;
			}
		}

		let args = [] as Array<Value>;
		for (let typ of this.types) {
			// Assert there is at least one remaining argument (each type requires 1+)
			if (strArgs.length === 0) {
				return undefined;
			}

			// Parse remaining arguments
			let res = typ.parse(config, strArgs);
			if (res === undefined) {
				return undefined;
			}
			let [ arg, remainder ] = res;
			args.push(arg);

			// Remainder for next round
			strArgs = remainder;
		}

		// If there is a remainder, the signature did not match
		if (0 < strArgs.length) {
			return undefined;
		}

		if (isNegative) {
			// Negating is only available for exactly one argument
			if (args.length !== 1) {
				return undefined;
			}

			let negatedValue = args[0].negate();
			if (negatedValue === undefined) {
				// Negation is not available for argument type
				return undefined;
			}
			args[0] = negatedValue;
		}

		return args;
	}
}

