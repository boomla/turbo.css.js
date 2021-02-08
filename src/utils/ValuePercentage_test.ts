import ValuePercentage from './ValuePercentage';
import { assert } from 'chai';

describe('ValuePercentage', function() {
	it('.toString()', function() {
		let ok = function(value: ValuePercentage, exp: string) {
			let act = value.toString();
			assert.equal(exp, act);
		}
		ok(new ValuePercentage(0), "0");
		ok(new ValuePercentage(13), "13%");
		ok(new ValuePercentage(1.23), "1.23%");
		ok(new ValuePercentage(-1.23), "-1.23%");
	});
	it('.negate()', function() {
		let ok = function(orig: ValuePercentage, exp: ValuePercentage) {
			let act = orig.negate();
			if (exp.toString() !== act.toString()) {
				throw new Error("orig["+orig+"] exp["+exp+"] act["+act+"]");
			}
		}
		ok(
			new ValuePercentage(1.23),
			new ValuePercentage(-1.23),
		)
		ok(
			new ValuePercentage(-27),
			new ValuePercentage(27),
		)
		ok(
			new ValuePercentage(0),
			new ValuePercentage(0),
		)
	});
});

