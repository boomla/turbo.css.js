import MediaQuery from './MediaQuery';
import Declaration from './Declaration';
import Rule from './Rule';
import Order from './Order';
import { BrowserRewriteRules } from './BrowserRewriteRules';

export default class StyleSheet {
	readonly mediaQueries: Array<MediaQuery> = [];

	constructor(mq?: Array<MediaQuery>) {
		if (mq !== undefined) {
			this.mediaQueries = [...mq];
		}
	}

	// NOTE: format must be called on a StyleSheet that is sorted!
	format(turboClass: string, namespace: string, indentWith: string, newLine: string, important: boolean): string {
		// Turn CSS selector [.foo] into [.t1.foo] or [.t1.NS-foo]
		let customNamespace = turboClass + "." + namespace;

		let s = "";
		for (let mq of this.mediaQueries) {
			s += mq.format(customNamespace, indentWith, newLine, important);
		}
		
		return s;
	}

	map(mapper: (mq: MediaQuery) => MediaQuery): StyleSheet {
		let newMQs = [] as Array<MediaQuery>;
		for (let mq of this.mediaQueries) {
			newMQs.push(mapper(mq));
		}
		return new StyleSheet(newMQs);
	}
	mapDeclarations(mapper: (decl: Declaration) => Array<Declaration>): StyleSheet {
		let newMQs = [] as Array<MediaQuery>;
		for (let mq of this.mediaQueries) {
			newMQs.push(mq.mapDeclarations(mapper));
		}
		return new StyleSheet(newMQs)
	}
	mapRules(mapper: (rule: Rule) => Array<Rule>): StyleSheet {
		let newMQs = [] as Array<MediaQuery>;
		for (let mq of this.mediaQueries) {
			newMQs.push(mq.mapRules(mapper));
		}
		return new StyleSheet(newMQs)
	}

	prefixClassNames(namespace: string): StyleSheet {
		return this.map(function(mq: MediaQuery): MediaQuery {
			return mq.prefixClassNames(namespace);
		})
	}
	suffixFirstSegments(...suffixes: Array<string>): StyleSheet {
		return this.map(function(mq: MediaQuery): MediaQuery {
			return mq.suffixFirstSegments(...suffixes);
		})
	}
	addPseudoElementSelector(pseudoElementSelector: string): StyleSheet {
		return this.map(function(mq: MediaQuery): MediaQuery {
			return mq.addPseudoElementSelector(pseudoElementSelector);
		})
	}
	addCombinator(combinator: string): StyleSheet {
		return this.map(function(mq: MediaQuery): MediaQuery {
			return mq.addCombinator(combinator);
		})
	}
	addSelfSelector(): StyleSheet {
		return this.map(function(mq: MediaQuery): MediaQuery {
			return mq.addSelfSelector();
		})
	}
	setMediaType(mediaType: number): StyleSheet {
		return this.map(function(mq: MediaQuery): MediaQuery {
			return mq.setMediaType(mediaType);
		})
	}
	setHoverable(hoverable: number): StyleSheet {
		return this.map(function(mq: MediaQuery): MediaQuery {
			return mq.setHoverable(hoverable);
		})
	}
	setMinWidth(minWidth: number): StyleSheet {
		return this.map(function(mq: MediaQuery): MediaQuery {
			return mq.setMinWidth(minWidth);
		})
	}
	addDeclaration(declaration: Declaration): StyleSheet {
		return this.map(function(mq: MediaQuery): MediaQuery {
			return mq.addDeclaration(declaration);
		})
	}
	addTag(tagName: string): StyleSheet {
		return this.map(function(mq: MediaQuery): MediaQuery {
			return mq.addTag(tagName);
		})
	}

	getMaxOrder(): Order {
		let maxOrder: Order | undefined;
		for (let mq of this.mediaQueries) {
			let order = mq.getMaxOrder();
			
			if (maxOrder === undefined) {
				maxOrder = order
				continue;
			}
			
			let [ less,  ] = order.less(maxOrder);
			if (less) {
				maxOrder = order;
			}
		}

		if (maxOrder === undefined) {
			maxOrder = new Order();
		}

		return maxOrder;
	}
	setOrder(order: Order): StyleSheet {
		return this.map(function(mq: MediaQuery): MediaQuery {
			return mq.setOrder(order);
		})
	}

	applyBrowserPrefixes(browserRewriteRules: BrowserRewriteRules): StyleSheet {
		let sheet: StyleSheet = this;

		// PropertyPrefixes
		sheet = sheet.mapDeclarations(function(decl: Declaration): Array<Declaration> {
			let prefixedProperties = browserRewriteRules.propertyPrefixes[decl.property];
			if (prefixedProperties === undefined) {
				return [ decl ];
			}

			let declarations = [] as Array<Declaration>;
			for (let prefixedProperty of prefixedProperties) {
				declarations.push(new Declaration(prefixedProperty, decl.value));
			}

			return declarations;
		})

		// DeclarationMap
		sheet = sheet.mapDeclarations(function(decl: Declaration): Array<Declaration> {
			let mapping = browserRewriteRules.declarationMap[decl.property];
			if (mapping === undefined) {
				return [ decl ];
			}

			let replacementDeclarations = mapping[decl.value];
			if (replacementDeclarations !== undefined) {
				return replacementDeclarations;
			}

			return [ decl ];
		})

		// RewriteRuleFuncs
		for (let browserRewriteRuleFunc of browserRewriteRules.rewriteRuleFuncs) {
			sheet = sheet.mapRules(function(rule: Rule): Array<Rule> {
				return browserRewriteRuleFunc(rule);
			})
		}

		return sheet;
	}

	libMergeStyleSheet(B: StyleSheet): StyleSheet {
		let A: StyleSheet = this;

		let m = {} as { [key: string]: number };

		let Cmqs = [] as Array<MediaQuery>;

		// Add all from A
		for (let Amq of A.mediaQueries) {
			let key = Amq.formatQueryList();
			m[key] = Cmqs.length;
			Cmqs.push(Amq);
		}

		// For all of B:
		//  - if rules with the same media type and features has already been used, merge to that MediaQuery object
		//  - otherwise append as a new MediaQuery object
		for (let Bmq of B.mediaQueries) {
			let key = Bmq.formatQueryList();

			let index = m[key];
			if (index === undefined) {
				// Append
				Cmqs.push(Bmq);
			} else {
				// Merge
				let Amq = Cmqs[index];
				let CRuleSet = Amq.ruleSet.libMergeRuleSet(Bmq.ruleSet);
				Cmqs[index] = Amq.overwrite({
					ruleSet: CRuleSet,
				});
			}
		}

		return new StyleSheet(Cmqs);
	}

	mergeStyleSheet(B: StyleSheet): StyleSheet {
		let A: StyleSheet = this;

		let m = {} as { [key: string]: number };

		let Cmqs = [] as Array<MediaQuery>;

		// Add all from A
		for (let Amq of A.mediaQueries) {
			let key = Amq.formatQueryList();
			m[key] = Cmqs.length;
			Cmqs.push(Amq);
		}

		// For all of B:
		//  - if rules with the same media type and features has already been used, merge to that MediaQuery object
		//  - otherwise append as a new MediaQuery object
		for (let Bmq of B.mediaQueries) {
			let key = Bmq.formatQueryList();

			let index = m[key];
			if (index === undefined) {
				// Append
				Cmqs.push(Bmq);
			} else {
				// Merge
				let Amq = Cmqs[index];
				let CRuleSet = Amq.ruleSet.mergeRuleSet(Bmq.ruleSet);
				Cmqs[index] = Amq.overwrite({
					ruleSet: CRuleSet,
				});
			}
		}

		return new StyleSheet(Cmqs);
	}

	sort(): StyleSheet {
		let mqs = [] as Array<MediaQuery>;
		for (let mq of this.mediaQueries) {
			mqs.push(mq.sort());
		}

		mqs.sort(function(a: MediaQuery, b: MediaQuery): number {
			if (a.less(b)) {
				return -1;
			}
			else {
				return 1;
			}
		});

		return new StyleSheet(mqs);
	}
}

