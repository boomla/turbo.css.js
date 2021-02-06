
import { CONST } from './CONST';
import replaceAll from '../helper/replaceAll';

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

