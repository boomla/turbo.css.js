
export default function replaceAll(s: string, needle: string, replacement: string): string {
	let result = "";

	for (let i=0; i<10000; i++) {
		let pos = s.indexOf(needle);
		if (pos === -1) {
			result += s;
			return result;
		}

		// Result
		result += s.substring(0, pos);
		result += replacement;

		// Remainder
		s = s.substring(pos+needle.length);
	}

	throw new Error("infinite loop suspected #MHx9VeImA5cd3DNqS7rvStr8oD3HHJDh");
}

