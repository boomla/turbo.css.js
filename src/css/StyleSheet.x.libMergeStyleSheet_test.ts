import StyleSheet from './StyleSheet';
import MediaQuery from './MediaQuery';
import { MediaType } from './MediaQuery';
import Rule from './Rule';
import RuleSet from './RuleSet';
import Declaration from './Declaration';
import Block from './Block';
import Selector from './Selector';
import SelectorList from './SelectorList';
import Order from './Order';
import { assert } from 'chai';

describe('StyleSheet.libMergeStyleSheet()', function() {
	it('should merge library stylesheets', function() {
		let A = new StyleSheet([
			new MediaQuery({
				ruleSet: new RuleSet([
					new Rule(
						new SelectorList([
							Selector.new(".foo-1"),
						]),
						new Block([
							new Declaration("prop", "value"),
						]),
						new Order(0),
					),
				]),
			}),
			new MediaQuery({
				mediaType: MediaType.SCREEN,
				ruleSet: new RuleSet([
					new Rule(
						new SelectorList([
							Selector.new(".bar"),
						]),
						new Block([
							new Declaration("prop", "value"),
						]),
						new Order(0),
					),
				]),
			}),
		]);

		let B = new StyleSheet([
			new MediaQuery({
				ruleSet: new RuleSet([
					new Rule(
						new SelectorList([
							Selector.new(".foo-1"),
						]),
						new Block([
							new Declaration("prop2", "value2"),
						]),
						new Order(0),
					),
					new Rule(
						new SelectorList([
							Selector.new(".foo-2"),
						]),
						new Block([
							new Declaration("prop", "value"),
						]),
						new Order(0),
					),
				]),
			}),
			new MediaQuery({
				mediaType: MediaType.PRINT,
				ruleSet: new RuleSet([
					new Rule(
						new SelectorList([
							Selector.new(".bamboo"),
						]),
						new Block([
							new Declaration("prop", "value"),
						]),
						new Order(0),
					),
				]),
			}),
		]);

		let act = A.libMergeStyleSheet(B);

		let exp = new StyleSheet([
			new MediaQuery({
				ruleSet: new RuleSet([
					new Rule(
						new SelectorList([
							Selector.new(".foo-1"),
						]),
						new Block([
							new Declaration("prop", "value"),
							new Declaration("prop2", "value2"),
						]),
						new Order(0),
					),
					new Rule(
						new SelectorList([
							Selector.new(".foo-2"),
						]),
						new Block([
							new Declaration("prop", "value"),
						]),
						new Order(0),
					),
				]),
			}),
			new MediaQuery({
				mediaType: MediaType.SCREEN,
				ruleSet: new RuleSet([
					new Rule(
						new SelectorList([
							Selector.new(".bar"),
						]),
						new Block([
							new Declaration("prop", "value"),
						]),
						new Order(0),
					),
				]),
			}),
			new MediaQuery({
				mediaType: MediaType.PRINT,
				ruleSet: new RuleSet([
					new Rule(
						new SelectorList([
							Selector.new(".bamboo"),
						]),
						new Block([
							new Declaration("prop", "value"),
						]),
						new Order(0),
					),
				]),
			}),
		]);

		assert.deepEqual(act, exp);
	});
});

