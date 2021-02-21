import RuleSet from './RuleSet';
import Rule from './Rule';
import Selector from './Selector';
import SelectorList from './SelectorList';
import Declaration from './Declaration';
import Block from './Block';
import Order from './Order';
import { assert } from 'chai';

describe('RuleSet.sort()', function() {
	it('should sort base utilities in definition order', function() {
		let ruleSet = new RuleSet([
			new Rule(
				new SelectorList([
					Selector.new(".foo"),
				]),
				new Block([
					new Declaration("prop", "value"),
				]),
				new Order(2),
			),
			new Rule(
				new SelectorList([
					Selector.new(".bar"),
				]),
				new Block([
					new Declaration("prop", "value"),
				]),
				new Order(1),
			),
			new Rule(
				new SelectorList([
					Selector.new(".baz"),
				]),
				new Block([
					new Declaration("prop", "value"),
				]),
				new Order(3),
			),
		]);

		let namespace = "";
		let indentation = "";
		let indentWith = "\t";
		let newLine = "\n";
		let important = false;
		let act = ruleSet.sort().format(namespace, indentation, indentWith, newLine, important);

		let exp = "" +
			".bar {\n" +
			"\tprop: value;\n" +
			"}\n" +
			".foo {\n" +
			"\tprop: value;\n" +
			"}\n" +
			".baz {\n" +
			"\tprop: value;\n" +
			"}\n" +
			"";

		assert.equal(exp, act);
	});
});


