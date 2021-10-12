import Config from "./Config";
import Value from "./Value";

export class ValueColorRGB {
	constructor(
		public readonly mode: "rgb" | "rgba",
		public readonly r: number,
		public readonly g: number,
		public readonly b: number,
		public readonly a: number
	) {
		this.r = clamp(r, 0, 255);
		this.g = clamp(g, 0, 255);
		this.b = clamp(b, 0, 255);
		this.a = clamp(a, 0, 100);
	}
	toCSS(): string {
		switch (this.mode) {
			case "rgb":
				return `rgb(${this.r}, ${this.g}, ${this.b})`;
			case "rgba":
				return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a}%)`;
		}
	}
	negate(): Value {
		throw new Error(`color [${this.toClassName()}] cannot be negated`);
	}
	toClassName(): string {
		switch (this.mode) {
			case "rgb":
				return `rgb-${this.r}-${this.g}-${this.b}`;
			case "rgba":
				return `rgb-${this.r}-${this.g}-${this.b}-${this.a}`;
		}
	}
}
export class ValueColorHex {
	constructor(
		public readonly mode: "hexRGB" | "hexRGBA" | "hexRRGGBB" | "hexRRGGBBAA",
		public readonly r: number,
		public readonly g: number,
		public readonly b: number,
		public readonly a: number
	) {
		this.r = clamp(r, 0, 255);
		this.g = clamp(g, 0, 255);
		this.b = clamp(b, 0, 255);
		this.a = clamp(a, 0, 255);
	}
	toCSS(): string {
		switch (this.mode) {
			case "hexRGB":
				return (
					"#" +
					hex1(this.r) +
					hex1(this.g) +
					hex1(this.b)
				);
			case "hexRGBA":
				return (
					"#" +
					hex1(this.r) +
					hex1(this.g) +
					hex1(this.b) +
					hex1(this.a)
				);
			case "hexRRGGBB":
				return (
					"#" +
					hex2(this.r) +
					hex2(this.g) +
					hex2(this.b)
				);
			case "hexRRGGBBAA":
				return (
					"#" +
					hex2(this.r) +
					hex2(this.g) +
					hex2(this.b) +
					hex2(this.a)
				);
		}
	}
	negate(): Value {
		throw new Error(`color [${this.toClassName()}] cannot be negated`);
	}
	toClassName(): string {
		switch (this.mode) {
			case "hexRGB":
				return (
					"hex-" +
					hex1(this.r) +
					hex1(this.g) +
					hex1(this.b)
				);
			case "hexRGBA":
				return (
					"hex-" +
					hex1(this.r) +
					hex1(this.g) +
					hex1(this.b) +
					hex1(this.a)
				);
			case "hexRRGGBB":
				return (
					"hex-" +
					hex2(this.r) +
					hex2(this.g) +
					hex2(this.b)
				);
			case "hexRRGGBBAA":
				return (
					"hex-" +
					hex2(this.r) +
					hex2(this.g) +
					hex2(this.b) +
					hex2(this.a)
				);
		}
	}
}
export class ValueColorHSL {
	constructor(
		public readonly mode: "hsl" | "hsla",
		public readonly h: number,
		public readonly s: number,
		public readonly l: number,
		public readonly a: number
	) {}
	toCSS(): string {
		switch (this.mode) {
			case "hsl":
				return `hsl(${this.h}deg, ${this.s}%, ${this.l}%)`;
			case "hsla":
				return `hsla(${this.h}deg, ${this.s}%, ${this.l}%, ${this.a}%)`;
		}
	}
	negate(): Value {
		throw new Error(`color [${this.toClassName()}] cannot be negated`);
	}
	toClassName(): string {
		if (this.mode === "hsla") {
			return `hsl-${this.h}-${this.s}-${this.l}-${this.a}`;
		}
		return `hsl-${this.h}-${this.s}-${this.l}`;
	}
}
export class ValueColorCurrent {
	toCSS(): string {
		return "currentColor";
	}
	negate(): Value {
		throw new Error(`color [${this.toClassName()}] cannot be negated`);
	}
	toClassName(): string {
		return "current";
	}
}
export class ValueColorScale {
	constructor(
		public readonly name: string,
		public readonly shade: number,
		public readonly opacity: number
	) {}
	toCSS(config: Config): string {
		const color = config.getColorScaleShade(this.name, this.shade);
		if (color === undefined) {
			throw new Error("invalid color scale name");
		}
		return color + opacityToHex(this.opacity);
	}
	negate(): Value {
		throw new Error(`color [${this.toClassName()}] cannot be negated`);
	}
	toClassName(): string {
		if (this.opacity === 100 && this.shade !== 500) {
			return [this.name, this.shade].join("-");
		}
		if (this.opacity === 100 && this.shade === 500) {
			return this.name;
		}
		return [this.name, this.shade, this.opacity].join("-");
	}
}
export class ValueColorPoint {
	constructor(public readonly name: string, public readonly opacity: number) {}
	toCSS(config: Config): string {
		const color = config.getColorPoint(this.name);
		if (color === undefined) {
			throw new Error("invalid color point name");
		}
		return color + opacityToHex(this.opacity);
	}
	negate(): Value {
		throw new Error(`color [${this.toClassName()}] cannot be negated`);
	}
	toClassName(): string {
		if (this.opacity === 100) {
			return this.name;
		}
		return [this.name, this.opacity].join("-");
	}
}
export class ValueColorTransparent {
	toCSS(): string {
		return "transparent";
	}
	negate(): Value {
		throw new Error(`color [${this.toClassName()}] cannot be negated`);
	}
	toClassName(): string {
		return "transparent";
	}
}

export type ValueColor =
	| ValueColorRGB
	| ValueColorHSL
	| ValueColorCurrent
	| ValueColorTransparent
	| ValueColorScale
	| ValueColorPoint;

function opacityToHex(opacity: number): string | undefined {
	opacity = clamp(opacity, 0, 100);
	if (100 === opacity) {
		return ""; // Do not add opacity to color code
	}

	const opacityValue = Math.floor((opacity / 100) * 256);

	let opacityHex = opacityValue.toString(16).toUpperCase();
	if (opacityHex.length === 1) {
		opacityHex = "0" + opacityHex;
	}

	return opacityHex;
}

export function clamp(x: number, min: number, max: number): number {
	if (max < min) {
		throw new Error(`min (${min}) should not be greater than max (${max})`);
	}
	if (x < min) {
		x = min;
	}
	if (max < x) {
		x = max;
	}
	return x;
}

export function hex1(n: number): string {
	n = clamp(n, 0, 255);
	return Math.floor(n/16).toString(16).toUpperCase();
}
export function hex2(n: number): string {
	n = clamp(n, 0, 255);
	return (n < 16 ? "0" : "") + Math.floor(n).toString(16).toUpperCase();
}
