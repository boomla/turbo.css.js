import SelectorList from './SelectorList';
import Selector from './Selector';
import { assert } from 'chai';

describe('SelectorList.suffixFirstSegments()', function() {
	it('should suffix the first segment in each selector', function() {
		let ok = function(selectorList: SelectorList, suffix: string, exp: SelectorList) {
			let act = selectorList.suffixFirstSegments(suffix);
			assert.deepEqual(act, exp);
		}

		ok(
			new SelectorList([
				Selector.new(".foo"),
			]),
			":hover",
			new SelectorList([
				Selector.new(".foo:hover"),
			]),
		)
		ok(
			new SelectorList([
				Selector.new(".foo"),
				Selector.new(".bar"),
			]),
			":hover",
			new SelectorList([
				Selector.new(".foo:hover"),
				Selector.new(".bar:hover"),
			]),
		)
		ok(
			new SelectorList([
				Selector.new(".foo", ">", ".bar"),
			]),
			":hover",
			new SelectorList([
				Selector.new(".foo:hover", ">", ".bar"),
			]),
		)
		ok(
			new SelectorList([
				Selector.new(".foo1", ">", ".foo2", ">", ".foo3"),
				Selector.new(".bar1", ">", ".bar2", ">", ".bar3"),
			]),
			":hover",
			new SelectorList([
				Selector.new(".foo1:hover", ">", ".foo2", ">", ".foo3"),
				Selector.new(".bar1:hover", ">", ".bar2", ">", ".bar3"),
			]),
		)


		let okMultipleSuffixes = function(selectorList: SelectorList, suffixes: Array<string>, exp: SelectorList) {
			let act = selectorList.suffixFirstSegments(...suffixes);
			assert.deepEqual(act, exp);
		}
		okMultipleSuffixes(
			new SelectorList([
				Selector.new(".foo"),
			]),
			[ ":hover" ],
			new SelectorList([
				Selector.new(".foo:hover"),
			]),
		)
		okMultipleSuffixes(
			new SelectorList([
				Selector.new(".foo"),
			]),
			[ ":hover", ":focus" ],
			new SelectorList([
				Selector.new(".foo:hover"),
				Selector.new(".foo:focus"),
			]),
		)
		okMultipleSuffixes(
			new SelectorList([
				Selector.new(".foo"),
				Selector.new(".bar"),
			]),
			[ ":hover", ":focus" ],
			new SelectorList([
				Selector.new(".foo:hover"),
				Selector.new(".foo:focus"),
				Selector.new(".bar:hover"),
				Selector.new(".bar:focus"),
			]),
		)
	});
});

