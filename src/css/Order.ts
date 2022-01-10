
// Order is used to sort Rules.
// Base utility classes are sorted in definition order, for example
// `border-top` is more specific than `border`, thus the `bt` utility
// shall sort after `b` thus overwriting it.
// User-space utilities shall be sorted before the utilities they have
// been composed of. This is acheived by creating an Order having more
// elements.
// For example, base utilities have an Order of length 1. User space
// utilities composed of base utilities have an Order of length 2.
// Next-level user space utilities have an Order of length 3, and so on.
// Thus, the Order level beats the integers it is made up of.
// In case of Orders with identical length, the last integer decides
// which shall sort later.
// It can also be thought of as a base 2^64 numeral system, with the most
// important segment being the last one. (Assuming 64bit integers.)
export default class Order {
	readonly segments: Array<number> = [];

	constructor(...segments: Array<number>) {
		this.segments = segments;
	}

	append(n: number): Order {
		let clone = [...this.segments];
		clone.push(n);
		return new Order(...clone);
	}

	// toString is used for debugging/testing only
	toString(): string {
		if (this.segments.length === 0) {
			return "Order[<UNDEFINED>]";
		}

		let s = "";
		for (let n of this.segments) {
			s += ", " + n.toString();
		}
		return "Order[" + s.substring(2) + "]";
	}

	// less reports whether utilities with o1 should sort before o2
	// in the generated CSS.
	// o1 order is less than that of o2 if the utility it belongs
	// to was defined AFTER the one o2 belongs to.
	// To rephrase, utility classes defined later will appear
	// earlier in the generated CSS, thus allowing composed utilities
	// to be overriden by more basic utilities.
	less(o2: Order): [less: boolean, equal: boolean] {
		let o1 = this;
		if (o1.segments.length < o2.segments.length) {
			// o2 shall sort before this
			// o2 represents a higher level user-space utility that shall be
			// overridden with the lower-level utility represented by o1.
			return [false, false];
		}
		if (o2.segments.length < o1.segments.length) {
			// o1 shall sort before o2
			// o1 represents a higher level user-space utility that shall be
			// overridden with the lower-level utility represented by o2.
			return [true, false];
		}
		
		// Equal length
		let length = o1.segments.length;
		for (let i=length-1; 0<=i; i--) {
			if (o1.segments[i] < o2.segments[i]) {
				// o1 shall sort before o2 as o2 was defined later
				return [true, false];
			}
			if (o2.segments[i] < o1.segments[i]) {
				// o2 shall sort before o1 as o1 was defined later
				return [false, false];
			}
		}

		return [false, true];
	}
}

