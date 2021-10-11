import parseLengthPercentage from './parseLengthPercentage';
import { UnitName } from './UnitName';
import { assert } from 'chai';

describe('parseLengthPercentage()', function() {
	it('should parse length or percentage values', function() {
		let ok = function(s: string, defaultUnit: UnitName, expValue: number, expUnit: UnitName) {
			let act = parseLengthPercentage(s, defaultUnit);
			let exp = [ expValue, expUnit ];
			assert.deepEqual(act, exp, s);
		}
		ok("2", "px", 2, "px");
		ok("10", "px", 10, "px");

		ok("10", "em", 10, "em");
		ok("10", "rem", 10, "rem");
		ok("10", "vh", 10, "vh");
		ok("10", "vw", 10, "vw");
		ok("10", "vmin", 10, "vmin");
		ok("10", "vmax", 10, "vmax");

		ok("10px", "em", 10, "px");
		ok("10em", "px", 10, "em");
		ok("10rem", "px", 10, "rem");
		ok("10vh", "px", 10, "vh");
		ok("10vw", "px", 10, "vw");
		ok("10vmin", "px", 10, "vmin");
		ok("10vmax", "px", 10, "vmax");

		ok("2%", "px", 2, "%");
		ok("2px", "%", 2, "px");

		let notOk = function(s: string, defaultUnit: UnitName) {
			let act = parseLengthPercentage(s, defaultUnit);
			if (act !== undefined) {
				throw new Error("["+s+"] ["+defaultUnit+"] should not parse as angle");
			}
		}
		notOk("2foo", "px");
		notOk("foo", "px");
		notOk("2deg", "px");
		notOk("px", "px");
	});
});

