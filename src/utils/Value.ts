import type Config from "./Config";
import type { UnitName } from "./UnitName";

export default interface Value {
	toCSS(config?: Config): string;
	negate(): Value;
	toClassName(defaultUnit?: UnitName): string;
}

