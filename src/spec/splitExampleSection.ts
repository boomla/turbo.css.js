
import { CONST } from './CONST';

export default function splitExampleSection(sectionBody: string): Array<string> {
	sectionBody += "\n";
	sectionBody = replaceAll(sectionBody, CONST.SEPARATOR_START, CONST.SEPARATOR);
	sectionBody = replaceAll(sectionBody, CONST.SEPARATOR_CODE, CONST.SEPARATOR);
	sectionBody = replaceAll(sectionBody, CONST.SEPARATOR_END, CONST.SEPARATOR);

	let parts = sectionBody.split(CONST.SEPARATOR);
	parts = parts.slice(1, -1);
	for (let i=0; i<parts.length; i++) {
		let part = parts[i];
		parts[i] = part.trim();
	}

	return parts;
}

function replaceAll(s: string, needle: string, replacement: string): string {
	for (let i=0; i<10000; i++) {
		let pos = s.indexOf(needle);
		if (pos === -1) {
			return s;
		}

		s = s.replace(needle, replacement);
	}

	throw new Error("infinite loop suspected #MHx9VeImA5cd3DNqS7rvStr8oD3HHJDh");
}

