import replaceAll from "../helper/replaceAll";

export default function dataUrlEncode(s: string): string {
	return replaceAll(s, "#", "%23");
}

