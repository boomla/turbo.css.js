import normalizeAndSplitClassNames from './normalizeAndSplitClassNames';

export default function extractTurboExpressionsFromClassAttr(classAttr: string): string {
	let [ turboClasses, _ ] = normalizeAndSplitClassNames(classAttr);
	return turboClasses.join(' ');
}

