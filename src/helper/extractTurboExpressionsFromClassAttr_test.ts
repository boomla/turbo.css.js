import extractTurboExpressionsFromClassAttr from './extractTurboExpressionsFromClassAttr';
import { assert } from 'chai';

describe('extractTurboExpressionsFromClassAttr()', function() {
	function ok(msg: string, classAttr: string, exp: string) {
		let act = extractTurboExpressionsFromClassAttr('t1', classAttr);
		assert.equal(act, exp, msg);
	}
	ok('should extract a single expression',
		't1 w-10',
		't1 w-10',
	)
	ok('should extract and merge multiple expressions separated by semicolons',
		't1 w-10 ; t1 h-20 ; t1 color-red',
		't1 w-10 h-20 color-red',
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
		't1',
	)
	ok('should support empty class attribute',
		'',
		'',
	)
	ok('should support class attribute containing no Turbo classes',
		'foo bar baz',
		'',
	)
	ok('should support multiple [t1] classes',
		't1 t1 w-10',
		't1 w-10',
	)
});

