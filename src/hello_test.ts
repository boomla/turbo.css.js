import { hello } from './hello';

describe('hello()', function() {
	it('it should return [hello]', function() {
		var exp = 'hello';
		var act = hello();
		if (exp !== act) {
			throw new Error('exp['+exp+'] act['+act+']');
		}
	});
});
