import ValueTime from './ValueTime';
import { assert } from 'chai';

describe('ValueTime', function() {
	it('.toString()', function() {
		let ok = function(value: ValueTime, exp: string) {
			let act = value.toString();
			assert.equal(exp, act);
		}
		ok(new ValueTime(0, "ms"), "0");
		ok(new ValueTime(13, "ms"), "13ms");
		ok(new ValueTime(1.23, "ms"), "1.23ms");
		ok(new ValueTime(-1.23, "ms"), "-1.23ms");
	});
	it('.negate()', function() {
		let ok = function(orig: ValueTime, exp: ValueTime) {
			let act = orig.negate();
			if (exp.toString() !== act.toString()) {
				throw new Error("orig["+orig+"] exp["+exp+"] act["+act+"]");
			}
		}
		ok(
			new ValueTime(1.23, "ms"),
			new ValueTime(-1.23, "ms"),
		);
		ok(
			new ValueTime(0, "ms"),
			new ValueTime(0, "ms"),
		);
	});
});

