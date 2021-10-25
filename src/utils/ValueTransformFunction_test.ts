import ValueTransformFunction from "./ValueTransformFunction";
import { Rotate } from "./ValueTransformFunction";
import { Scale } from "./ValueTransformFunction";
import { Skew } from "./ValueTransformFunction";
import { Translate } from "./ValueTransformFunction";
import { assert } from "chai";
import ValueFloat32 from "./ValueFloat32";
import ValueAngle from "./ValueAngle";
import ValueLength from "./ValueLength";
import ValuePercentage from "./ValuePercentage";

describe('Scale', function () {
	it('.toCSS()', function () {
		let ok = function (transformFunc: Scale, exp: string) {
			let act = transformFunc.toCSS();
			assert.equal(act, exp);
		};
		ok(new Scale(new ValueFloat32(0), new ValueFloat32(0)), "scale(0)");
		ok(new Scale(new ValueFloat32(100), new ValueFloat32(100)), "scale(1)");
		ok(new Scale(new ValueFloat32(-100), new ValueFloat32(-100)), "scale(-1)");
		ok(new Scale(new ValueFloat32(100), new ValueFloat32(50)), "scale(1, 0.5)");
	});
	it('.toClassName()', function () {
		let ok = function (transformFunc: Scale, exp: string) {
			let act = transformFunc.toClassName();
			assert.equal(act, exp);
		};
		ok(new Scale(new ValueFloat32(0), new ValueFloat32(0)), "scale-0-0");
		ok(new Scale(new ValueFloat32(1), new ValueFloat32(2)), "scale-1-2");
		ok(new Scale(new ValueFloat32(-1), new ValueFloat32(-2)), "scale--1--2");
	});
});
describe('Rotate', function () {
	it('.toCSS()', function () {
		let ok = function (transformFunc: Rotate, exp: string) {
			let act = transformFunc.toCSS();
			assert.equal(act, exp);
		};
		ok(new Rotate(new ValueAngle(0, "deg")), "rotate(0deg)");
		ok(new Rotate(new ValueAngle(60, "deg")), "rotate(60deg)");
		ok(new Rotate(new ValueAngle(-60, "deg")), "rotate(-60deg)");
		ok(new Rotate(new ValueAngle(0.5, "turn")), "rotate(0.5turn)");
	});
	it('.toClassName()', function () {
		let ok = function (transformFunc: Rotate, exp: string) {
			let act = transformFunc.toClassName();
			assert.equal(act, exp);
		};
		ok(new Rotate(new ValueAngle(0, "deg")), "rotate-0");
		ok(new Rotate(new ValueAngle(60, "deg")), "rotate-60");
		ok(new Rotate(new ValueAngle(-60, "deg")), "rotate--60");
		ok(new Rotate(new ValueAngle(0.5, "turn")), "rotate-0.5turn");
	});
});
describe('Translate', function () {
	it('.toCSS()', function () {
		let ok = function (transformFunc: Translate, exp: string) {
			let act = transformFunc.toCSS();
			assert.equal(act, exp);
		};
		ok(new Translate(new ValueLength(0, "px"), new ValueLength(0, "px")), "translate(0, 0)");
		ok(
			new Translate(new ValueLength(1, "px"), new ValueLength(2, "px")),
			"translate(1px, 2px)"
		);
		ok(
			new Translate(new ValueLength(-1, "px"), new ValueLength(-2, "px")),
			"translate(-1px, -2px)"
		);
		ok(new Translate(new ValuePercentage(1), new ValuePercentage(2)), "translate(1%, 2%)");
		ok(new Translate(new ValueLength(1, "px")), "translate(1px)");
	});
	it('.toClassName()', function () {
		let ok = function (transformFunc: Translate, exp: string) {
			let act = transformFunc.toClassName();
			assert.equal(act, exp);
		};
		ok(new Translate(new ValueLength(0, "px"), new ValueLength(0, "px")), "translate-0-0");
		ok(new Translate(new ValueLength(1, "px"), new ValueLength(2, "px")), "translate-1-2");
		ok(new Translate(new ValueLength(-1, "px"), new ValueLength(-2, "px")), "translate--1--2");
		ok(new Translate(new ValueLength(1, "vh"), new ValueLength(2, "vh")), "translate-1vh-2vh");
		ok(new Translate(new ValuePercentage(1), new ValuePercentage(2)), "translate-1%-2%");
		ok(new Translate(new ValueLength(1, "px")), "translate-1");
	});
});
describe('Skew', function () {
	it('.toCSS()', function () {
		let ok = function (transformFunc: Skew, exp: string) {
			let act = transformFunc.toCSS();
			assert.equal(act, exp);
		};
		ok(new Skew(new ValueAngle(0, "deg"), new ValueAngle(0, "deg")), "skew(0deg, 0deg)");
		ok(new Skew(new ValueAngle(60, "deg"), new ValueAngle(70, "deg")), "skew(60deg, 70deg)");
		ok(
			new Skew(new ValueAngle(0.1, "turn"), new ValueAngle(0.5, "turn")),
			"skew(0.1turn, 0.5turn)"
		);
	});
	it('.toClassName()', function () {
		let ok = function (transformFunc: Skew, exp: string) {
			let act = transformFunc.toClassName();
			assert.equal(act, exp);
		};
		ok(new Skew(new ValueAngle(0, "deg"), new ValueAngle(0, "deg")), "skew-0-0");
		ok(new Skew(new ValueAngle(60, "deg"), new ValueAngle(70, "deg")), "skew-60-70");
		ok(new Skew(new ValueAngle(-60, "deg"), new ValueAngle(-70, "deg")), "skew--60--70");
		ok(
			new Skew(new ValueAngle(0.1, "turn"), new ValueAngle(0.5, "turn")),
			"skew-0.1turn-0.5turn"
		);
	});
});

describe('ValueTransformFunction', function () {
	it('.toCSS()', function () {
		let ok = function (transformFunc: ValueTransformFunction, exp: string) {
			let act = transformFunc.toCSS();
			assert.equal(act, exp);
		};
		ok(
			new ValueTransformFunction(
				new Skew(new ValueAngle(10, "deg"), new ValueAngle(-10, "deg")),
				new Rotate(new ValueAngle(60, "deg")),
				new Translate(new ValueLength(-10, "px"), new ValueLength(10, "px")),
				new Scale(new ValueFloat32(50), new ValueFloat32(110))
			),
			"skew(10deg, -10deg) rotate(60deg) translate(-10px, 10px) scale(0.5, 1.1)"
		);
	});
	it('.toClassName()', function () {
		let ok = function (transformFunc: ValueTransformFunction, exp: string) {
			let act = transformFunc.toClassName();
			assert.equal(act, exp);
		};
		ok(
			new ValueTransformFunction(
				new Skew(new ValueAngle(10, "deg"), new ValueAngle(-10, "deg")),
				new Rotate(new ValueAngle(60, "deg")),
				new Translate(new ValueLength(-10, "px"), new ValueLength(10, "px")),
				new Scale(new ValueFloat32(50), new ValueFloat32(110))
			),
			"skew-10--10-rotate-60-translate--10-10-scale-50-110"
		);
	});
});
