import type Block from './Block';
import type Declaration from './Declaration';
import Order from './Order';
import type SelectorList from './SelectorList';

export default class Rule {
	readonly selectors: SelectorList;
	readonly block: Block;
	readonly order: Order;

	constructor(selectors: SelectorList, block: Block, order: Order) {
		this.selectors = selectors;
		this.block = block;
		this.order = order;
	}

	static testNewNoOrder(selectors: SelectorList, block: Block): Rule {
		return new Rule(selectors, block, new Order(0));
	}

	format(namespace: string, indentation: string, indentWith: string, newLine: string, important: boolean): string {
	    let selectorsStr = this.selectors.format(namespace, indentation, newLine);
	    let blockStr = this.block.format(indentation + indentWith, newLine, important);

	    let s = selectorsStr + " {" + newLine;
	    s += blockStr;
	    s += indentation + "}" + newLine;

		return s;
	}

	addDeclaration(decl: Declaration): Rule {
		let newBlock = this.block.addDeclaration(decl);
		return new Rule(this.selectors, newBlock, this.order);
	}
	addCombinator(combinator: string): Rule {
		let newSelectors = this.selectors.addCombinator(combinator);
		return new Rule(newSelectors, this.block, this.order);
	}
	addSelfSelector(): Rule {
		let newSelectors = this.selectors.addSelfSelector();
		return new Rule(newSelectors, this.block, this.order);
	}
	addPseudoElementSelector(pseudoElementSelector: string): Rule {
		let newSelectors = this.selectors.addPseudoElementSelector(pseudoElementSelector);
		return new Rule(newSelectors, this.block, this.order);
	}
	suffixFirstSegments(...suffixes: Array<string>): Rule {
		let newSelectors = this.selectors.suffixFirstSegments(...suffixes);
		return new Rule(newSelectors, this.block, this.order);
	}
	prefixClassNames(namespace: string): Rule {
		let newSelectors = this.selectors.prefixClassNames(namespace);
		return new Rule(newSelectors, this.block, this.order);
	}
	addTag(tagName: string): Rule {
		let newSelectors = this.selectors.addTag(tagName);
		return new Rule(newSelectors, this.block, this.order);
	}
	mapDeclarations(mapper: (decl: Declaration) => Array<Declaration>): Rule {
		let newBlock = this.block.mapDeclarations(mapper);
		return new Rule(this.selectors, newBlock, this.order);
	}
	setOrder(order: Order): Rule {
		return new Rule(this.selectors, this.block, order);
	}
	// less reports whether rule1 should sort before rule2.
	less(rule2: Rule): boolean {
		let [ less, equal ] = this.order.less(rule2.order);
		if ( ! equal) {
			return less;
		}

		return this.selectors.less(rule2.selectors);
	}
}

