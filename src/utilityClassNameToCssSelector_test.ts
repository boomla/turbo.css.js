import utilityClassNameToCssSelector from './utilityClassNameToCssSelector';
import { assert } from 'chai';

describe('utilityClassNameToCssSelector()', function() {
	it('escape utility class name to be valid CSS selector', function() {
		let ok = function(input: string, exp: string) {
			let act = utilityClassNameToCssSelector(input);
			assert.equal(act, exp, input);
		}
		ok("m-1", ".m-1");
		ok("m-1.5", ".m-1\\.5");
		ok("m-1%", ".m-1\\%");
		ok("hover:m-1", ".hover\\:m-1");
		ok("hover:>m-1", ".hover\\:\\>m-1");
		ok("hover:~m-1", ".hover\\:\\~m-1");
		ok("hover:+m-1", ".hover\\:\\+m-1");
		ok("ui.btn", ".ui\\.btn");
	});
});

