import Declaration from './Declaration';
import Block from './Block';

describe('Block.addDeclaration()', function() {
	it('should be able to add the first declaration', function() {
		let block1 = new Block([]);

		let block2 = block1.addDeclaration(new Declaration({
			property: "property",
			value: "value",
		}));

		if (block2.format("", "") !== "property: value;") {
			throw new Error("unexpected ["+block2.format("", "")+"]");
		}

		// Original should be unchanged
		if (block1.format("", "") !== "") {
			throw new Error("unexpected ["+block1.format("", "")+"]");
		}
	});
	it('should be able to add second declaration', function() {
		let block1 = new Block([
			new Declaration({
				property: "prop1",
				value: "val1",
			}),
		]);
		let block2 = block1.addDeclaration(new Declaration({
			property: "prop2",
			value: "val2",
		}));

		if (block2.format("", "") !== "prop1: val1;prop2: val2;") {
			throw new Error("unexpected ["+block2.format("", "")+"]");
		}

		// Original should be unchanged
		if (block1.format("", "") !== "prop1: val1;") {
			throw new Error("unexpected ["+block1.format("", "")+"]");
		}
	});
});

