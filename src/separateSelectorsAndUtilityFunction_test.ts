import separateSelectorsAndUtilityFunction from './separateSelectorsAndUtilityFunction';
import { assert } from 'chai';

describe('separateSelectorsAndUtilityFunction()', function() {
	it('should sparate selectors from utility function', function() {
		let ok = function(className: string, expSelector: string, expUtilityFn: string) {
			let act = separateSelectorsAndUtilityFunction(className);
			let exp = [ expSelector, expUtilityFn ];
			assert.deepEqual(exp, act, className);
		}
		ok("foo", "", "foo");
		ok("foo-bar", "", "foo-bar");
		ok("foo-1", "", "foo-1");
		
		ok("hover:foo", "hover:", "foo");
		ok(">foo", ">", "foo");
		ok("+foo", "+", "foo");
		ok("~foo", "~", "foo");
		ok("/foo", "/", "foo");
		ok("@foo", "@", "foo");

		ok("hover:@>>>++~~//foo", "hover:@>>>++~~//", "foo");
		ok("@>>>++~~//hover:foo", "@>>>++~~//hover:", "foo");
		ok("hover:>active:>enabled:>foo", "hover:>active:>enabled:>", "foo");

		let fail = function(className: string, expErr: string) {
			try {
				separateSelectorsAndUtilityFunction(className);
				throw new Error("expected an error for class name ["+className+"]");
			}
			catch(e) {
				let actErr = e.toString();
				assert.equal(expErr, actErr, className);
			}
		}
		fail("hover:", "Error: missing utility function call in class name [hover:]");
	});
});

