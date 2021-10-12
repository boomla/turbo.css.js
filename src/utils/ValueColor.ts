import Config from "./Config";
import Value from "./Value";

export class ValueColorRGB {
	constructor(
		public readonly mode: "rgb" | "rgba" | "hexRGB" | "hexRGBA" | "hexRRGGBB" | "hexRRGGBBAA",
		public readonly r: number,
		public readonly g: number,
		public readonly b: number,
		public readonly a: number
	) {
		this.r = r < 0 ? 0 : 255 < r ? 255 : r;
		this.g = g < 0 ? 0 : 255 < g ? 255 : g;
		this.b = b < 0 ? 0 : 255 < b ? 255 : b;
		this.a = a < 0 ? 0 : 255 < a ? 255 : a;
	}
	toCSS(): string {
		const a100 = (this.a * 100) / 255;
		switch (this.mode) {
			case "rgb":
				return `rgb(${this.r.toString()}, ${this.g.toString()}, ${this.b.toString()})`;
			case "rgba": {
				return `rgba(${this.r.toString()}, ${this.g.toString()}, ${this.b.toString()}, ${a100.toString()}%)`;
			}
			case "hexRGB":
				return (
					"#" +
					this.r.toString(16).toUpperCase()[0] +
					this.g.toString(16).toUpperCase()[0] +
					this.b.toString(16).toUpperCase()[0]
				);
			case "hexRGBA":
				return (
					"#" +
					this.r.toString(16).toUpperCase()[0] +
					this.g.toString(16).toUpperCase()[0] +
					this.b.toString(16).toUpperCase()[0] +
					this.a.toString(16).toUpperCase()[0]
				);
			case "hexRRGGBB":
				return (
					"#" +
					(this.r < 16 ? "0" : "") +
					this.r.toString(16).toUpperCase() +
					(this.g < 16 ? "0" : "") +
					this.g.toString(16).toUpperCase() +
					(this.b < 16 ? "0" : "") +
					this.b.toString(16).toUpperCase()
				);
			case "hexRRGGBBAA":
				return (
					"#" +
					(this.r < 16 ? "0" : "") +
					this.r.toString(16).toUpperCase() +
					(this.g < 16 ? "0" : "") +
					this.g.toString(16).toUpperCase() +
					(this.b < 16 ? "0" : "") +
					this.b.toString(16).toUpperCase() +
					(this.a < 16 ? "0" : "") +
					this.a.toString(16).toUpperCase()
				);
		}
	}
	negate(): Value {
		throw new Error(`color [${this.toClassName()}] cannot be negated`);
	}
	toClassName(): string {
		const a100 = (this.a * 100) / 255;
		switch (this.mode) {
			case "rgb":
				return `rgb-${this.r}-${this.g}-${this.b}`;
			case "rgba": {
				return `rgb-${this.r}-${this.g}-${this.b}-${a100.toString()}`;
			}
			case "hexRGB":
				return (
					"hex-" +
					this.r.toString(16).toLowerCase()[0] +
					this.g.toString(16).toLowerCase()[0] +
					this.b.toString(16).toLowerCase()[0]
				);
			case "hexRGBA":
				return (
					"hex-" +
					this.r.toString(16).toLowerCase()[0] +
					this.g.toString(16).toLowerCase()[0] +
					this.b.toString(16).toLowerCase()[0] +
					this.a.toString(16).toLowerCase()[0]
				);
			case "hexRRGGBB":
				return (
					"hex-" +
					(this.r < 16 ? "0" : "") +
					this.r.toString(16).toLowerCase() +
					(this.g < 16 ? "0" : "") +
					this.g.toString(16).toLowerCase() +
					(this.b < 16 ? "0" : "") +
					this.b.toString(16).toLowerCase()
				);
			case "hexRRGGBBAA":
				return (
					"hex-" +
					(this.r < 16 ? "0" : "") +
					this.r.toString(16).toLowerCase() +
					(this.g < 16 ? "0" : "") +
					this.g.toString(16).toLowerCase() +
					(this.b < 16 ? "0" : "") +
					this.b.toString(16).toLowerCase() +
					(this.a < 16 ? "0" : "") +
					this.a.toString(16).toLowerCase()
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
				return `hsl(${this.h.toString()}deg, ${this.s.toString()}%, ${this.l.toString()}%)`;
			case "hsla":
				return `hsla(${this.h.toString()}deg, ${this.s.toString()}%, ${this.l.toString()}%, ${this.a.toString()}%)`;
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
		// TODO?: if opacity is 0, return transparent?
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
	if (opacity < 0) {
		opacity = 0;
	}
	if (100 < opacity) {
		opacity = 100;
	}
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