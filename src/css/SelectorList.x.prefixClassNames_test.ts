import SelectorList from './SelectorList';
import Selector from './Selector';
import { assert } from 'chai';

describe('SelectorList.prefixClassNames()', function() {
	it('should prefix class names in each selector', function() {
		let ok = function(selectorList: SelectorList, namespace: string, exp: SelectorList) {
			let act = selectorList.prefixClassNames(namespace);
			assert.deepEqual(exp, act);
		}

		ok(
			new SelectorList([
				Selector.new(".foo"),
			]),
			"",
			new SelectorList([
				Selector.new(".foo"),
			]),
		)
		ok(
			new SelectorList([
				Selector.new(".foo"),
			]),
			"NS_",
			new SelectorList([
				Selector.new(".NS_foo"),
			]),
		)
		ok(
			new SelectorList([
				Selector.new(".foo"),
				Selector.new(".bar"),
			]),
			"",
			new SelectorList([
				Selector.new(".foo"),
				Selector.new(".bar"),
			]),
		)
		ok(
			new SelectorList([
				Selector.new(".foo"),
				Selector.new(".bar"),
			]),
			"NS_",
			new SelectorList([
				Selector.new(".NS_foo"),
				Selector.new(".NS_bar"),
			]),
		)
		ok(
			new SelectorList([
				Selector.new(".foo", ">", ".bar"),
			]),
			"NS_",
			new SelectorList([
				Selector.new(".NS_foo", ">", ".NS_bar"),
			]),
		)
		ok(
			new SelectorList([
				Selector.new(".foo1", ">", ".foo2", ">", ".foo3"),
				Selector.new(".bar1", ">", ".bar2", ">", ".bar3"),
			]),
			"NS_",
			new SelectorList([
				Selector.new(".NS_foo1", ">", ".NS_foo2", ">", ".NS_foo3"),
				Selector.new(".NS_bar1", ">", ".NS_bar2", ">", ".NS_bar3"),
			]),
		)
	});
});

