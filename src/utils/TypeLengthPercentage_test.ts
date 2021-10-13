import TypeLengthPercentage from './TypeLengthPercentage';
import ValuePercentage from './ValuePercentage';
import ValueLength from './ValueLength';
import type Value from './Value';
import ConfigStatic from './ConfigStatic';
import { assert } from 'chai';

describe('TypeLengthPercentage', function() {
	it('.parse() - unit optional', function() {
		let config = new ConfigStatic();

		let ok = function(msg: string, typ: TypeLengthPercentage, strArgs: Array<string>, expValue: Value, expRemainder: Array<string>) {
			let act = typ.parse(config, strArgs);
			if (act === undefined) {
				throw new Error(msg + strArgs.toString());
			}
			let exp = [ expValue, expRemainder ];
			assert.deepEqual(act, exp, msg);
		};
		let mismatch = function(msg: string, typ: TypeLengthPercentage, strArgs: Array<string>) {
			let act = typ.parse(config, strArgs);
			assert.equal(act, undefined, msg);
		};

		ok("unitless number",
			new TypeLengthPercentage(1, "px"),
			[ "1.23" ],
			new ValueLength(1.23, "px"),
			[],
		)
		ok("remainders are returned",
			new TypeLengthPercentage(1, "px"),
			[ "1", "2" ],
			new ValueLength(1, "px"),
			[ "2" ],
		)
		ok("length unit provided",
			new TypeLengthPercentage(1, "px"),
			[ "2em", "3" ],
			new ValueLength(2, "em"),
			[ "3" ],
		)
		ok("percentage unit provided",
			new TypeLengthPercentage(1, "px"),
			[ "2%", "3" ],
			new ValuePercentage(2),
			[ "3" ],
		)
		ok("unit value other than 1",
			new TypeLengthPercentage(0.1, "px"),
			[ "20", "3" ],
			new ValueLength(2, "px"),
			[ "3" ],
		)
		ok("unit value is not applied when the unit name is explicitely provided",
			new TypeLengthPercentage(0.1, "px"),
			[ "20%", "3" ],
			new ValuePercentage(20),
			[ "3" ],
		)
		mismatch("not a number",
			new TypeLengthPercentage(1, "px"),
			[ "foo", "bar" ],
		)
		mismatch("invalid unit",
			new TypeLengthPercentage(1, "px"),
			[ "10turn", "2" ],
		)
	});
	it('.parse() - unit required', function() {
		let config = new ConfigStatic();

		let ok = function(msg: string, typ: TypeLengthPercentage, strArgs: Array<string>, expValue: Value, expRemainder: Array<string>) {
			let act = typ.parse(config, strArgs);
			if (act === undefined) {
				throw new Error(msg + strArgs.toString());
			}
			let exp = [ expValue, expRemainder ];
			assert.deepEqual(act, exp, msg);
		};
		let mismatch = function(msg: string, typ: TypeLengthPercentage, strArgs: Array<string>) {
			let act = typ.parse(config, strArgs);
			assert.equal(act, undefined, msg);
		};

		ok("length unit provided",
			TypeLengthPercentage.newWithUnit(),
			[ "2em", "3" ],
			new ValueLength(2, "em"),
			[ "3" ],
		)
		ok("percentage unit provided",
			TypeLengthPercentage.newWithUnit(),
			[ "2%", "3" ],
			new ValuePercentage(2),
			[ "3" ],
		)
		mismatch("unit not provided",
			TypeLengthPercentage.newWithUnit(),
			[ "2", "3" ],
		)
	});
});

