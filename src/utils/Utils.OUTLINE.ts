import type Utilities from "./Utilities";
import * as types from "./Types";
import Block from "../css/Block";
import Declaration from "../css/Declaration";

export default function registerOutlineUtils(utils: Utilities) {
	utils.fn1("outline-c", new types.TypeColor(),
		function(arg: string): Block {
			return new Block([
				new Declaration("outline-color", arg.toString()),
			]);
		},
	)
	utils.fn1("outline-offset", new types.TypeLength(1, "px"),
		function(arg: string): Block {
			return new Block([
				new Declaration("outline-offset", arg.toString()),
			]);
		},
	)

	let outlineStyle = new types.TypeKeywordValueMap({
		"auto": "auto",
		"solid": "solid",
		"dashed": "dashed",
		"dotted": "dotted",
		"double": "double",
		"none": "none",
	})
	utils.fn1("outline",
		outlineStyle,
		function(arg: string): Block {
			return new Block([
				new Declaration("outline-style", arg.toString()),
			]);
		},
	)
	utils.fn1("outline", new types.TypeLength(1, "px"),
		function(arg: string): Block {
			return new Block([
				new Declaration("outline-width", arg.toString()),
			]);
		},
	)

	utils.fn3("outline",
		new types.TypeLength(1, "px"),
		outlineStyle,
		new types.TypeColor(),
		function(width: string, style: string, color: string): Block {
			return new Block([
				new Declaration("outline", width.toString() + " " + style.toString() + " " + color.toString()),
			]);
		},
	)
	utils.fn2("outline",
		new types.TypeLength(1, "px"),
		new types.TypeColor(),
		function(width: string, color: string): Block {
			return new Block([
				new Declaration("outline", width.toString() + " solid " + color.toString()),
			]);
		},
	)
}

