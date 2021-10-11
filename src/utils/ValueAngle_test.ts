import ValueAngle from './ValueAngle';
import { assert } from 'chai';
import { UnitName } from './UnitName';

describe('ValueAngle', function () {
	it('.toCSS()', function () {
		let ok = function (value: ValueAngle, exp: string) {
			let act = value.toCSS();
			assert.equal(act, exp);
		};
		ok(new ValueAngle(0, "deg"), "0deg");
		ok(new ValueAngle(13, "deg"), "13deg");
		ok(new ValueAngle(1.23, "deg"), "1.23deg");
		ok(new ValueAngle(-1.23, "deg"), "-1.23deg");
	});
	it('.negate()', function () {
		let ok = function (orig: ValueAngle, exp: ValueAngle) {
			let act = orig.negate();
			if (exp.toCSS() !== act.toCSS()) {
				throw new Error("orig[" + orig + "] exp[" + exp + "] act[" + act + "]");
			}
		};
		ok(new ValueAngle(1.23, "deg"), new ValueAngle(-1.23, "deg"));
		ok(new ValueAngle(0, "deg"), new ValueAngle(0, "deg"));
	});
	it('.toClassName()', function () {
		let ok = function (value: ValueAngle, exp: string) {
			okDefault(value, undefined, exp);
		};
		let okDefault = function (value: ValueAngle, def: UnitName | undefined, exp: string) {
			let act = value.toClassName(def);
			assert.equal(act, exp);
		};
		ok(new ValueAngle(0, "deg"), "0");
		ok(new ValueAngle(13, "deg"), "13deg");
		ok(new ValueAngle(1.23, "deg"), "1.23deg");
		ok(new ValueAngle(-1.23, "deg"), "-1.23deg");
		okDefault(new ValueAngle(1, "deg"), "deg", "1");
		okDefault(new ValueAngle(1, "turn"), "deg", "1turn");
	});
});
