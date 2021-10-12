import Selector from './Selector';
import { assert } from 'chai';

describe('Selector.suffixFirstSegment()', function() {
	it('should apply suffix to the first selector segment', function() {
		let ok = function(sel: Selector, suffix: string, exp: Selector) {
			let act = sel.suffixFirstSegment(suffix);
			assert.deepEqual(act, exp);
		}

		// Single segment
		ok(
			Selector.new(".foo"),
			":hover",
			Selector.new(".foo:hover"),
		)

		// Multiple segments
		ok(
			Selector.new(".foo", ">", ".bar"),
			":hover",
			Selector.new(".foo:hover", ">", ".bar"),
		)

		// Drop standalone wildcard selector
		ok(
			Selector.new("*", ">", ".bar"),
			":hover",
			Selector.new(":hover", ">", ".bar"),
		)
	});
});

