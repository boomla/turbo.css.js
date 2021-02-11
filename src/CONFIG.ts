import { ShadowData } from "./utils/Config";
import ConfigStatic from "./utils/ConfigStatic";
import Declaration from "./css/Declaration";
import rewriteSelectorFunc from './css/rewriteSelectorFunc';
import prefixOrderDeclarations from './css/prefixOrderDeclarations';

let DefaultConfig = new ConfigStatic({
	colorScales: {
		"red": {
			50: "#FFF6F6",
			100: "#FFECEC",
			150: "#FFDADA",
			200: "#FFC7C7",
			250: "#FFB5B5",
			300: "#FFA2A2",
			350: "#FF9090",
			400: "#FF7D7D",
			450: "#FF6B6B",
			500: "#FF5858",
			550: "#E94A4A",
			600: "#D33C3C",
			650: "#BC3030",
			700: "#A42424",
			750: "#8D1B1B",
			800: "#761212",
			850: "#5E0C0C",
			900: "#460606",
			950: "#230303",
		},
		"yellow": {
			50: "#F9F9F1",
			100: "#F3F2E2",
			150: "#F2EFCA",
			200: "#F0EBB2",
			250: "#EFE898",
			300: "#EDE47D",
			350: "#ECE165",
			400: "#EADD4D",
			450: "#EFDE2B",
			500: "#F3DF09",
			550: "#E5D205",
			600: "#D6C400",
			650: "#C5B400",
			700: "#B3A400",
			750: "#A19400",
			800: "#8F8300",
			850: "#7B7100",
			900: "#665E00",
			950: "#332F00",
		},
		"green": {
			50: "#F2F8F4",
			100: "#E4F1E8",
			150: "#CCEBD6",
			200: "#B4E4C4",
			250: "#9DDDB2",
			300: "#86D6A0",
			350: "#73CF92",
			400: "#60C883",
			450: "#4FC276",
			500: "#3EBB68",
			550: "#35AC5D",
			600: "#2B9D51",
			650: "#248F48",
			700: "#1D813E",
			750: "#177235",
			800: "#11622C",
			850: "#0D5324",
			900: "#08441C",
			950: "#04220E",
		},
		"blue": {
			50: "#EFF7FB",
			100: "#DEEFF7",
			150: "#C3E7F7",
			200: "#A7DFF7",
			250: "#8AD6F6",
			300: "#6DCCF5",
			350: "#52C2F3",
			400: "#37B8F0",
			450: "#25AEE9",
			500: "#12A4E2",
			550: "#0E9AD6",
			600: "#0990CA",
			650: "#0783B8",
			700: "#0575A5",
			750: "#04648C",
			800: "#035273",
			850: "#03415B",
			900: "#023043",
			950: "#011822",
		},
		"purple": {
			50: "#FAF5FF",
			100: "#F5EBFF",
			150: "#ECD9FF",
			200: "#E3C7FF",
			250: "#DAB5FF",
			300: "#D1A3FF",
			350: "#C892FF",
			400: "#BF80FF",
			450: "#B56CFF",
			500: "#AB57FF",
			550: "#994AE9",
			600: "#873CD3",
			650: "#7530BB",
			700: "#6324A3",
			750: "#541B8E",
			800: "#451278",
			850: "#360C5F",
			900: "#260646",
			950: "#130323",
		},
		"pink": {
			50: "#FFF5FE",
			100: "#FFEBFC",
			150: "#FFD9F9",
			200: "#FFC7F6",
			250: "#FFB5F3",
			300: "#FFA3F0",
			350: "#FF92ED",
			400: "#FF80EA",
			450: "#F571DF",
			500: "#EA61D4",
			550: "#DF4FC7",
			600: "#D33CB9",
			650: "#BB30A4",
			700: "#A3248E",
			750: "#8E1B7B",
			800: "#781267",
			850: "#5F0C52",
			900: "#46063C",
			950: "#23031E",
		},
		"cyan": {
			50: "#EFFBFB",
			100: "#DEF7F7",
			150: "#C2F7F7",
			200: "#A6F7F7",
			250: "#89F6F6",
			300: "#6BF5F5",
			350: "#52F3F3",
			400: "#38F0F0",
			450: "#1CE8E8",
			500: "#00E0E0",
			550: "#05D4D4",
			600: "#09C8C8",
			650: "#07B6B6",
			700: "#05A3A3",
			750: "#048B8B",
			800: "#037272",
			850: "#035C5C",
			900: "#024545",
			950: "#012323",
		},
		"orange": {
			50: "#F9F5F1",
			100: "#F3EBE2",
			150: "#F2DECA",
			200: "#F0D1B2",
			250: "#EFC398",
			300: "#EDB57D",
			350: "#ECA965",
			400: "#EA9C4D",
			450: "#E88E33",
			500: "#E67F19",
			550: "#DE750D",
			600: "#D66B00",
			650: "#C56200",
			700: "#B35900",
			750: "#A15000",
			800: "#8F4700",
			850: "#7B3D00",
			900: "#663300",
			950: "#331A00",
		},
		"gray": {
			50: "#F6F7F7",
			100: "#ECEEEE",
			150: "#E0E3E4",
			200: "#D3D7D9",
			250: "#C6CBCD",
			300: "#B8BFC1",
			350: "#ABB3B6",
			400: "#9EA6AA",
			450: "#929B9F",
			500: "#858F93",
			550: "#798287",
			600: "#6C757A",
			650: "#616A6E",
			700: "#565E61",
			750: "#495053",
			800: "#3C4144",
			850: "#303437",
			900: "#242729",
			950: "#121415",
		},
	},
	colorPoints: {
		"black":                "#000000",
		"white":                "#FFFFFF",
		// More set below
	},
	shadows: {
		1: new ShadowData("0 1px 3px -1px rgba(0,0,0,{opacity})", 0.2),
		2: new ShadowData("0 1px 4px -1px rgba(0,0,0,{opacity})", 0.15 ),
		4: new ShadowData("0 1px 4px -0.5px rgba(0,0,0,{opacity})", 0.14 ),
		8: new ShadowData("0 3px 8px -2px rgba(0,0,0,{opacity})", 0.17 ),
		16: new ShadowData("0 6px 15px -4px rgba(0,0,0,{opacity})", 0.15 ),
		32: new ShadowData("0 10px 24px -7px rgba(0,0,0,{opacity})", 0.15 ),
	},
	commonBrowsers: {
		propertyPrefixes: {
			"object-fit": [
				"-o-object-fit",
				"object-fit",
			],
			"object-position": [
				"-o-object-position",
				"object-position",
			],
			"flex-basis": [
				"-webkit-flex-basis",
				"flex-basis",
			],
			"transform-origin": [
				"-webkit-transform-origin",
				"transform-origin",
			],
			"appearance": [
				"-webkit-appearance",
				"-moz-appearance",
				"appearance",
			],
			"user-select": [
				"-webkit-user-select",
				"-moz-user-select",
				"-ms-user-select",
				"user-select",
			],
			"transition-timing-function": [
				"-webkit-transition-timing-function",
				"transition-timing-function",
			],
			"transition-duration": [
				"-webkit-transition-duration",
				"transition-duration",
			],
			"transition-property": [
				"-webkit-transition-property",
				"transition-property",
			],
			"transform": [
				"-webkit-transform",
				"transform",
			],
			"flex-grow": [
				"-webkit-box-flex",
				"flex-grow",
			],
			"background-clip": [
				"-webkit-background-clip",
				"background-clip",
			],
		},
		declarationMap: {
			"display": {
				"flex": [
					new Declaration("display", "-webkit-box"),
					new Declaration("display", "flex"),
				],
				"inline-flex": [
					new Declaration("display", "-webkit-inline-box"),
					new Declaration("display", "inline-flex"),
				],
			},
			"flex-direction": {
				"column": [
					new Declaration("-webkit-box-orient", "vertical"),
					new Declaration("-webkit-box-direction", "normal"),
					new Declaration("flex-direction", "column"),
				],
				"column-reverse": [
					new Declaration("-webkit-box-orient", "vertical"),
					new Declaration("-webkit-box-direction", "reverse"),
					new Declaration("flex-direction", "column-reverse"),
				],
				"row": [
					new Declaration("-webkit-box-orient", "horizontal"),
					new Declaration("-webkit-box-direction", "normal"),
					new Declaration("flex-direction", "row"),
				],
				"row-reverse": [
					new Declaration("-webkit-box-orient", "horizontal"),
					new Declaration("-webkit-box-direction", "reverse"),
					new Declaration("flex-direction", "row-reverse"),
				],
			},
			"flex": {
				"1 1 0%": [
					new Declaration("-webkit-box-flex", "1"),
					new Declaration("flex", "1 1 0%"),
				],
				"1 1 auto": [
					new Declaration("-webkit-box-flex", "1"),
					new Declaration("flex", "1 1 auto"),
				],
				"0 1 auto": [
					new Declaration("-webkit-box-flex", "0"),
					new Declaration("flex", "0 1 auto"),
				],
				"none": [
					new Declaration("-webkit-box-flex", "0"),
					new Declaration("flex", "none"),
				],
			},
			"justify-content": {
				"flex-start": [
					new Declaration("-webkit-box-pack", "start"),
					new Declaration("justify-content", "flex-start"),
				],
				"center": [
					new Declaration("-webkit-box-pack", "center"),
					new Declaration("justify-content", "center"),
				],
				"end": [
					new Declaration("-webkit-box-pack", "end"),
					new Declaration("justify-content", "flex-end"),
				],
				"space-between": [
					new Declaration("-webkit-box-pack", "justify"),
					new Declaration("justify-content", "space-between"),
				],
				"space-around": [
					new Declaration("justify-content", "space-around"),
				],
				"space-evenly": [
					new Declaration("-webkit-box-pack", "space-evenly"),
					new Declaration("justify-content", "space-evenly"),
				],
			},
			"align-items": {
				"flex-start": [
					new Declaration("-webkit-box-align", "start"),
					new Declaration("align-items", "flex-start"),
				],
				"center": [
					new Declaration("-webkit-box-align", "center"),
					new Declaration("align-items", "center"),
				],
				"flex-end": [
					new Declaration("-webkit-box-align", "end"),
					new Declaration("align-items", "flex-end"),
				],
				"baseline": [
					new Declaration("-webkit-box-align", "baseline"),
					new Declaration("align-items", "baseline"),
				],
				"stretch": [
					new Declaration("-webkit-box-align", "stretch"),
					new Declaration("align-items", "stretch"),
				],
			},
			"position": {
				"sticky": [
					new Declaration("position", "-webkit-sticky"),
					new Declaration("position", "sticky"),
				],
			},
		},
		rewriteRuleFuncs: [
			rewriteSelectorFunc("::placeholder", [
				"::-webkit-input-placeholder",
				"::-moz-placeholder",
				":-ms-input-placeholder",
				"::-ms-input-placeholder",
				"::placeholder",
			]),
			rewriteSelectorFunc("::slider-thumb", [
				"::-moz-range-thumb",
				"::-webkit-slider-thumb",
				"::slider-thumb",
			]),
			prefixOrderDeclarations,
		],
	},
});

DefaultConfig.colorScales["brand"]   = DefaultConfig.colorScales["blue"]
DefaultConfig.colorScales["brand2"]  = DefaultConfig.colorScales["blue"]
DefaultConfig.colorScales["brand3"]  = DefaultConfig.colorScales["blue"]
DefaultConfig.colorScales["info"]    = DefaultConfig.colorScales["blue"]
DefaultConfig.colorScales["success"] = DefaultConfig.colorScales["green"]
DefaultConfig.colorScales["warning"] = DefaultConfig.colorScales["yellow"]
DefaultConfig.colorScales["danger"]  = DefaultConfig.colorScales["red"]
DefaultConfig.colorScales["action"]  = DefaultConfig.colorScales["blue"]

DefaultConfig.colorPoints["text"]                 = DefaultConfig.colorScales["gray"][800]
DefaultConfig.colorPoints["heading"]              = DefaultConfig.colorScales["gray"][800]
DefaultConfig.colorPoints["link"]                 = DefaultConfig.colorScales["blue"][500]
DefaultConfig.colorPoints["linkHover"]            = DefaultConfig.colorScales["blue"][600]
DefaultConfig.colorPoints["linkVisited"]          = DefaultConfig.colorScales["purple"][500]
DefaultConfig.colorPoints["linkVisitedHover"]     = DefaultConfig.colorScales["purple"][500]
DefaultConfig.colorPoints["darkText"]             = DefaultConfig.colorScales["gray"][100]
DefaultConfig.colorPoints["darkHeading"]          = DefaultConfig.colorScales["gray"][100]
DefaultConfig.colorPoints["darkLink"]             = DefaultConfig.colorScales["blue"][500]
DefaultConfig.colorPoints["darkLinkHover"]        = DefaultConfig.colorScales["blue"][400]
DefaultConfig.colorPoints["darkLinkVisited"]      = DefaultConfig.colorScales["purple"][500]
DefaultConfig.colorPoints["darkLinkVisitedHover"] = DefaultConfig.colorScales["purple"][400]

// Config with no cross-browser compatibility concerns
let NoCompatConfig = new ConfigStatic({
	colorPoints: DefaultConfig.colorPoints,
	colorScales: DefaultConfig.colorScales,
	shadows: DefaultConfig.shadows,
	commonBrowsers: {
		// Empty
		propertyPrefixes: {},
		declarationMap: {},
		rewriteRuleFuncs: [],
	},
});

export { NoCompatConfig, DefaultConfig };

