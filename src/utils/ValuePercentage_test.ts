import ValuePercentage from './ValuePercentage';
import { assert } from 'chai';
import { UnitName } from './UnitName';

describe('ValuePercentage', function() {
	it('.toCSS()', function() {
		let ok = function(value: ValuePercentage, exp: string) {
			let act = value.toCSS();
			assert.equal(act, exp);
		}
		ok(new ValuePercentage(0), "0");
		ok(new ValuePercentage(13), "13%");
		ok(new ValuePercentage(1.23), "1.23%");
		ok(new ValuePercentage(-1.23), "-1.23%");
	});
	it('.negate()', function() {
		let ok = function(orig: ValuePercentage, exp: ValuePercentage) {
			let act = orig.negate();
			if (exp.toCSS() !== act.toCSS()) {
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
	it('.toClassName()', function () {
		let ok = function (value: ValuePercentage, exp: string) {
			okDefault(value, undefined, exp);
		};
		let okDefault = function (value: ValuePercentage, def: UnitName | undefined, exp: string) {
			let act = value.toClassName(def);
			assert.equal(act, exp);
		};
		ok(new ValuePercentage(0), "0");
		ok(new ValuePercentage(13), "13%");
		ok(new ValuePercentage(1.23), "1.23%");
		ok(new ValuePercentage(-1.23), "-1.23%");
		okDefault(new ValuePercentage(1), "%", "1");
		okDefault(new ValuePercentage(1), "px", "1%");
	});
});

