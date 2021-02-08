import Rule from './Rule';
import Selector from './Selector';
import SelectorList from './SelectorList';
import SelectorSegment from './SelectorSegment';
import replaceAll from '../helper/replaceAll';

export default function rewriteSelectorFunc(key: string, replacements: Array<string>): (rule: Rule) => Array<Rule> {
	return function(rule: Rule): Array<Rule> {
		return rewriteSelector(rule, key, replacements);
	}
}
function rewriteSelector(rule: Rule, key: string, replacements: Array<string>): Array<Rule> {
	if ( ! selectorContains(rule, key)) {
		return [ rule ];
	}

	let rules = [] as Array<Rule>;
	for (let replacement of replacements) {
		rules.push(selectorReplace(rule, key, replacement));
	}

	return rules;
}
function selectorReplace(rule: Rule, key: string, replacement: string): Rule {
	let selectors = rule.selectors.selectors;
	let newSelectors = [] as Array<Selector>;
	for (let i=0; i<selectors.length; i++) {
		let selector = selectors[i];
		let segments = selector.segments;

		let newSelectorSegments = [] as Array<SelectorSegment>;
		for (let j=0; j<segments.length; j++) {
			let segment = segments[j];

			if (-1 === segment.segment.indexOf(key)) {
				newSelectorSegments.push(segment);
			} else {
				let newSegment = replaceAll(segment.segment, key, replacement);
				newSelectorSegments.push(new SelectorSegment(newSegment));
			}
		}

		newSelectors.push(new Selector(newSelectorSegments));
	}

	let newSelectorList = new SelectorList(newSelectors);

	return new Rule(newSelectorList, rule.block, rule.order);
}
function selectorContains(rule: Rule, key: string): boolean {
	for (let selector of rule.selectors.selectors) {
		for (let segment of selector.segments) {
			if (-1 < segment.segment.indexOf(key)) {
				return true;
			}
		}
	}
	return false;
}

