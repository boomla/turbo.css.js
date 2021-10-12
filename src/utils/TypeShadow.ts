import Config from "./Config";
import Type from "./Type";
import ValueShadow from "./ValueShadow";

export default class TypeShadow implements Type {
	constructor() {
		// NOP
	}

	parse(config: Config, strArgs: Array<string>): [arg: ValueShadow, remainder: Array<string>] | undefined {
		let remainder = strArgs;

		if (remainder.length === 0) {
			return undefined;
		}

		let distance = parseInt(remainder[0]);
		if (distance.toString() !== remainder[0]) {
			return undefined;
		}
		remainder = remainder.slice(1);

		let darkness: number | undefined;
		[ darkness, remainder ] = (function(): [number | undefined, Array<string>] {
			if (remainder.length === 0) {
				return [ undefined, remainder ] // Default
			}

			let darkness = parseInt(remainder[0]);
			if (darkness.toString() !== remainder[0]) {
				return [ undefined, remainder ] // Default
			}
			
			return [ darkness, remainder.slice(1) ];
		})();

		// check if the distance is in the config, throw error otherwise
		config.getShadow(distance, 20);

		return [ new ValueShadow(distance, darkness), remainder ];
	}
}

