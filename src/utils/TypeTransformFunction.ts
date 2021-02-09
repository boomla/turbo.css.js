import Config from "./Config";
import Type from "./Type";
import ValueString from './ValueString';
import parseAngle from './parseAngle';
import parseLengthPercentage from './parseLengthPercentage';

export default class TypeTransformFunction implements Type {
	constructor() {
		// NOP
	}

	parse(_config: Config, strArgs: Array<string>): [arg: ValueString, remainder: Array<string>] | undefined {
		let s = "";
		let remainder = strArgs;
		let res: [transformFunc: string, remainder: Array<string>] | undefined;

		for (let i=0; i<1000; i++) { // Avoid looping forever in case of a bug
			if (remainder.length === 0) {
				break;
			}

			res = parseScale(remainder);
			if (res !== undefined) {
				let [ transformFunc, newRemainder ] = res;
				s += " " + transformFunc;
				remainder = newRemainder;
				continue;
			}
			
			res = parseRotate(remainder);
			if (res !== undefined) {
				let [ transformFunc, newRemainder ] = res;
				s += " " + transformFunc;
				remainder = newRemainder;
				continue;
			}

			res = parseTranslate(remainder);
			if (res !== undefined) {
				let [ transformFunc, newRemainder ] = res;
				s += " " + transformFunc;
				remainder = newRemainder;
				continue;
			}

			res = parseSkew(remainder);
			if (res !== undefined) {
				let [ transformFunc, newRemainder ] = res;
				s += " " + transformFunc;
				remainder = newRemainder;
				continue;
			}

			return undefined;
		}

		if (s.length === 0) {
			return undefined;
		}

		let value = new ValueString(s.substring(1));

		return [ value, remainder ];
	}
}

export function parseScale(strArgs: Array<string>): [transformFunc: string, remainder: Array<string>] | undefined {
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
	// Apply unit
	f1 = f1 * 0.01;

	if (strArgs.length < 3) {
		let s = "scale("+f1.toString()+")";
		return [ s, strArgs.slice(2) ];
	}

	let f2 = parseFloat(strArgs[2]);
	if (f2.toString() !== strArgs[2]) {
		// Not a float, maybe another transform function
		let s = "scale("+f1.toString()+")";
		return [ s, strArgs.slice(2) ];
	}
	// Apply unit
	f2 = f2 * 0.01

	let s = "scale("+f1.toString()+", "+f2.toString()+")";

	return [ s, strArgs.slice(3) ];
}

export function parseRotate(strArgs: Array<string>): [transformFunc: string, remainder: Array<string>] | undefined {
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

	let s = "rotate("+angleValue.toString()+angleUnit.toString()+")";
	
	return [ s, strArgs.slice(2) ];
}

export function parseSkew(strArgs: Array<string>): [transformFunc: string, remainder: Array<string>] | undefined {
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

	let s = "skew("+xAngleValue.toString()+xAngleUnit.toString()+", "+yAngleValue+yAngleUnit+")";
	
	return [ s, strArgs.slice(3) ];
}

export function parseTranslate(strArgs: Array<string>): [transformFunc: string, remainder: Array<string>] | undefined {
	if (strArgs.length < 2) {
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

	if (strArgs.length < 3) {
		let s = "translate("+xValue.toString()+xUnit.toString()+")";
		return [ s, strArgs.slice(2) ];
	}

	let resY = parseLengthPercentage(strArgs[2], "px");
	if (resY === undefined) {
		return undefined;
	}
	let [ yValue, yUnit ] = resY;

	let s = "translate("+xValue.toString()+xUnit.toString()+", "+yValue.toString()+yUnit.toString()+")";

	return [ s, strArgs.slice(3) ];
}

