import type Config from "./Config";
import type Value from "./Value";

export default class ValueShadow {
	constructor(public readonly distance: number, public readonly darkness?: number | undefined) {}
	toCSS(config: Config): string {
		const boxShadow = config.getShadow(
			this.distance,
			this.darkness !== undefined ? this.darkness : 20
		);
		return boxShadow;
	}
	negate(): Value {
		throw new Error(`can not negate shadow ${this.toClassName()}`);
	}
	toClassName(): string {
		return this.distance.toString() + ((this.darkness !== undefined) ? `-${this.darkness.toString()}` : "");
	}
}
