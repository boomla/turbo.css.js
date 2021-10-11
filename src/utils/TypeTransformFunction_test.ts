import TypeTransformFunction from './TypeTransformFunction';
import ValueString from './ValueString';
import ConfigStatic from './ConfigStatic';
import { assert } from 'chai';

describe('TypeTransformFunction', function() {
	it('.parse()', function() {
		let config = new ConfigStatic();

		let ok = function(msg: string, typ: TypeTransformFunction, strArgs: Array<string>, expValue: ValueString, expRemainder: Array<string>) {
			let act = typ.parse(config, strArgs);
			if (act === undefined) {
				throw new Error(msg + strArgs.toString());
			}
			let exp = [ expValue, expRemainder ];
			assert.deepEqual(act, exp);
		};
		let mismatch = function(msg: string, typ: TypeTransformFunction, strArgs: Array<string>) {
			let act = typ.parse(config, strArgs);
			if (act !== undefined) {
				throw new Error(msg + strArgs.toString());
			}
		};

		ok("scale-{ratio}",
			new TypeTransformFunction(),
			[ "scale", "50" ],
			new ValueString("scale(0.5)"),
			[],
		);
		ok("scale-{x}-{y}",
			new TypeTransformFunction(),
			[ "scale", "50", "200" ],
			new ValueString("scale(0.5, 2)"),
			[],
		);

		ok("rotate-{angle}",
			new TypeTransformFunction(),
			[ "rotate", "90" ],
			new ValueString("rotate(90deg)"),
			[],
		);

		ok("skew-{x}-{y}",
			new TypeTransformFunction(),
			[ "skew", "10", "20" ],
			new ValueString("skew(10deg, 20deg)"),
			[],
		);

		ok("translate-{length}",
			new TypeTransformFunction(),
			[ "translate", "10" ],
			new ValueString("translate(10px)"),
			[],
		);
		ok("translate-{x}-{y}",
			new TypeTransformFunction(),
			[ "translate", "10", "20" ],
			new ValueString("translate(10px, 20px)"),
			[],
		);

		ok("multiple transform functions",
			new TypeTransformFunction(),
			[ "scale", "50", "200", "rotate", "90", "skew", "10", "20", "translate", "10", "20" ],
			new ValueString("scale(0.5, 2) rotate(90deg) skew(10deg, 20deg) translate(10px, 20px)"),
			[],
		);

		mismatch("not a transform function",
			new TypeTransformFunction(),
			[ "foo", "bar" ],
		);
		mismatch("invalid unit",
			new TypeTransformFunction(),
			[ "scale", "2deg" ],
		);
		mismatch("transform function does not support remainders",
			new TypeTransformFunction(),
			[ "scale", "50", "foo" ],
		);
	});
});

