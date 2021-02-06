import Selector from './Selector';
import { assert } from 'chai';

describe('Selector.format()', function() {
	it('should throw an error when encountering an empty selector', function() {
		try {
			let sel = new Selector([]);
			let namespace = "";
			sel.format(namespace);
			throw new Error("expected an error");
		}
		catch (e) {
			let expErr = "Error: empty selector is invalid, can not format it";
			let actErr = e.toString();
			assert.equal(expErr, actErr);
		}
	});
	it('should format selector without a namespace correctly', function() {
		let ok = function(sel: Selector, exp: string) {
			let namespace = "";
			let act = sel.format(namespace);
			assert.equal(exp, act);
		}

		ok(
			Selector.new(".foo"),
			".foo",
		)
		ok(
			Selector.new(".foo", ">", ".bar"),
			".foo > .bar",
		)
		ok(
			Selector.new(".foo", ">", ".bar", ">", ".baz"),
			".foo > .bar > .baz",
		)
	});
	it('should format all combinators correctly', function() {
		let ok = function(sel: Selector, exp: string) {
			let namespace = "";
			let act = sel.format(namespace);
			assert.equal(exp, act);
		}

		ok(
			Selector.new(".foo", ">", ".bar"),
			".foo > .bar",
		)
		ok(
			Selector.new(".foo", "+", ".bar"),
			".foo + .bar",
		)
		ok(
			Selector.new(".foo", "~", ".bar"),
			".foo ~ .bar",
		)
		ok(
			Selector.new(".foo", " ", ".bar"),
			".foo .bar",
		)
	});
	it('should apply namespace correctly', function() {
		let ok = function(sel: Selector, exp: string) {
			let namespace = "ns_";
			let act = sel.format(namespace);
			assert.equal(exp, act);
		}

		ok(
			Selector.new (".foo"),
			".ns_foo",
		)
		ok(
			Selector.new (".foo", ">", ".bar"),
			".ns_foo > .ns_bar",
		)
		ok(
			Selector.new (".foo", ">", ".bar", ">", ".baz"),
			".ns_foo > .ns_bar > .ns_baz",
		)
	});
	it('should format pseudo selectors correctly', function() {
		let ok = function(sel: Selector, exp: string) {
			let namespace = "";
			let act = sel.format(namespace);
			assert.equal(exp, act);
		}

		ok(
			Selector.new(".foo:hover"),
			".foo:hover",
		)
		ok(
			Selector.new(".foo:before"),
			".foo:before",
		)
		ok(
			Selector.new(".foo::placeholder"),
			".foo::placeholder",
		)
		ok(
			Selector.new(".foo::-moz-placeholder"),
			".foo::-moz-placeholder",
		)
	});
});

