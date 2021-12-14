
export default function isLibraryClassName(utilityFn: string): [ libName: string, libUtilityFn: string, isLibClass: boolean ] {
	// Libraries contain a dot as in [ui.btn]
	let firstDotPos = utilityFn.indexOf(".");
	if (firstDotPos < 0) {
		return [ "", "", false ];
	}

	// Libraries contain a dot before any dashes, as in [font-1.5em] is not referencing a library class name
	let firstDashPos = utilityFn.indexOf("-");
	if ((-1 < firstDashPos) && (firstDashPos < firstDotPos)) {
		return [ "", "", false ];
	}

	// We are dealing with a library namespaced class name
	let libName = utilityFn.substring(0, firstDotPos);
	let libUtilityFn = utilityFn.substring(firstDotPos+1);
	
	return [ libName, libUtilityFn, true ];
}

