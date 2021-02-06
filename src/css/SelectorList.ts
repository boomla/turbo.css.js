import Selector from './Selector';

export default class SelectorList {
	readonly selectors: Array<Selector>;

	constructor(selectors: Array<Selector>) {
		this.selectors = selectors;
	}

	// Less reports whether this selector list should sort before sl2.
	less(sl2: SelectorList): boolean {
		if ((this.selectors.length === 0) || (sl2.selectors.length === 0)) {
			// Should never happen
			return false
		}
		
		return this.selectors[0].less(sl2.selectors[0]);
	}

	addCombinator(combinator: string): SelectorList {
		let newSelectors = [] as Array<Selector>;

		for (let selector of this.selectors) {
			newSelectors.push(selector.addCombinator(combinator));
		}

		return new SelectorList(newSelectors);
	}

	addPseudoElementSelector(pseudoElementSelector: string): SelectorList {
		let newSelectors = [] as Array<Selector>;

		for (let selector of this.selectors) {
			newSelectors.push(selector.addPseudoElementSelector(pseudoElementSelector));
		}

		return new SelectorList(newSelectors);
	}

	addSelfSelector(): SelectorList {
		let newSelectorList = [] as Array<Selector>;

		for (let selector of this.selectors) {
			newSelectorList.push(selector.addSelfSelector());
		}

		return new SelectorList(newSelectorList);
	}

	addTag(tagName: string): SelectorList {
		let newSelectors = [] as Array<Selector>;

		for (let selector of this.selectors) {
			newSelectors.push(selector.addTag(tagName));
		}

		return new SelectorList(newSelectors);
	}

	format(namespace: string, indentation: string, newLine: string): string {
		if (this.selectors.length === 0) {
			throw new Error("empty selector list is invalid, can not format it");
		}

		let separator = "," + newLine;

		let s = "";
		for (let selector of this.selectors) {
			let selectorStr = selector.format(namespace);
			s += separator + indentation + selectorStr
		}

		return s.substring(separator.length);
	}

	key(): string {
		let s = "";
		for (let selector of this.selectors) {
			s += selector.key();
		}
		return s;
	}

	prefixClassNames(namespace: string): SelectorList {
		if (namespace === "") {
			return this;
		}

		let newSelectors = [] as Array<Selector>;
		for (let i=0; i<this.selectors.length; i++) {
			let selector = this.selectors[i];
			newSelectors[i] = selector.prefixClassNames(namespace);
		}

		return new SelectorList(newSelectors);
	}

	suffixFirstSegments(...suffixes: Array<string>): SelectorList {
		let newSelectors = [] as Array<Selector>;
		for (let selector of this.selectors) {
			for (let suffix of suffixes) {
				newSelectors.push(selector.suffixFirstSegment(suffix));
			}
		}

		return new SelectorList(newSelectors);
	}
}

