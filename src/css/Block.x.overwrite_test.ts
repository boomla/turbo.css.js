import Declaration from './Declaration';
import Block from './Block';

describe('Block.overwrite()', function() {
	it('should support overwriting empty block with another empty block', function() {
		let block1 = new Block([]);
		let block2 = new Block([]);

		let block3 = block1.overwrite(block2);

		if (block3.format("", "", false) !== "") {
			throw new Error("unexpected ["+block3.format("", "", false)+"]");
		}
	});
	it('should add new properties', function() {
		let block1 = new Block([
			new Declaration("a-prop", "value"),
			new Declaration("a-prop2", "value2"),
		]);
		let block2 = new Block([
			new Declaration("b-prop", "value"),
			new Declaration("b-prop2", "value2"),
		]);

		let block3 = block1.overwrite(block2);

		let act = block3.format("", "", false);
		let exp = ""+
			"a-prop: value;"+
			"a-prop2: value2;"+
			"b-prop: value;"+
			"b-prop2: value2;";
		if (exp !== act) {
			throw new Error("\nexp ["+exp+"]\nact ["+act+"]");
		}

		// Originals should be unchanged
		if (block1.format("", "", false) !== "a-prop: value;a-prop2: value2;") {
			throw new Error("unexpected ["+block1.format("", "", false)+"]");
		}
		if (block2.format("", "", false) !== "b-prop: value;b-prop2: value2;") {
			throw new Error("unexpected ["+block2.format("", "", false)+"]");
		}
	});
	it('should override existing properties', function() {
		let block1 = new Block([
			new Declaration("prop", "value"),
			new Declaration("prop2", "value2"),
			new Declaration("x", "y"),
		]);
		let block2 = new Block([
			new Declaration("prop", "value"),
			new Declaration("prop2", "value2"),
		]);

		let block3 = block1.overwrite(block2);

		let act = block3.format("", "", false);
		let exp = ""+
			"x: y;"+
			"prop: value;"+
			"prop2: value2;";
		if (exp !== act) {
			throw new Error("\nexp ["+exp+"]\nact ["+act+"]");
		}

		// Originals should be unchanged
		if (block1.format("", "", false) !== "prop: value;prop2: value2;x: y;") {
			throw new Error("unexpected ["+block1.format("", "", false)+"]");
		}
		if (block2.format("", "", false) !== "prop: value;prop2: value2;") {
			throw new Error("unexpected ["+block2.format("", "", false)+"]");
		}
	});
});

