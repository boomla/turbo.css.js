import type Config from "./Config";
import type Type from "./Type";
import ValueString from "./ValueString";

export default class TypeKeyword implements Type {
	readonly keyword: string;

	constructor(keyword: string) {
		this.keyword = keyword;
	}

	parse(_: Config, strArgs: Array<string>): [arg: ValueString, remainder: Array<string>] | undefined {
		if (strArgs[0] !== this.keyword) {
			return undefined;
		}
		
		return [ new ValueString(this.keyword), strArgs.slice(1) ];
	}
}

