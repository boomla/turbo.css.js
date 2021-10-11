import TypeShadow from './TypeShadow';
import ValueString from './ValueString';
import ConfigStatic from './ConfigStatic';
import { ShadowData } from "./Config";
import { assert } from 'chai';

describe('TypeShadow', function() {
	it('.parse()', function() {
		let typ = new TypeShadow();

		let config = new ConfigStatic({
			shadows: {
				1: new ShadowData("0 1px 3px -1px rgba(0,0,0,{opacity})", 0.2),
				2: new ShadowData("0 1px 4px -1px rgba(0,0,0,{opacity})", 0.15 ),
				4: new ShadowData("0 1px 4px -0.5px rgba(0,0,0,{opacity})", 0.14 ),
				8: new ShadowData("0 3px 8px -2px rgba(0,0,0,{opacity})", 0.17 ),
				16: new ShadowData("0 6px 15px -4px rgba(0,0,0,{opacity})", 0.15 ),
				32: new ShadowData("0 10px 24px -7px rgba(0,0,0,{opacity})", 0.15 ),
			},
		});

		let ok = function(msg: string, strArgs: Array<string>, expValue: ValueString, expRemainder: Array<string>) {
			let act = typ.parse(config, strArgs);
			if (act === undefined) {
				throw new Error(msg + " " + strArgs.toString());
			}
			let exp = [ expValue, expRemainder ];
			assert.deepEqual(act, exp, msg);
		};
		ok("distance 1",
			[ "1" ],
			new ValueString("0 1px 3px -1px rgba(0,0,0,0.2)"),
			[],
		)
		ok("distance 2",
			[ "2" ],
			new ValueString("0 1px 4px -1px rgba(0,0,0,0.15)"),
			[],
		)
		ok("distance 4",
			[ "4" ],
			new ValueString("0 1px 4px -0.5px rgba(0,0,0,0.14)"),
			[],
		)
		ok("distance 8",
			[ "8" ],
			new ValueString("0 3px 8px -2px rgba(0,0,0,0.17)"),
			[],
		)
		ok("distance 16",
			[ "16" ],
			new ValueString("0 6px 15px -4px rgba(0,0,0,0.15)"),
			[],
		)
		ok("distance 32",
			[ "32" ],
			new ValueString("0 10px 24px -7px rgba(0,0,0,0.15)"),
			[],
		)
		ok("remainders are returned",
			[ "4", "foo" ],
			new ValueString("0 1px 4px -0.5px rgba(0,0,0,0.14)"),
			[ "foo" ],
		)

		let mismatch = function(msg: string, strArgs: Array<string>) {
			let act = typ.parse(config, strArgs);
			assert.equal(act, undefined, msg);
		};
		mismatch("units are not accepted",
			[ "4px" ],
		)
		mismatch("not a number",
			[ "foo", "bar" ],
		)

		let fail = function(msg: string, strArgs: Array<string>, expErr: string) {
			try {
				typ.parse(config, strArgs);
				throw new Error("expected an error for parsing "+strArgs.toString());
			}
			catch(e) {
				let actErr = e.toString();
				assert.equal(actErr, expErr, msg);
			}
		}
		fail("unsupported distance 3",
			[ "3" ],
			"Error: invalid shadow distance [3] use one of [1, 2, 4, 8, 16, 32]",
		)
	});
});

