import RuleSet from './RuleSet';
import Rule from './Rule';
import Selector from './Selector';
import SelectorList from './SelectorList';
import Declaration from './Declaration';
import Block from './Block';
import { assert } from 'chai';

describe('RuleSet.mergeRuleSet()', function() {
	it('should merge rule sets', function() {
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

		let act = A.mergeRuleSet(B);

		let exp = new RuleSet([
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


