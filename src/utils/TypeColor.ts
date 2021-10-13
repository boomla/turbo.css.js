import type Config from "./Config";
import {
	ValueColorRGB,
	ValueColorHSL,
	ValueColorCurrent,
	ValueColorTransparent,
	ValueColorPoint,
	ValueColorScale,
	ValueColor,
	ValueColorHex,
} from './ValueColor';
import type Type from "./Type";

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

type Parser = (config: Config, strArgs: Array<string>) => [arg: ValueColor, remainder: Array<string>] | undefined;

export default class TypeColor implements Type {
	parse(config: Config, strArgs: Array<string>): [arg: ValueColor, remainder: Array<string>]|undefined {
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
function parseColorRgba(_config: Config, strArgs: Array<string>): [arg: ValueColor, remainder: Array<string>]|undefined {
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

	return [ new ValueColorRGB('rgba', r, g, b, a), strArgs.slice(length) ];
}

// rgb-{r}-{g}-{b}
function parseColorRgb(_config: Config, strArgs: Array<string>): [arg: ValueColor, remainder: Array<string>]|undefined {
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

	return [ new ValueColorRGB('rgb', r, g, b, 100), strArgs.slice(length) ];
}

// hsl-{r}-{g}-{b}-{a}
function parseColorHsla(_config: Config, strArgs: Array<string>): [arg: ValueColor, remainder: Array<string>]|undefined {
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

	return [ new ValueColorHSL('hsla', h, s, l, a), strArgs.slice(length) ];
}

// hsl-{r}-{g}-{b}
function parseColorHsl(_config: Config, strArgs: Array<string>): [arg: ValueColor, remainder: Array<string>]|undefined {
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

	return [ new ValueColorHSL('hsl', h, s, l, 100), strArgs.slice(length) ];
}

// hex-{rbg}
// hex-{rgba}
// hex-{rrggbb}
// hex-{rrggbbaa}
function parseColorHex(_config: Config, strArgs: Array<string>): [arg: ValueColor, remainder: Array<string>]|undefined {
	let length = 2;
	if (strArgs.length !== length) {
		return undefined;
	}

	if (strArgs[0] !== "hex") {
		return undefined;
	}

	let hexStr = strArgs[1];
	let lowerHexStr = hexStr.toLowerCase();

	// Assert it parses as a hex color
	if ( ! lowerHexStr.match(/^[0-9a-f]+$/)) {
		return undefined;
	}

	let color: ValueColor | undefined;

	switch (lowerHexStr.length) {
		case 3:
			{
				const r = parseInt(lowerHexStr[0] + lowerHexStr[0], 16);
				const g = parseInt(lowerHexStr[1] + lowerHexStr[1], 16);
				const b = parseInt(lowerHexStr[2] + lowerHexStr[2], 16);
				color = new ValueColorHex('hexRGB', r, g, b, 255);
			}
			break;
		case 4:
			{
				const r = parseInt(lowerHexStr[0] + lowerHexStr[0], 16);
				const g = parseInt(lowerHexStr[1] + lowerHexStr[1], 16);
				const b = parseInt(lowerHexStr[2] + lowerHexStr[2], 16);
				const a = parseInt(lowerHexStr[3] + lowerHexStr[3], 16);
				color = new ValueColorHex('hexRGBA', r, g, b, a);
			}
			break;
		case 6:
			{
				const r = parseInt(lowerHexStr.slice(0, 2), 16);
				const g = parseInt(lowerHexStr.slice(2, 4), 16);
				const b = parseInt(lowerHexStr.slice(4, 6), 16);
				color = new ValueColorHex('hexRRGGBB', r, g, b, 255);
			}
			break;
		case 8:
			{
				const r = parseInt(lowerHexStr.slice(0, 2), 16);
				const g = parseInt(lowerHexStr.slice(2, 4), 16);
				const b = parseInt(lowerHexStr.slice(4, 6), 16);
				const a = parseInt(lowerHexStr.slice(6, 8), 16);
				color = new ValueColorHex('hexRRGGBBAA', r, g, b, a);
			}
			break;
		default:
			return undefined;
	}

	return [ color, strArgs.slice(length) ];
}

// transparent
function parseColorTransparent(_config: Config, strArgs: Array<string>): [arg: ValueColor, remainder: Array<string>]|undefined {
	let length = 1;
	if (strArgs.length !== length) {
		return undefined;
	}

	if (strArgs[0] !== "transparent") {
		return undefined;
	}

	return [ new ValueColorTransparent(), strArgs.slice(length) ];
}

// current
function parseColorCurrent(_config: Config, strArgs: Array<string>): [arg: ValueColor, remainder: Array<string>]|undefined {
	let length = 1;
	if (strArgs.length !== length) {
		return undefined;
	}

	if (strArgs[0] !== "current") {
		return undefined;
	}

	return [ new ValueColorCurrent(), strArgs.slice(1) ];
}

// {pointName}
function parseColorPoint(config: Config, strArgs: Array<string>): [arg: ValueColor, remainder: Array<string>]|undefined {
	let length = 1;
	if (strArgs.length !== length) {
		return undefined;
	}

	let colorPointName = strArgs[0];
	let color = config.getColorPoint(colorPointName);
	if (color === undefined) {
		return undefined;
	}

	return [ new ValueColorPoint(colorPointName, 100), strArgs.slice(length) ];
}

// {pointName}-{opacity}
function parseColorPointOpacity(config: Config, strArgs: Array<string>): [arg: ValueColor, remainder: Array<string>]|undefined {
	let length = 2;
	if (strArgs.length !== length) {
		return undefined;
	}

	let colorPointName = strArgs[0];
	let color = config.getColorPoint(colorPointName);
	if (color === undefined) {
		return undefined;
	}

	let opacityStr = strArgs[1];
	let opacity = parseInt(opacityStr);
	if (opacity.toString() !== opacityStr) {
		return undefined;
	}
	if (opacity < 0 || 100 < opacity) {
		return undefined;
	}

	return [ new ValueColorPoint(colorPointName, opacity), strArgs.slice(length) ];
}

// {scaleName}
function parseColorScale(config: Config, strArgs: Array<string>): [arg: ValueColor, remainder: Array<string>]|undefined {
	let length = 1;
	if (strArgs.length !== length) {
		return undefined;
	}

	let colorScaleName = strArgs[0];
	let color = config.getColorScaleShade(colorScaleName, 500);
	if (color === undefined) {
		return undefined;
	}

	return [ new ValueColorScale(colorScaleName, 500, 100), strArgs.slice(length) ];
}

// {scaleName}-{shade}
function parseColorScaleShade(config: Config, strArgs: Array<string>): [arg: ValueColor, remainder: Array<string>]|undefined {
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

	return [ new ValueColorScale(colorScaleName, shade, 100), strArgs.slice(length) ];
}

// {scaleName}-{shade}-{opacity}
function parseColorScaleShadeOpacity(config: Config, strArgs: Array<string>): [arg: ValueColor, remainder: Array<string>]|undefined {
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
	let opacityStr = strArgs[2];
	let opacity = parseInt(opacityStr);
	if (opacity.toString() !== opacityStr) {
		return undefined;
	}
	if (opacity < 0 || 100 < opacity) {
		return undefined;
	}

	return [ new ValueColorScale(colorScaleName, shade, opacity), strArgs.slice(length) ];
}
