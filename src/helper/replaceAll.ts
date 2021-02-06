
export default function replaceAll(s: string, needle: string, replacement: string): string {
	for (let i=0; i<10000; i++) {
		let pos = s.indexOf(needle);
		if (pos === -1) {
			return s;
		}

		s = s.replace(needle, replacement);
	}

	throw new Error("infinite loop suspected #MHx9VeImA5cd3DNqS7rvStr8oD3HHJDh");
}

