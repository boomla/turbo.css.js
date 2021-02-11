import Compiler from './Compiler';

describe('Compiler', function() {
	it('should succeed creating compiler instance', function() {
		Compiler.newDefaultCompiler();
		Compiler.newNoCompatCompiler();
	});
});

