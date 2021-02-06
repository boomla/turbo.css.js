import Selector from './Selector';
import { assert } from 'chai';

describe('Selector.less()', function() {
	it('should sort selectors correctly', function() {
		let ok = function(sel: Selector, exp: string) {
			let act = sel.sortOrderFormat();
			assert.equal(exp, act);
		}

		ok(Selector.new(".foo"), ".foo");
		ok(Selector.new(".foo", ">", ".bar"), ".foo > .bar");

		ok(Selector.new(".foo", ">", ".bar"), ".foo > .bar");
		ok(Selector.new(".foo", "+", ".bar"), ".foo + .bar");
		ok(Selector.new(".foo", "~", ".bar"), ".foo ~ .bar");
		ok(Selector.new(".foo", " ", ".bar"), ".foo .bar");

		// Turbo selectors
		ok(Selector.new(".visited\\:foo"), ".\x7f-a1\\:foo");
		ok(Selector.new(".focus\\:foo"),   ".\x7f-a2\\:foo");
		ok(Selector.new(".hover\\:foo"),   ".\x7f-a3\\:foo");
		ok(Selector.new(".active\\:foo"),  ".\x7f-a4\\:foo");

		ok(Selector.new(".empty\\:foo"),       ".\x7f-b1\\:foo");
		ok(Selector.new(".not-empty\\:foo"),   ".\x7f-b2\\:foo");
		ok(Selector.new(".first\\:foo"),       ".\x7f-b3\\:foo");
		ok(Selector.new(".not-first\\:foo"),   ".\x7f-b4\\:foo");
		ok(Selector.new(".last\\:foo"),        ".\x7f-b5\\:foo");
		ok(Selector.new(".not-last\\:foo"),    ".\x7f-b6\\:foo");
		ok(Selector.new(".even\\:foo"),        ".\x7f-b7\\:foo");
		ok(Selector.new(".odd\\:foo"),         ".\x7f-b8\\:foo");

		ok(Selector.new(".after\\:foo"),       ".\x7f-c1\\:foo");
		ok(Selector.new(".before\\:foo"),      ".\x7f-c2\\:foo");
		ok(Selector.new(".placeholder\\:foo"), ".\x7f-c3\\:foo");
		ok(Selector.new(".selection\\:foo"),   ".\x7f-c4\\:foo");
		ok(Selector.new(".thumb\\:foo"),       ".\x7f-c5\\:foo");

		ok(Selector.new(".checked\\:foo"),     ".\x7f-d1\\:foo");
		ok(Selector.new(".unchecked\\:foo"),   ".\x7f-d2\\:foo");
		ok(Selector.new(".enabled\\:foo"),     ".\x7f-d3\\:foo");
		ok(Selector.new(".disabled\\:foo"),    ".\x7f-d4\\:foo");
		ok(Selector.new(".valid\\:foo"),       ".\x7f-d5\\:foo");
		ok(Selector.new(".invalid\\:foo"),     ".\x7f-d6\\:foo");
		
		ok(Selector.new(".mode-open\\:foo"),   ".\x7f-e1-open\\:foo");


		// CSS pseudo selectors
		ok(Selector.new(".foo:visited"), ".foo:\x7f-a1");
		ok(Selector.new(".foo:focus"),   ".foo:\x7f-a2");
		ok(Selector.new(".foo:hover"),   ".foo:\x7f-a3");
		ok(Selector.new(".foo:active"),  ".foo:\x7f-a4");

		ok(Selector.new(".foo:empty"),             ".foo:\x7f-b1");
		ok(Selector.new(".foo:not(:empty)"),       ".foo:\x7f-b2");
		ok(Selector.new(".foo:first-child"),       ".foo:\x7f-b3");
		ok(Selector.new(".foo:not(:first-child)"), ".foo:\x7f-b4");
		ok(Selector.new(".foo:last-child"),        ".foo:\x7f-b5");
		ok(Selector.new(".foo:not(:last-child)"),  ".foo:\x7f-b6");
		ok(Selector.new(".foo:nth-child(even)"),   ".foo:\x7f-b7");
		ok(Selector.new(".foo:nth-child(odd)"),    ".foo:\x7f-b8");

		ok(Selector.new(".foo:after"),         ".foo:\x7f-c1");
		ok(Selector.new(".foo:before"),        ".foo:\x7f-c2");
		ok(Selector.new(".foo::placeholder"),  ".foo:\x7f-c3");
		ok(Selector.new(".foo::selection"),    ".foo:\x7f-c4");
		ok(Selector.new(".foo::slider-thumb"), ".foo:\x7f-c5");

		ok(Selector.new(".foo:checked"),     ".foo:\x7f-d1");
		ok(Selector.new(".foo:not(:checked)"),   ".foo:\x7f-d2");
		ok(Selector.new(".foo:enabled"),     ".foo:\x7f-d3");
		ok(Selector.new(".foo:disabled"),    ".foo:\x7f-d4");
		ok(Selector.new(".foo:valid"),       ".foo:\x7f-d5");
		ok(Selector.new(".foo:invalid"),     ".foo:\x7f-d6");
	});
});

