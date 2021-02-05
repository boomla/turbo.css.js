import * as sp from './Spec';

describe('Spec', function() {
	it('it should construct a Spec instance from partial object literal', function() {
		var spec = new sp.Spec({
			title: "Title",
		});
		if (spec.short !== '') {
			throw new Error(typeof spec.short);
		}
	});
});


describe('Spec.toString()', function() {
	it('should serialize', function() {
		var spec = new sp.Spec({
			title: "Title",
			short: "Short",
			long: "Long\nmultiline",
			syntaxes: [
				new sp.Syntax({
					class_: "m-{value}",
					properties: "margin: {value};",
				}),
				new sp.Syntax({
					class_: "mx-{value}",
					properties: "margin-left: {value};\nmargin-right: {value};",
				}),
			],
			arguments: [
				new sp.Argument({
					name: "dense",
					description: "This argument accepts a single type.",
					types: [
						new sp.ArgumentType({
							type: "<string>",
							description: "",
						}),
					],
				}),
				new sp.Argument({
					name: "value",
					description: "Argument specific description.\nmultiline",
					types: [
						new sp.ArgumentType({
							type: "<number>",
							description: "Type specific description\nmultiline",
						}),
						new sp.ArgumentType({
							type: "<length>",
							description: "",
						}),
					],
				}),
			],
			examples: [
				new sp.Example({
					description: "Passing argument of type number.",
					code: "m-1",
					exp: ""+
						".m-1 {\n"+
						"\tmargin: 1px;\n"+
						"}",
				}),
				new sp.Example({
					description: "Passing argument of type number with fraction.",
					code: "m-1.5",
					exp: ""+
						".m-1\\.5 {\n"+
						"\tmargin: 1.5px;\n"+
						"}",
				}),
			],
			examplesThatFail: [
				new sp.ExampleThatFails({
					description: "Invalid number of arguments",
					code: "m-1-2",
					expErr: "Error: utility function [m-] expects 1 argument, found 2 in [m-1-2]",
				}),
				new sp.ExampleThatFails({
					description: "Invalid argument of type <length>",
					code: "z-1px",
					expErr: "Error: utility function [z-] expects argument [1] to be of type [<integer>], found [<length>] in [z-1px]",
				}),
			],
		});

		var act = spec.toString();
		var exp = TEST_SPEC;
		if (act !== exp) {
			throw new Error("\nexp ["+exp+"]\n\nact ["+act+"]");
		}
	});
});

const TEST_SPEC =
`# TURBO-SPEC-FORMAT-V1

# TITLE
Title

# SHORT
Short

# LONG
Long
multiline

# SYNTAX
m-{value}
margin: {value};

# SYNTAX
mx-{value}
margin-left: {value};
margin-right: {value};

# ARGUMENT
dense <string>
This argument accepts a single type.

# ARGUMENT NAME
value
Argument specific description.
multiline

# ARGUMENT TYPE
<number>
Type specific description
multiline

# ARGUMENT TYPE
<length>

# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Passing argument of type number.
==================================================
m-1
--------------------------------------------------
.m-1 {
	margin: 1px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Passing argument of type number with fraction.
==================================================
m-1.5
--------------------------------------------------
.m-1\\.5 {
	margin: 1.5px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE THAT FAILS
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Invalid number of arguments
==================================================
m-1-2
--------------------------------------------------
Error: utility function [m-] expects 1 argument, found 2 in [m-1-2]
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE THAT FAILS
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Invalid argument of type <length>
==================================================
z-1px
--------------------------------------------------
Error: utility function [z-] expects argument [1] to be of type [<integer>], found [<length>] in [z-1px]
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


`


describe('Example.toString()', function() {
	it('should serialize', function() {
		var example = new sp.Example({
			description: "Passing argument of type number.",
			code: "m-1",
			exp: ""+
				".m-1 {\n"+
				"\tmargin: 1px;\n"+
				"}",
		});

		var act = example.toString();
		var exp = TEST_EXAMPLE;
		if (act !== exp) {
			throw new Error("\nexp ["+exp+"]\n\nact ["+act+"]");
		}
	});
});

const TEST_EXAMPLE =
`# EXAMPLE
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Passing argument of type number.
==================================================
m-1
--------------------------------------------------
.m-1 {
	margin: 1px;
}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
`


describe('ExampleLibrary.toString()', function() {
	it('should serialize', function() {
		var exampleLibrary = new sp.ExampleLibrary({
			description: "Description",
			libraries: [
				new sp.Library({
					filename: "Filename.1",
					source: "Source 1",
				}),
				new sp.Library({
					filename: "Filename.2",
					source: "Source 2",
				}),
			],
			globalCode: "GlobalCode",
			code: "Code",
			exp: "Exp",
		});

		var act = exampleLibrary.toString();
		var exp = TEST_EXAMPLE_LIBRARY;
		if (act !== exp) {
			throw new Error("\nexp ["+exp+"]\n\nact ["+act+"]");
		}
	});
});

const TEST_EXAMPLE_LIBRARY =
`# EXAMPLE LIBRARY
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Description
==================================================
[Filename.1]
Source 1
--------------------------------------------------
[Filename.2]
Source 2
--------------------------------------------------
GlobalCode
--------------------------------------------------
Code
--------------------------------------------------
Exp
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
`


describe('ExampleLibraryThatFails.toString()', function() {
	it('should serialize', function() {
		var example = new sp.ExampleLibraryThatFails({
			description: "Description",
			libraries: [
				{
					filename: "Filename.1",
					source: "Source 1",
				} as sp.Library,
				{
					filename: "Filename.2",
					source: "Source 2",
				} as sp.Library,
			],
			globalCode: "GlobalCode",
			code: "Code",
			expErr: "ExpErr",
		});

		var act = example.toString();
		var exp = TEST_EXAMPLE_LIBRARY_THAT_FAILS;
		if (act !== exp) {
			throw new Error("\nexp ["+exp+"]\n\nact ["+act+"]");
		}
	});
});

const TEST_EXAMPLE_LIBRARY_THAT_FAILS =
`# EXAMPLE LIBRARY THAT FAILS
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Description
==================================================
[Filename.1]
Source 1
--------------------------------------------------
[Filename.2]
Source 2
--------------------------------------------------
GlobalCode
--------------------------------------------------
Code
--------------------------------------------------
ExpErr
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
`