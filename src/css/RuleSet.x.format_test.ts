import RuleSet from './RuleSet';
import Rule from './Rule';
import Selector from './Selector';
import SelectorList from './SelectorList';
import Declaration from './Declaration';
import Block from './Block';
import { assert } from 'chai';

describe('RuleSet.format()', function() {
	it('should format empty RuleSet', function() {
		let ruleSet = new RuleSet([]);

		let namespace = "";
		let indentation = "";
		let indentWith = "\t";
		let newLine = "\n";
		let important = false;
		let act = ruleSet.format(namespace, indentation, indentWith, newLine, important);

		let exp = "";
		assert.equal(exp, act);
	});
	it('should format RuleSet with one rule', function() {
		let ruleSet = new RuleSet([
			Rule.testNewNoOrder(
				new SelectorList([
					Selector.new(".foo"),
				]),
				new Block([
					new Declaration("prop", "value"),
				]),
			),
		]);

		let namespace = "";
		let indentation = "";
		let indentWith = "\t";
		let newLine = "\n";
		let important = false;
		let act = ruleSet.format(namespace, indentation, indentWith, newLine, important);

		let exp = "" +
			".foo {\n" +
			"\tprop: value;\n" +
			"}\n";

		assert.equal(exp, act);
	});
	it('should format RuleSet with many rules', function() {
		let ruleSet = new RuleSet([
			Rule.testNewNoOrder(
				new SelectorList([
					Selector.new(".foo"),
				]),
				new Block([
					new Declaration("prop", "value"),
				]),
			),
			Rule.testNewNoOrder(
				new SelectorList([
					Selector.new(".bar"),
				]),
				new Block([
					new Declaration("prop", "value"),
				]),
			),
			Rule.testNewNoOrder(
				new SelectorList([
					Selector.new(".baz"),
				]),
				new Block([
					new Declaration("prop", "value"),
				]),
			),
		]);

		let namespace = "";
		let indentation = "";
		let indentWith = "\t";
		let newLine = "\n";
		let important = false;
		let act = ruleSet.format(namespace, indentation, indentWith, newLine, important);

		let exp = "" +
			".foo {\n" +
			"\tprop: value;\n" +
			"}\n" +
			".bar {\n" +
			"\tprop: value;\n" +
			"}\n" +
			".baz {\n" +
			"\tprop: value;\n" +
			"}\n" +
			"";

		assert.equal(exp, act);
	});
	it('should format RuleSet with indentation', function() {
		let ruleSet = new RuleSet([
			Rule.testNewNoOrder(
				new SelectorList([
					Selector.new(".foo"),
				]),
				new Block([
					new Declaration("prop", "value"),
				]),
			),
			Rule.testNewNoOrder(
				new SelectorList([
					Selector.new(".bar"),
				]),
				new Block([
					new Declaration("prop", "value"),
				]),
			),
		]);

		let namespace = "NS_";
		let indentation = "\t\t";
		let indentWith = "\t";
		let newLine = "\n";
		let important = false;
		let act = ruleSet.format(namespace, indentation, indentWith, newLine, important);

		let exp = "" +
			"\t\t.NS_foo {\n" +
			"\t\t\tprop: value;\n" +
			"\t\t}\n" +
			"\t\t.NS_bar {\n" +
			"\t\t\tprop: value;\n" +
			"\t\t}\n" +
			"";

		assert.equal(exp, act);
	});
	it('should format RuleSet with !important', function() {
		let ruleSet = new RuleSet([
			Rule.testNewNoOrder(
				new SelectorList([
					Selector.new(".foo"),
				]),
				new Block([
					new Declaration("prop", "value"),
				]),
			),
		]);

		let namespace = "";
		let indentation = "";
		let indentWith = "\t";
		let newLine = "\n";
		let important = true;
		let act = ruleSet.format(namespace, indentation, indentWith, newLine, important);

		let exp = "" +
			".foo {\n" +
			"\tprop: value!important;\n" +
			"}\n";

		assert.equal(exp, act);
	});
});

