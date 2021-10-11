import TypeColor from './TypeColor';
import ConfigStatic from './ConfigStatic';
import { assert } from 'chai';

describe('TypeColor', function() {
	it('.parse()', function() {
		let typ = new TypeColor();
		let config = new ConfigStatic({
			colorPoints: {
				"linkVisited": "#111115",
				"heading":     "#111113",
			},
			colorScales: {
				"blue": {
					100: "#DEEFF7",
					500: "#12A4E2",
				},
			},
		});

		let ok = function(colorDef: string, expValue: string) {
			let strArgs = colorDef.split("-");

			let actParsed = typ.parse(config, strArgs);
			let actValue = actParsed?.[0].toCSS(config);

			assert.equal(actValue, expValue, colorDef);

			let actRemainder = actParsed?.[1];
			let expRemainder: string[] = [];

			assert.deepEqual(actRemainder, expRemainder, colorDef)
		}
		ok(
			"hex-ABC",
			"#ABC",
		)
		ok(
			"hex-ABCD",
			"#ABCD",
		)
		ok(
			"hex-ABCDEF",
			"#ABCDEF",
		)
		ok(
			"hex-ABCDEF80",
			"#ABCDEF80",
		)
		ok(
			"rgb-10-20-30",
			"rgb(10, 20, 30)",
		)
		ok(
			"rgb-10-20-30-40",
			"rgba(10, 20, 30, 40%)",
		)
		ok(
			"rgb-10-20-30-40.5",
			"rgba(10, 20, 30, 40.5%)",
		)
		ok(
			"hsl-90-50-100",
			"hsl(90deg, 50%, 100%)",
		)
		ok(
			"hsl-90-50-100-66",
			"hsla(90deg, 50%, 100%, 66%)",
		)
		ok(
			"transparent",
			"transparent",
		)
		ok(
			"current",
			"currentColor",
		)
		ok(
			"linkVisited",
			"#111115",
		)
		ok(
			"heading",
			"#111113",
		)
		ok(
			"blue",
			"#12A4E2",
		)
		ok(
			"blue-500",
			"#12A4E2",
		)
		ok(
			"blue-100",
			"#DEEFF7",
		)
		ok(
			"linkVisited-50",
			"#11111580",
		)
		ok(
			"blue-500-10",
			"#12A4E219",
		)
		ok(
			"blue-500-100",
			"#12A4E2",
		)
	});
});

