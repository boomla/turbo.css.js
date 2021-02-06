import Declaration from './Declaration';

describe('Declaration.format()', function() {
	it('should format correctly', function() {
		let decl = new Declaration("property", "value");

		let indentation = "\t";
		let newLine = "\n";
		let act = decl.format(indentation, newLine);
		let exp = "\tproperty: value;\n";

		if (exp !== act) {
			throw new Error("\nexp["+exp+"]\nact["+act+"]");
		}
	});
});


