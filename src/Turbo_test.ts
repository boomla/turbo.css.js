import Turbo from './Turbo';
import { NoCompatConfig } from "./CONFIG";
import { assert } from 'chai';

describe('Turbo', function() {
	it('should generate all the code that is required to be added to the html head', function() {
		let namespace = "NS_";
		let turbo = new Turbo(NoCompatConfig, namespace);
		
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

		assert.equal(expHead, actHead)
	});
	it('should load library', function() {
		let namespace = "NS_";
		let turbo = new Turbo(NoCompatConfig, namespace);
		
		turbo.loadLibrary("ui.turbo", `
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

		assert.equal(expHead, actHead)
	});
	it('should handle mode- classes correctly', function() {
		let namespace = "NS_";
		let turbo = new Turbo(NoCompatConfig, namespace);
		
		turbo.loadLibrary("ui.turbo", `
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

		assert.equal(expHead, actHead)
	});
	it('should support !important', function() {
		let namespace = "";
		let important = true;
		let turbo = new Turbo(NoCompatConfig, namespace, important);
		
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

		assert.equal(expCss, actCss)
	});
	it('should preserve space suffix', function() {
		let namespace = "";
		let important = true;
		let turbo = new Turbo(NoCompatConfig, namespace, important);
		
		let actNamespacedClasses = turbo.add("t1 w-2 h-8 ");
		
		let expNamespacedClasses = "t1 w-2 h-8 ";
		assert.equal(actNamespacedClasses, expNamespacedClasses);
	});
});

