import Rule from './Rule';
import RuleSet from './RuleSet';
import Order from './Order';
import Declaration from './Declaration';

export enum MediaType {
	ALL     = 0,
	SCREEN  = 1,
	PRINT   = 2,
	SPEECH  = 3,
}
export enum Hoverable {
	UNDEFINED = 0,
	YES       = 1,
	NO        = 2,
}

export default class MediaQuery {
	readonly mediaType: number = 0;
	readonly minWidth: number = 0;
	readonly maxWidth: number = 0;
	readonly hoverable: number = 0;
	readonly ruleSet: RuleSet = new RuleSet([]);

	// To create a new empty MediaQuery, call `new MediaQuery()`.
	// To create a MediaQuery object with certain properties set, call `new MediaQuery({ ruleSet: ruleSet })`, etc.
	// To create a new MediaQuery object, overriding properties from another one, call `new MediaQuery(base, { minWidth: 100 })`, etc.
	constructor(mq1?: Partial<MediaQuery>, mq2?: Partial<MediaQuery>) {
		if (mq1 === undefined) {
			this.ruleSet = new RuleSet([]);
			return;
		}

		Object.assign(this, mq1);

		if (mq2 !== undefined) {
			Object.assign(this, mq2);
		}
	}

	overwrite(props: Partial<MediaQuery>): MediaQuery {
		return new MediaQuery(this, props);
	}

	format(namespace: string, indentWith: string, newLine: string): string {
		let queryList = this.formatQueryList();
		if (queryList === "") {
			let indentation = "";
			return this.ruleSet.format(namespace, indentation, indentWith, newLine);
		}

		let indentation = indentWith;
		let ruleSetStr = this.ruleSet.format(namespace, indentation, indentWith, newLine);

		let s = "" +
			"@media "+queryList+" {\n" +
			ruleSetStr +		
			"}\n";

		return s;
	}

	formatQueryList(): string {
		let s = "";
		switch (this.mediaType) {
			case MediaType.ALL: {
				break;
			}
			case MediaType.SCREEN: {
				s += " and screen";
				break;
			}
			case MediaType.PRINT: {
				s += " and print";
				break;
			}
			case MediaType.SPEECH: {
				s += " and speech";
				break;
			}
			default: {
				throw new Error("unexpected media type ["+this.mediaType+"] #cninXds9EV8CrkZHYk6L5lh82upXcpuw");
			}
		}

		if (0 < this.minWidth) {
			s += " and (min-width: "+this.minWidth.toString()+"px)";
		}

		if (0 < this.maxWidth) {
			s += " and (max-width: "+this.maxWidth.toString()+"px)";
		}

		switch (this.hoverable) {
			case Hoverable.UNDEFINED: {
				break;
			}
			case Hoverable.YES: {
				s += " and (hover: hover)";
				break;
			}
			case Hoverable.NO: {
				s += " and (hover: none)";
				break;
			}
			default: {
				throw new Error("unexpected hovaerable value ["+this.hoverable+"] #elksSc8ESsH3ijETeSklzrG67GmfikwW");
			}
		}

		if (s.length === 0) {
			return "";
		}

		// Cut off " and " prefix
		return s.substring(5);
	}

	// less reports whether this MediaQuery should sort before MediaQuery `b`.
	less(b: MediaQuery): boolean {
		let a = this;

		if (a.mediaType !== b.mediaType) {
			return a.mediaType < b.mediaType;
		}
		if (a.minWidth !== b.minWidth) {
			return a.minWidth < b.minWidth;
		}
		if (a.maxWidth !== b.maxWidth) {
			return a.maxWidth < b.maxWidth;
		}
		if (a.hoverable !== b.hoverable) {
			return a.hoverable < b.hoverable;
		}

		return false;
	}

	setMediaType(mediaType: number): MediaQuery {
		return this.overwrite({
			mediaType: mediaType,
		});
	}
	setMinWidth(minWidth: number): MediaQuery {
		return this.overwrite({
			minWidth: minWidth,
		});
	}
	setMaxWidth(maxWidth: number): MediaQuery {
		return this.overwrite({
			maxWidth: maxWidth,
		});
	}
	setHoverable(hoverable: number): MediaQuery {
		return this.overwrite({
			hoverable: hoverable,
		});
	}
	addDeclaration(decl: Declaration): MediaQuery {
		return this.overwrite({
			ruleSet: this.ruleSet.addDeclaration(decl),
		});
	}
	addCombinator(combinator: string): MediaQuery {
		return this.overwrite({
			ruleSet: this.ruleSet.addCombinator(combinator),
		});
	}
	addSelfSelector(): MediaQuery {
		return this.overwrite({
			ruleSet: this.ruleSet.addSelfSelector(),
		});
	}
	addTag(tagName: string): MediaQuery {
		return this.overwrite({
			ruleSet: this.ruleSet.addTag(tagName),
		});
	}
	addPseudoElementSelector(pseudoElementSelector: string): MediaQuery {
		return this.overwrite({
			ruleSet: this.ruleSet.addPseudoElementSelector(pseudoElementSelector),
		});
	}
	addPseudoElementSelectorsAsDistinctRules(...pseudoElementSelectors: Array<string>): MediaQuery {
		return this.overwrite({
			ruleSet: this.ruleSet.addPseudoElementSelectorsAsDistinctRules(...pseudoElementSelectors),
		});
	}
	suffixFirstSegments(...suffixes: Array<string>): MediaQuery {
		return this.overwrite({
			ruleSet: this.ruleSet.suffixFirstSegments(...suffixes),
		});
	}
	prefixClassNames(namespace: string): MediaQuery {
		return this.overwrite({
			ruleSet: this.ruleSet.prefixClassNames(namespace),
		});
	}
	mergeRuleSet(ruleSet: RuleSet): MediaQuery {
		return this.overwrite({
			ruleSet: this.ruleSet.mergeRuleSet(ruleSet),
		});
	}
	mapDeclarations(mapper: (decl: Declaration) => Array<Declaration>): MediaQuery {
		return this.overwrite({
			ruleSet: this.ruleSet.mapDeclarations(mapper),
		});
	}
	mapRules(mapper: (rule: Rule) => Array<Rule>): MediaQuery {
		return this.overwrite({
			ruleSet: this.ruleSet.mapRules(mapper),
		});
	}

	sort(): MediaQuery {
		return this.overwrite({
			ruleSet: this.ruleSet.sort(),
		});
	}

	getMaxOrder(): Order {
		if (this.ruleSet.rules.length === 0) {
			return new Order();
		}

		let maxOrder = this.ruleSet.rules[0].order;

		for (let i=1; i<this.ruleSet.rules.length; i++) {
			let rule = this.ruleSet.rules[i];

			let [ less,  ] = rule.order.less(maxOrder);
			if (less) {
				maxOrder = rule.order;
			}
		}

		return maxOrder;
	}
	setOrder(order: Order): MediaQuery {
		return this.overwrite({
			ruleSet: this.ruleSet.setOrder(order),
		});
	}
}

