import Utilities from "./Utilities";
import Value from "./Value";
import * as types from "./Types";
import Block from "../css/Block";
import Declaration from "../css/Declaration";

export default function registerTransformUtils(utils: Utilities) {
	utils.fn1("origin",
		new types.TypeOneOf(
			new types.TypeKeyword("center"),
			new types.TypeKeyword("left"),
			new types.TypeKeyword("right"),
			new types.TypeKeyword("top"),
			new types.TypeKeyword("bottom"),
		),
		function(arg: Value): Block {
			return new Block([
				new Declaration("transform-origin", arg.toString()),
			]);
		},
	)
	utils.fn2("origin",
		new types.TypeOneOf(
			new types.TypeKeyword("top"),
			new types.TypeKeyword("center"),
			new types.TypeKeyword("bottom"),
		),
		new types.TypeOneOf(
			new types.TypeKeyword("left"),
			new types.TypeKeyword("center"),
			new types.TypeKeyword("right"),
		),
		function(y: Value, x: Value): Block {
			return new Block([
				new Declaration("transform-origin", y.toString() + " " + x.toString()),
			]);
		},
	)
	utils.fn2("origin",
		new types.TypeOneOf(
			new types.TypeLengthPercentage(1, "px"),
			new types.TypeKeyword("left"),
			new types.TypeKeyword("center"),
			new types.TypeKeyword("right"),
		),
		new types.TypeOneOf(
			new types.TypeLengthPercentage(1, "px"),
			new types.TypeKeyword("top"),
			new types.TypeKeyword("center"),
			new types.TypeKeyword("bottom"),
		),
		function(x: Value, y: Value): Block {
			return new Block([
				new Declaration("transform-origin", x.toString() + " " + y.toString()),
			]);
		},
	)
	utils.fn1("transform",
		new types.TypeTransformFunction(),
		function(arg: Value): Block {
			return new Block([
				new Declaration("transform", arg.toString()),
			]);
		},
	)
	utils.registerKeyword("transform-none",
		new Declaration("transform", "none"),
	)
}

