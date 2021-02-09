import TypePercentage from './TypePercentage';
import ValuePercentage from './ValuePercentage';
import ConfigStatic from './ConfigStatic';
import { assert } from 'chai';

describe('TypePercentage', function() {
	it('.parse()', function() {
		let config = new ConfigStatic();

		let ok = function(msg: string, typ: TypePercentage, strArgs: Array<string>, expValue: ValuePercentage, expRemainder: Array<string>) {
			let act = typ.parse(config, strArgs);
			if (act === undefined) {
				throw new Error(msg + strArgs.toString());
			}
			let exp = [ expValue, expRemainder ];
			assert.deepEqual(exp, act, msg);
		};
		let mismatch = function(msg: string, typ: TypePercentage, strArgs: Array<string>) {
			let act = typ.parse(config, strArgs);
			assert.equal(act, undefined, msg);
		};

		ok("unit not required, unitless number provided",
			new TypePercentage(false),
			[ "1.23", "6" ],
			new ValuePercentage(1.23),
			[ "6" ],
		);
		ok("unit not required, percent unit provided",
			new TypePercentage(false),
			[ "1.23%", "6" ],
			new ValuePercentage(1.23),
			[ "6" ],
		);
		ok("unit provided",
			new TypePercentage(true),
			[ "1.23%", "3" ],
			new ValuePercentage(1.23),
			[ "3" ],
		);
		mismatch("not a number",
			new TypePercentage(false),
			[ "foo", "bar" ],
		);
		mismatch("unit required",
			new TypePercentage(true),
			[ "10", "2" ],
		);
	});
});

