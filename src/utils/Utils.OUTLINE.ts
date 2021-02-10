import Utilities from "./Utilities";
import Value from "./Value";
import * as types from "./Types";
import Block from "../css/Block";
import Declaration from "../css/Declaration";

export default function registerOutlineUtils(utils: Utilities) {
	utils.fn1("outline-c", new types.TypeColor(),
		function(arg: Value): Block {
			return new Block([
				new Declaration("outline-color", arg.toString()),
			]);
		},
	)
	utils.fn1("outline-offset", new types.TypeLength(1, "px"),
		function(arg: Value): Block {
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
		function(arg: Value): Block {
			return new Block([
				new Declaration("outline-style", arg.toString()),
			]);
		},
	)
	utils.fn1("outline", new types.TypeLength(1, "px"),
		function(arg: Value): Block {
			return new Block([
				new Declaration("outline-width", arg.toString()),
			]);
		},
	)

	utils.fn3("outline",
		new types.TypeLength(1, "px"),
		outlineStyle,
		new types.TypeColor(),
		function(width: Value, style: Value, color: Value): Block {
			return new Block([
				new Declaration("outline", width.toString() + " " + style.toString() + " " + color.toString()),
			]);
		},
	)
	utils.fn2("outline",
		new types.TypeLength(1, "px"),
		new types.TypeColor(),
		function(width: Value, color: Value): Block {
			return new Block([
				new Declaration("outline", width.toString() + " solid " + color.toString()),
			]);
		},
	)
}

