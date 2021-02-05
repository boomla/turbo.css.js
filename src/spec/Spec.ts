
import { CONST } from './CONST';
import eatNonEmptyLine from './eatNonEmptyLine';
import splitExampleSection from './splitExampleSection';

export class Spec {
	title: string = "";
	short: string = "";
	long: string = "";
	syntaxes: Array<Syntax> = [];
	arguments: Array<Argument> = [];
	examples: Array<Example> = [];
	examplesThatFail: Array<ExampleThatFails> = [];
	exampleLibraries: Array<ExampleLibrary> = [];
	exampleLibrariesThatFail: Array<ExampleLibraryThatFails> = [];

	constructor(source: Partial<Spec>) {
		Object.assign(this, source);
	}

	static parse(specBody: string): Spec {
		let s = specBody.replace(/\r/g, '');

		// HEADER
		if ( ! s.startsWith(CONST.SPEC_HEADER)) {
			throw new Error("invalid Turbo spec, missing header ["+CONST.SPEC_HEADER+"]");
		}
		s = s.substring(CONST.SPEC_HEADER.length);

		let spec = new Spec({});

		let sections = s.split("\n# ");
		for (let section of sections) {
			section = section.trim();
			if (section === "") {
				continue;
			}

			let [ line, sectionBody,  ] = eatNonEmptyLine(section);
			let sectionType = "# " + line + "\n";
			switch (sectionType) {
				case CONST.SECTION_TITLE: {
					spec.title = sectionBody;
					break;
				}
				case CONST.SECTION_SHORT: {
					spec.short = sectionBody;
					break;
				}
				case CONST.SECTION_LONG: {
					spec.long = sectionBody;
					break;
				}
				case CONST.SECTION_SYNTAX: {
					let pos = sectionBody.indexOf("\n");
					if (pos === -1) {
						throw new Error("invalid Turbo spec syntax section ["+sectionBody+"]");
					}

					spec.syntaxes.push(new Syntax({
						class_: sectionBody.substring(0, pos),
						properties: sectionBody.substring(pos+1),
					}));
					break;
				}
				case CONST.SECTION_ARGUMENT: {
					// Separate name+type and description
					let [ nameType, description,  ] = eatNonEmptyLine(sectionBody);

					// Separate name and type
					let pos = nameType.indexOf(" ");
					if (pos < 0) {
						throw new Error("invalid Turbo spec syntax section ["+CONST.SECTION_ARGUMENT+"], missing space between argument name and type");
					}
					let name = nameType.substring(0, pos);
					let typ = nameType.substring(pos+1);
					
					spec.arguments.push(new Argument({
						name: name,
						description: description,
						types: [
							new ArgumentType({
								type: typ,
								description: "",
							}),
						],
					}));
					break;
				}
				case CONST.SECTION_ARGUMENT_NAME: {
					// Separate name and description
					let [ name, description,  ] = eatNonEmptyLine(sectionBody);

					spec.arguments.push(new Argument({
						name: name,
						description: description,
						types: [],
					}));
					break;
				}
				case CONST.SECTION_ARGUMENT_TYPE: {
					// Separate type and description
					let [ typ, description,  ] = eatNonEmptyLine(sectionBody);

					let index = spec.arguments.length - 1;
					if (index < 0) {
						throw new Error("invalid Turbo spec syntax, section ["+CONST.SECTION_ARGUMENT_TYPE+"] must come after a section ["+CONST.SECTION_ARGUMENT_NAME+"]");
					}

					spec.arguments[index].types.push(new ArgumentType({
						type: typ,
						description: description,
					}));
					break;
				}
				case CONST.SECTION_EXAMPLE: {
					let parts = splitExampleSection(sectionBody);
					let expLen = 3;
					if (parts.length !== expLen) {
						throw new Error("invalid Turbo spec syntax, section ["+sectionType+"] contains unexpected number of sub-sections ["+parts.length+"], expected ["+expLen+"]");
					}
					spec.examples.push(new Example({
						description: parts[0],
						code: parts[1],
						exp: parts[2],
					}));
					break;
				}
				case CONST.SECTION_EXAMPLE_THAT_FAILS: {
					let parts = splitExampleSection(sectionBody);
					let expLen = 3;
					if (parts.length !== expLen) {
						throw new Error("invalid Turbo spec syntax, section ["+sectionType+"] contains unexpected number of sub-sections ["+parts.length+"], expected ["+expLen+"]");
					}
					spec.examplesThatFail.push(new ExampleThatFails({
						description: parts[0],
						code: parts[1],
						expErr: parts[2],
					}));
					break;
				}
				case CONST.SECTION_EXAMPLE_LIBRARY: {
					let parts = splitExampleSection(sectionBody);
					let expMinLen = 4;
					if (parts.length < expMinLen) {
						throw new Error("invalid Turbo spec syntax, section ["+sectionType+"] contains unexpected number of sub-sections ["+parts.length+"], expected minimum ["+expMinLen+"]");
					}

					let end = parts.length;

					let libSubSegments = parts.slice(1, -3);
					let libraries = [] as Array<Library>;
					for (let libCode of libSubSegments) {
						libraries.push(Library.parse(libCode));
					}

					spec.exampleLibraries.push(new ExampleLibrary({
						description: parts[0],
						libraries: libraries,
						globalCode: parts[end-3],
						code: parts[end-2],
						exp: parts[end-1],
					}));
					break;
				}
				case CONST.SECTION_EXAMPLE_LIBRARY_THAT_FAILS: {
					let parts = splitExampleSection(sectionBody);
					let expMinLen = 4;
					if (parts.length < expMinLen) {
						throw new Error("invalid Turbo spec syntax, section ["+sectionType+"] contains unexpected number of sub-sections ["+parts.length+"], expected minimum ["+expMinLen+"]");
					}

					let end = parts.length;

					let libSubSegments = parts.slice(1, -3);
					let libraries = [] as Array<Library>;
					for (let libCode of libSubSegments) {
						libraries.push(Library.parse(libCode));
					}

					spec.exampleLibrariesThatFail.push(new ExampleLibraryThatFails({
						description: parts[0],
						libraries: libraries,
						globalCode: parts[end-3],
						code: parts[end-2],
						expErr: parts[end-1],
					}));
					break;
				}
				default: {
					throw new Error("unexpected section type ["+sectionType+"]");
				}
			}
		}

		return spec;
	}

	toString() {
		let s = "";

		s += CONST.SPEC_HEADER + "\n";

		s += CONST.SECTION_TITLE;
		s += this.title + "\n\n";

		s += CONST.SECTION_SHORT;
		s += this.short + "\n\n";

		s += CONST.SECTION_LONG;
		s += this.long + "\n\n";

		for (let syntax of this.syntaxes) {
			s += CONST.SECTION_SYNTAX;
			s += syntax.class_ + "\n";
			s += syntax.properties + "\n\n";
		}

		for (let arg of this.arguments) {
			if (arg.types.length === 1) {
				// Use dense format when there is only 1 argument
				s += CONST.SECTION_ARGUMENT;
				s += arg.name + " " + arg.types[0].type + "\n";
				if (arg.description !== "") {
					s += arg.description + "\n";
				}
				s += "\n";
			}
			else {
				// Use long format when there are multiple arguments
				s += CONST.SECTION_ARGUMENT_NAME;
				s += arg.name + "\n";
				if (arg.description !== "") {
					s += arg.description + "\n";
				}
				s += "\n";

				for (let typ of arg.types) {
					s += CONST.SECTION_ARGUMENT_TYPE;
					s += typ.type + "\n";
					if (typ.description !== "") {
						s += typ.description + "\n";
					}
					s += "\n";
				}
			}
		}

		for (let example of this.examples) {
			s += example.toString() + "\n\n";
		}
		for (let exampleThatFails of this.examplesThatFail) {
			s += exampleThatFails.toString() + "\n\n";
		}
		for (let exampleLib of this.exampleLibraries) {
			s += exampleLib.toString() + "\n\n";
		}
		for (let exampleLibThatFails of this.exampleLibrariesThatFail) {
			s += exampleLibThatFails.toString() + "\n\n";
		}

		return s;
	}
}

export class Syntax {
	class_: string = "";
	properties: string = "";

	constructor(source: Partial<Syntax>) {
		Object.assign(this, source);
	}
}

export class Argument {
	name: string = "";
	description: string = "";
	types: Array<ArgumentType> = [];

	constructor(source: Partial<Argument>) {
		Object.assign(this, source);
	}
}

export class ArgumentType {
	type: string = "";
	description: string = "";

	constructor(source: Partial<ArgumentType>) {
		Object.assign(this, source);
	}
}

export class Example {
	description: string = "";
	code: string = "";
	exp: string = "";

	constructor(source: Partial<Example>) {
		Object.assign(this, source);
	}

	toString() {
		let s = "";
		s += CONST.SECTION_EXAMPLE;
		s += CONST.SEPARATOR_START;
		s += this.description + "\n";
		s += CONST.SEPARATOR_CODE;
		s += this.code + "\n";
		s += CONST.SEPARATOR;
		s += this.exp + "\n";
		s += CONST.SEPARATOR_END;
		return s;
	}
}

export class ExampleThatFails {
	description: string = "";
	code: string = "";
	expErr: string = "";

	constructor(source: Partial<ExampleThatFails>) {
		Object.assign(this, source);
	}

	toString() {
		let s = "";
		s += CONST.SECTION_EXAMPLE_THAT_FAILS;
		s += CONST.SEPARATOR_START;
		s += this.description + "\n";
		s += CONST.SEPARATOR_CODE;
		s += this.code + "\n";
		s += CONST.SEPARATOR;
		s += this.expErr + "\n";
		s += CONST.SEPARATOR_END;
		return s;
	}
}

export class Library {
	filename: string = "";
	source: string = "";

	constructor(source: Partial<Library>) {
		Object.assign(this, source);
	}

	static parse(libCode: string): Library {
		if ( ! libCode.startsWith("[")) {
			return new Library({
				filename: "",
				source: libCode,
			});
		}
		let pos = libCode.indexOf("]\n");
		if (pos < 0) {
			return new Library({
				filename: "",
				source: libCode,
			});
		}

		return new Library({
			filename: libCode.substring(1, pos),
			source: libCode.substring(pos+2),
		});
	}
}

export class ExampleLibrary {
	description: string = "";
	libraries: Array<Library> = [];
	globalCode: string = "";
	code: string = "";
	exp: string = "";

	constructor(source: Partial<ExampleLibrary>) {
		Object.assign(this, source);
	}

	toString() {
		let s = "";
		s += CONST.SECTION_EXAMPLE_LIBRARY;
		s += CONST.SEPARATOR_START;
		s += this.description + "\n"
		s += CONST.SEPARATOR_CODE;

		for (let lib of this.libraries) {
			s += "[" + lib.filename + "]\n"
			s += lib.source + "\n"
			s += CONST.SEPARATOR;
		}

		if (this.globalCode !== "") {
			s += this.globalCode + "\n"
			s += CONST.SEPARATOR;
		}
		s += this.code + "\n"
		s += CONST.SEPARATOR;
		s += this.exp + "\n"
		s += CONST.SEPARATOR_END;
		return s;
	}
}

export class ExampleLibraryThatFails {
	description: string = "";
	libraries: Array<Library> = [];
	globalCode: string = "";
	code: string = "";
	expErr: string = "";

	constructor(source: Partial<ExampleLibraryThatFails>) {
		Object.assign(this, source);
	}

	toString() {
		let s = "";
		s += CONST.SECTION_EXAMPLE_LIBRARY_THAT_FAILS;
		s += CONST.SEPARATOR_START;
		s += this.description + "\n"
		s += CONST.SEPARATOR_CODE;
		for (let lib of this.libraries) {
			s += "[" + lib.filename + "]\n"
			s += lib.source + "\n"
			s += CONST.SEPARATOR;
		}
		if (this.globalCode !== "") {
			s += this.globalCode + "\n"
			s += CONST.SEPARATOR;
		}
		s += this.code + "\n"
		s += CONST.SEPARATOR;
		s += this.expErr + "\n"
		s += CONST.SEPARATOR_END;
		return s;
	}
}

