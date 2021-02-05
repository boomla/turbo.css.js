import * as sp from './Spec';
import { assert } from 'chai';

describe('Spec.parse()', function() {
	it('should fail when the header is missing', function() {
		try {
			sp.Spec.parse("")
			throw new Error("expected an error");
		}
		catch (e) {
			let expErr = "Error: invalid Turbo spec, missing header [# TURBO-SPEC-FORMAT-V1\n]";
			let actErr = e.toString();
			if (expErr !== actErr) {
				throw new Error("\nexp ["+expErr+"]\nact ["+actErr+"]");
			}
		}
	});
	it('should successfully parse all data', function() {
		let act = sp.Spec.parse(TEST_SPEC_BODY);

		let exp = new sp.Spec({
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
			exampleLibraries: [
				new sp.ExampleLibrary({
					description: "Example library",
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
				}),
				new sp.ExampleLibrary({
					description: "Example library",
					libraries: [],
					globalCode: "Global library code",
					code: "Code",
					exp: "Exp",
				}),
			],
			exampleLibrariesThatFail: [
				new sp.ExampleLibraryThatFails({
					description: "Example library",
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
					expErr: "Exp error",
				}),
				new sp.ExampleLibraryThatFails({
					description: "Example library",
					libraries: [],
					globalCode: "Global library code",
					code: "Code",
					expErr: "Exp error",
				}),
			],
		});

		assert.deepEqual(exp, act);
	});
});


const TEST_SPEC_BODY =
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


# EXAMPLE LIBRARY
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Example library
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


# EXAMPLE LIBRARY
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Example library
==================================================
Global library code
--------------------------------------------------
Code
--------------------------------------------------
Exp
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE LIBRARY THAT FAILS
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Example library
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
Exp error
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


# EXAMPLE LIBRARY THAT FAILS
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
Example library
==================================================
Global library code
--------------------------------------------------
Code
--------------------------------------------------
Exp error
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


`

