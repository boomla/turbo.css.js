import * as sp from './Spec';
import * as glob from 'glob';
import * as fs from 'fs';

describe('parse all spec documents', function() {
	it('should successfully parse all specification docs', function() {
		let paths = glob.sync("./src/spec/v1/**/*.bat");

		if (paths.length < 100 || (300 < paths.length)) {
			throw new Error("too few specification documents found ["+paths.length+"]");
		}

		for (let path of paths) {
			let specBodyBuf = fs.readFileSync(path);
			let specBody = specBodyBuf.toString();

			sp.Spec.parse(specBody);
		}

		console.log("["+paths.length+"] specifications tested\n");
	});
});

