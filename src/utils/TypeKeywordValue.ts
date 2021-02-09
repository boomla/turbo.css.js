import Config from "./Config";
import Type from "./Type";
import ValueString from "./ValueString";

export default class TypeKeywordValue implements Type {
	readonly keyword: string;
	readonly value: string;

	constructor(keyword: string, value: string) {
		this.keyword = keyword;
		this.value = value;
	}

	parse(_: Config, strArgs: Array<string>): [arg: ValueString, remainder: Array<string>] | undefined {
		if (strArgs[0] !== this.keyword) {
			return undefined;
		}
		
		return [ new ValueString(this.value), strArgs.slice(1) ];
	}
}

