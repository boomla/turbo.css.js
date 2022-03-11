
export default function eatT1(masterClass: string, classNames: Array<string>): Array<string> | undefined {
	for (let i=0; i<classNames.length; i++) {
		let className = classNames[i];

		if (className !== masterClass) {
			continue;
		}

		if (i === 0) {
			return classNames.slice(1);
		} else {
			return [...classNames.slice(0, i), ...classNames.slice(i+1) ];
		}
	}

	return undefined;
}

