import TypeTransitionProperty from './TypeTransitionProperty';
import ValueString from './ValueString';
import ConfigStatic from './ConfigStatic';
import { assert } from 'chai';

describe('TypeTransitionProperty', function() {
	it('.parse()', function() {
		let config = new ConfigStatic();

		let ok = function(strArgs: Array<string>, expValue: ValueString) {
			let typ = new TypeTransitionProperty();
			let act = typ.parse(config, strArgs);
			if (act === undefined) {
				throw new Error(strArgs.toString());
			}
			let expRemainder = [] as Array<string>;
			let exp = [ expValue, expRemainder ];
			assert.deepEqual(act, exp);
		};
		let mismatch = function(msg: string, strArgs: Array<string>) {
			let typ = new TypeTransitionProperty();
			let act = typ.parse(config, strArgs);
			assert.equal(act, undefined, msg);
		};

		ok(
			[ "color" ],
			new ValueString("color"),
		)
		ok(
			[ "bgColor" ],
			new ValueString("background-color"),
		)
		ok(
			[ "color", "bgColor" ],
			new ValueString("color, background-color"),
		)

		mismatch("remainder not supported",
			[ "color", "foo" ],
		)
		mismatch("not a transition property",
			[ "foo", "bar" ],
		)
	});
});

