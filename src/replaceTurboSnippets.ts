
export default function replaceTurboSnippets(source: string, callback: (match: string) => string): string {
	return source.replace(/[^a-zA-Z0-9_\-\.]t1\s[a-zA-Z0-9\s\-\._:@\/+~%]+/g, function(match) {
		let firstChar = match.substring(0, 1);
		let turboSnippet = match.substring(1);
		return firstChar + callback(turboSnippet);
	});
}

