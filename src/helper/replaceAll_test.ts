import replaceAll from './replaceAll';
import { assert } from 'chai';

describe('replaceAll()', function() {
	it('should replace single occurrence', function() {
		let act = replaceAll("a b c", "b", "-");
		let exp = "a - c";
		assert.equal(act, exp);
	});
	it('should replace multiple occurrences', function() {
		let act = replaceAll("a b b c", "b", "-");
		let exp = "a - - c";
		assert.equal(act, exp);
	});
	it('should support no occurrences', function() {
		let act = replaceAll("a b c", "x", "-");
		let exp = "a b c";
		assert.equal(act, exp);
	});
	it('should not fail when replacement contains needle', function() {
		let act = replaceAll("a b c", "b", "b -");
		let exp = "a b - c";
		assert.equal(act, exp);
	});
});

