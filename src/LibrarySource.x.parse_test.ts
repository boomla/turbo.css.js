import LibrarySource from './LibrarySource';
import { UtilityDefinition } from './LibrarySource';
import Declaration from "./css/Declaration";
import Block from "./css/Block";
import { assert } from 'chai';

describe('LibrarySource.parse()', function() {
	it('should parse simple library code snippet', function() {
		let code = `
			t1
			.btn {
				h-32
				px-16
				font-16
			}
		`;

		let act = LibrarySource.parse("path", code);

		let exp = new LibrarySource({
			path: "path",
			utils: [
				new UtilityDefinition({
					name: "btn",
					utils: [
						"h-32",
						"px-16",
						"font-16",
					],
				}),
			],
		});

		assert.deepEqual(act, exp);
	});
	it('should parse single-line library code snippet', function() {
		let code = `t1 .btn { h-32 px-16 font-16 }`;

		let act = LibrarySource.parse("path", code);

		let exp = new LibrarySource({
			path: "path",
			utils: [
				new UtilityDefinition({
					name: "btn",
					utils: [
						"h-32",
						"px-16",
						"font-16",
					],
				}),
			],
		});

		assert.deepEqual(act, exp);
	});
	it('should ignore comments', function() {
		let code = `// Comment
			t1
			.btn { // Comment
				// Comment
				h-32 // Comment
				px-16
				font-16
			}
		`;

		let act = LibrarySource.parse("path", code);

		let exp = new LibrarySource({
			path: "path",
			utils: [
				new UtilityDefinition({
					name: "btn",
					utils: [
						"h-32",
						"px-16",
						"font-16",
					],
				}),
			],
		});

		assert.deepEqual(act, exp);
	});
	it('should parse private utilities', function() {
		let code = `
			t1
			._btn {
				h-32
				px-16
				font-16
			}
		`;

		let act = LibrarySource.parse("path", code);

		let exp = new LibrarySource({
			path: "path",
			utils: [
				new UtilityDefinition({
					name: "_btn",
					utils: [
						"h-32",
						"px-16",
						"font-16",
					],
				}),
			],
		});

		assert.deepEqual(act, exp);
	});
	it('should parse utililty with dash', function() {
		let code = `
			t1
			.font-16 {
				font-32
			}
		`;

		let act = LibrarySource.parse("path", code);

		let exp = new LibrarySource({
			path: "path",
			utils: [
				new UtilityDefinition({
					name: "font-16",
					utils: [
						"font-32",
					],
				}),
			],
		});

		assert.deepEqual(act, exp);
	});
	it('should parse multiple utililties', function() {
		let code = `
			t1
			.x1 {
				w-1
			}
			.x2 {
				w-2
			}
		`;

		let act = LibrarySource.parse("path", code);

		let exp = new LibrarySource({
			path: "path",
			utils: [
				new UtilityDefinition({
					name: "x1",
					utils: [
						"w-1",
					],
				}),
				new UtilityDefinition({
					name: "x2",
					utils: [
						"w-2",
					],
				}),
			],
		});

		assert.deepEqual(act, exp);
	});
	it('should parse custom CSS', function() {
		let code = `
			t1
			@css .bg-img-checkbox {
				background-image: url("/foo.png");
			}
		`;

		let act = LibrarySource.parse("path", code);

		let exp = new LibrarySource({
			path: "path",
			utils: [
				new UtilityDefinition({
					name: "bg-img-checkbox",
					utils: undefined,
					block: new Block([
						new Declaration("background-image", `url("/foo.png")`),
					]),
				}),
			],
		});

		assert.deepEqual(act, exp);
	});
});

