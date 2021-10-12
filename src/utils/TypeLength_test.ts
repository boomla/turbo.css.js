import TypeLength from './TypeLength';
import ValueLength from './ValueLength';
import ConfigStatic from './ConfigStatic';
import { assert } from 'chai';

describe('TypeLength', function() {
	it('.parse()', function() {
		let config = new ConfigStatic();

		let ok = function(msg: string, typ: TypeLength, strArgs: Array<string>, expValue: ValueLength, expRemainder: Array<string>) {
			let act = typ.parse(config, strArgs);
			if (act === undefined) {
				throw new Error(msg + strArgs.toString());
			}
			let exp = [ expValue, expRemainder ];
			assert.deepEqual(act, exp);
		};
		ok("unitless number",
			new TypeLength(1, "px"),
			[ "1.23" ],
			new ValueLength(1.23, "px"),
			[],
		);
		ok("remainders are returned",
			new TypeLength(1, "px"),
			[ "1", "2" ],
			new ValueLength(1, "px"),
			[ "2" ],
		);
		ok("unit provided",
			new TypeLength(1, "px"),
			[ "2em", "3" ],
			new ValueLength(2, "em"),
			[ "3" ],
		);
		ok("unit value other than 1",
			new TypeLength(0.1, "px"),
			[ "20", "3" ],
			new ValueLength(2, "px"),
			[ "3" ],
		);
		ok("unit value is not applied when the unit name is explicitely provided",
			new TypeLength(0.1, "px"),
			[ "20em", "3" ],
			new ValueLength(20, "em"),
			[ "3" ],
		);


		let mismatch = function(msg: string, typ: TypeLength, strArgs: Array<string>) {
			let act = typ.parse(config, strArgs);
			if (act !== undefined) {
				throw new Error(msg + strArgs.toString());
			}
		};
		mismatch("not a number",
			new TypeLength(1, "px"),
			[ "foo", "bar" ],
		);
		mismatch("invalid unit",
			new TypeLength(1, "px"),
			[ "10turn", "2" ],
		);
	});
});

