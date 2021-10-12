import SelectorList from './SelectorList';
import Selector from './Selector';
import { assert } from 'chai';

describe('SelectorList.addCombinator()', function() {
	it('should add combinator to each selector', function() {
		let ok = function(selectorList: SelectorList, combinator: string, exp: SelectorList) {
			let act = selectorList.addCombinator(combinator);
			assert.deepEqual(act, exp);
		}

		ok(
			new SelectorList([
				Selector.new(".foo"),
			]),
			">",
			new SelectorList([
				Selector.new("*", ">", ".foo"),
			]),
		)
		ok(
			new SelectorList([
				Selector.new(".foo"),
				Selector.new(".bar"),
			]),
			">",
			new SelectorList([
				Selector.new("*", ">", ".foo"),
				Selector.new("*", ">", ".bar"),
			]),
		)
		ok(
			new SelectorList([
				Selector.new(".foo", ">", ".bar"),
			]),
			"+",
			new SelectorList([
				Selector.new("*", "+", ".foo", ">", ".bar"),
			]),
		)
		ok(
			new SelectorList([
				Selector.new(".foo1", ">", ".foo2", ">", ".foo3"),
				Selector.new(".bar1", ">", ".bar2", ">", ".bar3"),
			]),
			"+",
			new SelectorList([
				Selector.new("*", "+", ".foo1", ">", ".foo2", ">", ".foo3"),
				Selector.new("*", "+", ".bar1", ">", ".bar2", ">", ".bar3"),
			]),
		)
	});
});

