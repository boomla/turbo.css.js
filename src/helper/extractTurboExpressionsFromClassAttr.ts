
export default function extractTurboExpressionsFromClassAttr(classAttr: string): Array<string> {
	let result: Array<string> = [];

	let list = classAttr.split(' ');

	let inTurboExpression = false;
	let currentExpression = [];
	for (let i=0; i<list.length; i++) {
		let className = list[i];

		if ( ! inTurboExpression) {
			if (className === 't1') {
				inTurboExpression = true;
				currentExpression.push('t1');
			}
			continue;
		}

		if (className === ';') {
			inTurboExpression = false;
			if (1 < currentExpression.length) {
				result.push(currentExpression.join(' '));
				currentExpression = [];
			}
			continue;
		}

		currentExpression.push(className);
	}

	if (1 < currentExpression.length) {
		result.push(currentExpression.join(' '));
	}

	return result;
}

