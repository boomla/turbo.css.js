import Utilities from "./Utilities";
import Value from "./Value";
import * as types from "./Types";
import Block from "../css/Block";
import Declaration from "../css/Declaration";

export default function registerSpacingUtils(utils: Utilities) {
	utils.fn1("m",
		new types.TypeOneOf(
			new types.TypeLengthPercentage(1, "px"),
			new types.TypeKeyword("auto"),
		),
		function(arg: Value): Block {
			return new Block([
				new Declaration("margin", arg.toString()),
			]);
		},
	)
	utils.fn1("mx",
		new types.TypeOneOf(
			new types.TypeLengthPercentage(1, "px"),
			new types.TypeKeyword("auto"),
		),
		function(arg: Value): Block {
			return new Block([
				new Declaration("margin-left", arg.toString()),
				new Declaration("margin-right", arg.toString()),
			]);
		},
	)
	utils.fn1("my",
		new types.TypeOneOf(
			new types.TypeLengthPercentage(1, "px"),
			new types.TypeKeyword("auto"),
		),
		function(arg: Value): Block {
			return new Block([
				new Declaration("margin-top", arg.toString()),
				new Declaration("margin-bottom", arg.toString()),
			]);
		},
	)
	utils.fn1("mt",
		new types.TypeOneOf(
			new types.TypeLengthPercentage(1, "px"),
			new types.TypeKeyword("auto"),
		),
		function(arg: Value): Block {
			return new Block([
				new Declaration("margin-top", arg.toString()),
			]);
		},
	)
	utils.fn1("mr",
		new types.TypeOneOf(
			new types.TypeLengthPercentage(1, "px"),
			new types.TypeKeyword("auto"),
		),
		function(arg: Value): Block {
			return new Block([
				new Declaration("margin-right", arg.toString()),
			]);
		},
	)
	utils.fn1("mb",
		new types.TypeOneOf(
			new types.TypeLengthPercentage(1, "px"),
			new types.TypeKeyword("auto"),
		),
		function(arg: Value): Block {
			return new Block([
				new Declaration("margin-bottom", arg.toString()),
			]);
		},
	)
	utils.fn1("ml",
		new types.TypeOneOf(
			new types.TypeLengthPercentage(1, "px"),
			new types.TypeKeyword("auto"),
		),
		function(arg: Value): Block {
			return new Block([
				new Declaration("margin-left", arg.toString()),
			]);
		},
	)


	utils.fn1("p",
		new types.TypeOneOf(
			new types.TypeLengthPercentage(1, "px"),
			new types.TypeKeyword("auto"),
		),
		function(arg: Value): Block {
			return new Block([
				new Declaration("padding", arg.toString()),
			]);
		},
	)
	utils.fn1("px",
		new types.TypeOneOf(
			new types.TypeLengthPercentage(1, "px"),
			new types.TypeKeyword("auto"),
		),
		function(arg: Value): Block {
			return new Block([
				new Declaration("padding-left", arg.toString()),
				new Declaration("padding-right", arg.toString()),
			]);
		},
	)
	utils.fn1("py",
		new types.TypeOneOf(
			new types.TypeLengthPercentage(1, "px"),
			new types.TypeKeyword("auto"),
		),
		function(arg: Value): Block {
			return new Block([
				new Declaration("padding-top", arg.toString()),
				new Declaration("padding-bottom", arg.toString()),
			]);
		},
	)
	utils.fn1("pt",
		new types.TypeOneOf(
			new types.TypeLengthPercentage(1, "px"),
			new types.TypeKeyword("auto"),
		),
		function(arg: Value): Block {
			return new Block([
				new Declaration("padding-top", arg.toString()),
			]);
		},
	)
	utils.registerKeyword("pt-full",
		new Declaration("padding-top", "100%"),
	)
	utils.fn1("pr",
		new types.TypeOneOf(
			new types.TypeLengthPercentage(1, "px"),
			new types.TypeKeyword("auto"),
		),
		function(arg: Value): Block {
			return new Block([
				new Declaration("padding-right", arg.toString()),
			]);
		},
	)
	utils.fn1("pb",
		new types.TypeOneOf(
			new types.TypeLengthPercentage(1, "px"),
			new types.TypeKeyword("auto"),
		),
		function(arg: Value): Block {
			return new Block([
				new Declaration("padding-bottom", arg.toString()),
			]);
		},
	)
	utils.fn1("pl",
		new types.TypeOneOf(
			new types.TypeLengthPercentage(1, "px"),
			new types.TypeKeyword("auto"),
		),
		function(arg: Value): Block {
			return new Block([
				new Declaration("padding-left", arg.toString()),
			]);
		},
	)
}

