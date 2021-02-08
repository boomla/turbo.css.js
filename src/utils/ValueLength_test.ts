import ValueLength from './ValueLength';
import { assert } from 'chai';

describe('ValueLength', function() {
	it('.toString()', function() {
		let ok = function(value: ValueLength, exp: string) {
			let act = value.toString();
			assert.equal(exp, act);
		}
		ok(new ValueLength(0, "px"), "0");
		ok(new ValueLength(13, "px"), "13px");
		ok(new ValueLength(1.23, "px"), "1.23px");
		ok(new ValueLength(-1.23, "px"), "-1.23px");
	});
	it('.negate()', function() {
		let ok = function(orig: ValueLength, exp: ValueLength) {
			let act = orig.negate();
			if (exp.toString() !== act.toString()) {
				throw new Error("orig["+orig+"] exp["+exp+"] act["+act+"]");
			}
		}
		ok(
			new ValueLength(1.23, "px"),
			new ValueLength(-1.23, "px"),
		);
		ok(
			new ValueLength(0, "px"),
			new ValueLength(0, "px"),
		);
	});
});

