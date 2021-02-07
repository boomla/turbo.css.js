import RuleSet from './RuleSet';
import Rule from './Rule';
import Selector from './Selector';
import SelectorList from './SelectorList';
import Declaration from './Declaration';
import Block from './Block';
import { assert } from 'chai';

describe('RuleSet.libMergeRuleSet()', function() {
	it('should merge library rules', function() {
		let A = new RuleSet([
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
		let B = new RuleSet([
			Rule.testNewNoOrder(
				new SelectorList([
					Selector.new(".foo"),
				]),
				new Block([
					new Declaration("prop", "value"),
					new Declaration("prop2", "value2"),
				]),
			),
			Rule.testNewNoOrder(
				new SelectorList([
					Selector.new(".bamboo"),
				]),
				new Block([
					new Declaration("prop", "value"),
				]),
			),
		]);

		let act = A.libMergeRuleSet(B);

		let exp = new RuleSet([
			Rule.testNewNoOrder(
				new SelectorList([
					Selector.new(".foo"),
				]),
				new Block([
					new Declaration("prop", "value"),
					new Declaration("prop2", "value2"),
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
					Selector.new(".bamboo"),
				]),
				new Block([
					new Declaration("prop", "value"),
				]),
			),
		]);

		assert.deepEqual(exp, act);
	});
});


