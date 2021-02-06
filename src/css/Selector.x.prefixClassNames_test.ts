import Selector from './Selector';
import { assert } from 'chai';

describe('Selector.prefixClassNames()', function() {
	it('should prefix class names correctly', function() {
		let ok = function(sel: Selector, ns: string, exp: Selector) {
			let act = sel.prefixClassNames(ns);
			assert.deepEqual(exp, act);
		}

		// No namespace
		ok(
			Selector.new(".foo"),
			"",
			Selector.new(".foo"),
		)
		// No namespace, multiple segments
		ok(
			Selector.new(".foo", ">", ".bar"),
			"",
			Selector.new(".foo", ">", ".bar"),
		)
		// Yes namespace
		ok(
			Selector.new(".foo"),
			"NS_",
			Selector.new(".NS_foo"),
		)
		// Yes namespace, multiple segments
		ok(
			Selector.new(".foo", ">", ".bar"),
			"NS_",
			Selector.new(".NS_foo", ">", ".NS_bar"),
		)
		// Yes namespace, excaped dot in class name
		ok(
			Selector.new(".foo-1\\.1turn"),
			"NS_",
			Selector.new(".NS_foo-1\\.1turn"),
		)
		// Do not namespace .mode-* class names
		ok(
			Selector.new(".mode-foo"),
			"NS_",
			Selector.new(".mode-foo"),
		)
		ok(
			Selector.new(".mode-foo", ".bar"),
			"NS_",
			Selector.new(".mode-foo", ".NS_bar"),
		)
		ok(
			Selector.new(".foo.mode-bar"),
			"NS_",
			Selector.new(".NS_foo.mode-bar"),
		)
		ok(
			Selector.new(".mode-bar\\:foo.mode-bar"),
			"NS_",
			Selector.new(".NS_mode-bar\\:foo.mode-bar"),
		)
	});
});

