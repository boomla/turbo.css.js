import MediaQuery, { MediaType } from './MediaQuery';
import Rule from './Rule';
import RuleSet from './RuleSet';
import Declaration from './Declaration';
import Selector from './Selector';
import SelectorList from './SelectorList';
import Block from './Block';
import { assert } from 'chai';

describe('MediaQuery.format()', function() {
	it('format media type ALL', function() {
		let mq = new MediaQuery({
			ruleSet: new RuleSet([
				Rule.testNewNoOrder(
					new SelectorList([
						Selector.new(".foo"),
					]),
					new Block([
						new Declaration("prop", "value"),
					]),
				),
			]),
		});

		let namespace = "";
		let indentWith = "\t";
		let newLine = "\n";
		let important = false;
		let act = mq.format(namespace, indentWith, newLine, important);

		let exp = "" +
			".foo {\n" +
			"\tprop: value;\n" +
			"}\n";

		assert.equal(act, exp);
	});
	it('format media type PRINT', function() {
		let mq = new MediaQuery({
			mediaType: MediaType.PRINT,
			ruleSet: new RuleSet([
				Rule.testNewNoOrder(
					new SelectorList([
						Selector.new(".foo"),
					]),
					new Block([
						new Declaration("prop", "value"),
					]),
				),
			]),
		});

		let namespace = "";
		let indentWith = "\t";
		let newLine = "\n";
		let important = false;
		let act = mq.format(namespace, indentWith, newLine, important);

		let exp = "" +
			"@media print {\n" +
			"\t.foo {\n" +
			"\t\tprop: value;\n" +
			"\t}\n" +
			"}\n";

		assert.equal(act, exp);
	});
	it('format media type SCREEN', function() {
		let mq = new MediaQuery({
			mediaType: MediaType.SCREEN,
			ruleSet: new RuleSet([
				Rule.testNewNoOrder(
					new SelectorList([
						Selector.new(".foo"),
					]),
					new Block([
						new Declaration("prop", "value"),
					]),
				),
			]),
		});

		let namespace = "";
		let indentWith = "\t";
		let newLine = "\n";
		let important = false;
		let act = mq.format(namespace, indentWith, newLine, important);

		let exp = "" +
			"@media screen {\n" +
			"\t.foo {\n" +
			"\t\tprop: value;\n" +
			"\t}\n" +
			"}\n";

		assert.equal(act, exp);
	});
	it('format with !important', function() {
		let mq = new MediaQuery({
			ruleSet: new RuleSet([
				Rule.testNewNoOrder(
					new SelectorList([
						Selector.new(".foo"),
					]),
					new Block([
						new Declaration("prop", "value"),
					]),
				),
			]),
		});

		let namespace = "";
		let indentWith = "\t";
		let newLine = "\n";
		let important = true;
		let act = mq.format(namespace, indentWith, newLine, important);

		let exp = "" +
			".foo {\n" +
			"\tprop: value!important;\n" +
			"}\n";

		assert.equal(act, exp);
	});
});

