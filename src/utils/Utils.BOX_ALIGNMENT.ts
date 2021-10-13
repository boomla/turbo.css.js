import type Utilities from "./Utilities";
import * as types from "./Types";
import Block from "../css/Block";
import Declaration from "../css/Declaration";

export default function registerBoxAlignmentUtils(utils: Utilities) {
	utils.fn1("align-content",
		new types.TypeKeywordValueMap({
			"start": "flex-start",
			"center": "center",
			"end": "flex-end",
			"between": "space-between",
			"around": "space-around",
			"evenly": "space-evenly",
		}),
		function(arg: string): Block {
			return new Block([
				new Declaration("align-content", arg.toString()),
			]);
		},
	)
	utils.fn1("align-items",
		new types.TypeKeywordValueMap({
			"start": "flex-start",
			"center": "center",
			"end": "flex-end",
			"baseline": "baseline",
			"stretch": "stretch",
		}),
		function(arg: string): Block {
			return new Block([
				new Declaration("align-items", arg.toString()),
			]);
		},
	)
	utils.fn1("align-self",
		new types.TypeKeywordValueMap({
			"auto": "auto",
			"start": "flex-start",
			"center": "center",
			"end": "flex-end",
			"stretch": "stretch",
		}),
		function(arg: string): Block {
			return new Block([
				new Declaration("align-self", arg.toString()),
			]);
		},
	)
	utils.fn1("justify-content",
		new types.TypeKeywordValueMap({
			"start": "flex-start",
			"center": "center",
			"end": "flex-end",
			"between": "space-between",
			"around": "space-around",
			"evenly": "space-evenly",
		}),
		function(arg: string): Block {
			return new Block([
				new Declaration("justify-content", arg.toString()),
			]);
		},
	)
	utils.fn1("justify-items",
		new types.TypeKeywordValueMap({
			"auto": "auto",
			"start": "start",
			"center": "center",
			"end": "end",
			"stretch": "stretch",
		}),
		function(arg: string): Block {
			return new Block([
				new Declaration("justify-items", arg.toString()),
			]);
		},
	)
	utils.fn1("justify-self",
		new types.TypeKeywordValueMap({
			"auto": "auto",
			"start": "start",
			"center": "center",
			"end": "end",
			"stretch": "stretch",
		}),
		function(arg: string): Block {
			return new Block([
				new Declaration("justify-self", arg.toString()),
			]);
		},
	)
	utils.fn1("place-content",
		new types.TypeKeywordValueMap({
			"start": "start",
			"center": "center",
			"end": "end",
			"between": "space-between",
			"around": "space-around",
			"evenly": "space-evenly",
			"stretch": "stretch",
		}),
		function(arg: string): Block {
			return new Block([
				new Declaration("place-content", arg.toString()),
			]);
		},
	)
	utils.fn1("place-items",
		new types.TypeKeywordValueMap({
			"auto": "auto",
			"start": "start",
			"center": "center",
			"end": "end",
			"stretch": "stretch",
		}),
		function(arg: string): Block {
			return new Block([
				new Declaration("place-items", arg.toString()),
			]);
		},
	)
	utils.fn1("place-self",
		new types.TypeKeywordValueMap({
			"auto": "auto",
			"start": "start",
			"center": "center",
			"end": "end",
			"stretch": "stretch",
		}),
		function(arg: string): Block {
			return new Block([
				new Declaration("place-self", arg.toString()),
			]);
		},
	)
}

