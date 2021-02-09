import parseAngle from './parseAngle';
import { UnitName } from './UnitName';
import { assert } from 'chai';

describe('parseAngle()', function() {
	it('should parse floats', function() {
		let ok = function(s: string, defaultUnit: UnitName, expAngleValue: number, expAngleUnit: UnitName) {
			let act = parseAngle(s, defaultUnit);
			let exp = [ expAngleValue, expAngleUnit ];
			assert.deepEqual(exp, act, s);
		}
		ok("2", "deg", 2, "deg");
		ok("10", "deg", 10, "deg");
		ok("10", "turn", 10, "turn");
		ok("10deg", "deg", 10, "deg");
		ok("10turn", "deg", 10, "turn");


		let notOk = function(s: string, defaultUnit: UnitName) {
			let act = parseAngle(s, defaultUnit);
			if (act !== undefined) {
				throw new Error("["+s+"] ["+defaultUnit+"] should not parse as angle");
			}
		}
		notOk("2foo", "deg");
		notOk("foo", "deg");
		notOk("2px", "deg");
		notOk("deg", "deg");
	});
});

