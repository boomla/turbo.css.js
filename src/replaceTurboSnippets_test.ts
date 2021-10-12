import { assert } from 'chai';
import * as glob from 'glob';
import * as fs from 'fs';
import { Spec } from "./spec/Spec";
import replaceTurboSnippets from "./replaceTurboSnippets";

describe('replaceTurboSnippets', function() {
	it('all spec test cases should be matched when present in source code', function() {
		let paths = [] as Array<string>;
		let add = function(pathPattern: string) {
			let morePaths = glob.sync(pathPattern);
			paths.push(...morePaths);
		}
		add("./src/spec/v1/utilities/*/*.txt");
		add("./src/spec/v1/selectors/*/*.txt");
		add("./src/spec/v1/lang/*.txt");

		let exp = `<div class="">hello</div>`;

		for (let path of paths) {
			let specBodyBuf = fs.readFileSync(path);
			let specBody = specBodyBuf.toString();

			let spec = Spec.parse(specBody);

			for (let example of spec.examples) {
				let act = replaceTurboSnippets(`<div class="`+example.code+`">hello</div>`, function(_match: string): string {
					return "";
				})
				assert.equal(act, exp);
			}
		}
	});
});

