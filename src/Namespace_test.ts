import Namespace from './Namespace';
import { assert } from 'chai';

describe('Namespace.publicClassNames()', function() {
	it('should return the public class names only', function() {
		const ns = Namespace.evalLibrary('lib', '/lib.turbo', `
			t1
			.foo {
				color-red
			}
			.Foo {
				color-blue
			}
			._bar {
				color-transparent
			}
		`);

		const act = ns.publicClassNames();
		const exp = [
			'foo',
			'Foo',
		];

		assert.deepEqual(exp, act);
	});
});

