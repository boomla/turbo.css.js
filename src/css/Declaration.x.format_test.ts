import Declaration from './Declaration';

describe('Declaration.format()', function() {
	it('should format without !important', function() {
		let decl = new Declaration("property", "value");

		let indentation = "\t";
		let newLine = "\n";
		let important = false;
		let act = decl.format(indentation, newLine, important);
		let exp = "\tproperty: value;\n";

		if (exp !== act) {
			throw new Error("\nexp["+exp+"]\nact["+act+"]");
		}
	});
	it('should format with !important', function() {
		let decl = new Declaration("property", "value");

		let indentation = "\t";
		let newLine = "\n";
		let important = true;
		let act = decl.format(indentation, newLine, important);
		let exp = "\tproperty: value!important;\n";

		if (exp !== act) {
			throw new Error("\nexp["+exp+"]\nact["+act+"]");
		}
	});
});


