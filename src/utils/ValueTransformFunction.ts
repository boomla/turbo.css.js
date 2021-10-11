import { UnitName } from "./UnitName";
import ValueFloat32 from "./ValueFloat32";
import ValueLength from "./ValueLength";
import ValuePercentage from "./ValuePercentage";
import ValueAngle from "./ValueAngle";
import Value from "./Value";

export interface TransformFunction {
	toCSS(def?: UnitName): string;
	toClassName(def?: UnitName): string;
}
export class Scale implements TransformFunction {
	readonly x: ValueFloat32;
	readonly y: ValueFloat32;
	constructor(x: ValueFloat32, y: ValueFloat32) {
		this.x = x;
		this.y = y;
	}
	toCSS(): string {
		// Apply unit
		const x = this.x.value * 0.01;
		const y = this.y.value * 0.01;
		if (x === y) {
			return `scale(${x})`;
		}
		return `scale(${x}, ${y})`;
	}
	toClassName(): string {
		if (this.x === this.y) {
			return `scale-${this.x.toClassName()}`;
		}
		return `scale-${this.x.toClassName()}-${this.y.toClassName()}`;
	}
}
export class Rotate implements TransformFunction {
	readonly angle: ValueAngle;
	constructor(angle: ValueAngle) {
		this.angle = angle;
	}
	toCSS(): string {
		return `rotate(${this.angle.toCSS()})`;
	}
	toClassName(): string {
		return `rotate-${this.angle.toClassName("deg")}`;
	}
}
export class Translate implements TransformFunction {
	readonly x: ValueLength | ValuePercentage;
	readonly y: ValueLength | ValuePercentage | undefined;
	constructor(x: ValueLength | ValuePercentage, y?: ValueLength | ValuePercentage) {
		this.x = x;
		this.y = y;
	}
	toCSS(): string {
		if (!this.y) {
			return `translate(${this.x.toCSS()})`;
		}
		return `translate(${this.x.toCSS()}, ${this.y.toCSS()})`;
	}
	toClassName(): string {
		if (!this.y) {
			return `translate-${this.x.toClassName("px")}`;
		}
		return `translate-${this.x.toClassName("px")}-${this.y.toClassName("px")}`;
	}
}
export class Skew implements TransformFunction {
	readonly x: ValueAngle;
	readonly y: ValueAngle;
	constructor(x: ValueAngle, y: ValueAngle) {
		this.x = x;
		this.y = y;
	}
	toCSS(): string {
		return `skew(${this.x.toCSS()}, ${this.y.toCSS()})`;
	}
	toClassName(): string {
		return `skew-${this.x.toClassName("deg")}-${this.y.toClassName("deg")}`;
	}
}

export default class ValueTransformFunction {
	readonly transforms: Array<TransformFunction> = [];

	constructor(...transforms: Array<TransformFunction>) {
		this.transforms = transforms;
	}

	toCSS(): string {
		const transformStrings: string[] = this.transforms.map((transform) => transform.toCSS());
		return transformStrings.join(" ");
	}
	negate(): Value {
		throw new Error("unsupported method");
	}
	toClassName(): string {
		const transformStrings: string[] = this.transforms.map((transform) =>
			transform.toClassName()
		);
		return transformStrings.join("-");
	}
}
