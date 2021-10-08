import ValueLength from './ValueLength';
import { assert } from 'chai';
import { UnitName } from './UnitName';

describe('ValueLength', function() {
	it('.toCSS()', function() {
		let ok = function(value: ValueLength, exp: string) {
			let act = value.toCSS();
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
    it('.toClassName()', function () {
        let ok = function (value: ValueLength, exp: string) {
            okDefault(value, undefined, exp);
        };
        let okDefault = function (value: ValueLength, def: UnitName | undefined, exp: string) {
            let act = value.toClassName(def);
            assert.equal(act, exp);
        };
        ok(new ValueLength(0, "px"), "0");
        ok(new ValueLength(13, "px"), "13px");
        ok(new ValueLength(1.23, "px"), "1.23px");
        ok(new ValueLength(-1.23, "px"), "-1.23px");
        okDefault(new ValueLength(1, "px"), "px", "1");
        okDefault(new ValueLength(1, "px"), "em", "1px");
        okDefault(new ValueLength(1, "px"), "%", "1px");
    });
});

