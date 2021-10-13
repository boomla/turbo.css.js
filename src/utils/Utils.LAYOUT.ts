import type Utilities from "./Utilities";
import * as types from "./Types";
import Block from "../css/Block";
import Declaration from "../css/Declaration";

export default function registerLayoutUtils(utils: Utilities) {
	utils.registerKeyword("border-box",
		new Declaration("box-sizing", "border-box"),
	);
	utils.registerKeyword("content-box",
		new Declaration("box-sizing", "content-box"),
	);
	utils.fn1("clear",
		new types.TypeKeywordValueMap({
			"left": "left",
			"right": "right",
			"both": "both",
			"none": "none",
		}),
		function(arg: string): Block {
			return new Block([
				new Declaration("clear", arg.toString()),
			]);
		},
	)
	utils.registerKeyword("block",              new Declaration("display", "block"))
	utils.registerKeyword("contents",           new Declaration("display", "contents"))
	utils.registerKeyword("flex",               new Declaration("display", "flex"))
	utils.registerKeyword("flow-root",          new Declaration("display", "flow-root"))
	utils.registerKeyword("grid",               new Declaration("display", "grid"))
	utils.registerKeyword("hidden",             new Declaration("display", "none"))
	utils.registerKeyword("inline",             new Declaration("display", "inline"))
	utils.registerKeyword("inline-block",       new Declaration("display", "inline-block"))
	utils.registerKeyword("inline-flex",        new Declaration("display", "inline-flex"))
	utils.registerKeyword("inline-grid",        new Declaration("display", "inline-grid"))
	utils.registerKeyword("table",              new Declaration("display", "table"))
	utils.registerKeyword("table-caption",      new Declaration("display", "table-caption"))
	utils.registerKeyword("table-cell",         new Declaration("display", "table-cell"))
	utils.registerKeyword("table-column",       new Declaration("display", "table-column"))
	utils.registerKeyword("table-column-group", new Declaration("display", "table-column-group"))
	utils.registerKeyword("table-footer-group", new Declaration("display", "table-footer-group"))
	utils.registerKeyword("table-header-group", new Declaration("display", "table-header-group"))
	utils.registerKeyword("table-row",          new Declaration("display", "table-row"))
	utils.registerKeyword("table-row-group",    new Declaration("display", "table-row-group"))
	
	utils.fn1("float",
		new types.TypeKeywordValueMap({
			"left": "left",
			"right": "right",
			"none": "none",
		}),
		function(arg: string): Block {
			return new Block([
				new Declaration("float", arg.toString()),
			]);
		},
	)
	utils.fn1("object",
		new types.TypeKeywordsValueMap({
			"contain": "contain",
			"cover": "cover",
			"fill": "fill",
			"none": "none",
			"scale-down": "scale-down",
		}),
		function(arg: string): Block {
			return new Block([
				new Declaration("object-fit", arg.toString()),
			]);
		},
	)

	utils.fn1("object",
		new types.TypeKeywordValueMap({
			"center": "center",
			"top": "top",
			"right": "right",
			"bottom": "bottom",
			"left": "left",
		}),
		function(arg: string): Block {
			return new Block([
				new Declaration("object-position", arg.toString()),
			]);
		},
	)
	utils.fn2("object",
		new types.TypeKeywordValueMap({
			"top": "top",
			"center": "center",
			"bottom": "bottom",
		}),
		new types.TypeKeywordValueMap({
			"left": "left",
			"center": "center",
			"right": "right",
		}),
		function(y: string, x: string): Block {
			return new Block([
				new Declaration("object-position", y.toString() + " " + x.toString()),
			]);
		},
	)
	utils.fn2("object",
		new types.TypeKeywordValueMap({
			"left": "left",
			"center": "center",
			"right": "right",
		}),
		new types.TypeKeywordValueMap({
			"top": "top",
			"center": "center",
			"bottom": "bottom",
		}),
		function(x: string, y: string): Block {
			return new Block([
				new Declaration("object-position", x.toString() + " " + y.toString()),
			]);
		},
	)
	utils.fn2("object-pos",
		types.TypeLengthPercentage.newWithUnit(),
		types.TypeLengthPercentage.newWithUnit(),
		function(x: string, y: string): Block {
			return new Block([
				new Declaration("object-position", x.toString() + " " + y.toString()),
			]);
		},
	)


	utils.fn1("overflow",
		new types.TypeKeywordValueMap({
			"auto":    "auto",
			"hidden":  "hidden",
			"visible": "visible",
			"scroll":  "scroll",
		}),
		function(arg: string): Block {
			return new Block([
				new Declaration("overflow", arg.toString()),
			]);
		},
	)
	utils.fn1("overflow-x",
		new types.TypeKeywordValueMap({
			"auto":    "auto",
			"hidden":  "hidden",
			"visible": "visible",
			"scroll":  "scroll",
		}),
		function(arg: string): Block {
			return new Block([
				new Declaration("overflow-x", arg.toString()),
			]);
		},
	)
	utils.fn1("overflow-y",
		new types.TypeKeywordValueMap({
			"auto":    "auto",
			"hidden":  "hidden",
			"visible": "visible",
			"scroll":  "scroll",
		}),
		function(arg: string): Block {
			return new Block([
				new Declaration("overflow-y", arg.toString()),
			]);
		},
	)

	utils.registerKeyword("static",   new Declaration("position", "static"))
	utils.registerKeyword("relative", new Declaration("position", "relative"))
	utils.registerKeyword("absolute", new Declaration("position", "absolute"))
	utils.registerKeyword("fixed",    new Declaration("position", "fixed"))
	utils.registerKeyword("sticky",   new Declaration("position", "sticky"))

	utils.registerKeyword("visible",   new Declaration("visibility", "visible"))
	utils.registerKeyword("invisible",   new Declaration("visibility", "hidden"))

	utils.fn1("z",
		new types.TypeOneOf(
			new types.TypeInt32(),
			new types.TypeKeyword("auto"),
		),
		function(arg: string): Block {
			return new Block([
				new Declaration("z-index", arg.toString()),
			]);
		},
	)
}

