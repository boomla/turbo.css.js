import TypeKeyword from './TypeKeyword';
import ValueString from './ValueString';
import ConfigStatic from './ConfigStatic';
import { assert } from 'chai';

describe('TypeKeyword', function() {
	it('.parse()', function() {
		let config = new ConfigStatic();

		let ok = function(typ: TypeKeyword, strArgs: Array<string>, expValue: ValueString, expRemainder: Array<string>) {
			let act = typ.parse(config, strArgs);
			if (act === undefined) {
				throw new Error(strArgs.toString());
			}
			let exp = [ expValue, expRemainder ];
			assert.deepEqual(exp, act);
		}
		ok(
			new TypeKeyword("keyword"),
			[ "keyword", "foo" ],
			new ValueString("keyword"),
			[ "foo" ],
		);

		let mismatch = function(typ: TypeKeyword, strArgs: Array<string>) {
			let act = typ.parse(config, strArgs);
			assert.equal(act, undefined);
		};
		mismatch(
			new TypeKeyword("keyword"),
			[ "foo", "bar" ],
		);
		mismatch(
			new TypeKeyword("keyword"),
			[ "keyword blah", "foo", "bar" ],
		);
	});
});

