import Declaration from './Declaration';
import Block from './Block';

describe('Block.addDeclaration()', function() {
	it('should be able to add the first declaration', function() {
		let block1 = new Block([]);

		let block2 = block1.addDeclaration(new Declaration("property", "value"));

		if (block2.format("", "", false) !== "property: value;") {
			throw new Error("unexpected ["+block2.format("", "", false)+"]");
		}

		// Original should be unchanged
		if (block1.format("", "", false) !== "") {
			throw new Error("unexpected ["+block1.format("", "", false)+"]");
		}
	});
	it('should be able to add second declaration', function() {
		let block1 = new Block([
			new Declaration("prop1", "val1"),
		]);
		let block2 = block1.addDeclaration(new Declaration("prop2", "val2"));

		if (block2.format("", "", false) !== "prop1: val1;prop2: val2;") {
			throw new Error("unexpected ["+block2.format("", "", false)+"]");
		}

		// Original should be unchanged
		if (block1.format("", "", false) !== "prop1: val1;") {
			throw new Error("unexpected ["+block1.format("", "", false)+"]");
		}
	});
});

