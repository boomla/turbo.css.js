import eatT1 from './eatT1';
import { assert } from 'chai';

describe('eatT1()', function() {
	it('should eat [t1] class from list', function() {
		let yes = function(classNames: Array<string>, exp: Array<string>) {
			let act = eatT1("t1", classNames);
			assert.deepEqual(act, exp, classNames.toString());
		}
		let no = function(...classNames: Array<string>) {
			let act = eatT1("t1", classNames);
			assert.deepEqual(undefined, act, classNames.toString());
		}

		yes(
			[ "t1" ],
			[],
		);
		yes(
			[ "t1", "foo" ],
			[ "foo" ],
		);
		yes(
			[ "t1", "foo", "bar" ],
			[ "foo", "bar" ],
		);
		yes(
			[ "foo", "t1", "bar" ],
			[ "foo", "bar" ],
		);
		yes(
			[ "foo", "bar", "t1" ],
			[ "foo", "bar" ],
		);

		no();
		no("foo");
		no("foo", "bar");
		no("t0", "foo", "bar");
		no("t11", "foo", "bar");
	});
});

