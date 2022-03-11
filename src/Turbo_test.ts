import Turbo from './Turbo';
import { DefaultConfig } from "./CONFIG";
import { NoCompatConfig } from "./CONFIG";
import type { BrowserRewriteRules } from "css/BrowserRewriteRules";
import { assert } from 'chai';

describe('Turbo', function() {
	it('should generate all the code that is required to be added to the html head', function() {
		let contextPath = "";
		let namespace = "NS_";
		let turbo = new Turbo(NoCompatConfig, contextPath, namespace);
		
		let actNamespacedClasses = turbo.add("t1 t1-start t1-all w-2 h-8");
		
		let expNamespacedClasses = "t1 t1-start t1-all NS_w-2 NS_h-8";
		assert.equal(actNamespacedClasses, expNamespacedClasses);

		let actHead = turbo.head()

		let expHead = "" +
			`<meta name="viewport" content="width=device-width, initial-scale=1">` + "\n" +
			"<style>\n"+
			".t1.NS_w-2 {\n"+
			"	width: 2px;\n"+
			"}\n"+
			".t1.NS_h-8 {\n"+
			"	height: 8px;\n"+
			"}\n"+
			"</style>";

		assert.equal(actHead, expHead)
	});
	it('should eval library', function() {
		let contextPath = "";
		let namespace = "NS_";
		let turbo = new Turbo(NoCompatConfig, contextPath, namespace);
		
		turbo.eval("ui.turbo", `
			t1
			.btn {
				px-32
				py-8
				color-white
			}
		`)

		let actNamespacedClasses = turbo.add("t1 btn bg-c-hex-12A4E2");
		
		let expNamespacedClasses = "t1 NS_btn NS_bg-c-hex-12A4E2";
		assert.equal(actNamespacedClasses, expNamespacedClasses);

		let actHead = turbo.head()

		let expHead = "" +
			`<meta name="viewport" content="width=device-width, initial-scale=1">` + "\n" +
			"<style>\n"+
			".t1.NS_btn {\n"+
			"	padding-left: 32px;\n"+
			"	padding-right: 32px;\n"+
			"	padding-top: 8px;\n"+
			"	padding-bottom: 8px;\n"+
			"	color: #FFFFFF;\n"+
			"}\n"+
			".t1.NS_bg-c-hex-12A4E2 {\n"+
			"	background-color: #12A4E2;\n"+
			"}\n"+
			"</style>";

		assert.equal(actHead, expHead)
	});
	it('should handle mode-* classes correctly', function() {
		let contextPath = "";
		let namespace = "NS_";
		let turbo = new Turbo(NoCompatConfig, contextPath, namespace);
		
		turbo.eval("ui.turbo", `
			t1
			.btn {
				px-32
				py-8
				color-white
			}
		`)

		let actNamespacedClasses = turbo.add("t1 mode-open hidden mode-open:block");
		let expNamespacedClasses = "t1 mode-open NS_hidden NS_mode-open:block";
		assert.equal(actNamespacedClasses, expNamespacedClasses);

		let actHead = turbo.head()
		let expHead = "" +
			`<meta name="viewport" content="width=device-width, initial-scale=1">` + "\n" +
			"<style>\n"+
			".t1.NS_mode-open\\:block.mode-open {\n"+
			"	display: block;\n"+
			"}\n"+
			".t1.NS_hidden {\n"+
			"	display: none;\n"+
			"}\n"+
			"</style>";

		assert.equal(actHead, expHead)
	});
	it('should handle -mode-* classes correctly', function() {
		let contextPath = "";
		let namespace = "NS_";
		let turbo = new Turbo(NoCompatConfig, contextPath, namespace);
		
		turbo.eval("ui.turbo", `
			t1
			.btn {
				px-32
				py-8
				color-white
			}
		`)

		let actNamespacedClasses = turbo.add("t1 -mode-open mode-open:block -mode-open:hidden");
		let expNamespacedClasses = "t1 -mode-open NS_mode-open:block NS_-mode-open:hidden";
		assert.equal(actNamespacedClasses, expNamespacedClasses);

		let actHead = turbo.head()
		let expHead = "" +
			`<meta name="viewport" content="width=device-width, initial-scale=1">` + "\n" +
			"<style>\n"+
			".t1.NS_mode-open\\:block.mode-open {\n"+
			"	display: block;\n"+
			"}\n"+
			".t1.NS_-mode-open\\:hidden.-mode-open {\n"+
			"	display: none;\n"+
			"}\n"+
			"</style>";

		assert.equal(actHead, expHead)
	});
	it('should support !important', function() {
		let contextPath = "";
		let namespace = "";
		let important = true;
		let turbo = new Turbo(NoCompatConfig, contextPath, namespace, important);
		
		let actNamespacedClasses = turbo.add("t1 w-2 h-8");
		
		let expNamespacedClasses = "t1 w-2 h-8";
		assert.equal(actNamespacedClasses, expNamespacedClasses);

		let actCss = turbo.css();

		let expCss = "" +
			".t1.w-2 {\n"+
			"	width: 2px!important;\n"+
			"}\n"+
			".t1.h-8 {\n"+
			"	height: 8px!important;\n"+
			"}\n";

		assert.equal(actCss, expCss)
	});
	it('should preserve space suffix', function() {
		let contextPath = "";
		let namespace = "";
		let important = true;
		let turbo = new Turbo(NoCompatConfig, contextPath, namespace, important);
		
		let actNamespacedClasses = turbo.add("t1 w-2 h-8 ");
		
		let expNamespacedClasses = "t1 w-2 h-8 ";
		assert.equal(actNamespacedClasses, expNamespacedClasses);
	});
	it('should rewrite Turbo embedded in other code', function() {
		let contextPath = "";
		let namespace = "NS_";
		let turbo = new Turbo(NoCompatConfig, contextPath, namespace);
		
		let source = `<div class="t1 w-10 ; foo">hello</div>`
		let actSource = turbo.addSource(source);
		
		let expSource = `<div class="t1 NS_w-10 ; foo">hello</div>`
		assert.equal(actSource, expSource);

		let actHead = turbo.head()

		let expHead = "" +
			`<meta name="viewport" content="width=device-width, initial-scale=1">` + "\n" +
			"<style>\n"+
			".t1.NS_w-10 {\n"+
			"	width: 10px;\n"+
			"}\n"+
			"</style>";

		assert.equal(actHead, expHead)
	});
	it('should rewrite multiple Turbo snippets embedded in code', function() {
		let contextPath = "";
		let namespace = "NS_";
		let turbo = new Turbo(NoCompatConfig, contextPath, namespace);
		
		let source = `<div class="t1 w-10 ; foo">hello</div><div class="t1 h-10 ; bar">world</div>`
		let actSource = turbo.addSource(source);
		
		let expSource = `<div class="t1 NS_w-10 ; foo">hello</div><div class="t1 NS_h-10 ; bar">world</div>`
		assert.equal(actSource, expSource);

		let actHead = turbo.head()

		let expHead = "" +
			`<meta name="viewport" content="width=device-width, initial-scale=1">` + "\n" +
			"<style>\n"+
			".t1.NS_w-10 {\n"+
			"	width: 10px;\n"+
			"}\n"+
			".t1.NS_h-10 {\n"+
			"	height: 10px;\n"+
			"}\n"+
			"</style>";

		assert.equal(actHead, expHead)
	});
	it('should generate browser prefixed variants for slider', function() {
		let contextPath = "";
		let namespace = "";
		let turbo = new Turbo(DefaultConfig, contextPath, namespace);
		
		let actNamespacedClasses = turbo.add("t1 thumb:bg-c-black");
		
		let expNamespacedClasses = "t1 thumb:bg-c-black";
		assert.equal(actNamespacedClasses, expNamespacedClasses);

		let actCss = turbo.css()

		let expCss = "" +
			".t1.thumb\\:bg-c-black::-moz-range-thumb {\n"+
			"	background-color: #000000;\n"+
			"}\n"+
			".t1.thumb\\:bg-c-black::-webkit-slider-thumb {\n"+
			"	background-color: #000000;\n"+
			"}\n"+
			".t1.thumb\\:bg-c-black::slider-thumb {\n"+
			"	background-color: #000000;\n"+
			"}\n"+
			"";

		assert.equal(actCss, expCss)
	});
	describe('.addClassAttr()', () => {
		function ok(originalClassAttr: string, exp: string) {
			let contextPath = "";
			let namespace = "NS-";
			let turbo = new Turbo(NoCompatConfig, contextPath, namespace);
			let act = turbo.addClassAttr(originalClassAttr);
			assert.equal(act, exp);
		}

		it('should keep t1 class if it stands on its own', () => {
			ok(
				"t1",
				"t1",
			);
		});
		it('should keep t1-* classes', () => {
			ok(
				"t1 t1-start t1-all w-2 h-8",
				"t1 t1-start t1-all NS-w-2 NS-h-8",
			);
		});
		it('should merge multiple Turbo code blocks', () => {
			ok(
				"t1 w-2 ; t1 h-8",
				"t1 NS-w-2 NS-h-8",
			);
		});
		it('should move non-Turbo classes to the end', () => {
			ok(
				"foo t1 w-2 ; bar t1 h-8 ; baz",
				"t1 NS-w-2 NS-h-8 ; foo bar baz",
			);
		});
	});
	it('should sort s-library class definitions after base class definitions', function() {
		class TestConfig {
			getColorPoint(_colorPointName: string): string | undefined {
				throw new Error('getColorPoint()');
			}
			getColorScaleShade(_colorScaleName: string, _shade: number): string | undefined {
				throw new Error('getColorScaleShade()');
			}
			getShadow(_distance: number, _darkness: number): string {
				throw new Error('getShadow()');
			}
			browserRewriteRules(): BrowserRewriteRules {
				return {
					propertyPrefixes: {},
					declarationMap: {},
					rewriteRuleFuncs: [],
				};
			}
			resolveLibrary(_contextPath: string, libName: string): string | undefined {
				return libName;
			}
			loadLibrary(_libPath: string): string {
				return `
					t1
					.btn {
						w-32
					}
				`;
			}
		}

		let contextPath = "";
		let namespace = "NS_";
		let turbo = new Turbo(new TestConfig(), contextPath, namespace);
		
		let actNamespacedClasses = turbo.add("t1 s.btn w-40");
		
		let expNamespacedClasses = "t1 NS_s.btn NS_w-40";
		assert.equal(actNamespacedClasses, expNamespacedClasses);

		let actCss = turbo.css()

		let expCss = "" +
			".t1.NS_w-40 {\n"+
			"	width: 40px;\n"+
			"}\n"+
			".t1.NS_s\\.btn {\n"+
			"	width: 32px;\n"+
			"}\n"+
			"";

		assert.equal(actCss, expCss)
	});
	it('should support using custom class name instead of t1', function() {
		const contextPath = "";
		const namespace = "NS_";
		const important = false;
		const masterClass = "master";
		const turbo = new Turbo(NoCompatConfig, contextPath, namespace, important, masterClass);
		
		const actNamespacedClasses = turbo.add("master master-start master-all w-2 h-8");
		
		const expNamespacedClasses = "master master-start master-all NS_w-2 NS_h-8";
		assert.equal(actNamespacedClasses, expNamespacedClasses);

		const actHead = turbo.head()

		const expHead = "" +
			`<meta name="viewport" content="width=device-width, initial-scale=1">` + "\n" +
			"<style>\n"+
			".master.NS_w-2 {\n"+
			"	width: 2px;\n"+
			"}\n"+
			".master.NS_h-8 {\n"+
			"	height: 8px;\n"+
			"}\n"+
			"</style>";

		assert.equal(actHead, expHead)
	});
});

