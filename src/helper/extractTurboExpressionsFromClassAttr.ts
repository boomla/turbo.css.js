import normalizeAndSplitClassNames from './normalizeAndSplitClassNames';

export default function extractTurboExpressionsFromClassAttr(masterClass: string, classAttr: string): string {
	let [ turboClasses, _ ] = normalizeAndSplitClassNames(masterClass, classAttr);
	return turboClasses.join(' ');
}

