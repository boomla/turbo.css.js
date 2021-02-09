import Config from "./Config";
import Type from "./Type";
import ValueString from './ValueString';

export default class TypeShadow implements Type {
	constructor() {
		// NOP
	}

	parse(config: Config, strArgs: Array<string>): [arg: ValueString, remainder: Array<string>] | undefined {
		let remainder = strArgs;

		if (remainder.length === 0) {
			return undefined;
		}

		let distance = parseInt(remainder[0]);
		if (distance.toString() !== remainder[0]) {
			return undefined;
		}
		remainder = remainder.slice(1);

		let darkness: number;
		[ darkness, remainder ] = (function(): [number, Array<string>] {
			if (remainder.length === 0) {
				return [ 20, remainder ] // Default
			}

			let darkness = parseInt(remainder[0]);
			if (darkness.toString() !== remainder[0]) {
				return [ 20, remainder ] // Default
			}
			
			return [ darkness, remainder.slice(1) ];
		})();

		let boxShadow = config.getShadow(distance, darkness);

		return [ new ValueString(boxShadow), remainder ];
	}
}

