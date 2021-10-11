import { assert } from "chai";
import {
	ValueColor,
	ValueColorCurrent,
	ValueColorHSL,
	ValueColorPoint,
	ValueColorRGB,
	ValueColorScale,
	ValueColorTransparent,
} from "./ValueColor";
import ConfigStatic from "./ConfigStatic";

const config = new ConfigStatic({
	colorPoints: {
		linkVisited: "#111115",
		heading: "#111113",
	},
	colorScales: {
		blue: {
			100: "#DEEFF7",
			500: "#12A4E2",
		},
	},
});
let okToCSS = function (value: ValueColor, exp: string) {
	let act = value.toCSS(config);
	assert.equal(act, exp);
};
let okToClassName = function (value: ValueColor, exp: string) {
	let act = value.toClassName();
	assert.equal(act, exp);
};
describe('ValueColorRGB', function () {
	it('toCSS', () => {
		okToCSS(new ValueColorRGB("hexRGB", 170, 204, 238, 255), "#ACE");
		okToCSS(new ValueColorRGB("hexRRGGBB", 171, 205, 239, 255), "#ABCDEF");
		okToCSS(new ValueColorRGB("hexRGBA", 170, 204, 238, 85), "#ACE5");
		okToCSS(new ValueColorRGB("hexRRGGBBAA", 171, 205, 239, 106), "#ABCDEF6A");
		okToCSS(new ValueColorRGB("rgb", 100, 101, 102, 255), "rgb(100, 101, 102)");
		okToCSS(new ValueColorRGB("rgba", 100, 101, 102, 124.95), "rgba(100, 101, 102, 49%)");
	});
	it('toClassName', () => {
		okToClassName(new ValueColorRGB("hexRGB", 170, 204, 238, 255), "hex-ace");
		okToClassName(new ValueColorRGB("hexRRGGBB", 171, 205, 239, 255), "hex-abcdef");
		okToClassName(new ValueColorRGB("hexRGBA", 170, 204, 238, 85), "hex-ace5");
		okToClassName(new ValueColorRGB("hexRRGGBBAA", 171, 205, 239, 106), "hex-abcdef6a");
		okToClassName(new ValueColorRGB("rgb", 100, 101, 102, 255), "rgb-100-101-102");
		okToClassName(new ValueColorRGB("rgba", 100, 101, 102, 124.95), "rgb-100-101-102-49");
	});
	it('constructor should clamp values to the [0, 255] interval', () => {
		okToCSS(new ValueColorRGB("hexRRGGBBAA", -1, -1, -1, -1), "#00000000");
		okToCSS(new ValueColorRGB("hexRRGGBBAA", 300, 300, 300, 300), "#FFFFFFFF");
	});
	it('alpha should not matter when mode is hexRGB, hexRRGGBB, or rgb', () => {
		okToCSS(new ValueColorRGB("hexRGB", 0, 0, 0, 100), "#000");
		okToCSS(new ValueColorRGB("hexRRGGBB", 0, 0, 0, 100), "#000000");
		okToCSS(new ValueColorRGB("rgb", 0, 0, 0, 100), "rgb(0, 0, 0)");
	});
	it('left padding with zeros in hexRRGGBB and hexRRGGBBAA modes', () => {
		okToCSS(new ValueColorRGB("hexRRGGBB", 1, 1, 1, 1), "#010101");
		okToCSS(new ValueColorRGB("hexRRGGBBAA", 1, 1, 1, 1), "#01010101");
		okToClassName(new ValueColorRGB("hexRRGGBB", 1, 1, 1, 1), "hex-010101");
		okToClassName(new ValueColorRGB("hexRRGGBBAA", 1, 1, 1, 1), "hex-01010101");
	});
});
describe('ValueColorHSL', function () {
	it('toCSS', () => {
		okToCSS(new ValueColorHSL("hsl", 120, 75, 80, 100), "hsl(120deg, 75%, 80%)");
		okToCSS(new ValueColorHSL("hsla", 180, 50, 50, 50), "hsla(180deg, 50%, 50%, 50%)");
	});
	it('toClassName', () => {
		okToClassName(new ValueColorHSL("hsl", 120, 75, 80, 100), "hsl-120-75-80");
		okToClassName(new ValueColorHSL("hsla", 180, 50, 50, 50), "hsl-180-50-50-50");
	});
});
describe('ValueColorCurrent', function () {
	it('toCSS', () => {
		okToCSS(new ValueColorCurrent(), "currentColor");
	});
	it('toClassName', () => {
		okToClassName(new ValueColorCurrent(), "current");
	});
});
describe('ValueColorTransparent', function () {
	it('toCSS', () => {
		okToCSS(new ValueColorTransparent(), "transparent");
	});
	it('toClassName', () => {
		okToClassName(new ValueColorTransparent(), "transparent");
	});
});
describe('ValueColorScale', function () {
	it('toCSS', () => {
		okToCSS(new ValueColorScale("blue", 500, 100), "#12A4E2");
		okToCSS(new ValueColorScale("blue", 100, 100), "#DEEFF7");
		okToCSS(new ValueColorScale("blue", 500, 50), "#12A4E280");
		okToCSS(new ValueColorScale("blue", 100, 50), "#DEEFF780");
	});
	it('toClassName', () => {
		okToClassName(new ValueColorScale("blue", 500, 100), "blue");
		okToClassName(new ValueColorScale("blue", 100, 100), "blue-100");
		okToClassName(new ValueColorScale("blue", 500, 50), "blue-500-50");
		okToClassName(new ValueColorScale("blue", 100, 50), "blue-100-50");
	});
});
describe('ValueColorPoint', function () {
	it('toCSS', () => {
		okToCSS(new ValueColorPoint("linkVisited", 100), "#111115");
		okToCSS(new ValueColorPoint("linkVisited", 50), "#11111580");
		okToCSS(new ValueColorPoint("linkVisited", 99), "#111115FD");
		okToCSS(new ValueColorPoint("heading", 100), "#111113");
	});
	it('toClassName', () => {
		okToClassName(new ValueColorPoint("linkVisited", 100), "linkVisited");
		okToClassName(new ValueColorPoint("linkVisited", 50), "linkVisited-50");
		okToClassName(new ValueColorPoint("heading", 100), "heading");
	});
});
