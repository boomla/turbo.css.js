import TypeKeywordsValueMap from './TypeKeywordsValueMap';
import ValueString from './ValueString';
import ConfigStatic from './ConfigStatic';
import { assert } from 'chai';

describe('TypeKeywordsValueMap', function() {
	it('.parse()', function() {
		let config = new ConfigStatic();

		let ok = function(typ: TypeKeywordsValueMap, strArgs: Array<string>, expValue: ValueString, expRemainder: Array<string>) {
			let act = typ.parse(config, strArgs);
			if (act === undefined) {
				throw new Error(strArgs.toString());
			}
			let exp = [ expValue, expRemainder ];
			assert.deepEqual(exp, act);
		}
		ok(
			new TypeKeywordsValueMap({
				"foo": "val-foo",
				"foo-bar": "val-foo-bar",
				"foo-bar-baz": "val-foo-bar-baz",
			}),
			[ "foo", "bar", "baz", "bazooka" ],
			new ValueString("val-foo-bar-baz"),
			[ "bazooka" ],
		);
		ok(
			new TypeKeywordsValueMap({
				"foo": "val-foo",
				"foo-bar": "val-foo-bar",
				"foo-bar-baz": "val-foo-bar-baz",
			}),
			[ "foo", "bar", "bazooka" ],
			new ValueString("val-foo-bar"),
			[ "bazooka" ],
		);
		ok(
			new TypeKeywordsValueMap({
				"foo": "val-foo",
				"foo-bar": "val-foo-bar",
				"foo-bar-baz": "val-foo-bar-baz",
			}),
			[ "foo", "bazooka" ],
			new ValueString("val-foo"),
			[ "bazooka" ],
		);

		let mismatch = function(typ: TypeKeywordsValueMap, strArgs: Array<string>) {
			let act = typ.parse(config, strArgs);
			assert.equal(act, undefined);
		};
		mismatch(
			new TypeKeywordsValueMap({
				"foo": "val-foo",
				"foo-bar": "val-foo-bar",
				"foo-bar-baz": "val-foo-bar-baz",
			}),
			[ "hello", "world" ],
		);
		mismatch(
			new TypeKeywordsValueMap({
				"foo": "val-foo",
				"foo-bar": "val-foo-bar",
				"foo-bar-baz": "val-foo-bar-baz",
			}),
			[ "foo blah", "bar" ],
		);
	});
});

