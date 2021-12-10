import SelectorSegment from './SelectorSegment';
import replaceAll from '../helper/replaceAll';

// Selector contains a list of selector segments.
// Selector segments are CSS selector sequences that can be separated by spaces
// without changing the meaning of the CSS selector.
// 
// For example, ".mode-open div>.color-red" contains the following segments:
//   [ ".mode-open", " ", "div", ">", ".color-red" ]
// Note that a single space between selectors is a special selector, the
// descendant selector, not a simple whitespace. Thus it is preserved as a
// standalone selector segment.
export default class Selector {
	readonly segments: Array<SelectorSegment>;

	constructor(segments: Array<SelectorSegment>) {
		this.segments = segments;
	}

	static new(segment: string, ...segments: Array<string>) {
		let selectorSegments = [] as Array<SelectorSegment>;
		for (let seg of segments) {
			selectorSegments.push(new SelectorSegment(seg));
		}
		return new Selector([ new SelectorSegment(segment), ...selectorSegments ]);
	}

	addCombinator(combinator: string): Selector {
		let segments = [
			new SelectorSegment("*"),
			new SelectorSegment(combinator),
			...this.segments,
		];

		return new Selector(segments);
	}

	addPseudoElementSelector(pseudoElementSelector: string): Selector {
		let newSegments = [ ...this.segments ];

		let lastIndex = newSegments.length - 1;
		newSegments[lastIndex] = new SelectorSegment(newSegments[lastIndex].segment + pseudoElementSelector);

		return new Selector(newSegments);
	}

	addSelfSelector(): Selector {
		// Extract class name from last segment
		let result = this.segments[this.segments.length - 1].extractClassName();
		if (result === undefined) {
			throw new Error("can not apply self selector [@] to ["+this.format("")+"]")
		}
		let [ className, remainder ] = result;

		// Update last segment
		let newSegments = [...this.segments];
		newSegments[newSegments.length - 1] = remainder;

		// Add class name to first segment
		if (newSegments[0].segment === "*") {
			newSegments[0] = className;
		}
		else if (-1 < newSegments[0].segment.indexOf("*")) {
			newSegments[0] = new SelectorSegment(newSegments[0].segment.replace("*", className.segment));
		}
		else {
			newSegments[0] = new SelectorSegment(newSegments[0].segment + className);
		}

		return new Selector(newSegments);
	}

	addTag(tagName: string): Selector {
		// Add class name to first segment
		if (this.segments[0].segment === "*") {
			return new Selector([
				new SelectorSegment(tagName),
				...this.segments.slice(1),
			]);
		}
		else if (this.segments[0].segment.startsWith('*')) {
			return new Selector([
				new SelectorSegment(tagName + this.segments[0].segment.substring(1)),
				...this.segments.slice(1),
			]);
		}
		else if (this.segments[0].segment.startsWith(".")) {
			return new Selector([
				new SelectorSegment(tagName + this.segments[0].segment),
				...this.segments.slice(1),
			]);
		}
		else {
			throw new Error("can not add second tag ["+tagName+"] to selector ["+this.format("")+"]");
		}
	}

	// Key is used to generate a key uniquely identifying the Selector.
	key(): string {
		let s = "";
		for (let segment of this.segments) {
			s += segment.segment;
		}
		return s;
	}

	prefixClassNames(namespace: string): Selector {
		if (namespace === "") {
			return this;
		}

		let newSegments = [] as Array<SelectorSegment>;
		for (let i=0; i<this.segments.length; i++) {
			let segment = this.segments[i];
			newSegments.push(segment.prefixClassNames(namespace));
		}

		return new Selector(newSegments);
	}

	suffixFirstSegment(suffix: string): Selector {
		if (this.segments[0].segment === "*") {
			return new Selector([
				new SelectorSegment(suffix),
				...this.segments.slice(1),
			]);
		}
		else {
			return new Selector([
				new SelectorSegment(this.segments[0].segment + suffix),
				...this.segments.slice(1),
			]);
		}
	}

	format(namespace: string): string {
		if (this.segments.length === 0) {
			throw new Error("empty selector is invalid, can not format it");
		}

		let namespacedSelector = this.prefixClassNames(namespace);

		return namespacedSelector.format_();
	}
	format_(): string {
		let s = '';
		for (let segment of this.segments) {
			if (segment.segment === ' ') {
				// NOP, descendant separator, space will be added in next round
				continue;
			}

			s += ' ' + segment.segment;
		}

		return s.substring(1);
	}

	// Less reports whether sel1 should sort before sel2.
	less(selector2: Selector): boolean {
		let si = this.sortOrderFormat();
		let sj = selector2.sortOrderFormat();

		return si < sj;
	}
	sortOrderFormat(): string {
		let s = "";
		for (let segment of this.segments) {
			if (segment.segment === " ") {
				// NOP, descendant separator, space will be added in next round
				continue;
			}

			// Optimize for common case: no `:` present
			if (-1 === segment.segment.indexOf(":")) {
				s += " " + segment.segment;
				continue;
			}

			s += " " + replaceSelectors(segment.segment);
		}

		return s.substring(1);
	}
}

function replaceSelectors(segment: string): string {
	// We use "\x7f" as it sorts after every other character.

	// Turbo selectors
	segment = replaceSelector(segment, "visited\\:",     "\x7f-a1\\:");
	segment = replaceSelector(segment, "focus\\:",       "\x7f-a2\\:");
	segment = replaceSelector(segment, "hover\\:",       "\x7f-a3\\:");
	segment = replaceSelector(segment, "active\\:",      "\x7f-a4\\:");

	// Note that "not-empty" must be replaced before "empty", etc.
	segment = replaceSelector(segment, "not-empty\\:",   "\x7f-b2\\:");
	segment = replaceSelector(segment, "empty\\:",       "\x7f-b1\\:");
	segment = replaceSelector(segment, "not-first\\:",   "\x7f-b4\\:");
	segment = replaceSelector(segment, "first\\:",       "\x7f-b3\\:");
	segment = replaceSelector(segment, "not-last\\:",    "\x7f-b6\\:");
	segment = replaceSelector(segment, "last\\:",        "\x7f-b5\\:");
	segment = replaceSelector(segment, "even\\:",        "\x7f-b7\\:");
	segment = replaceSelector(segment, "odd\\:",         "\x7f-b8\\:");

	segment = replaceSelector(segment, "after\\:",       "\x7f-c1\\:");
	segment = replaceSelector(segment, "before\\:",      "\x7f-c2\\:");
	segment = replaceSelector(segment, "placeholder\\:", "\x7f-c3\\:");
	segment = replaceSelector(segment, "selection\\:",   "\x7f-c4\\:");
	segment = replaceSelector(segment, "thumb\\:",       "\x7f-c5\\:");

	segment = replaceSelector(segment, "unchecked\\:",   "\x7f-d2\\:");
	segment = replaceSelector(segment, "checked\\:",     "\x7f-d1\\:");
	segment = replaceSelector(segment, "disabled\\:",    "\x7f-d4\\:");
	segment = replaceSelector(segment, "enabled\\:",     "\x7f-d3\\:");
	segment = replaceSelector(segment, "invalid\\:",     "\x7f-d6\\:");
	segment = replaceSelector(segment, "valid\\:",       "\x7f-d5\\:");
	
	segment = replaceSelector(segment, "-mode-",         "\x7f-e2-");
	segment = replaceSelector(segment, "mode-",          "\x7f-e1-");


	// CSS Pseudo selectors
	segment = replaceSelector(segment, ":visited",     ":\x7f-a1");
	segment = replaceSelector(segment, ":focus",       ":\x7f-a2");
	segment = replaceSelector(segment, ":hover",       ":\x7f-a3");
	segment = replaceSelector(segment, ":active",      ":\x7f-a4");

	segment = replaceSelector(segment, ":not(:empty)",       ":\x7f-b2");
	segment = replaceSelector(segment, ":empty",             ":\x7f-b1");
	segment = replaceSelector(segment, ":not(:first-child)", ":\x7f-b4");
	segment = replaceSelector(segment, ":first-child",       ":\x7f-b3");
	segment = replaceSelector(segment, ":not(:last-child)",  ":\x7f-b6");
	segment = replaceSelector(segment, ":last-child",        ":\x7f-b5");
	segment = replaceSelector(segment, ":nth-child(even)",   ":\x7f-b7");
	segment = replaceSelector(segment, ":nth-child(odd)",    ":\x7f-b8");

	segment = replaceSelector(segment, ":after",         ":\x7f-c1");
	segment = replaceSelector(segment, ":before",        ":\x7f-c2");
	segment = replaceSelector(segment, "::placeholder",  ":\x7f-c3");
	segment = replaceSelector(segment, "::selection",    ":\x7f-c4");
	segment = replaceSelector(segment, "::slider-thumb", ":\x7f-c5");

	segment = replaceSelector(segment, ":not(:checked)", ":\x7f-d2");
	segment = replaceSelector(segment, ":checked",       ":\x7f-d1");
	segment = replaceSelector(segment, ":disabled",      ":\x7f-d4");
	segment = replaceSelector(segment, ":enabled",       ":\x7f-d3");
	segment = replaceSelector(segment, ":invalid",       ":\x7f-d6");
	segment = replaceSelector(segment, ":valid",         ":\x7f-d5");

	return segment;
}

function replaceSelector(segment: string, selectorName: string, selectorSortName: string): string {
	return replaceAll(segment, selectorName, selectorSortName);
}

