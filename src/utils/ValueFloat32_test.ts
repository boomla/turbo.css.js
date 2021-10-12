import ValueFloat32 from './ValueFloat32';
import { assert } from 'chai';

describe('ValueFloat32', function() {
	it('.toCSS()', function() {
		let ok = function(value: ValueFloat32, exp: string) {
			let act = value.toCSS();
			assert.equal(act, exp);
		}
		ok(new ValueFloat32(0), "0");
		ok(new ValueFloat32(1.23), "1.23");
		ok(new ValueFloat32(12345678), "12345678");
		ok(new ValueFloat32(-12345678), "-12345678");
	});
	it('.negate()', function() {
		let ok = function(orig: ValueFloat32, exp: ValueFloat32) {
			let act = orig.negate();
			if (exp.value !== act.value) {
				throw new Error("orig["+orig+"] exp["+exp+"] act["+act+"]");
			}
		}
		ok(
			new ValueFloat32(0),
			new ValueFloat32(0),
		);
		ok(
			new ValueFloat32(1.23),
			new ValueFloat32(-1.23),
		);
		ok(
			new ValueFloat32(-27),
			new ValueFloat32(27),
		);
	});
});

