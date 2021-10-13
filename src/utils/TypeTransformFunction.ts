import type Config from "./Config";
import type Type from "./Type";
import parseAngle from './parseAngle';
import parseLengthPercentage from './parseLengthPercentage';
import ValueTransformFunction, {
	Rotate,
	Scale,
	Skew,
	TransformFunction,
	Translate,
} from './ValueTransformFunction';
import ValueFloat32 from './ValueFloat32';
import ValueAngle from './ValueAngle';
import ValueLength from './ValueLength';
import ValuePercentage from './ValuePercentage';
import type Value from './Value';

export default class TypeTransformFunction implements Type {
	constructor() {
		// NOP
	}

	parse(_config: Config, strArgs: Array<string>): [arg: Value, remainder: Array<string>] | undefined {
		let transformFunctions: Array<TransformFunction> = [];
		let remainder = strArgs;
		let res: [transformFunc: TransformFunction, remainder: Array<string>] | undefined;

		for (let i=0; i<1000; i++) { // Avoid looping forever in case of a bug
			if (remainder.length === 0) {
				break;
			}

			res = parseScale(remainder);
			if (res !== undefined) {
				let [ transformFunc, newRemainder ] = res;
				transformFunctions.push(transformFunc);
				remainder = newRemainder;
				continue;
			}
			
			res = parseRotate(remainder);
			if (res !== undefined) {
				let [ transformFunc, newRemainder ] = res;
				transformFunctions.push(transformFunc);
				remainder = newRemainder;
				continue;
			}

			res = parseTranslate(remainder);
			if (res !== undefined) {
				let [ transformFunc, newRemainder ] = res;
				transformFunctions.push(transformFunc);
				remainder = newRemainder;
				continue;
			}

			res = parseSkew(remainder);
			if (res !== undefined) {
				let [ transformFunc, newRemainder ] = res;
				transformFunctions.push(transformFunc);
				remainder = newRemainder;
				continue;
			}

			return undefined;
		}

		if (transformFunctions.length === 0) {
			return undefined;
		}

		let value = new ValueTransformFunction(...transformFunctions);

		return [ value, remainder ];
	}
}

export function parseScale(strArgs: Array<string>): [transformFunc: Scale, remainder: Array<string>] | undefined {
	if (strArgs.length < 2) {
		return undefined;
	}
	if (strArgs[0] !== "scale") {
		return undefined;
	}

	let f1 = parseFloat(strArgs[1]);
	if (f1.toString() !== strArgs[1]) {
		return undefined;
	}

	if (strArgs.length < 3) {
		let s = new Scale(new ValueFloat32(f1), new ValueFloat32(f1));
		return [ s, strArgs.slice(2) ];
	}

	let f2 = parseFloat(strArgs[2]);
	if (f2.toString() !== strArgs[2]) {
		// Not a float, maybe another transform function
		let s = new Scale(new ValueFloat32(f1), new ValueFloat32(f1));
		return [ s, strArgs.slice(2) ];
	}

	let s = new Scale(new ValueFloat32(f1), new ValueFloat32(f2));

	return [ s, strArgs.slice(3) ];
}

export function parseRotate(strArgs: Array<string>): [transformFunc: Rotate, remainder: Array<string>] | undefined {
	if (strArgs.length < 2) {
		return undefined;
	}
	if (strArgs[0] !== "rotate") {
		return undefined;
	}

	let res = parseAngle(strArgs[1], "deg");
	if (res === undefined) {
		return undefined;
	}
	let [ angleValue, angleUnit ] = res;

	let s = new Rotate(new ValueAngle(angleValue, angleUnit));
	
	return [ s, strArgs.slice(2) ];
}

export function parseSkew(strArgs: Array<string>): [transformFunc: Skew, remainder: Array<string>] | undefined {
	if (strArgs.length < 3) {
		return undefined;
	}
	if (strArgs[0] !== "skew") {
		return undefined;
	}

	let angleX = parseAngle(strArgs[1], "deg");
	if (angleX === undefined) {
		return undefined;
	}
	let [ xAngleValue, xAngleUnit ] = angleX;

	let angleY = parseAngle(strArgs[2], "deg");
	if (angleY === undefined) {
		return undefined;
	}
	let [ yAngleValue, yAngleUnit ] = angleY;

	let s = new Skew(
		new ValueAngle(xAngleValue, xAngleUnit),
		new ValueAngle(yAngleValue, yAngleUnit)
	);
	
	return [ s, strArgs.slice(3) ];
}

export function parseTranslate(strArgs: Array<string>): [transformFunc: Translate, remainder: Array<string>] | undefined {
	if (strArgs.length < 3) {
		return undefined;
	}
	if (strArgs[0] !== "translate") {
		return undefined;
	}

	let resX = parseLengthPercentage(strArgs[1], "px");
	if (resX === undefined) {
		return undefined;
	}
	let [ xValue, xUnit ] = resX;

	let resY = parseLengthPercentage(strArgs[2], "px");
	if (resY === undefined) {
		return undefined;
	}
	let [ yValue, yUnit ] = resY;

	const x = xUnit === '%' ? new ValuePercentage(xValue) : new ValueLength(xValue, xUnit);
	const y = yUnit === '%' ? new ValuePercentage(yValue) : new ValueLength(yValue, yUnit);

	let s = new Translate(x, y);

	return [ s, strArgs.slice(3) ];
}

