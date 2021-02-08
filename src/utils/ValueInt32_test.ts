import ValueInt32 from './ValueInt32';
import { assert } from 'chai';

describe('ValueInt32', function() {
	it('.toString()', function() {
		let ok = function(value: ValueInt32, exp: string) {
			let act = value.toString();
			assert.equal(exp, act);
		}
		ok(new ValueInt32(0), "0");
		ok(new ValueInt32(13), "13");
		ok(new ValueInt32(1234567890), "1234567890");
		ok(new ValueInt32(-1234567890), "-1234567890");
	});
	it('.negate()', function() {
		let ok = function(orig: ValueInt32, exp: ValueInt32) {
			let [ act, success ] = orig.negate();
			if ( ! success) {
				throw new Error("ValueInt32 ["+orig+"] could not be negated");
			}
			if (exp.val !== act.val) {
				throw new Error("orig["+orig+"] exp["+exp+"] act["+act+"]");
			}
		}
		ok(
			new ValueInt32(0),
			new ValueInt32(0),
		)
		ok(
			new ValueInt32(13),
			new ValueInt32(-13),
		)
		ok(
			new ValueInt32(-27),
			new ValueInt32(27),
		)
	});
});

