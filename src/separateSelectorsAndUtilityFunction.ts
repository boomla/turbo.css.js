
export default function separateSelectorsAndUtilityFunction(className: string): [selectors: string, utilityFn: string] {
	let pos = Math.max(
		className.lastIndexOf(">"),
		className.lastIndexOf("+"),
		className.lastIndexOf("~"),
		className.lastIndexOf(":"),
		className.lastIndexOf("/"),
		className.lastIndexOf("@"),
	);
	
	if (pos === -1) {
		return [ "", className ];
	}
	else {
		let selectors = className.substring(0, pos+1);
		let utilityFn = className.substring(pos+1);
		if (utilityFn === "") {
			throw new Error("missing utility function call in class name ["+className+"]");
		}

		return [ selectors, utilityFn ];
	}
}

