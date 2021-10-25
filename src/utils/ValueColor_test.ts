import { assert } from "chai";
import { clamp } from "./ValueColor";
import { hex1 } from "./ValueColor";
import { hex2 } from "./ValueColor";
import { ValueColorCurrent } from "./ValueColor";
import { ValueColorHex } from "./ValueColor";
import { ValueColorHSL } from "./ValueColor";
import { ValueColorPoint } from "./ValueColor";
import { ValueColorRGB } from "./ValueColor";
import { ValueColorScale } from "./ValueColor";
import { ValueColorTransparent } from "./ValueColor";
import type { ValueColor } from "./ValueColor";
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
		okToCSS(new ValueColorRGB("rgb", 100, 101, 102, 100), "rgb(100, 101, 102)");
		okToCSS(new ValueColorRGB("rgba", 100, 101, 102, 49), "rgba(100, 101, 102, 49%)");
	});
	it('toClassName', () => {
		okToClassName(new ValueColorRGB("rgb", 100, 101, 102, 100), "rgb-100-101-102");
		okToClassName(new ValueColorRGB("rgba", 100, 101, 102, 49), "rgb-100-101-102-49");
	});
	it('constructor should clamp values', () => {
		okToCSS(new ValueColorRGB("rgba", -1, -1, -1, -1), "rgba(0, 0, 0, 0%)");
		okToCSS(new ValueColorRGB("rgba", 300, 300, 300, 101), "rgba(255, 255, 255, 100%)");
	});
	it('alpha should not matter when mode is rgb', () => {
		okToCSS(new ValueColorRGB("rgb", 0, 0, 0, 100), "rgb(0, 0, 0)");
	});
});
describe('ValueColorHex', () => {
	it('toCSS', () => {
		okToCSS(new ValueColorHex("hexRGB", 170, 204, 238, 255), "#ACE");
		okToCSS(new ValueColorHex("hexRRGGBB", 171, 205, 239, 255), "#ABCDEF");
		okToCSS(new ValueColorHex("hexRGBA", 170, 204, 238, 85), "#ACE5");
		okToCSS(new ValueColorHex("hexRRGGBBAA", 171, 205, 239, 106), "#ABCDEF6A");
	});
	it('toClassName', () => {
		okToClassName(new ValueColorHex("hexRGB", 170, 204, 238, 255), "hex-ACE");
		okToClassName(new ValueColorHex("hexRRGGBB", 171, 205, 239, 255), "hex-ABCDEF");
		okToClassName(new ValueColorHex("hexRGBA", 170, 204, 238, 85), "hex-ACE5");
		okToClassName(new ValueColorHex("hexRRGGBBAA", 171, 205, 239, 106), "hex-ABCDEF6A");
	});
	it('constructor should clamp values', () => {
		okToCSS(new ValueColorHex("hexRRGGBBAA", -1, -1, -1, -1), "#00000000");
		okToCSS(new ValueColorHex("hexRRGGBBAA", 300, 300, 300, 300), "#FFFFFFFF");
	});
	it('alpha should not matter when mode is hexRGB, hexRRGGBB', () => {
		okToCSS(new ValueColorHex("hexRGB", 0, 0, 0, 100), "#000");
		okToCSS(new ValueColorHex("hexRRGGBB", 0, 0, 0, 100), "#000000");
	});
	it('left padding with zeros in hexRRGGBB and hexRRGGBBAA modes', () => {
		okToCSS(new ValueColorHex("hexRRGGBB", 1, 1, 1, 1), "#010101");
		okToCSS(new ValueColorHex("hexRRGGBBAA", 1, 1, 1, 1), "#01010101");
		okToClassName(new ValueColorHex("hexRRGGBB", 1, 1, 1, 1), "hex-010101");
		okToClassName(new ValueColorHex("hexRRGGBBAA", 1, 1, 1, 1), "hex-01010101");
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

describe('clamp', () => {
	const ok = function(n: number, min: number, max: number, exp: number) {
		let act = clamp(n, min, max);
		assert.equal(act, exp);
	}
	it('do not clamp when in the interval', () => {
		ok(5, 0, 10, 5);
	});
	it('clamp to min', () => {
		ok(-1, 0, 10, 0);
	});
	it('clamp to max', () => {
		ok(11, 0, 10, 10);
	});
	it('throw error when max is less than min', () => {
		let actErr: string = "clamp should throw error";
		let expErr = "Error: min (10) should not be greater than max (0)"
		try {
			clamp(5, 10, 0);
		}
		catch(e: unknown) {
			if ( ! (e instanceof Error)) {
				throw new Error('unexpected error #aosdufn9asd9fh7283ndsidnf8w89etn');
			}
			actErr = e.toString();
		}
		assert.equal(actErr, expErr);
	});
});

describe('hex1', () => {
	const ok = function(n: number, exp: string) {
		let act = hex1(n);
		assert.equal(act, exp);
	}
	it('return the digit on the second position (16)', () => {
		ok(1, '0'); // 0x01
		ok(15, '0'); // 0x0F
		ok(16, '1'); // 0x10
		ok(128, '8'); // 0x80
		ok(255, 'F'); // 0xFF
	});
	it('clamp to [0, 255]', () => {
		ok(-1, '0');
		ok(300, 'F');
	});
	it('fractions should not matter', () => {
		ok(15.5, '0');
	});
});
describe('hex2', () => {
	const ok = function(n: number, exp: string) {
		let act = hex2(n);
		assert.equal(act, exp);
	}
	it('return the digits on the first two positions, pad with 0 if necessary', () => {
		ok(1, '01'); // 0x01
		ok(15, '0F'); // 0x0F
		ok(16, '10'); // 0x10
		ok(128, '80'); // 0x80
		ok(255, 'FF'); // 0xFF
	});
	it('clamp to [0, 255]', () => {
		ok(-1, '00');
		ok(300, 'FF');
	});
	it('fractions should not matter', () => {
		ok(15.5, '0F');
	});
});
