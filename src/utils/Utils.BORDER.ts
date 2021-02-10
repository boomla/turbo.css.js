import Utilities from "./Utilities";
import Value from "./Value";
import * as types from "./Types";
import Block from "../css/Block";
import Declaration from "../css/Declaration";

export default function registerBorderUtils(utils: Utilities) {
	// Border width
	utils.fn1("b", new types.TypeLength(1, "px"),
		function(arg: Value): Block {
			return new Block([
				new Declaration("border-width", arg.toString()),
			]);
		},
	)
	utils.fn1("bx", new types.TypeLength(1, "px"),
		function(arg: Value): Block {
			return new Block([
				new Declaration("border-left-width", arg.toString()),
				new Declaration("border-right-width", arg.toString()),
			]);
		},
	)
	utils.fn1("by", new types.TypeLength(1, "px"),
		function(arg: Value): Block {
			return new Block([
				new Declaration("border-top-width", arg.toString()),
				new Declaration("border-bottom-width", arg.toString()),
			]);
		},
	)
	utils.fn1("bt", new types.TypeLength(1, "px"),
		function(arg: Value): Block {
			return new Block([
				new Declaration("border-top-width", arg.toString()),
			]);
		},
	)
	utils.fn1("br", new types.TypeLength(1, "px"),
		function(arg: Value): Block {
			return new Block([
				new Declaration("border-right-width", arg.toString()),
			]);
		},
	)
	utils.fn1("bb", new types.TypeLength(1, "px"),
		function(arg: Value): Block {
			return new Block([
				new Declaration("border-bottom-width", arg.toString()),
			]);
		},
	)
	utils.fn1("bl", new types.TypeLength(1, "px"),
		function(arg: Value): Block {
			return new Block([
				new Declaration("border-left-width", arg.toString()),
			]);
		},
	)



	// Border color
	utils.fn1("b-c", new types.TypeColor(),
		function(arg: Value): Block {
			return new Block([
				new Declaration("border-color", arg.toString()),
			]);
		},
	)
	utils.fn1("bx-c", new types.TypeColor(),
		function(arg: Value): Block {
			return new Block([
				new Declaration("border-left-color", arg.toString()),
				new Declaration("border-right-color", arg.toString()),
			]);
		},
	)
	utils.fn1("by-c", new types.TypeColor(),
		function(arg: Value): Block {
			return new Block([
				new Declaration("border-top-color", arg.toString()),
				new Declaration("border-bottom-color", arg.toString()),
			]);
		},
	)
	utils.fn1("bt-c", new types.TypeColor(),
		function(arg: Value): Block {
			return new Block([
				new Declaration("border-top-color", arg.toString()),
			]);
		},
	)
	utils.fn1("br-c", new types.TypeColor(),
		function(arg: Value): Block {
			return new Block([
				new Declaration("border-right-color", arg.toString()),
			]);
		},
	)
	utils.fn1("bb-c", new types.TypeColor(),
		function(arg: Value): Block {
			return new Block([
				new Declaration("border-bottom-color", arg.toString()),
			]);
		},
	)
	utils.fn1("bl-c", new types.TypeColor(),
		function(arg: Value): Block {
			return new Block([
				new Declaration("border-left-color", arg.toString()),
			]);
		},
	)


	// Border style
	let borderStyle = new types.TypeKeywordValueMap({
		"solid": "solid",
		"dashed": "dashed",
		"dotted": "dotted",
		"double": "double",
		"none": "none",
	});
	utils.fn1("b",
		borderStyle,
		function(arg: Value): Block {
			return new Block([
				new Declaration("border-style", arg.toString()),
			]);
		},
	)
	utils.fn1("bx",
		borderStyle,
		function(arg: Value): Block {
			return new Block([
				new Declaration("border-left-style", arg.toString()),
				new Declaration("border-right-style", arg.toString()),
			]);
		},
	)
	utils.fn1("by",
		borderStyle,
		function(arg: Value): Block {
			return new Block([
				new Declaration("border-top-style", arg.toString()),
				new Declaration("border-bottom-style", arg.toString()),
			]);
		},
	)
	utils.fn1("bt",
		borderStyle,
		function(arg: Value): Block {
			return new Block([
				new Declaration("border-top-style", arg.toString()),
			]);
		},
	)
	utils.fn1("br",
		borderStyle,
		function(arg: Value): Block {
			return new Block([
				new Declaration("border-right-style", arg.toString()),
			]);
		},
	)
	utils.fn1("bb",
		borderStyle,
		function(arg: Value): Block {
			return new Block([
				new Declaration("border-bottom-style", arg.toString()),
			]);
		},
	)
	utils.fn1("bl",
		borderStyle,
		function(arg: Value): Block {
			return new Block([
				new Declaration("border-left-style", arg.toString()),
			]);
		},
	)

	// Border: {width} {style} {color};
	utils.fn3("b",
		new types.TypeLength(1, "px"),
		borderStyle,
		new types.TypeColor(),
		function(width: Value, style: Value, color: Value): Block {
			return new Block([
				new Declaration("border", width.toString() + " " + style.toString() + " " + color.toString()),
			]);
		},
	)
	utils.fn3("bx",
		new types.TypeLength(1, "px"),
		borderStyle,
		new types.TypeColor(),
		function(width: Value, style: Value, color: Value): Block {
			return new Block([
				new Declaration("border-left", width.toString() + " " + style.toString() + " " + color.toString()),
				new Declaration("border-right", width.toString() + " " + style.toString() + " " + color.toString()),
			]);
		},
	)
	utils.fn3("by",
		new types.TypeLength(1, "px"),
		borderStyle,
		new types.TypeColor(),
		function(width: Value, style: Value, color: Value): Block {
			return new Block([
				new Declaration("border-top", width.toString() + " " + style.toString() + " " + color.toString()),
				new Declaration("border-bottom", width.toString() + " " + style.toString() + " " + color.toString()),
			]);
		},
	)
	utils.fn3("bt",
		new types.TypeLength(1, "px"),
		borderStyle,
		new types.TypeColor(),
		function(width: Value, style: Value, color: Value): Block {
			return new Block([
				new Declaration("border-top", width.toString() + " " + style.toString() + " " + color.toString()),
			]);
		},
	)
	utils.fn3("br",
		new types.TypeLength(1, "px"),
		borderStyle,
		new types.TypeColor(),
		function(width: Value, style: Value, color: Value): Block {
			return new Block([
				new Declaration("border-right", width.toString() + " " + style.toString() + " " + color.toString()),
			]);
		},
	)
	utils.fn3("bb",
		new types.TypeLength(1, "px"),
		borderStyle,
		new types.TypeColor(),
		function(width: Value, style: Value, color: Value): Block {
			return new Block([
				new Declaration("border-bottom", width.toString() + " " + style.toString() + " " + color.toString()),
			]);
		},
	)
	utils.fn3("bl",
		new types.TypeLength(1, "px"),
		borderStyle,
		new types.TypeColor(),
		function(width: Value, style: Value, color: Value): Block {
			return new Block([
				new Declaration("border-left", width.toString() + " " + style.toString() + " " + color.toString()),
			]);
		},
	)

	// Border: {width} solid {color};
	utils.fn2("b", new types.TypeLength(1, "px"), new types.TypeColor(),
		function(width: Value, color: Value): Block {
			return new Block([
				new Declaration("border", width.toString() + " solid " + color.toString()),
			]);
		},
	)
	utils.fn2("bx", new types.TypeLength(1, "px"), new types.TypeColor(),
		function(width: Value, color: Value): Block {
			return new Block([
				new Declaration("border-left", width.toString() + " solid " + color.toString()),
				new Declaration("border-right", width.toString() + " solid " + color.toString()),
			]);
		},
	)
	utils.fn2("by", new types.TypeLength(1, "px"), new types.TypeColor(),
		function(width: Value, color: Value): Block {
			return new Block([
				new Declaration("border-top", width.toString() + " solid " + color.toString()),
				new Declaration("border-bottom", width.toString() + " solid " + color.toString()),
			]);
		},
	)
	utils.fn2("bt", new types.TypeLength(1, "px"), new types.TypeColor(),
		function(width: Value, color: Value): Block {
			return new Block([
				new Declaration("border-top", width.toString() + " solid " + color.toString()),
			]);
		},
	)
	utils.fn2("br", new types.TypeLength(1, "px"), new types.TypeColor(),
		function(width: Value, color: Value): Block {
			return new Block([
				new Declaration("border-right", width.toString() + " solid " + color.toString()),
			]);
		},
	)
	utils.fn2("bb", new types.TypeLength(1, "px"), new types.TypeColor(),
		function(width: Value, color: Value): Block {
			return new Block([
				new Declaration("border-bottom", width.toString() + " solid " + color.toString()),
			]);
		},
	)
	utils.fn2("bl", new types.TypeLength(1, "px"), new types.TypeColor(),
		function(width: Value, color: Value): Block {
			return new Block([
				new Declaration("border-left", width.toString() + " solid " + color.toString()),
			]);
		},
	)

	// Border radius
	utils.fn1("rounded",
		new types.TypeOneOf(
			new types.TypeLengthPercentage(1, "px"),
			new types.TypeKeywordValue("full", "9999px"),
		),
		function(arg: Value): Block {
			return new Block([
				new Declaration("border-radius", arg.toString()),
			]);
		},
	)
	utils.fn1("rounded-t",
		new types.TypeOneOf(
			new types.TypeLengthPercentage(1, "px"),
			new types.TypeKeywordValue("full", "9999px"),
		),
		function(arg: Value): Block {
			return new Block([
				new Declaration("border-top-left-radius", arg.toString()),
				new Declaration("border-top-right-radius", arg.toString()),
			]);
		},
	)
	utils.fn1("rounded-r",
		new types.TypeOneOf(
			new types.TypeLengthPercentage(1, "px"),
			new types.TypeKeywordValue("full", "9999px"),
		),
		function(arg: Value): Block {
			return new Block([
				new Declaration("border-top-right-radius", arg.toString()),
				new Declaration("border-bottom-right-radius", arg.toString()),
			]);
		},
	)
	utils.fn1("rounded-b",
		new types.TypeOneOf(
			new types.TypeLengthPercentage(1, "px"),
			new types.TypeKeywordValue("full", "9999px"),
		),
		function(arg: Value): Block {
			return new Block([
				new Declaration("border-bottom-left-radius", arg.toString()),
				new Declaration("border-bottom-right-radius", arg.toString()),
			]);
		},
	)
	utils.fn1("rounded-l",
		new types.TypeOneOf(
			new types.TypeLengthPercentage(1, "px"),
			new types.TypeKeywordValue("full", "9999px"),
		),
		function(arg: Value): Block {
			return new Block([
				new Declaration("border-top-left-radius", arg.toString()),
				new Declaration("border-bottom-left-radius", arg.toString()),
			]);
		},
	)
	utils.fn1("rounded-tr",
		new types.TypeOneOf(
			new types.TypeLengthPercentage(1, "px"),
			new types.TypeKeywordValue("full", "9999px"),
		),
		function(arg: Value): Block {
			return new Block([
				new Declaration("border-top-right-radius", arg.toString()),
			]);
		},
	)
	utils.fn1("rounded-br",
		new types.TypeOneOf(
			new types.TypeLengthPercentage(1, "px"),
			new types.TypeKeywordValue("full", "9999px"),
		),
		function(arg: Value): Block {
			return new Block([
				new Declaration("border-bottom-right-radius", arg.toString()),
			]);
		},
	)
	utils.fn1("rounded-bl",
		new types.TypeOneOf(
			new types.TypeLengthPercentage(1, "px"),
			new types.TypeKeywordValue("full", "9999px"),
		),
		function(arg: Value): Block {
			return new Block([
				new Declaration("border-bottom-left-radius", arg.toString()),
			]);
		},
	)
	utils.fn1("rounded-tl",
		new types.TypeOneOf(
			new types.TypeLengthPercentage(1, "px"),
			new types.TypeKeywordValue("full", "9999px"),
		),
		function(arg: Value): Block {
			return new Block([
				new Declaration("border-top-left-radius", arg.toString()),
			]);
		},
	)
}

