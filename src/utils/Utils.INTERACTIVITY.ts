import type Utilities from "./Utilities";
import * as types from "./Types";
import Block from "../css/Block";
import Declaration from "../css/Declaration";

export default function registerInteractivityUtils(utils: Utilities) {
	utils.fn1("appearance",
		new types.TypeKeywordValueMap({
			"none": "none",
			"auto": "auto",
		}),
		function(arg: string): Block {
			return new Block([
				new Declaration("appearance", arg.toString()),
			]);
		},
	)
	utils.fn1("cursor",
		new types.TypeKeywordsValueMap({
			"auto": "auto",
			"default": "default",
			"pointer": "pointer",
			"progress": "progress",
			"wait": "wait",
			"text": "text",
			"cell": "cell",
			"crosshair": "crosshair",
			"move": "move",
			"copy": "copy",
			"alias": "alias",
			"help": "help",
			"grab": "grab",
			"grabbing": "grabbing",
			"not-allowed": "not-allowed",
			"col-resize": "col-resize",
			"row-resize": "row-resize",
			"ew-resize": "ew-resize",
			"ns-resize": "ns-resize",
			"zoom-in": "zoom-in",
			"zoom-out": "zoom-out",
		}),
		function(arg: string): Block {
			return new Block([
				new Declaration("cursor", arg.toString()),
			]);
		},
	)
	utils.fn1("pointer-events",
		new types.TypeKeywordValueMap({
			"none": "none",
			"auto": "auto",
		}),
		function(arg: string): Block {
			return new Block([
				new Declaration("pointer-events", arg.toString()),
			]);
		},
	)
	utils.fn1("resize",
		new types.TypeKeywordValueMap({
			"none": "none",
			"x": "horizontal",
			"y": "vertical",
		}),
		function(arg: string): Block {
			return new Block([
				new Declaration("resize", arg.toString()),
			]);
		},
	)
	utils.registerKeyword("resize",
		new Declaration("resize", "both"),
	)
	utils.fn1("select",
		new types.TypeKeywordValueMap({
			"none": "none",
			"text": "text",
			"all": "all",
			"auto": "auto",
		}),
		function(arg: string): Block {
			return new Block([
				new Declaration("user-select", arg.toString()),
			]);
		},
	)
}

