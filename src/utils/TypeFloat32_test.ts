import TypeFloat32 from './TypeFloat32';
import ValueFloat32 from './ValueFloat32';
import ConfigStatic from './ConfigStatic';
import { assert } from 'chai';

describe('TypeFloat32', function() {
	it('.parse()', function() {
		let config = new ConfigStatic();

		let ok = function(msg: string, typ: TypeFloat32, strArgs: Array<string>, expValue: ValueFloat32, expRemainder: Array<string>) {
			let act = typ.parse(config, strArgs);
			if (act === undefined) {
				throw new Error(msg + strArgs.toString());
			}
			let exp = [ expValue, expRemainder ];
			assert.deepEqual(exp, act, msg);
		};
		let mismatch = function(msg: string, typ: TypeFloat32, strArgs: Array<string>) {
			let act = typ.parse(config, strArgs);
			assert.equal(act, undefined, msg);
		};

		ok("simple float32 value",
			new TypeFloat32(),
			[ "1.23" ],
			new ValueFloat32(1.23),
			[],
		);
		ok("remainder should be returned",
			new TypeFloat32(),
			[ "1.23", "foo" ],
			new ValueFloat32(1.23),
			[ "foo" ],
		);
		ok("when minimum is provided, valid value should be accepted",
			new TypeFloat32(0, 100, 1),
			[ "0", "2" ],
			new ValueFloat32(0),
			[ "2" ],
		);
		mismatch("when minimum is provided, value too small should be mismatched",
			new TypeFloat32(0, 100, 1),
			[ "-1", "2" ],
		);
		ok("when maximum is provided, valid value should be accepted",
			new TypeFloat32(0, 100, 1),
			[ "100", "2" ],
			new ValueFloat32(100),
			[ "2" ],
		);
		mismatch("when maximum is provided, value too large should be mismatched",
			new TypeFloat32(0, 100, 1),
			[ "101", "2" ],
		);
		ok("unit should be applied to the result, min/max should be applied to the input",
			new TypeFloat32(10, 20, 100),
			[ "15", "2" ],
			new ValueFloat32(1500),
			[ "2" ],
		);
		mismatch(
			"not a number",
			new TypeFloat32(),
			[ "foo", "bar" ],
		);
	});
});

