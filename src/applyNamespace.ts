
export default function applyNamespace(className: string, namespace: string): string {
	// mode-* and -mode-* classes
	if (className.startsWith("mode-") || className.startsWith("-mode-")) {
		for (let i=5; i<className.length; i++) {
			// If the className contains `:`, it is a conditional mode
			// selector within the class name, not a standalone class name.
			// In that case, do namespace it.
			if (className[i] === ':') {
				return namespace + className;
			}
		}

		// Do not namespace standalone mode-* and -mode-* class names
		return className;
	}
	
	return namespace + className;
}

