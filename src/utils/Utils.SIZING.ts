import Utilities from "./Utilities";
import Value from "./Value";
import * as types from "./Types";
import Block from "../css/Block";
import Declaration from "../css/Declaration";

export default function registerSizingUtils(utils: Utilities) {
	utils.fn1("w",
		new types.TypeOneOf(
			new types.TypeLengthPercentage(1, "px"),
			new types.TypeKeywordValueMap({
				"full": "100%",
				"min": "min-content",
				"max": "max-content",
				"auto": "auto",
			}),
		),
		function(arg: Value): Block {
			return new Block([
				new Declaration("width", arg.toString()),
			]);
		},
	)
	utils.fn1("min-w",
		new types.TypeOneOf(
			new types.TypeLengthPercentage(1, "px"),
			new types.TypeKeywordValueMap({
				"full": "100%",
				"min": "min-content",
				"max": "max-content",
				"auto": "auto",
			}),
		),
		function(arg: Value): Block {
			return new Block([
				new Declaration("min-width", arg.toString()),
			]);
		},
	)
	utils.fn1("max-w",
		new types.TypeOneOf(
			new types.TypeLengthPercentage(1, "px"),
			new types.TypeKeywordValueMap({
				"full": "100%",
				"min": "min-content",
				"max": "max-content",
				"none": "none",
			}),
		),
		function(arg: Value): Block {
			return new Block([
				new Declaration("max-width", arg.toString()),
			]);
		},
	)
	
	utils.fn1("h",
		new types.TypeOneOf(
			new types.TypeLengthPercentage(1, "px"),
			new types.TypeKeywordValueMap({
				"full": "100%",
				"min": "min-content",
				"max": "max-content",
				"auto": "auto",
			}),
		),
		function(arg: Value): Block {
			return new Block([
				new Declaration("height", arg.toString()),
			]);
		},
	)
	utils.fn1("min-h",
		new types.TypeOneOf(
			new types.TypeLengthPercentage(1, "px"),
			new types.TypeKeywordValueMap({
				"full": "100%",
				"min": "min-content",
				"max": "max-content",
				"auto": "auto",
			}),
		),
		function(arg: Value): Block {
			return new Block([
				new Declaration("min-height", arg.toString()),
			]);
		},
	)
	utils.fn1("max-h",
		new types.TypeOneOf(
			new types.TypeLengthPercentage(1, "px"),
			new types.TypeKeywordValueMap({
				"full": "100%",
				"min": "min-content",
				"max": "max-content",
				"none": "none",
			}),
		),
		function(arg: Value): Block {
			return new Block([
				new Declaration("max-height", arg.toString()),
			]);
		},
	)
}

