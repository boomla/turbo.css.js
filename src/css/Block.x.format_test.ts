import Declaration from './Declaration';
import Block from './Block';

describe('Block.format()', function() {
	it('should format empty block correctly', function() {
		let block = new Block([]);

		let indentation = "\t";
		let newLine = "\n";
		let important = false;
		let act = block.format(indentation, newLine, important);
		let exp = "";

		if (exp !== act) {
			throw new Error("\nexp["+exp+"]\nact["+act+"]");
		}
	});
	it('should format block with indentation and newline correctly', function() {
		let block = new Block([
			new Declaration("prop1", "val1"),
			new Declaration("prop2", "val2"),
		]);

		let indentation = "\t";
		let newLine = "\n";
		let important = false;
		let act = block.format(indentation, newLine, important);
		let exp = ""+
			"\tprop1: val1;\n"+
			"\tprop2: val2;\n"+
			"";

		if (exp !== act) {
			throw new Error("\nexp["+exp+"]\nact["+act+"]");
		}
	});
	it('should format block without indentation and newline correctly', function() {
		let block = new Block([
			new Declaration("prop1", "val1"),
			new Declaration("prop2", "val2"),
		]);

		let indentation = "";
		let newLine = "";
		let important = false;
		let act = block.format(indentation, newLine, important);
		let exp = ""+
			"prop1: val1;"+
			"prop2: val2;"+
			"";

		if (exp !== act) {
			throw new Error("\nexp["+exp+"]\nact["+act+"]");
		}
	});
	it('should support !important', function() {
		let block = new Block([
			new Declaration("prop1", "val1"),
			new Declaration("prop2", "val2"),
		]);

		let indentation = "";
		let newLine = "";
		let important = true;
		let act = block.format(indentation, newLine, important);
		let exp = ""+
			"prop1: val1!important;"+
			"prop2: val2!important;"+
			"";

		if (exp !== act) {
			throw new Error("\nexp["+exp+"]\nact["+act+"]");
		}
	});
});

