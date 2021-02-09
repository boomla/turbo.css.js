import { BrowserRewriteRules, RewriteRule } from "../css/BrowserRewriteRules";
import Declaration from "../css/Declaration";
import Config, { ShadowData } from "./Config";

export default class ConfigStatic implements Config {
	readonly colorPoints: { [key: string]: string } = {};
	readonly colorScales: { [key: string]: { [key: number]: string } } = {};
	readonly shadows: { [key: number]: ShadowData } = {};
	readonly commonBrowsers: BrowserRewriteRules = {
		propertyPrefixes: {},
		declarationMap: {},
		rewriteRuleFuncs: [],
	};

	constructor(source?: Partial<ConfigStatic>) {
		if (source !== undefined) {
			Object.assign(this, source);
		}
	}

	getColorPoint(colorPointName: string): string | undefined {
		return this.colorPoints[colorPointName];
	}
	getColorScaleShade(colorScaleName: string, shade: number): string | undefined {
		let scale = this.colorScales[colorScaleName];
		if (scale === undefined) {
			return undefined;
		}

		return scale[shade];
	}
	getShadow(distance: number, darkness: number): string {
		let shadowData = this.shadows[distance];
		if (shadowData === undefined) {
			let distances = [] as Array<number>;
			let keys = Object.keys(this.shadows);
			for (let distanceStr of keys) {
				distances.push(parseInt(distanceStr));
			}
			distances.sort(function(a, b) {
				return a - b;
			});
			throw new Error("invalid shadow distance ["+distance+"] use one of ["+distances.join(", ")+"]");
		}

		let opacity = shadowData.opacity20 * darkness / 20;
		if (1.0 < opacity) {
			opacity = 1.0;
		}

		return shadowData.shadowTemplate.replace("{opacity}", opacity.toString());
	}
	browserRewriteRules(): BrowserRewriteRules {
		return {
			propertyPrefixes: {
				"key": [] as Array<string>,
			},
			declarationMap: {
				"key": {
					"key": [] as Array<Declaration>,
				},
			},
			rewriteRuleFuncs: [] as Array<RewriteRule>,
		};
	}
}

