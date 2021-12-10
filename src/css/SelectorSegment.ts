
// SelectorSegment contains one or more selectors trageting a single element.
// To rephrase, SelectorSegments contains anything between combinators.
export default class SelectorSegment {
	readonly segment: string;

	constructor(segment: string) {
		this.segment = segment;
	}

	toString(): string {
		return this.segment;
	}

	extractClassName(): undefined | [className: SelectorSegment, remainder: SelectorSegment] {
		let start: number|undefined = undefined;
		let seg = this.segment;

		if (seg[0] === '.') {
			start = 0;
		}

		for (let i=1; i<seg.length; i++) {
			let c = seg[i];

			if ((c === '.') && (seg[i-1] !== '\\')) {
				if (start !== undefined) {
					let className = seg.substring(start, i);
					let remainder = seg.substring(0, start) + seg.substring(i);
					if (remainder === '') {
						remainder = '*';
					}
					return [ new SelectorSegment(className), new SelectorSegment(remainder) ];
				} else {
					start = i;
					continue;
				}
			}
			if ((c === ':') && (seg[i-1] !== '\\')) {
				if (start === undefined) {
					continue;
				}
				if (start === 0) {
					let className = seg.substring(0, i);
					let remainder = "*" + seg.substring(i);
					return [ new SelectorSegment(className), new SelectorSegment(remainder) ];
				} else {
					let className = seg.substring(start, i);
					let remainder = seg.substring(0, start) + seg.substring(i);
					if (remainder === '') {
						remainder = '*';
					}
					return [ new SelectorSegment(className), new SelectorSegment(remainder) ];
				}
			}
		}

		if (start !== undefined) {
			let className = seg.substring(start);
			let remainder = seg.substring(0, start);
			if (remainder === '') {
				remainder = '*';
			}
			return [ new SelectorSegment(className), new SelectorSegment(remainder) ];
		} else {
			return undefined;
		}
	}

	prefixClassNames(namespace: string): SelectorSegment {
		let seg = this.segment;

		var s = '';
		for (let i=0; i<seg.length; i++) {
			let ch = seg[i];

			if (ch !== '.') {
				s += ch;
				continue;
			}

			// If dot IS NOT escaped, namespace it
			if ((i === 0) || (seg[i-1] !== '\\')) {
				s += applyNamespace(seg.substring(i), namespace);
			}
			// Otherwise the dot IS escaped, keep the escaped dot
			else {
				s += '.';
			}
		}

		return new SelectorSegment(s);
	}
}

function applyNamespace(part: string, namespace: string): string {
	// .mode-* and .-mode-*
	if (part.startsWith(".mode-") || part.startsWith(".-mode-")) {
		for (let i=6; i<part.length-1; i++) {
			// If the className contains `\\:`, it is a conditional mode
			// selector within the class name, not a standalone class name.
			// In that case, do namespace it.
			if (part[i] === '\\' && part[i+1] === ':') {
				return "." + namespace;
			}
		}

		// Do not namespace standalone mode-* and -mode-* class names
		return ".";
	}

	// Namespace other classes
	return "." + namespace;
}

