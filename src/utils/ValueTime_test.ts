import ValueTime from './ValueTime';
import { assert } from 'chai';
import { UnitName } from './UnitName';

describe('ValueTime', function() {
	it('.toCSS()', function() {
		let ok = function(value: ValueTime, exp: string) {
			let act = value.toCSS();
			assert.equal(act, exp);
		}
		ok(new ValueTime(0, "ms"), "0");
		ok(new ValueTime(13, "ms"), "13ms");
		ok(new ValueTime(1.23, "ms"), "1.23ms");
		ok(new ValueTime(-1.23, "ms"), "-1.23ms");
	});
	it('.negate()', function() {
		let ok = function(orig: ValueTime, exp: ValueTime) {
			let act = orig.negate();
			if (exp.toCSS() !== act.toCSS()) {
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
	it('.toClassName()', function () {
		let ok = function (value: ValueTime, exp: string) {
			okDefault(value, undefined, exp);
		};
		let okDefault = function (value: ValueTime, def: UnitName | undefined, exp: string) {
			let act = value.toClassName(def);
			assert.equal(act, exp);
		};
		ok(new ValueTime(0, "ms"), "0");
		ok(new ValueTime(13, "ms"), "13ms");
		ok(new ValueTime(1.23, "ms"), "1.23ms");
		ok(new ValueTime(-1.23, "ms"), "-1.23ms");
		okDefault(new ValueTime(1, "ms"), "ms", "1");
		okDefault(new ValueTime(1, "ms"), "s", "1ms");
		okDefault(new ValueTime(1, "ms"), "%", "1ms");
	});
});

