import Declaration from './Declaration';
import Block from './Block';

describe('Block.overwrite()', function() {
	it('should support overwriting empty block with another empty block', function() {
		let block1 = new Block([]);
		let block2 = new Block([]);

		let block3 = block1.overwrite(block2);

		if (block3.format("", "") !== "") {
			throw new Error("unexpected ["+block3.format("", "")+"]");
		}
	});
	it('should add new properties', function() {
		let block1 = new Block([
			new Declaration({
				property: "a-prop",
				value: "value",
			}),
			new Declaration({
				property: "a-prop2",
				value: "value2",
			}),
		]);
		let block2 = new Block([
			new Declaration({
				property: "b-prop",
				value: "value",
			}),
			new Declaration({
				property: "b-prop2",
				value: "value2",
			}),
		]);

		let block3 = block1.overwrite(block2);

		let act = block3.format("", "");
		let exp = ""+
			"a-prop: value;"+
			"a-prop2: value2;"+
			"b-prop: value;"+
			"b-prop2: value2;";
		if (exp !== act) {
			throw new Error("\nexp ["+exp+"]\nact ["+act+"]");
		}

		// Originals should be unchanged
		if (block1.format("", "") !== "a-prop: value;a-prop2: value2;") {
			throw new Error("unexpected ["+block1.format("", "")+"]");
		}
		if (block2.format("", "") !== "b-prop: value;b-prop2: value2;") {
			throw new Error("unexpected ["+block2.format("", "")+"]");
		}
	});
	it('should override existing properties', function() {
		let block1 = new Block([
			new Declaration({
				property: "prop",
				value: "value",
			}),
			new Declaration({
				property: "prop2",
				value: "value2",
			}),
			new Declaration({
				property: "x",
				value: "y",
			}),
		]);
		let block2 = new Block([
			new Declaration({
				property: "prop",
				value: "value",
			}),
			new Declaration({
				property: "prop2",
				value: "value2",
			}),
		]);

		let block3 = block1.overwrite(block2);

		let act = block3.format("", "");
		let exp = ""+
			"x: y;"+
			"prop: value;"+
			"prop2: value2;";
		if (exp !== act) {
			throw new Error("\nexp ["+exp+"]\nact ["+act+"]");
		}

		// Originals should be unchanged
		if (block1.format("", "") !== "prop: value;prop2: value2;x: y;") {
			throw new Error("unexpected ["+block1.format("", "")+"]");
		}
		if (block2.format("", "") !== "prop: value;prop2: value2;") {
			throw new Error("unexpected ["+block2.format("", "")+"]");
		}
	});
});

