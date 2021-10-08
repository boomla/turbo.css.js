import Utilities from "./Utilities";
import * as types from "./Types";
import Block from "../css/Block";
import Declaration from "../css/Declaration";

export default function registerFlexBoxUtils(utils: Utilities) {
	utils.registerKeyword("flex-row", new Declaration("flex-direction", "row"))
	utils.registerKeyword("flex-row-reverse", new Declaration("flex-direction", "row-reverse"))
	utils.registerKeyword("flex-col", new Declaration("flex-direction", "column"))
	utils.registerKeyword("flex-col-reverse", new Declaration("flex-direction", "column-reverse"))
	
	utils.fn1("flex-grow", new types.TypeFloat32(0),
		function(arg: string): Block {
			return new Block([
				new Declaration("flex-grow", arg.toString()),
			]);
		},
	)
	utils.fn1("flex-shrink", new types.TypeFloat32(0),
		function(arg: string): Block {
			return new Block([
				new Declaration("flex-shrink", arg.toString()),
			]);
		},
	)
	utils.fn1("flex-basis",
		new types.TypeOneOf(
			new types.TypeKeyword("0"),
			new types.TypeKeyword("auto"),
			types.TypeLengthPercentage.newWithUnit(),
		),
		function(basis: string): Block {
			return new Block([
				new Declaration("flex-basis", basis.toString()),
			]);
		},
	)
	utils.fn1("flex",
		new types.TypeKeywordValueMap({
			"1": "1 1 0%",
			"auto": "1 1 auto",
			"initial": "0 1 auto",
			"none": "none",
		}),
		function(arg: string): Block {
			return new Block([
				new Declaration("flex", arg.toString()),
			]);
		},
	)
	utils.fn2("flex", new types.TypeFloat32(0), new types.TypeFloat32(0),
		function(grow: string, shrink: string): Block {
			return new Block([
				new Declaration("flex", grow.toString() + " " + shrink.toString() + " 0%"),
			]);
		},
	)
	utils.fn3("flex", new types.TypeFloat32(0), new types.TypeFloat32(0), types.TypeLengthPercentage.newWithUnit(),
		function(grow: string, shrink: string, basis: string): Block {
			let basisStr = basis.toString();
			if (basisStr === "0") {
				basisStr = "0%"
			}
			return new Block([
				new Declaration("flex", grow.toString() + " " + shrink.toString() + " " + basisStr),
			]);
		},
	)

	utils.fn1("flex",
		new types.TypeKeywordValueMap({
			"wrap": "wrap",
			"nowrap": "nowrap",
		}),
		function(arg: string): Block {
			return new Block([
				new Declaration("flex-wrap", arg.toString()),
			]);
		},
	)
	
	utils.registerKeyword("flex-wrap-reverse", new Declaration("flex-wrap", "wrap-reverse"))

	utils.fn1("order", new types.TypeInt32(),
		function(arg: string): Block {
			return new Block([
				new Declaration("order", arg.toString()),
			]);
		},
	)
	utils.fn1("order",
		new types.TypeKeywordValueMap({
			"first": "-9999",
			"last": "9999",
		}),
		function(arg: string): Block {
			return new Block([
				new Declaration("order", arg.toString()),
			]);
		},
	)

	// Box alignment
	utils.registerKeyword("flex-center",
		new Declaration("justify-content", "center"),
		new Declaration("align-items", "center"),
	)
	utils.fn2("flex",
		new types.TypeKeywordValueMap({
			"start":      "flex-start",
			"center":     "center",
			"end":        "flex-end",
			"between":    "space-between",
			"around":     "space-around",
			"evenly":     "space-evenly",
		}),
		new types.TypeKeywordValueMap({
			"start":      "flex-start",
			"center":     "center",
			"end":        "flex-end",
			"baseline":   "baseline",
			"stretch":    "stretch",
		}),
		function(justifyContent: string, alignItems: string): Block {
			return new Block([
				new Declaration("justify-content", justifyContent.toString()),
				new Declaration("align-items", alignItems.toString()),
			]);
		},
	)
	utils.fn3("flex",
		new types.TypeKeywordValueMap({
			"start":      "flex-start",
			"center":     "center",
			"end":        "flex-end",
			"between":    "space-between",
			"around":     "space-around",
			"evenly":     "space-evenly",
		}),
		new types.TypeKeywordValueMap({
			"start":      "flex-start",
			"center":     "center",
			"end":        "flex-end",
			"baseline":   "baseline",
			"stretch":    "stretch",
		}),
		new types.TypeKeywordValueMap({
			"start":      "flex-start",
			"center":     "center",
			"end":        "flex-end",
			"between":    "space-between",
			"around":     "space-around",
			"evenly":     "space-evenly",
		}),
		function(justifyContent: string, alignItems: string, alignContent: string): Block {
			return new Block([
				new Declaration("justify-content", justifyContent.toString()),
				new Declaration("align-items", alignItems.toString()),
				new Declaration("align-content", alignContent.toString()),
			]);
		},
	)
}

