import { eatCssBlock } from './LibrarySource';
import Block from './css/Block';
import Declaration from './css/Declaration';
import { assert } from 'chai';

describe('eatCssBlock()', function() {
	it('should parse background-image url()', function() {
		let code = `
			@css .bg-img-checkbox {
				background-image: url("/foo.png");
			}
			remainder
		`;

		let act = eatCssBlock("path", code);

		let exp: [ name: string, block: Block, remainder: string ] = [
			"bg-img-checkbox",
			new Block([
				new Declaration("background-image", `url("/foo.png")`),
			]),
			"remainder",
		];

		assert.deepEqual(act, exp);
	});
	it('should parse background-image data url', function() {
		let code = `
			@css .bg-img-checkbox {
				background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 14 14'%3E%3Cpath d='M4 7l2 2m0 0l4-4' fill='none' stroke='%23fff' stroke-linecap='round' stroke-width='2'/%3E%3C/svg%3E");
			}
			remainder
		`;

		let act = eatCssBlock("path", code);

		let exp: [ name: string, block: Block, remainder: string ] = [
			"bg-img-checkbox",
			new Block([
				new Declaration("background-image", `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 14 14'%3E%3Cpath d='M4 7l2 2m0 0l4-4' fill='none' stroke='%23fff' stroke-linecap='round' stroke-width='2'/%3E%3C/svg%3E")`),
			]),
			"remainder",
		];

		assert.deepEqual(act, exp);
	});
});

