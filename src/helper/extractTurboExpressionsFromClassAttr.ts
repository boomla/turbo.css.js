
export default function extractTurboExpressionsFromClassAttr(classAttr: string): string {
	let result: Array<string> = [];

	let list = classAttr.split(' ');

	let inTurboExpression = false;
	for (let i=0; i<list.length; i++) {
		let className = list[i];

		if ( ! inTurboExpression) {
			if (className === 't1') {
				inTurboExpression = true;
			}
			continue;
		}

		if (className === ';') {
			inTurboExpression = false;
			continue;
		}

		result.push(className);
	}

	if (result.length === 0) {
		return '';
	}

	return 't1 ' + result.join(' ');
}

