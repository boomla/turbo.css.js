import Config from "./Config";
import Type from "./Type";
import ValueString from "./ValueString";

export default class TypeKeywordsValueMap implements Type {
	readonly map: { [key: string]: string };

	constructor(map: { [key: string]: string }) {
		this.map = map;
	}

	parse(_: Config, strArgs: Array<string>): [arg: ValueString, remainder: Array<string>] | undefined {
		let key: string;
		let val: string;
		for (let i=strArgs.length; 0<i; i--) {
			key = strArgs.slice(0, i).join("-");

			val = this.map[key];
			if (val !== undefined) {
				return [ new ValueString(val), strArgs.slice(i) ];
			}
		}

		return undefined;
	}
}

