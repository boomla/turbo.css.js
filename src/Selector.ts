import type StyleSheet from "./css/StyleSheet";
import Declaration from "./css/Declaration";
import { MediaType, Hoverable } from "./css/MediaQuery";

export interface Selector {
	applyTo(sheet: StyleSheet): StyleSheet;
	toString(): string;
}

export class SelectorChild implements Selector {
	applyTo(sheet: StyleSheet): StyleSheet {
		return sheet.addCombinator(">");
	}
	toString(): string {
		return "/";
	}
}

export class SelectorAfterSibling implements Selector {
	applyTo(sheet: StyleSheet): StyleSheet {
		return sheet.addCombinator("~");
	}
	toString(): string {
		return "~";
	}
}

export class SelectorNextSibling implements Selector {
	applyTo(sheet: StyleSheet): StyleSheet {
		return sheet.addCombinator("+");
	}
	toString(): string {
		return "+";
	}
}

export class SelectorDescendant implements Selector {
	applyTo(sheet: StyleSheet): StyleSheet {
		return sheet.addCombinator(" ");
	}
	toString(): string {
		return "_";
	}
}


export class SelectorDevicePrint implements Selector {
	applyTo(sheet: StyleSheet): StyleSheet {
		return sheet.setMediaType(MediaType.PRINT);
	}
	toString(): string {
		return "print:";
	}
}

export class SelectorDeviceScreen implements Selector {
	applyTo(sheet: StyleSheet): StyleSheet {
		return sheet.setMediaType(MediaType.SCREEN);
	}
	toString(): string {
		return "screen:";
	}
}

export class SelectorDeviceSpeech implements Selector {
	applyTo(sheet: StyleSheet): StyleSheet {
		return sheet.setMediaType(MediaType.SPEECH);
	}
	toString(): string {
		return "speech:";
	}
}

export class SelectorDeviceHoverable implements Selector {
	applyTo(sheet: StyleSheet): StyleSheet {
		return sheet.setHoverable(Hoverable.YES);
	}
	toString(): string {
		return "hoverable:";
	}
}

export class SelectorDeviceNotHoverable implements Selector {
	applyTo(sheet: StyleSheet): StyleSheet {
		return sheet.setHoverable(Hoverable.NO);
	}
	toString(): string {
		return "not-hoverable:";
	}
}

export class SelectorDomEmpty implements Selector {
	applyTo(sheet: StyleSheet): StyleSheet {
		return sheet.suffixFirstSegments(":empty");
	}
	toString(): string {
		return "empty:";
	}
}

export class SelectorDomNotEmpty implements Selector {
	applyTo(sheet: StyleSheet): StyleSheet {
		return sheet.suffixFirstSegments(":not(:empty)");
	}
	toString(): string {
		return "not-empty:";
	}
}

export class SelectorDomEven implements Selector {
	applyTo(sheet: StyleSheet): StyleSheet {
		return sheet.suffixFirstSegments(":nth-child(even)");
	}
	toString(): string {
		return "even:";
	}
}

export class SelectorDomOdd implements Selector {
	applyTo(sheet: StyleSheet): StyleSheet {
		return sheet.suffixFirstSegments(":nth-child(odd)");
	}
	toString(): string {
		return "odd:";
	}
}

export class SelectorDomFirst implements Selector {
	applyTo(sheet: StyleSheet): StyleSheet {
		return sheet.suffixFirstSegments(":first-child");
	}
	toString(): string {
		return "first:";
	}
}

export class SelectorDomNotFirst implements Selector {
	applyTo(sheet: StyleSheet): StyleSheet {
		return sheet.suffixFirstSegments(":not(:first-child)");
	}
	toString(): string {
		return "not-first:";
	}
}

export class SelectorDomLast implements Selector {
	applyTo(sheet: StyleSheet): StyleSheet {
		return sheet.suffixFirstSegments(":last-child");
	}
	toString(): string {
		return "last:";
	}
}

export class SelectorDomNotLast implements Selector {
	applyTo(sheet: StyleSheet): StyleSheet {
		return sheet.suffixFirstSegments(":not(:last-child)");
	}
	toString(): string {
		return "not-last:";
	}
}

export class SelectorHover implements Selector {
	applyTo(sheet: StyleSheet): StyleSheet {
		return sheet.suffixFirstSegments(":hover");
	}
	toString(): string {
		return "hover:";
	}
}

export class SelectorFocus implements Selector {
	applyTo(sheet: StyleSheet): StyleSheet {
		return sheet.suffixFirstSegments(":focus");
	}
	toString(): string {
		return "focus:";
	}
}

export class SelectorActive implements Selector {
	applyTo(sheet: StyleSheet): StyleSheet {
		return sheet.suffixFirstSegments(":active");
	}
	toString(): string {
		return "active:";
	}
}

export class SelectorVisited implements Selector {
	applyTo(sheet: StyleSheet): StyleSheet {
		return sheet.suffixFirstSegments(":visited");
	}
	toString(): string {
		return "visited:";
	}
}

export class SelectorAfter implements Selector {
	applyTo(sheet: StyleSheet): StyleSheet {
		let declaration = new Declaration("content", "\"\"");
		return sheet.addPseudoElementSelector(":after").addDeclaration(declaration);
	}
	toString(): string {
		return "after:";
	}
}

export class SelectorBefore implements Selector {
	applyTo(sheet: StyleSheet): StyleSheet {
		let declaration = new Declaration("content", "\"\"");
		return sheet.addPseudoElementSelector(":before").addDeclaration(declaration);
	}
	toString(): string {
		return "before:";
	}
}

export class SelectorPlaceholder implements Selector {
	applyTo(sheet: StyleSheet): StyleSheet {
		return sheet.addPseudoElementSelector("::placeholder");
	}
	toString(): string {
		return "placeholder:";
	}
}

export class SelectorSelection implements Selector {
	applyTo(sheet: StyleSheet): StyleSheet {
		return sheet.addPseudoElementSelector("::selection");
	}
	toString(): string {
		return "selection:";
	}
}

export class SelectorThumb implements Selector {
	applyTo(sheet: StyleSheet): StyleSheet {
		return sheet.addPseudoElementSelector("::slider-thumb");
	}
	toString(): string {
		return "thumb:";
	}
}

export class SelectorChecked implements Selector {
	applyTo(sheet: StyleSheet): StyleSheet {
		return sheet.suffixFirstSegments(":checked");
	}
	toString(): string {
		return "checked:";
	}
}

export class SelectorUnchecked implements Selector {
	applyTo(sheet: StyleSheet): StyleSheet {
		return sheet.suffixFirstSegments(":not(:checked)");
	}
	toString(): string {
		return "unchecked:";
	}
}

export class SelectorEnabled implements Selector {
	applyTo(sheet: StyleSheet): StyleSheet {
		return sheet.suffixFirstSegments(":enabled");
	}
	toString(): string {
		return "enabled:";
	}
}

export class SelectorDisabled implements Selector {
	applyTo(sheet: StyleSheet): StyleSheet {
		return sheet.suffixFirstSegments(":disabled");
	}
	toString(): string {
		return "disabled:";
	}
}

export class SelectorValid implements Selector {
	applyTo(sheet: StyleSheet): StyleSheet {
		return sheet.suffixFirstSegments(":valid");
	}
	toString(): string {
		return "valid:";
	}
}

export class SelectorInvalid implements Selector {
	applyTo(sheet: StyleSheet): StyleSheet {
		return sheet.suffixFirstSegments(":invalid");
	}
	toString(): string {
		return "invalid:";
	}
}

export class SelectorViewportWidth implements Selector {
	width: number;

	constructor(width: number) {
		this.width = width;
	}

	applyTo(sheet: StyleSheet): StyleSheet {
		return sheet.setMinWidth(this.width);
	}
	toString(): string {
		return "w"+Math.floor(this.width / 100).toString()+":";
	}
}

export class SelectorMode implements Selector {
	className: string;

	constructor(className: string) {
		this.className = className;
	}

	applyTo(sheet: StyleSheet): StyleSheet {
		return sheet.suffixFirstSegments("."+this.className);
	}
	toString(): string {
		return this.className+":";
	}
}

export class SelectorTag implements Selector {
	tagName: string;

	constructor(tagName: string) {
		this.tagName = tagName;
	}

	applyTo(sheet: StyleSheet): StyleSheet {
		return sheet.addTag(this.tagName);
	}
	toString(): string {
		return this.tagName+":";
	}
}

export class SelectorSelf implements Selector {
	applyTo(sheet: StyleSheet): StyleSheet {
		return sheet.addSelfSelector();
	}
	toString(): string {
		return "@";
	}
}

