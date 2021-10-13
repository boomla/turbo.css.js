import Rule from './Rule';
import type Declaration from './Declaration';
import type Order from './Order';

export default class RuleSet {
	readonly rules: Array<Rule>;

	constructor(rules: Array<Rule>) {
		this.rules = rules;
	}

	map(mapper: (rule: Rule) => Rule): RuleSet {
		let newRules = [] as Array<Rule>;
		for (let rule of this.rules) {
			newRules.push(mapper(rule));
		}
		return new RuleSet(newRules);
	}
	addDeclaration(decl: Declaration): RuleSet {
		return this.map(function(rule: Rule): Rule {
			return rule.addDeclaration(decl);
		})
	}
	addCombinator(combinator: string): RuleSet {
		return this.map(function(rule: Rule): Rule {
			return rule.addCombinator(combinator);
		})
	}
	addPseudoElementSelector(pseudoElementSelector: string): RuleSet {
		return this.map(function(rule: Rule): Rule {
			return rule.addPseudoElementSelector(pseudoElementSelector);
		})
	}
	suffixFirstSegments(...suffixes: Array<string>): RuleSet {
		return this.map(function(rule: Rule): Rule {
			return rule.suffixFirstSegments(...suffixes);
		})
	}
	prefixClassNames(namespace: string): RuleSet {
		return this.map(function(rule: Rule): Rule {
			return rule.prefixClassNames(namespace);
		})
	}
	addSelfSelector(): RuleSet {
		return this.map(function(rule: Rule): Rule {
			return rule.addSelfSelector();
		})
	}
	addTag(tagName: string): RuleSet {
		return this.map(function(rule: Rule): Rule {
			return rule.addTag(tagName);
		})
	}

	mapDeclarations(mapper: (decl: Declaration) => Array<Declaration>): RuleSet {
		return this.map(function(rule: Rule): Rule {
			return rule.mapDeclarations(mapper);
		})
	}
	mapRules(mapper: (rule: Rule) => Array<Rule>): RuleSet {
		let newRules = [] as Array<Rule>;
		for (let rule of this.rules) {
			newRules.push(...mapper(rule));
		}
		return new RuleSet(newRules);
	}

	getMaxOrder(): Order {
		let maxOrder = this.rules[0].order;

		for (let i=1; i<this.rules.length; i++) {
			let rule = this.rules[i];

			let [less, ] = rule.order.less(maxOrder);
			if (less) {
				maxOrder = rule.order;
			}
		}

		return maxOrder;
	}
	setOrder(order: Order): RuleSet {
		return this.map(function(rule: Rule): Rule {
			return rule.setOrder(order);
		})
	}

	sort(): RuleSet {
		let clone = [...this.rules];
		clone.sort(function(ruleA, ruleB) {
			if (ruleA.less(ruleB)) {
				return -1;
			} else {
				return 1;
			}
		});
		return new RuleSet(clone);
	}

	format(namespace: string, indentation: string, indentWith: string, newLine: string, important: boolean): string {
		let s = "";
		for (let rule of this.rules) {
			s += rule.format(namespace, indentation, indentWith, newLine, important);
		}
		return s;
	}

	addPseudoElementSelectorsAsDistinctRules(...pseudoElementSelectors: Array<string>): RuleSet {
		let newRules = [] as Array<Rule>;
		for (let rule of this.rules) {
			for (let pseudoElementSelector of pseudoElementSelectors) {
				let newRule = rule.addPseudoElementSelector(pseudoElementSelector);
				newRules.push(newRule);
			}
		}
		return new RuleSet(newRules);
	}

	libMergeRuleSet(B: RuleSet): RuleSet {
		let A = this;
		let CRules = [] as Array<Rule>;

		let m = {} as { [key: string]: null };

		for (let ruleAi of A.rules) {
			let key = ruleAi.selectors.key();
			if (m[key] !== undefined) {
				continue;
			}

			CRules.push(ruleAi);

			m[key] = null;
		}

		for (let ruleBi of B.rules) {
			let key = ruleBi.selectors.key();
			if (m[key] !== undefined) {
				for (let i=0; i<CRules.length; i++) {
					let ruleCi = CRules[i];
					let keyCi = ruleCi.selectors.key();
					if (keyCi == key) {
						CRules[i] = new Rule(
							ruleCi.selectors,
							ruleCi.block.overwrite(ruleBi.block),
							ruleCi.order,
						);
						break;
					}
				}
				continue;
			}

			CRules.push(ruleBi);

			m[key] = null;
		}

		return new RuleSet(CRules);
	}

	mergeRuleSet(B: RuleSet): RuleSet {
		let A = this;
		let m = {} as { [key: string]: null };
		let CRules = [] as Array<Rule>;

		for (let Ai of A.rules) {
			let key = Ai.selectors.key();
			if (m[key] !== undefined) {
				continue;
			}

			CRules.push(Ai);

			m[key] = null;
		}

		for (let Bi of B.rules) {
			let key = Bi.selectors.key();
			if (m[key] !== undefined) {
				continue;
			}

			CRules.push(Bi);

			m[key] = null;
		}

		return new RuleSet(CRules);
	}
}

