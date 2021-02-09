import TypeKeywordValue from './TypeKeywordValue';
import ValueString from './ValueString';
import ConfigStatic from './ConfigStatic';
import { assert } from 'chai';

describe('TypeKeywordValue', function() {
	it('.parse()', function() {
		let config = new ConfigStatic();

		let ok = function(typ: TypeKeywordValue, strArgs: Array<string>, expValue: ValueString, expRemainder: Array<string>) {
			let act = typ.parse(config, strArgs);
			if (act === undefined) {
				throw new Error(strArgs.toString());
			}
			let exp = [ expValue, expRemainder ];
			assert.deepEqual(exp, act);
		}
		ok(
			new TypeKeywordValue("keyword", "value"),
			[ "keyword", "foo" ],
			new ValueString("value"),
			[ "foo" ],
		);

		let mismatch = function(typ: TypeKeywordValue, strArgs: Array<string>) {
			let act = typ.parse(config, strArgs);
			assert.equal(act, undefined);
		};
		mismatch(
			new TypeKeywordValue("keyword", "value"),
			[ "foo", "bar" ],
		);
		mismatch(
			new TypeKeywordValue("keyword", "value"),
			[ "keyword blah", "foo", "bar" ],
		);
	});
});

