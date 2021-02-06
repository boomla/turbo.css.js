import Block from './Block';
import Declaration from './Declaration';
import Rule from './Rule';
import Selector from './Selector';
import SelectorList from './SelectorList';
import { assert } from 'chai';

describe('Rule.format()', function() {
	it('should format single selector and declartion', function() {
		let selectors = new SelectorList([
			Selector.new(".foo"),
		]);
		let block = new Block([
			new Declaration("prop", "value"),
		]);

		let rule = Rule.testNewNoOrder(selectors, block);

		let namespace = "";
		let indentation = "";
		let indentWith = "\t";
		let newLine = "\n";
		let act = rule.format(namespace, indentation, indentWith, newLine);

		let exp = "" +
			".foo {\n" +
			"\tprop: value;\n" +
			"}\n";

		assert.deepEqual(exp, act);
	});
	it('should format multiple selectors and declartions', function() {
		let selectors = new SelectorList([
			Selector.new(".foo"),
			Selector.new(".bar"),
		]);
		let block = new Block([
			new Declaration("color", "red"),
			new Declaration("margin", "0"),
		]);

		let rule = Rule.testNewNoOrder(selectors, block);

		let namespace = "";
		let indentation = "";
		let indentWith = "\t";
		let newLine = "\n";
		let act = rule.format(namespace, indentation, indentWith, newLine);

		let exp = "" +
			".foo,\n" +
			".bar {\n" +
			"\tcolor: red;\n" +
			"\tmargin: 0;\n" +
			"}\n";

		assert.deepEqual(exp, act);
	});
	it('should namespace', function() {
		let selectors = new SelectorList([
			Selector.new(".foo"),
		]);
		let block = new Block([
			new Declaration("prop", "value"),
		]);

		let rule = Rule.testNewNoOrder(selectors, block);

		let namespace = "NS_";
		let indentation = "";
		let indentWith = "\t";
		let newLine = "\n";
		let act = rule.format(namespace, indentation, indentWith, newLine);

		let exp = "" +
			".NS_foo {\n" +
			"\tprop: value;\n" +
			"}\n";

		assert.deepEqual(exp, act);
	});
});


