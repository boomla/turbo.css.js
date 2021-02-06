import Selector from './Selector';
import { assert } from 'chai';

describe('Selector.addPseudoElementSelector()', function() {
	it('should append pseudo element selector to a selector', function() {
		let ok = function(sel: Selector, pseudoElementSelector: string, exp: Selector) {
			let act = sel.addPseudoElementSelector(pseudoElementSelector);
			assert.deepEqual(exp, act);
		}

		// Single segment
		ok(
			Selector.new(".foo"),
			":before",
			Selector.new(".foo:before"),
		)

		// Multiple segments
		ok(
			Selector.new(".foo", ">", ".bar"),
			":before",
			Selector.new(".foo", ">", ".bar:before"),
		)
	});
});

