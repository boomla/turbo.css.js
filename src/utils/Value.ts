import Config from "./Config";
import { UnitName } from "./UnitName";

export default interface Value {
	toCSS(config?: Config): string;
	negate(): Value;
	toClassName(defaultUnit?: UnitName): string;
}

