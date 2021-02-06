import Declaration from './Declaration';
import Block from './Block';

describe('Block.format()', function() {
	it('should format empty block correctly', function() {
		let decl = new Block([]);

		let indentation = "\t";
		let newLine = "\n";
		let act = decl.format(indentation, newLine);
		let exp = "";

		if (exp !== act) {
			throw new Error("\nexp["+exp+"]\nact["+act+"]");
		}
	});
	it('should format block with indentation and newline correctly', function() {
		let decl = new Block([
			new Declaration("prop1", "val1"),
			new Declaration("prop2", "val2"),
		]);

		let indentation = "\t";
		let newLine = "\n";
		let act = decl.format(indentation, newLine);
		let exp = ""+
			"\tprop1: val1;\n"+
			"\tprop2: val2;\n"+
			"";

		if (exp !== act) {
			throw new Error("\nexp["+exp+"]\nact["+act+"]");
		}
	});
	it('should format block without indentation and newline correctly', function() {
		let decl = new Block([
			new Declaration("prop1", "val1"),
			new Declaration("prop2", "val2"),
		]);

		let indentation = "";
		let newLine = "";
		let act = decl.format(indentation, newLine);
		let exp = ""+
			"prop1: val1;"+
			"prop2: val2;"+
			"";

		if (exp !== act) {
			throw new Error("\nexp["+exp+"]\nact["+act+"]");
		}
	});
});


