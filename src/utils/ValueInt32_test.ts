import ValueInt32 from './ValueInt32';
import { assert } from 'chai';

describe('ValueInt32', function() {
	it('.toCSS()', function() {
		let ok = function(value: ValueInt32, exp: string) {
			let act = value.toCSS();
			assert.equal(act, exp);
		}
		ok(new ValueInt32(0), "0");
		ok(new ValueInt32(13), "13");
		ok(new ValueInt32(1234567890), "1234567890");
		ok(new ValueInt32(-1234567890), "-1234567890");
	});
	it('.negate()', function() {
		let ok = function(orig: ValueInt32, exp: ValueInt32) {
			let act = orig.negate();
			if (exp.value !== act.value) {
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

