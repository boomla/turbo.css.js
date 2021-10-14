import extractTurboExpressionsFromClassAttr from './extractTurboExpressionsFromClassAttr';
import { assert } from 'chai';

describe('extractTurboExpressionsFromClassAttr()', function() {
	function ok(msg: string, classAttr: string, ...exp: Array<string>) {
		let act = extractTurboExpressionsFromClassAttr(classAttr);
		assert.deepEqual(act, exp, msg);
	}
	ok('should extract a single expression',
		't1 w-10',
		't1 w-10',
	)
	ok('should extract multiple expressions separated by semicolons',
		't1 w-10 ; t1 h-20 ; t1 color-red',
		't1 w-10',
		't1 h-20',
		't1 color-red',
	)
	ok('should ignore classes before t1 class',
		'foo bar baz t1 w-10',
		't1 w-10',
	)
	ok('should ignore classes after semicolon',
		't1 w-10 ; foo bar baz',
		't1 w-10',
	)
	ok('should support empty turbo expression',
		't1',
	)
	ok('should support empty class attribute',
		'',
	)
	ok('should support class attribute containing no Turbo classes',
		'foo bar baz',
	)
});

