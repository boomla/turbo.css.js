import type Utilities from "./Utilities";
import * as types from "./Types";
import Block from "../css/Block";
import Declaration from "../css/Declaration";
import dataUrlEncode from "./dataUrlEncode";

export default function registerBackgroundUtils(utils: Utilities) {
	utils.fn1("bg-c", new types.TypeColor(), function(arg: string): Block {
		return new Block([
			new Declaration("background-color", arg.toString()),
		]);
	});
	utils.fn1("bg",
		new types.TypeKeywordValueMap({
			"fixed": "fixed",
			"local": "local",
			"scroll": "scroll",
		}),
		function(arg: string): Block {
			return new Block([
				new Declaration("background-attachment", arg.toString()),
			]);
		},
	);
	utils.fn1("bg-clip",
		new types.TypeKeywordValueMap({
			"border": "border-box",
			"padding": "padding-box",
			"content": "content-box",
			"text": "text",
		}),
		function(arg: string): Block {
			return new Block([
				new Declaration("background-clip", arg.toString()),
			]);
		},
	);
	utils.fn1("bg",
		new types.TypeKeywordValueMap({
			"center": "center",
			"top": "top",
			"right": "right",
			"bottom": "bottom",
			"left": "left",
		}),
		function(arg: string): Block {
			return new Block([
				new Declaration("background-position", arg.toString()),
			]);
		},
	);
	utils.fn2("bg",
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
				new Declaration("background-position", y.toString() + " " + x.toString()),
			]);
		},
	);
	utils.fn2("bg",
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
				new Declaration("background-position", x.toString() + " " + y.toString()),
			]);
		},
	);
	utils.fn1("bg-pos-x",
		types.TypeLengthPercentage.newWithUnit(),
		function(x: string): Block {
			return new Block([
				new Declaration("background-position-x", x.toString()),
			]);
		},
	);
	utils.fn1("bg-pos-y",
		types.TypeLengthPercentage.newWithUnit(),
		function(y: string): Block {
			return new Block([
				new Declaration("background-position-y", y.toString()),
			]);
		},
	);
	utils.fn2("bg-pos",
		types.TypeLengthPercentage.newWithUnit(),
		types.TypeLengthPercentage.newWithUnit(),
		function(x: string, y: string): Block {
			return new Block([
				new Declaration("background-position", x.toString() + " " + y.toString()),
			]);
		},
	);

	utils.registerKeyword("bg-repeat",       new Declaration("background-repeat", "repeat"));
	utils.registerKeyword("bg-no-repeat",    new Declaration("background-repeat", "no-repeat"));
	utils.registerKeyword("bg-repeat-x",     new Declaration("background-repeat", "repeat-x"));
	utils.registerKeyword("bg-repeat-y",     new Declaration("background-repeat", "repeat-y"));
	utils.registerKeyword("bg-repeat-round", new Declaration("background-repeat", "round"));
	utils.registerKeyword("bg-repeat-space", new Declaration("background-repeat", "space"));
	
	utils.registerKeyword("bg-cover",        new Declaration("background-size", "cover"));
	utils.registerKeyword("bg-contain",      new Declaration("background-size", "contain"));
	utils.registerKeyword("bg-size-auto",    new Declaration("background-size", "auto"));

	utils.fn2("bg-size",
		new types.TypeOneOf(
			new types.TypeLengthPercentage(1, "px"),
			new types.TypeKeyword("auto"),
		),
		new types.TypeOneOf(
			new types.TypeLengthPercentage(1, "px"),
			new types.TypeKeyword("auto"),
		),
		function(x: string, y: string): Block {
			return new Block([
				new Declaration("background-size", x.toString() + " " + y.toString()),
			]);
		},
	);
	utils.fn2("bg-checker",
		new types.TypeLengthPercentage(1, "px"),
		new types.TypeColor(),
		function(size: string, color: string): Block {
			let sizeData = size.toString();
			let colorData = dataUrlEncode(color.toString());
			return new Block([
				new Declaration("background-image", "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+sizeData+"' height='"+sizeData+"' viewBox='0 0 2 2'%3E%3Cpath d='M0 0h1v1H0zm1 1h1v1H1z' fill='"+colorData+"'/%3E%3C/svg%3E\")"),
			]);
		},
	);
}

