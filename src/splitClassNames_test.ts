import splitClassNames from './splitClassNames';
import { assert } from 'chai';

describe('splitClassNames()', function() {
	it('should split class names', function() {
		let ok = function(classes: string, ...exp: Array<string>) {
			let act = splitClassNames(classes);
			assert.deepEqual(exp, act, classes);
		}
		ok(
			"foo",
			"foo",
		);
		ok(
			"foo bar baz",
			"foo", "bar", "baz",
		);
		ok(
			"  \t\t\n\n\r\r  foo  \t\t\n\n\r\r  bar  \t\t\n\n\r\r  baz  \t\t\n\n\r\r  ",
			"foo", "bar", "baz",
		);
	});
});

