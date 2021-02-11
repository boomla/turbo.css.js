
export default function splitArgParts(className: string): [ parts: Array<string>, isNegative: boolean ] {
	let parts = [] as Array<string>;
	let isNegative = false;

	let s = className;
	if (s.startsWith("-")) {
		isNegative = true;
		s = s.substring(1);
	}

	let part = ""
	for (let char of s) {
		switch (char) {
			case '-': {
				if (0 < part.length) {
					parts.push(part);
					part = "";
				}
				else {
					part += char;
				}
				break;
			}
			default: {
				part += char;
			}
		}
	}
	if (0 < part.length) {
		parts.push(part);
	}

	return [ parts, isNegative ];
}

