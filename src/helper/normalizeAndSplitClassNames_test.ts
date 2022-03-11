import normalizeAndSplitClassNames from './normalizeAndSplitClassNames';
import { assert } from 'chai';

describe('normalizeAndSplitClassNames()', function() {
	function ok(classAttr: string, expTurboClasses: string[], expOtherClasses: string[]) {
		let act = normalizeAndSplitClassNames('t1', classAttr);
		let exp = [ expTurboClasses, expOtherClasses ];
		assert.deepEqual(act, exp);
	}
	it('should extract a single expression', () => {
		ok(
			't1 w-10',
			[ 't1', 'w-10' ],
			[],
		);
	});
	it('should extract and merge multiple expressions separated by semicolons', () => {
		ok(
			't1 w-10 ; t1 h-20 ; t1 color-red',
			[ 't1', 'w-10', 'h-20', 'color-red' ],
			[],
		);
	});
	it('should ignore classes before t1 class', () => {
		ok(
			'foo bar baz t1 w-10',
			[ 't1', 'w-10' ],
			[ 'foo', 'bar', 'baz' ],
		);
	});
	it('should ignore classes after semicolon', () => {
		ok(
			't1 w-10 ; foo bar baz',
			[ 't1', 'w-10' ],
			[ 'foo', 'bar', 'baz' ],
		);
	});
	it('should support empty turbo expression', () => {
		ok(
			't1',
			[ 't1' ],
			[],
		);
	});
	it('should support empty class attribute', () => {
		ok(
			'',
			[],
			[],
		);
	});
	it('should support class attribute containing no Turbo classes', () => {
		ok(
			'foo bar baz',
			[],
			[ 'foo', 'bar', 'baz' ],
		);
	});
	it('should support multiple [t1] classes', () => {
		ok(
			't1 t1 w-10',
			[ 't1', 'w-10' ],
			[],
		);
	});
	it('should support new lines and other white spaces', () => {
		ok(
			't1\n\r\tw-10',
			[ 't1', 'w-10' ],
			[],
		);
	});
});

