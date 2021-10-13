import type { UnitName } from "./UnitName";

export default function parseAngle(s: string, defaultUnit: UnitName): [angleValue: number, angleUnit: UnitName] | undefined {
	let unit: UnitName;
	let value: string;
	if (s.endsWith("deg")) {
		unit = "deg";
		value = s.substring(0, s.length-3);
	} else if (s.endsWith("turn")) {
		unit = "turn";
		value = s.substring(0, s.length-4);
	} else {
		unit = defaultUnit;
		value = s;
	}

	let f = parseFloat(value);
	if (f.toString() !== value) {
		return undefined;
	}

	return [ f, unit ];
}

