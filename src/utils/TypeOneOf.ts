import type Config from "./Config";
import type Value from "./Value";
import type Type from "./Type";

export default class TypeOneOf implements Type {
	readonly types: Array<Type>;

	constructor(...types: Array<Type>) {
		this.types = types;
	}

	parse(config: Config, strArgs: Array<string>): [arg: Value, remainder: Array<string>] | undefined {
		for (let typ of this.types) {
			let res = typ.parse(config, strArgs);
			if (res !== undefined) {
				return res;
			}
		}
		return undefined;
	}
}

