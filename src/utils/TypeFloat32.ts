import Config from "./Config";
import ValueFloat32 from "./ValueFloat32";
import Type from "./Type";

export default class TypeFloat32 implements Type {
	readonly min: number|undefined;
	readonly max: number|undefined;
	readonly unit: number = 0;

	constructor(min?: number, max?: number, unit?: number) {
		this.min = min;
		this.max = max;
		if (unit !== undefined) {
			this.unit = unit;
		}
	}

	parse(_: Config, strArgs: Array<string>): [arg: ValueFloat32, remainder: Array<string>]|undefined {
		let f = parseFloat(strArgs[0]);
		if (f.toString() !== strArgs[0]) {
			return undefined;
		}

		if ((this.min !== undefined) && (f < this.min)) {
			return undefined;
		}
		if ((this.max !== undefined) && (this.max < f)) {
			return undefined;
		}

		if (this.unit !== 0) {
			f = f * this.unit;
		}

		return [ new ValueFloat32(f), strArgs.slice(1) ];
	}
}

