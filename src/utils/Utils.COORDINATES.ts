import Utilities from "./Utilities";
import Value from "./Value";
import * as types from "./Types";
import Block from "../css/Block";
import Declaration from "../css/Declaration";

export default function registerCoordinateUtils(utils: Utilities) {
	utils.fn1("top",
		new types.TypeOneOf(
			new types.TypeLengthPercentage(1, "px"),
			new types.TypeKeyword("auto"),
		),
		function(arg: Value): Block {
			return new Block([
				new Declaration("top", arg.toString()),
			]);
		},
	)
	utils.fn1("right",
		new types.TypeOneOf(
			new types.TypeLengthPercentage(1, "px"),
			new types.TypeKeyword("auto"),
		),
		function(arg: Value): Block {
			return new Block([
				new Declaration("right", arg.toString()),
			]);
		},
	)
	utils.fn1("bottom",
		new types.TypeOneOf(
			new types.TypeLengthPercentage(1, "px"),
			new types.TypeKeyword("auto"),
		),
		function(arg: Value): Block {
			return new Block([
				new Declaration("bottom", arg.toString()),
			]);
		},
	)
	utils.fn1("left",
		new types.TypeOneOf(
			new types.TypeLengthPercentage(1, "px"),
			new types.TypeKeyword("auto"),
		),
		function(arg: Value): Block {
			return new Block([
				new Declaration("left", arg.toString()),
			]);
		},
	)
	utils.fn1("inset",
		new types.TypeOneOf(
			new types.TypeLengthPercentage(1, "px"),
			new types.TypeKeyword("auto"),
		),
		function(arg: Value): Block {
			let value = arg.toString();
			return new Block([
				new Declaration("top", value),
				new Declaration("right", value),
				new Declaration("bottom", value),
				new Declaration("left", value),
			]);
		},
	)
}

