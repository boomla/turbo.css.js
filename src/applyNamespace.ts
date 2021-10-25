
export default function applyNamespace(className: string, namespace: string): string {
	// mode-* classes
	if (className.startsWith("mode-")) {
		for (let i=5; i<className.length; i++) {
			// If the className contains `:`, mode is a conditional
			// selector within the class name, not a standalone class name.
			// In that case, do namespace it.
			if (className[i] === ':') {
				return namespace + className;
			}
		}

		// Do not namespace standalone mode-* class names
		return className;
	}
	
	// Do not namespace -mode-* classes
	if (className.startsWith("-mode-")) {
		return className;
	}

	return namespace + className;
}

