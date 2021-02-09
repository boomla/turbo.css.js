import Config from "./Config";
import Type from "./Type";
import ValueString from "./ValueString";

export default class TypeKeywordValueMap implements Type {
	readonly map: { [key: string]: string };

	constructor(map: { [key: string]: string }) {
		this.map = map;
	}

	parse(_: Config, strArgs: Array<string>): [arg: ValueString, remainder: Array<string>] | undefined {
		let val = this.map[strArgs[0]];
		if (val === undefined) {
			return undefined;
		}
		
		return [ new ValueString(val), strArgs.slice(1) ];
	}
}

