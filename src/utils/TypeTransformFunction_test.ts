import TypeTransformFunction from './TypeTransformFunction';
import ConfigStatic from './ConfigStatic';
import { assert } from 'chai';
import ValueTransformFunction, { Rotate, Scale, Skew, Translate } from './ValueTransformFunction';
import ValueFloat32 from './ValueFloat32';
import ValueAngle from './ValueAngle';
import ValueLength from './ValueLength';

describe('TypeTransformFunction', function() {
	it('.parse()', function() {
		let config = new ConfigStatic();

		let ok = function (msg: string, strArgs: Array<string>, expValue: ValueTransformFunction) {
			const typ = new TypeTransformFunction();
			let act = typ.parse(config, strArgs);
			if (act === undefined) {
				throw new Error(msg + strArgs.toString());
			}
			let [actValue, actRemainder] = act;
			assert.deepEqual(actValue, expValue);
			assert.isEmpty(actRemainder);
		};
		let mismatch = function (msg: string, strArgs: Array<string>) {
			const typ = new TypeTransformFunction();
			let act = typ.parse(config, strArgs);
			if (act !== undefined) {
				throw new Error(msg + strArgs.toString());
			}
		};

		ok("scale-{ratio}",
			[ "scale", "50" ],
			new ValueTransformFunction(new Scale(new ValueFloat32(50), new ValueFloat32(50)))
		);
		ok("scale-{x}-{y}",
			[ "scale", "50", "200" ],
			new ValueTransformFunction(new Scale(new ValueFloat32(50), new ValueFloat32(200)))
		);

		ok("rotate-{angle}",
			[ "rotate", "90" ],
			new ValueTransformFunction(new Rotate(new ValueAngle(90, "deg")))
		);

		ok("skew-{x}-{y}",
			[ "skew", "10", "20" ],
			new ValueTransformFunction(
				new Skew(new ValueAngle(10, "deg"), new ValueAngle(20, "deg"))
			)
		);

		ok("translate-{length}",
			[ "translate", "10" ],
			new ValueTransformFunction(new Translate(new ValueLength(10, "px")))
		);
		ok("translate-{x}-{y}",
			[ "translate", "10", "20" ],
			new ValueTransformFunction(
				new Translate(new ValueLength(10, "px"), new ValueLength(20, "px"))
			)
		);

		ok("multiple transform functions",
			[ "scale", "50", "200", "rotate", "90", "skew", "10", "20", "translate", "10", "20" ],
			new ValueTransformFunction(
				new Scale(new ValueFloat32(50), new ValueFloat32(200)),
				new Rotate(new ValueAngle(90, "deg")),
				new Skew(new ValueAngle(10, "deg"), new ValueAngle(20, "deg")),
				new Translate(new ValueLength(10, "px"), new ValueLength(20, "px"))
			)
		);
        ok('multiple transform functions, single argument translate at the end',
            [ 'scale', '50', '200', 'rotate', '90', 'skew', '10', '20', 'translate', '10' ],
            new ValueTransformFunction(
                new Scale(new ValueFloat32(50), new ValueFloat32(200)),
                new Rotate(new ValueAngle(90, 'deg')),
                new Skew(new ValueAngle(10, 'deg'), new ValueAngle(20, 'deg')),
                new Translate(new ValueLength(10, 'px'))
            )
        );

		mismatch("not a transform function",
			[ "foo", "bar" ],
		);
		mismatch("invalid unit",
			[ "scale", "2deg" ],
		);
		mismatch("transform function does not support remainders",
			[ "scale", "50", "foo" ],
		);
		mismatch("single argument translate is not at the end",
			[ "translate", "10", "scale", "50" ]
		);
	});
});

