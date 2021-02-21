import StyleSheet from './StyleSheet';
import MediaQuery, { MediaType } from './MediaQuery';
import Rule from './Rule';
import RuleSet from './RuleSet';
import Declaration from './Declaration';
import Block from './Block';
import Selector from './Selector';
import SelectorList from './SelectorList';
import { assert } from 'chai';

describe('StyleSheet.format()', function() {
	it('format stylesheet', function() {
		let sheet = new StyleSheet([
			new MediaQuery({
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
			}),
			new MediaQuery({
				mediaType: MediaType.SCREEN,
				ruleSet: new RuleSet([
					Rule.testNewNoOrder(
						new SelectorList([
							Selector.new(".bar"),
						]),
						new Block([
							new Declaration("prop", "value"),
						]),
					),
				]),
			}),
		]);

		let turboClass = "t1";
		let namespace = "NS-";
		let indentWith = "\t";
		let newLine = "\n";
		let important = false;
		let act = sheet.format(turboClass, namespace, indentWith, newLine, important);

		let exp = "" +
			".t1.NS-foo {\n" +
			"\tprop: value;\n" +
			"}\n" +
			"@media screen {\n" +
			"\t.t1.NS-bar {\n" +
			"\t\tprop: value;\n" +
			"\t}\n" +
			"}\n";

		assert.equal(exp, act);
	});
	it('format stylesheet with !important', function() {
		let sheet = new StyleSheet([
			new MediaQuery({
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
			}),
			new MediaQuery({
				mediaType: MediaType.SCREEN,
				ruleSet: new RuleSet([
					Rule.testNewNoOrder(
						new SelectorList([
							Selector.new(".bar"),
						]),
						new Block([
							new Declaration("prop", "value"),
						]),
					),
				]),
			}),
		]);

		let turboClass = "t1";
		let namespace = "NS-";
		let indentWith = "\t";
		let newLine = "\n";
		let important = true;
		let act = sheet.format(turboClass, namespace, indentWith, newLine, important);

		let exp = "" +
			".t1.NS-foo {\n" +
			"\tprop: value!important;\n" +
			"}\n" +
			"@media screen {\n" +
			"\t.t1.NS-bar {\n" +
			"\t\tprop: value!important;\n" +
			"\t}\n" +
			"}\n";

		assert.equal(exp, act);
	});
});

