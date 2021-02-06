import SelectorSegment from './SelectorSegment';

describe('SelectorSegment.extractClassName()', function() {
	it('should extract the class name and leave a valid selector without it', function() {
		let found = function(inputStr: string, expClassNameStr: string, expRemainderStr: string) {
			let input = new SelectorSegment(inputStr);
			let expClassName = new SelectorSegment(expClassNameStr);
			let expRemainder = new SelectorSegment(expRemainderStr);

			let act = input.extractClassName();
			if (act === undefined) {
				throw new Error(input.toString());
			}
			let [ actClassName, actRemainder ] = act;
			if ((actClassName.toString() !== expClassName.toString()) || (actRemainder.toString() !== expRemainder.toString())) {
				throw new Error("\ninput ["+inputStr+"]\nexp ["+expClassNameStr+"] ["+expRemainderStr+"]\nact ["+actClassName.toString()+"] ["+actRemainder.toString()+"]");
			}
		}
		let notFound = function(input: string) {
			let result = new SelectorSegment(input).extractClassName();
			if (result !== undefined) {
				throw new Error(input);
			}
		}
		found(`.foo`, `.foo`, `*`);
		found(`.foo:hover`, `.foo`, `*:hover`);
		found(`.foo-1\\.1turn:hover`, `.foo-1\\.1turn`, `*:hover`);
		found(`.foo.bar`, `.foo`, `.bar`);
		found(`div.foo`, `.foo`, `div`);
		found(`div.foo:hover`, `.foo`, `div:hover`);
		
		notFound(`div`);
		notFound(`:hover`);
		notFound(`*`);
		notFound(`>`);
		notFound(`+`);
		notFound(`~`);
		notFound(` `);
	});
});

