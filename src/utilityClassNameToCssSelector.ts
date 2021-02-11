
export default function utilityClassNameToCssSelector(className: string): string {
	return "." + className.replace(/[^a-zA-Z0-9\-]/g, function(s: string): string {
		return "\\" + s;
	})
}

