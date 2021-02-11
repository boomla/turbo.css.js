import Block from "./css/Block";
import Declaration from "./css/Declaration";

let regexpComment1 = /^\/\/[^\n]+/g;
let regexpComment2 = /[ \n\t\r]\/\/[^\n]+/g;
let regexpTurboV1 = /^t1[\n\t\r\s]/;

export default class LibrarySource {
	path: string = "";
	utils: Array<UtilityDefinition> = [];

	constructor(source: Partial<LibrarySource>) {
		Object.assign(this, source);
	}

	static parse(path: string, code: string): LibrarySource {
		let utilities = [] as Array<UtilityDefinition>;

		code = code.replace(regexpComment1, "");
		code = code.replace(regexpComment2, "");
		code = code.trim();

		let match = code.match(regexpTurboV1);
		if (match) {
			code = code.substring(3);
		}
		else {
			let codePart = code;
			if (100 < codePart.length) {
				codePart = codePart.substring(0, 100) + "...";
			}
			throw new Error("missing Turbo version identifier [t1] in ["+codePart+"]");
		}


		let name: string;
		let block: Block;
		let remainder = code;
		let utilDefined: { [key: string]: null } = {};
		let i = 0;
		for (i=0; i<10000; i++) {
			remainder = remainder.trim();
			if (remainder.length === 0) {
				break;
			}

			// Custom CSS declaration?
			let custom = eatCssBlock(path, remainder)
			if (custom !== undefined) {
				[ name, block, remainder ] = custom;
				utilDefined[name] = null;
				utilities.push(new UtilityDefinition({
					name: name,
					utils: undefined,
					block: block,
				}));
				continue;
			}

			let utils: Array<string>;
			[ name, utils, remainder ] = eatClass(path, remainder);

			let defined = utilDefined[name];
			if (defined !== undefined) {
				throw new Error("utility ["+name+"] is already defined in library ["+path+"]");
			}

			utilDefined[name] = null;
			utilities.push(new UtilityDefinition({
				name: name,
				utils: utils,
				block: undefined,
			}));
		}
		if (i === 10000) {
			throw new Error("internal error: infinite loop suspected #rCzpitqE5jcsqH40feO209blwX0Dmexj");
		}

		return new LibrarySource({
			path: path,
			utils: utilities,
		});
	}
}

export class UtilityDefinition {
	name: string = "";

	//
	// Either utils or block is set, not both.
	//

	// utils holds a list of Turbo class names
	utils: Array<string> | undefined = undefined;

	// block holds a raw CSS block. Can be used for defining a background-image, for example.
	block: Block | undefined = undefined;

	constructor(source: Partial<UtilityDefinition>) {
		Object.assign(this, source);
	}
}

export function eatCssBlock(path: string, s: string): [name: string, block: Block, remainder: string] | undefined {
	// @css
	s = s.trim();
	if ( ! s.startsWith("@css ")) {
		return undefined;
	}
	s = s.substring(("@css ").length);
	s = s.trim();

	// .className
	let name: string;
	[ name, s ] = eatClassName(path, s);
	s = s.trim();

	// opening curly brace "{"
	if ( ! s.startsWith("{")) {
		let remainder = s;
		if (50 < remainder.length) {
			remainder = remainder.substring(0, 50) + "...";
		}
		throw new Error("unable to parse library ["+path+"], can not find opening curly brace from ["+remainder+"]");
	}
	s = s.substring(1);
	s = s.trim();

	// closing curly brace "{"
	let pos = s.indexOf("}");
	if (pos < 0) {
		let remainder = s;
		if (50 < remainder.length) {
			remainder = remainder.substring(0, 50) + "...";
		}
		throw new Error("unable to parse library ["+path+"], can not find closing curly brace from ["+remainder+"]");
	}
	let declarations = s.substring(0, pos);
	let remainder = s.substring(pos+1);
	remainder = remainder.trim();

	// CSS declarations...
	let block = parseCssDeclarations(path, declarations);

	return [ name, block, remainder ];
}

function parseCssDeclarations(path: string, s: string): Block {
	let strDeclarations = s.split(";");
	let declarations = [] as Array<Declaration>;

	for (let strDeclaration of strDeclarations) {
		strDeclaration = strDeclaration.trim();
		if (strDeclaration === "") {
			continue;
		}

		let pos = strDeclaration.indexOf(":");
		if (pos === -1) {
			throw new Error("unable to parse library ["+path+"], invalid CSS declaration ["+strDeclaration+"]");
		}

		let prop = strDeclaration.substring(0, pos).trim();
		let value = strDeclaration.substring(pos+1).trim();
		declarations.push(new Declaration(prop, value));
	}

	return new Block(declarations);
}

let regexpClassName = /^\.[a-zA-Z_][a-zA-Z0-9_\-]*/;
let regexpCurlyBraceOpen = /^\s*\{/;
let regexpCurlyBraceClose = /^[^\}]*\}/;
let regexpUtils = /[ \t\n\r]+/;

function eatClass(path: string, s: string): [name: string, utils: Array<string>, remainder: string] {
	// Class name
	let name: string;
	[ name, s ] = eatClassName(path, s);

	// Curly brace open
	let match = s.match(regexpCurlyBraceOpen);
	if ( ! match) {
		let remainder = s
		if (50 < remainder.length) {
			remainder = remainder.substring(0, 50) + "...";
		}
		throw new Error("unable to parse library ["+path+"], can not find opening curly braces after class name definition from ["+remainder+"]");
	}
	let matchStr = match[0];
	s = s.substring(matchStr.length);

	// Curly brace close
	match = s.match(regexpCurlyBraceClose);
	if ( ! match) {
		let remainder = s
		if (50 < remainder.length) {
			remainder = remainder.substring(0, 50) + "...";
		}
		throw new Error("unable to parse library ["+path+"], can not find closing curly braces after class name definition from ["+remainder+"]");
	}
	matchStr = match[0];

	let codeBlock = matchStr.substring(0, matchStr.length-1);
	let remainder = s.substring(matchStr.length);

	let words = codeBlock.split(regexpUtils);
	let utils = [] as Array<string>;
	for (let word of words) {
		if (word === "") {
			continue;
		}
		utils.push(word);
	}

	return [ name, utils, remainder ];
}

function eatClassName(path: string, s: string): [name: string, remainder: string] {
	let match = s.match(regexpClassName);
	if ( ! match) {
		let remainder = s;
		if (50 < remainder.length) {
			remainder = remainder.substring(0, 50) + "...";
		}
		throw new Error("unable to parse library ["+path+"], can not find class name from ["+remainder+"]");
	}
	let matchStr = match[0];
	s = s.substring(matchStr.length);

	let name = matchStr.substring(1);

	return [ name, s ];
}

