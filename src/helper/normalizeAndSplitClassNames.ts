
export default function normalizeAndSplitClassNames(classAttr: string): [ /* turboClasses: */ string[], /* otherClasses */ string[] ] {
	let turboClasses: Set<string> = new Set();
	let otherClasses: Array<string> = [];

	let list = classAttr.split(' ');

	let inTurboExpression = false;
	for (let i=0; i<list.length; i++) {
		let className = list[i];
		if (className === '') {
			continue;
		}

		if ( ! inTurboExpression) {
			if (className === 't1') {
				inTurboExpression = true;
				turboClasses.add(className)
			}
			else {
				otherClasses.push(className)
			}
			continue;
		}

		if (className === ';') {
			inTurboExpression = false;
			continue;
		}

		turboClasses.add(className);
	}

	return [ Array.from(turboClasses), otherClasses ];
}

