import splitArgParts from './splitArgParts';
import { assert } from 'chai';

describe('splitArgParts()', function() {
	it('should split arg pargs', function() {
		let ok = function(className: string, expParts: Array<string>, expNegative: boolean) {
			let act = splitArgParts(className);
			let exp = [ expParts, expNegative ];
			assert.deepEqual(act, exp, className);
		}
		let okPositive = function(className: string, ...expParts: Array<string>) {
			ok(className, expParts, false);
		}
		okPositive("foo", "foo");
		okPositive("foo-bar", "foo", "bar");
		okPositive("foo-bar-baz", "foo", "bar", "baz");
		okPositive("foo-bar-1.25px", "foo", "bar", "1.25px");
		okPositive("foo-bar-1%", "foo", "bar", "1%");

		ok(
			"foo--1",
			[ "foo", "-1" ],
			false,
		);
		ok(
			"-foo-bar",
			[ "foo", "bar" ],
			true,
		);
		ok(
			"-foo-bar-baz",
			[ "foo", "bar", "baz" ],
			true,
		);
	});
});

