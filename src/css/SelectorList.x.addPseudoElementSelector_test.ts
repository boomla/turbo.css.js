import SelectorList from './SelectorList';
import Selector from './Selector';
import { assert } from 'chai';

describe('SelectorList.addPseudoElementSelector()', function() {
	it('should add pseudo element selector to each selector', function() {
		let ok = function(selectorList: SelectorList, pseudoElementSelector: string, exp: SelectorList) {
			let act = selectorList.addPseudoElementSelector(pseudoElementSelector);
			assert.deepEqual(act, exp);
		}

		ok(
			new SelectorList([
				Selector.new(".foo"),
			]),
			":before",
			new SelectorList([
				Selector.new(".foo:before"),
			]),
		)
		ok(
			new SelectorList([
				Selector.new(".foo"),
				Selector.new(".bar"),
			]),
			":before",
			new SelectorList([
				Selector.new(".foo:before"),
				Selector.new(".bar:before"),
			]),
		)
		ok(
			new SelectorList([
				Selector.new(".foo", ">", ".bar"),
			]),
			":before",
			new SelectorList([
				Selector.new(".foo", ">", ".bar:before"),
			]),
		)
		ok(
			new SelectorList([
				Selector.new(".foo1", ">", ".foo2", ">", ".foo3"),
				Selector.new(".bar1", ">", ".bar2", ">", ".bar3"),
			]),
			":before",
			new SelectorList([
				Selector.new(".foo1", ">", ".foo2", ">", ".foo3:before"),
				Selector.new(".bar1", ">", ".bar2", ">", ".bar3:before"),
			]),
		)
	});
});

