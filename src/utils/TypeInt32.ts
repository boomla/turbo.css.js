import Config from "./Config";
import Type from "./Type";
import ValueInt32 from './ValueInt32';

export default class TypeInt32 implements Type {
	readonly min: number|undefined;
	readonly max: number|undefined;

	constructor(min?: number, max?: number) {
		this.min = min;
		this.max = max;
	}

	parse(_: Config, strArgs: Array<string>): [arg: ValueInt32, remainder: Array<string>]|undefined {
		let n = parseInt(strArgs[0]);
		if (n.toString() !== strArgs[0]) {
			return undefined;
		}

		if ((this.min !== undefined) && (n < this.min)) {
			return undefined;
		}
		if ((this.max !== undefined) && (this.max < n)) {
			return undefined;
		}

		return [ new ValueInt32(n), strArgs.slice(1) ];
	}
}

