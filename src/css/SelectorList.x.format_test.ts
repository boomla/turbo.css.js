import SelectorList from './SelectorList';
import Selector from './Selector';
import { assert } from 'chai';

describe('SelectorList.format()', function() {
	it('should format the selector list', function() {
		let ok = function(selectorList: SelectorList, exp: string) {
			let namespace = "NS_";
			let indentation = "\t";
			let newLine = "\n";
			let act = selectorList.format(namespace, indentation, newLine);
			assert.equal(act, exp);
		}

		ok(
			new SelectorList([
				Selector.new(".foo"),
			]),
			"\t.NS_foo",
		)
		ok(
			new SelectorList([
				Selector.new(".foo"),
				Selector.new(".bar"),
			]),
			"\t.NS_foo,\n\t.NS_bar",
		)
		ok(
			new SelectorList([
				Selector.new(".foo", ">", ".bar"),
			]),
			"\t.NS_foo > .NS_bar",
		)
		ok(
			new SelectorList([
				Selector.new(".foo1", ">", ".foo2", ">", ".foo3"),
				Selector.new(".bar1", ">", ".bar2", ">", ".bar3"),
			]),
			"\t.NS_foo1 > .NS_foo2 > .NS_foo3,\n\t.NS_bar1 > .NS_bar2 > .NS_bar3",
		)
	});
});

