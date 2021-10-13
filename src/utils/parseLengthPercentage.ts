import type { UnitName } from "./UnitName";

const UNITS: Array<UnitName> = [
	"px",
	"rem",
	"em",
	"vh",
	"vw",
	"vmin",
	"vmax",
	"%",
];

export default function parseLengthPercentage(s: string, defaultUnit: UnitName): [lengthValue: number, lengthUnit: UnitName] | undefined {
	let [ numStr, lengthUnit ] = (function(): [string, UnitName] {
		for (let unit of UNITS) {
			if (s.endsWith(unit)) {
				return [ s.substring(0, s.length-unit.length), unit ];
			}
		}

		return [ s, defaultUnit ];
	})();

	let f = parseFloat(numStr);
	if (f.toString() !== numStr) {
		return undefined;
	}

	return [ f, lengthUnit ];
}

