import TypeTime from './TypeTime';
import ValueTime from './ValueTime';
import ConfigStatic from './ConfigStatic';
import { assert } from 'chai';

describe('TypeTime', function() {
	it('.parse()', function() {
		let config = new ConfigStatic();

		let ok = function(msg: string, typ: TypeTime, strArgs: Array<string>, expValue: ValueTime, expRemainder: Array<string>) {
			let act = typ.parse(config, strArgs);
			if (act === undefined) {
				throw new Error(msg + strArgs.toString());
			}
			let exp = [ expValue, expRemainder ];
			assert.deepEqual(act, exp);
		};
		let mismatch = function(msg: string, typ: TypeTime, strArgs: Array<string>) {
			let act = typ.parse(config, strArgs);
			if (act !== undefined) {
				throw new Error(msg + strArgs.toString());
			}
		};

		ok("unitless number defaults to unit [ms]",
			new TypeTime(),
			[ "2", "3" ],
			new ValueTime(2, "ms"),
			[ "3" ],
		);
		ok("unit [ms]",
			new TypeTime(),
			[ "2ms", "3" ],
			new ValueTime(2, "ms"),
			[ "3" ],
		);
		ok("unit [s]",
			new TypeTime(),
			[ "20s", "3" ],
			new ValueTime(20, "s"),
			[ "3" ],
		);
		mismatch("not a number",
			new TypeTime(),
			[ "foo", "bar" ],
		);
		mismatch("invalid unit",
			new TypeTime(),
			[ "10turn", "2" ],
		);
	});
});

