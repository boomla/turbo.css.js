import Selector from './Selector';
import { assert } from 'chai';

describe('Selector.addTag()', function() {
	it('should add a tag selector', function() {
		let ok = function(sel: Selector, exp: Selector) {
			let act = sel.addTag("div");
			assert.deepEqual(act, exp);
		}
		let fail = function(sel: Selector, expErr: string) {
			try {
				sel.addTag("div");
				throw new Error("expected an error for ["+sel.format("")+"]");
			}
			catch(err: unknown) {
				if ( ! (err instanceof Error)) {
					throw new Error('unexpected error #sdf872zrh8uasybndf67wg4ta89wherf');
				}
				let actErr = err.toString();
				if (actErr != expErr) {
					throw new Error("\nselector ["+sel.format("")+"]\nexpErr ["+expErr+"]\nactErr ["+actErr+"]");
				}
			}
		}

		ok(
			Selector.new(".foo"),
			Selector.new("div.foo"),
		)
		ok(
			Selector.new(".foo:hover"),
			Selector.new("div.foo:hover"),
		)
		ok(
			Selector.new("*", ".foo"),
			Selector.new("div", ".foo"),
		)
		ok(
			Selector.new("*:hover", ".foo"),
			Selector.new("div:hover", ".foo"),
		)
		fail(
			Selector.new("a:hover", ".foo"),
			"Error: can not add second tag [div] to selector [a:hover .foo]",
		)
	});
});

