import TypeInt32 from './TypeInt32';
import ValueInt32 from './ValueInt32';
import ConfigStatic from './ConfigStatic';
import { assert } from 'chai';

describe('TypeInt32', function() {
	it('.parse()', function() {
		let config = new ConfigStatic();

		let ok = function(typ: TypeInt32, strArgs: Array<string>, expValue: ValueInt32, expRemainder: Array<string>) {
			let act = typ.parse(config, strArgs);
			if (act === undefined) {
				throw new Error(strArgs.toString());
			}
			let exp = [ expValue, expRemainder ];
			assert.deepEqual(act, exp);
		};
		ok(
			new TypeInt32(),
			[ "1" ],
			new ValueInt32(1),
			[],
		);
		ok(
			new TypeInt32(),
			[ "1", "2" ],
			new ValueInt32(1),
			[ "2" ],
		);
		ok(
			new TypeInt32(0, 100),
			[ "0", "2" ],
			new ValueInt32(0),
			[ "2" ],
		);
		ok(
			new TypeInt32(0, 100),
			[ "100", "2" ],
			new ValueInt32(100),
			[ "2" ],
		);

		let mismatch = function(typ: TypeInt32, strArgs: Array<string>) {
			let act = typ.parse(config, strArgs);
			if (act !== undefined) {
				throw new Error(strArgs.toString());
			}
		};
		// Not integer
		mismatch(
			new TypeInt32(),
			[ "foo", "bar" ],
		);
		// Less than minimum
		mismatch(
			new TypeInt32(0, 100),
			[ "-10", "2" ],
		);
		// More than maximum
		mismatch(
			new TypeInt32(0, 100),
			[ "110", "2" ],
		);
	});
});

