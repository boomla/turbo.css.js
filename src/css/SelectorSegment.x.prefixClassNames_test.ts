import SelectorSegment from './SelectorSegment';

describe('SelectorSegment.prefixClassNames()', function() {
	it('should prefix class names that do not start with [mode-]', function() {
		let test = function(inputStr: string, expStr: string) {
			let input = new SelectorSegment(inputStr);
			let exp = new SelectorSegment(expStr);
			
			let act = input.prefixClassNames("NS-");
			if (exp.toString() !== act.toString()) {
				throw new Error("\ninput ["+inputStr+"]\nexp ["+expStr+"]\nact ["+act.toString()+"]");
			}
		}
		test(".foo", ".NS-foo");
		test(".foo:hover", ".NS-foo:hover");
		test(".foo-1\\.1turn:hover", ".NS-foo-1\\.1turn:hover");
		test(".foo.bar", ".NS-foo.NS-bar");
		test(".mode-open", ".mode-open");
		test(".mode-open\\:foo", ".NS-mode-open\\:foo");
		test(".mode-open\\:foo.mode-open", ".NS-mode-open\\:foo.mode-open");
		test(".-mode-open", ".-mode-open");
		test(".-mode-open\\:foo", ".NS--mode-open\\:foo");
		test(".-mode-open\\:foo.-mode-open", ".NS--mode-open\\:foo.-mode-open");
		test("div.foo", "div.NS-foo");
		test("div.foo:hover", "div.NS-foo:hover");
		test("div", "div");
		test(":hover", ":hover");
		test("*", "*");
	});
});

