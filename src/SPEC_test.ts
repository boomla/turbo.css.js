import * as glob from 'glob';
import * as fs from 'fs';
import StyleSheet from "./css/StyleSheet";
import { Spec } from "./spec/Spec";
import ConfigStatic from "./utils/ConfigStatic";
import { NoCompatConfig } from "./CONFIG";
import Compiler from "./Compiler";
import T1 from "./T1";
import { assert } from 'chai';

describe('SPEC', function() {
	it('should parse and execute the entire spec suite', function() {
		let paths = [] as Array<string>;
		let add = function(pathPattern: string) {
			let morePaths = glob.sync(pathPattern);
			paths.push(...morePaths);
		}
		add("./src/spec/v1/utilities/*/*.txt");
		add("./src/spec/v1/selectors/*/*.txt");
		add("./src/spec/v1/lang/*.txt");

		let namespace = "";
		let indentWith = "\t";
		let newLine = "\n";
		let important = false;

		let passCount = 0;
		let failCount = 0;

		let errors = [] as Array<string>;

		for (let path of paths) {
			console.log(" > ["+path+"]");

			let specBodyBuf = fs.readFileSync(path);
			let specBody = specBodyBuf.toString();

			let spec = Spec.parse(specBody);

			for (let example of spec.examples) {
				let sheet: StyleSheet;
				try {
					let compiler = Compiler.newNoCompatCompiler();
					[ , sheet] = compiler.compile(example.code);
				}
				catch(e) {
					errors.push(example.description+"\ncode ["+example.code+"]\nerror: "+e.toString());
					failCount++;
					continue;
				}

				let act: string;
				try {
					act = sheet.sort().format(T1, namespace, indentWith, newLine, important);
				}
				catch(e) {
					errors.push(example.description+"\ncode ["+example.code+"]\nerror: "+e.toString());
					failCount++;
					continue;
				}
				let exp = example.exp;
				if (exp !== "") {
					exp += "\n";
				}
				else {
					// Do not add new-line suffix when no output is expected (think: mode-* utility)
				}
				if (act !== exp) {
					errors.push(example.description+"\ncode ["+example.code+"]\n\nexp:\n["+exp+"]\n\nact:\n["+act+"]");
					failCount++;
					continue;
				}

				passCount++;
			}


			for (let example of spec.examplesThatFail) {
				try {
					let compiler = Compiler.newNoCompatCompiler();
					compiler.compile(example.code)

					// Should not reach this point
					errors.push(example.description+"\ncode ["+example.code+"]\nexpected an error: "+example.expErr);
					failCount++;
					continue;
				}
				catch(e) {
					let expErr = example.expErr;
					let actErr = e.toString();
					if (expErr !== actErr) {
						errors.push(example.description+"\ncode ["+example.code+"]\nexpErr: ["+expErr+"]\nactErr: ["+actErr+"]");
						failCount++;
						continue;
					}

					passCount++;
				}
			}


			for (let exampleLib of spec.exampleLibraries) {
				let compiler = new Compiler(new ConfigStatic({
					colorPoints: NoCompatConfig.colorPoints,
					colorScales: NoCompatConfig.colorScales,
					shadows: NoCompatConfig.shadows,
					commonBrowsers: NoCompatConfig.commonBrowsers,
					resolveLibraryFn: function(_contextPath: string, libName: string): string | undefined {
						let libPath = "/" + libName + ".turbo";

						for (let lib of exampleLib.libraries) {
							if (lib.filename === libPath) {
								return libPath;
							}
						}

						return undefined;
					},
					loadLibraryFn: function(libPath: string): string {
						for (let lib of exampleLib.libraries) {
							if (lib.filename === libPath) {
								return lib.source;
							}
						}

						throw new Error("unexpected libPath #1 ["+libPath+"]");
					},
				}));

				if (exampleLib.globalCode.trim() !== "") {
					try {
						compiler = compiler.eval("<anonymous>", exampleLib.globalCode);
					}
					catch(e) {
						errors.push(exampleLib.description+"\ncode ["+exampleLib.code+"]\nerror: "+e.toString());
						failCount++;
						continue;
					}
				}

				let sheet: StyleSheet;
				try {
					[ , sheet] = compiler.compile(exampleLib.code);
				}
				catch(e) {
					errors.push(exampleLib.description+"\ncode ["+exampleLib.code+"]\nerror: "+e.toString());
					failCount++;
					continue;
				}

				let act: string;
				try {
					act = sheet.sort().format(T1, namespace, indentWith, newLine, important);
				}
				catch(e) {
					errors.push(exampleLib.description+"\ncode ["+exampleLib.code+"]\nerror: "+e.toString());
					failCount++;
					continue;
				}
				let exp = exampleLib.exp;
				if (exp !== "") {
					exp += "\n";
				}
				else {
					// Do not add new-line suffix when no output is expected (think: mode-* utility)
				}
				
				if (act !== exp) {
					errors.push(exampleLib.description+"\ncode ["+exampleLib.code+"]\n\nexp:\n["+exp+"]\n\nact:\n["+act+"]");
					failCount++;
					continue;
				}

				passCount++
			}


			for (let exampleLibThatFails of spec.exampleLibrariesThatFail) {
				try {
					let compiler = new Compiler(new ConfigStatic({
						colorPoints: NoCompatConfig.colorPoints,
						colorScales: NoCompatConfig.colorScales,
						shadows: NoCompatConfig.shadows,
						commonBrowsers: NoCompatConfig.commonBrowsers,
						resolveLibraryFn: function(_contextPath: string, libName: string): string | undefined {
							let libPath = "/" + libName + ".turbo";

							for (let lib of exampleLibThatFails.libraries) {
								if (lib.filename === libPath) {
									return libPath;
								}
							}

							return undefined;
						},
						loadLibraryFn: function(libPath: string): string {
							for (let lib of exampleLibThatFails.libraries) {
								if (lib.filename === libPath) {
									return lib.source;
								}
							}

							throw new Error("unexpected libPath #2 ["+libPath+"]");
						},
					}));

					if (exampleLibThatFails.globalCode.trim() !== "") {
						compiler = compiler.eval("<anonymous>", exampleLibThatFails.globalCode);
					}

					compiler.compile(exampleLibThatFails.code);

					// Should not reach this
					errors.push(exampleLibThatFails.description+"\ncode ["+exampleLibThatFails.code+"]\nexpected an error: "+exampleLibThatFails.expErr);
					failCount++;
					continue;
				}
				catch(e) {
					let expErr = exampleLibThatFails.expErr;
					let actErr = e.toString();
					if (expErr !== actErr) {
						errors.push(exampleLibThatFails.description+"\ncode ["+exampleLibThatFails.code+"]\nexpErr: ["+expErr+"]\nactErr: ["+actErr+"]");
						failCount++;
						continue;
					}

					passCount++
				}
			}
		}

		if (0 < failCount) {
			for (let err of errors) {
				console.log(err);
			}

			assert.fail("["+paths.length+"] specifications tested - ["+passCount+" / "+(passCount + failCount)+"] tests passed, ["+failCount+"] tests failed\n");
		} else {
			console.log("["+paths.length+"] specifications tested - ["+passCount+"] tests passed\n");
		}
	});
});

