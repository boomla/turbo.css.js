
export default function applyNamespace(className: string, namespace: string): string {
	// Do not apply to mode-* classes
	if ( ! className.startsWith("mode-")) {
		return namespace + className;
	}

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

