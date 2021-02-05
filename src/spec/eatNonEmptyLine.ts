
export default function eatNonEmptyLine(s: string): [line: string, remainder: string, end: boolean] {
	s = s.trim();

	let pos = s.indexOf("\n");
	if (pos === -1) {
		return [ s, "", true ];
	}

	return [ s.substring(0, pos), s.substring(pos+1), false ];
}

