import type Utilities from "./Utilities";
import * as types from "./Types";
import Block from "../css/Block";
import Declaration from "../css/Declaration";

export default function registerTextUtils(utils: Utilities) {
	utils.fn1("color", new types.TypeColor(),
		function(arg: string): Block {
			return new Block([
				new Declaration("color", arg.toString()),
			]);
		},
	)
	utils.fn1("font",
		new types.TypeKeywordValueMap({
			"serif": `ui-serif, Georgia, Cambria, "Times New Roman", Times, serif`,
			"sans": `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
			"mono": `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
			"heading": `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
			"body": `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
		}),
		function(arg: string): Block {
			return new Block([
				new Declaration("font-family", arg.toString()),
			]);
		},
	)

	utils.fn1("font",
		new types.TypeLengthPercentage(1, "px"),
		function(arg: string): Block {
			return new Block([
				new Declaration("font-size", arg.toString()),
			]);
		},
	)

	utils.registerKeyword("antialiased",
		new Declaration("-webkit-font-smoothing", "antialiased"),
		new Declaration("-moz-osx-font-smoothing", "grayscale"),
	)
	utils.registerKeyword("subpixel-antialiased",
		new Declaration("-webkit-font-smoothing", "auto"),
		new Declaration("-moz-osx-font-smoothing", "auto"),
	)
	utils.registerKeyword("italic", new Declaration("font-style", "italic"))
	utils.registerKeyword("non-italic", new Declaration("font-style", "normal"))

	utils.fn1("font",
		new types.TypeKeywordValueMap({
			"thin":       "100",
			"extralight": "200",
			"light":      "300",
			"normal":     "400",
			"medium":     "500",
			"semibold":   "600",
			"bold":       "700",
			"extrabold":  "800",
			"black":      "900",
		}),
		function(arg: string): Block {
			return new Block([
				new Declaration("font-weight", arg.toString()),
			]);
		},
	)
	utils.fn1("font-weight",
		new types.TypeInt32(1, 1000),
		function(arg: string): Block {
			return new Block([
				new Declaration("font-weight", arg.toString()),
			]);
		},
	)
	
	utils.fn1("letter-spacing",
		new types.TypeOneOf(
			new types.TypeLength(0.1, "px"),
			new types.TypeKeyword("normal"),
		),
		function(arg: string): Block {
			return new Block([
				new Declaration("letter-spacing", arg.toString()),
			]);
		},
	)
	utils.fn1("line",
		new types.TypeOneOf(
			new types.TypeFloat32(0),
			types.TypeLengthPercentage.newWithUnit(),
		),
		function(arg: string): Block {
			return new Block([
				new Declaration("line-height", arg.toString()),
			]);
		},
	)
	utils.fn1("list",
		new types.TypeKeywordValueMap({
			"inside":  "inside",
			"outside": "outside",
		}),
		function(arg: string): Block {
			return new Block([
				new Declaration("list-style-position", arg.toString()),
			]);
		},
	)
	utils.fn1("list",
		new types.TypeKeywordValueMap({
			"none":  "none",
			"disc": "disc",
			"decimal": "decimal",
		}),
		function(arg: string): Block {
			return new Block([
				new Declaration("list-style-type", arg.toString()),
			]);
		},
	)
	utils.fn1("tab",
		new types.TypeOneOf(
			new types.TypeInt32(1),
			new types.TypeLength(1, "px"),
		),
		function(arg: string): Block {
			return new Block([
				new Declaration("tab-size", arg.toString()),
			]);
		},
	)
	utils.fn1("text",
		new types.TypeKeywordValueMap({
			"left":  "left",
			"center": "center",
			"right": "right",
			"justify": "justify",
		}),
		function(arg: string): Block {
			return new Block([
				new Declaration("text-align", arg.toString()),
			]);
		},
	)

	utils.registerKeyword("underline", new Declaration("text-decoration", "underline"))
	utils.registerKeyword("line-through", new Declaration("text-decoration", "line-through"))
	utils.registerKeyword("text-decoration-none", new Declaration("text-decoration", "none"))

	utils.fn1("text-overflow",
		new types.TypeKeywordValueMap({
			"ellipsis":  "ellipsis",
			"clip": "clip",
		}),
		function(arg: string): Block {
			return new Block([
				new Declaration("text-overflow", arg.toString()),
			]);
		},
	)
	utils.registerKeyword("text-truncate",
		new Declaration("overflow", "hidden"),
		new Declaration("text-overflow", "ellipsis"),
		new Declaration("white-space", "nowrap"),
	)

	utils.registerKeyword("uppercase", new Declaration("text-transform", "uppercase"))
	utils.registerKeyword("lowercase", new Declaration("text-transform", "lowercase"))
	utils.registerKeyword("capitalize", new Declaration("text-transform", "capitalize"))
	utils.registerKeyword("normal-case", new Declaration("text-transform", "none"))

	utils.fn1("v-align",
		new types.TypeKeywordsValueMap({
			"baseline":  "baseline",
			"top": "top",
			"middle": "middle",
			"bottom": "bottom",
			"text-top": "text-top",
			"text-bottom": "text-bottom",
			"sub": "sub",
			"super": "super",
		}),
		function(arg: string): Block {
			return new Block([
				new Declaration("vertical-align", arg.toString()),
			]);
		},
	)

	utils.fn1("whitespace",
		new types.TypeKeywordsValueMap({
			"normal":   "normal",
			"nowrap":   "nowrap",
			"pre":      "pre",
			"pre-line": "pre-line",
			"pre-wrap": "pre-wrap",
		}),
		function(arg: string): Block {
			return new Block([
				new Declaration("white-space", arg.toString()),
			]);
		},
	)

	utils.registerKeyword("break-normal",
		new Declaration("overflow-wrap", "normal"),
		new Declaration("word-break", "normal"),
	)
	utils.registerKeyword("break-words",
		new Declaration("overflow-wrap", "break-word"),
	)
	utils.registerKeyword("break-all",
		new Declaration("word-break", "break-all"),
	)
}

