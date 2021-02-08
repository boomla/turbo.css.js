import Declaration from './Declaration';
import Rule from './Rule';

export default function prefixOrderDeclarations(rule: Rule): Array<Rule> {
	let newRule = rule.mapDeclarations(function(decl: Declaration): Array<Declaration> {
		if (decl.property !== "order") {
			return [ decl ];
		}

		let n = parseInt(decl.value);
		if (n.toString() !== decl.value) {
			// Unexpected value
			throw new Error("CSS declaration [order] has unexpected non-integer value ["+decl.value+"]");
		}

		let webkitValue = (n+1).toString();
		let webkitDecl = new Declaration("-webkit-box-ordinal-group", webkitValue);

		return [
			webkitDecl,
			decl,
		]
	})

	return [ newRule ];
}

