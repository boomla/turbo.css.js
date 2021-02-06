import Selector from './Selector';
import { assert } from 'chai';

describe('Selector.addSelfSelector()', function() {
	it('should add self selector', function() {
		let ok = function(sel: Selector, exp: Selector) {
			let act = sel.addSelfSelector();
			assert.deepEqual(exp, act);
		}

		ok(
			Selector.new(".foo"),
			Selector.new(".foo"),
		)
		ok(
			Selector.new("*", "div.foo"),
			Selector.new(".foo", "div"),
		)
		ok(
			Selector.new("*", ".foo"),
			Selector.new(".foo", "*"),
		)
		ok(
			Selector.new("*:hover", ".foo"),
			Selector.new(".foo:hover", "*"),
		)
		ok(
			Selector.new("*:hover", ">", ">", ".foo"),
			Selector.new(".foo:hover", ">", ">", "*"),
		)
		ok(
			Selector.new("*", ".\\@\\/hover\\:color-black:hover"),
			Selector.new(".\\@\\/hover\\:color-black", "*:hover"),
		)
	});
});

