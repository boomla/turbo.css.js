import Config from "./Config";
import ValueString from "./ValueString";
import Type from "./Type";

const COLOR_PARSERS: Array<Parser> = [
	parseColorRgba,
	parseColorRgb,
	parseColorHsla,
	parseColorHsl,
	parseColorHex,
	parseColorTransparent,
	parseColorCurrent,
	parseColorPoint,
	parseColorPointOpacity,
	parseColorScale,
	parseColorScaleShade,
	parseColorScaleShadeOpacity,
];

type Parser = (config: Config, strArgs: Array<string>) => [arg: ValueString, remainder: Array<string>] | undefined;

export default class TypeColor implements Type {
	parse(config: Config, strArgs: Array<string>): [arg: ValueString, remainder: Array<string>]|undefined {
		for (let parse of COLOR_PARSERS) {
			let res = parse(config, strArgs);
			if (res !== undefined) {
				return res;
			}
		}

		throw new Error("unknown color definition ["+strArgs.join("-")+"]");
	}
}

// rgb-{r}-{g}-{b}-{a}
function parseColorRgba(_config: Config, strArgs: Array<string>): [arg: ValueString, remainder: Array<string>]|undefined {
	let length = 5;
	if (strArgs.length !== length) {
		return undefined;
	}

	if (strArgs[0] !== "rgb") {
		return undefined;
	}

	let r = parseInt(strArgs[1]);
	if (r.toString() !== strArgs[1]) {
		return undefined;
	}
	let g = parseInt(strArgs[2]);
	if (g.toString() !== strArgs[2]) {
		return undefined;
	}
	let b = parseInt(strArgs[3]);
	if (b.toString() !== strArgs[3]) {
		return undefined;
	}
	let a = parseFloat(strArgs[4]);
	if (a.toString() !== strArgs[4]) {
		return undefined;
	}

	let color = "rgba("+r.toString()+", "+g.toString()+", "+b.toString()+", "+a.toString()+"%)";

	return [ new ValueString(color), strArgs.slice(length) ];
}

// rgb-{r}-{g}-{b}
function parseColorRgb(_config: Config, strArgs: Array<string>): [arg: ValueString, remainder: Array<string>]|undefined {
	let length = 4;
	if (strArgs.length !== length) {
		return undefined;
	}

	if (strArgs[0] !== "rgb") {
		return undefined;
	}

	let r = parseInt(strArgs[1]);
	if (r.toString() !== strArgs[1]) {
		return undefined;
	}
	let g = parseInt(strArgs[2]);
	if (g.toString() !== strArgs[2]) {
		return undefined;
	}
	let b = parseInt(strArgs[3]);
	if (b.toString() !== strArgs[3]) {
		return undefined;
	}

	let color = "rgb("+r.toString()+", "+g.toString()+", "+b.toString()+")";

	return [ new ValueString(color), strArgs.slice(length) ];
}

// hsl-{r}-{g}-{b}-{a}
function parseColorHsla(_config: Config, strArgs: Array<string>): [arg: ValueString, remainder: Array<string>]|undefined {
	let length = 5;
	if (strArgs.length !== length) {
		return undefined;
	}

	if (strArgs[0] !== "hsl") {
		return undefined;
	}

	let h = parseInt(strArgs[1]);
	if (h.toString() !== strArgs[1]) {
		return undefined;
	}
	let s = parseFloat(strArgs[2]);
	if (s.toString() !== strArgs[2]) {
		return undefined;
	}
	let l = parseFloat(strArgs[3]);
	if (l.toString() !== strArgs[3]) {
		return undefined;
	}
	let a = parseFloat(strArgs[4]);
	if (a.toString() !== strArgs[4]) {
		return undefined;
	}

	let hs = h.toString() + "deg";
	let ss = s.toString() + "%";
	let ls = l.toString() + "%";
	let as = a.toString() + "%";

	let color = "hsla("+hs+", "+ss+", "+ls+", "+as+")";

	return [ new ValueString(color), strArgs.slice(length) ];
}

// hsl-{r}-{g}-{b}
function parseColorHsl(_config: Config, strArgs: Array<string>): [arg: ValueString, remainder: Array<string>]|undefined {
	let length = 4;
	if (strArgs.length !== length) {
		return undefined;
	}

	if (strArgs[0] !== "hsl") {
		return undefined;
	}

	let h = parseInt(strArgs[1]);
	if (h.toString() !== strArgs[1]) {
		return undefined;
	}
	let s = parseFloat(strArgs[2]);
	if (s.toString() !== strArgs[2]) {
		return undefined;
	}
	let l = parseFloat(strArgs[3]);
	if (l.toString() !== strArgs[3]) {
		return undefined;
	}

	let hs = h.toString() + "deg";
	let ss = s.toString() + "%";
	let ls = l.toString() + "%";

	let color = "hsl("+hs+", "+ss+", "+ls+")";

	return [ new ValueString(color), strArgs.slice(length) ];
}

// hex-{rbg}
// hex-{rgba}
// hex-{rrggbb}
// hex-{rrggbbaa}
function parseColorHex(_config: Config, strArgs: Array<string>): [arg: ValueString, remainder: Array<string>]|undefined {
	let length = 2;
	if (strArgs.length !== length) {
		return undefined;
	}

	if (strArgs[0] !== "hex") {
		return undefined;
	}

	let hexStr = strArgs[1];
	switch (hexStr.length) {
		case 3:  break;
		case 4:  break;
		case 6:  break;
		case 8:  break;
		default: return undefined;
	}

	let upperCaseHexStr = hexStr.toUpperCase();

	// Assert it parses as a hex color
	if ( ! upperCaseHexStr.match(/^[0-9A-F]+$/)) {
		return undefined;
	}

	let color = new ValueString("#" + hexStr.toUpperCase());

	return [ color, strArgs.slice(length) ];
}

// transparent
function parseColorTransparent(_config: Config, strArgs: Array<string>): [arg: ValueString, remainder: Array<string>]|undefined {
	let length = 1;
	if (strArgs.length !== length) {
		return undefined;
	}

	if (strArgs[0] !== "transparent") {
		return undefined;
	}

	return [ new ValueString("transparent"), strArgs.slice(length) ];
}

// current
function parseColorCurrent(_config: Config, strArgs: Array<string>): [arg: ValueString, remainder: Array<string>]|undefined {
	let length = 1;
	if (strArgs.length !== length) {
		return undefined;
	}

	if (strArgs[0] !== "current") {
		return undefined;
	}

	return [ new ValueString("currentColor"), strArgs.slice(1) ];
}

// {pointName}
function parseColorPoint(config: Config, strArgs: Array<string>): [arg: ValueString, remainder: Array<string>]|undefined {
	let length = 1;
	if (strArgs.length !== length) {
		return undefined;
	}

	let colorPointName = strArgs[0];
	let color = config.getColorPoint(colorPointName);
	if (color === undefined) {
		return undefined;
	}

	return [ new ValueString(color), strArgs.slice(length) ];
}

// {pointName}-{opacity}
function parseColorPointOpacity(config: Config, strArgs: Array<string>): [arg: ValueString, remainder: Array<string>]|undefined {
	let length = 2;
	if (strArgs.length !== length) {
		return undefined;
	}

	let colorPointName = strArgs[0];
	let color = config.getColorPoint(colorPointName);
	if (color === undefined) {
		return undefined;
	}

	let opacityHex = parseOpacity(strArgs[1]);
	if (opacityHex === undefined) {
		return undefined;
	}

	color += opacityHex;

	return [ new ValueString(color), strArgs.slice(length) ];
}

// {scaleName}
function parseColorScale(config: Config, strArgs: Array<string>): [arg: ValueString, remainder: Array<string>]|undefined {
	let length = 1;
	if (strArgs.length !== length) {
		return undefined;
	}

	let colorScaleName = strArgs[0];
	let color = config.getColorScaleShade(colorScaleName, 500);
	if (color === undefined) {
		return undefined;
	}

	return [ new ValueString(color), strArgs.slice(length) ];
}

// {scaleName}-{shade}
function parseColorScaleShade(config: Config, strArgs: Array<string>): [arg: ValueString, remainder: Array<string>]|undefined {
	let length = 2;
	if (strArgs.length !== length) {
		return undefined;
	}

	let colorScaleName = strArgs[0];

	let shade = parseInt(strArgs[1]);
	if (shade.toString() !== strArgs[1]) {
		return undefined;
	}

	let color = config.getColorScaleShade(colorScaleName, shade);
	if (color === undefined) {
		return undefined;
	}

	return [ new ValueString(color), strArgs.slice(length) ];
}

// {scaleName}-{shade}-{opacity}
function parseColorScaleShadeOpacity(config: Config, strArgs: Array<string>): [arg: ValueString, remainder: Array<string>]|undefined {
	let length = 3;
	if (strArgs.length !== length) {
		return undefined;
	}

	let colorScaleName = strArgs[0];

	let shade = parseInt(strArgs[1])
	if (shade.toString() !== strArgs[1]) {
		return undefined;
	}

	let color = config.getColorScaleShade(colorScaleName, shade);
	if (color === undefined) {
		return undefined;
	}

	// Opacity
	let opacityHex = parseOpacity(strArgs[2]);
	if (opacityHex === undefined) {
		return undefined;
	}

	color += opacityHex;

	return [ new ValueString(color), strArgs.slice(length) ];
}

function parseOpacity(opacityStr: string): string | undefined {
	let opacity = parseInt(opacityStr);
	if (opacity.toString() !== opacityStr) {
		return undefined;
	}
	if ((opacity < 0) || (100 < opacity)) {
		return undefined;
	}
	if (100 === opacity) {
		return ""; // Do not add opacity to color code
	}

	let opacityValue = Math.floor(opacity / 100 * 256);

	let opacityHex = opacityValue.toString(16).toUpperCase();
	if (opacityHex.length === 1) {
		opacityHex = "0" + opacityHex;
	}

	return opacityHex;
}

