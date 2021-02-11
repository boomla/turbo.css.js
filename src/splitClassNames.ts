
export default function splitClassNames(classes: string): Array<string> {
	let parts = classes.split(/[ \t\r\n]+/);
	
	let noWhiteSpaceParts = [] as Array<string>;
	for (let part of parts) {
		if (part === "") {
			continue;
		}

		noWhiteSpaceParts.push(part);
	}

	return noWhiteSpaceParts;
}

