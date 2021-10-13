import type { BrowserRewriteRules } from "../css/BrowserRewriteRules";

export default interface Config {
	getColorPoint(colorPointName: string): string | undefined;
	getColorScaleShade(colorScaleName: string, shade: number): string | undefined;
	getShadow(distance: number, darkness: number): string;
	browserRewriteRules(): BrowserRewriteRules;
	resolveLibrary(contextPath: string, libName: string): string | undefined;
	loadLibrary(libPath: string): string;
}

export class ShadowData {
	shadowTemplate: string;
	opacity20: number;

	constructor(shadowTemplate: string, opacity20: number) {
		this.shadowTemplate = shadowTemplate;
		this.opacity20 = opacity20;
	}
}

