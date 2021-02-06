import Selector from './Selector';
import { assert } from 'chai';

describe('Selector.addCombinator()', function() {
	it('should add a combinator to an existing selector', function() {
		let ok = function(sel: Selector, combinator: string, exp: Selector) {
			let act = sel.addCombinator(combinator);
			assert.deepEqual(exp, act);
		}

		// Single segment
		ok(
			Selector.new(".foo"),
			">",
			Selector.new("*", ">", ".foo"),
		)
		ok(
			Selector.new(".foo"),
			"~",
			Selector.new("*", "~", ".foo"),
		)
		ok(
			Selector.new(".foo"),
			"+",
			Selector.new("*", "+", ".foo"),
		)
		ok(
			Selector.new(".foo"),
			" ",
			Selector.new("*", " ", ".foo"),
		)

		// Multiple segments
		ok(
			Selector.new(".foo", ">", ".bar"),
			"+",
			Selector.new("*", "+", ".foo", ">", ".bar"),
		)
	});
});

