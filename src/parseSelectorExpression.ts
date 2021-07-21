import {
	Selector,
	SelectorDomEmpty,
	SelectorDomNotEmpty,
	SelectorDomEven,
	SelectorDomOdd,
	SelectorDomFirst,
	SelectorDomNotFirst,
	SelectorDomLast,
	SelectorDomNotLast,
	SelectorActive,
	SelectorFocus,
	SelectorHover,
	SelectorVisited,
	SelectorChecked,
	SelectorUnchecked,
	SelectorEnabled,
	SelectorDisabled,
	SelectorValid,
	SelectorInvalid,
	SelectorAfter,
	SelectorBefore,
	SelectorPlaceholder,
	SelectorSelection,
	SelectorThumb,
	SelectorDevicePrint,
	SelectorDeviceScreen,
	SelectorDeviceSpeech,
	SelectorDeviceHoverable,
	SelectorDeviceNotHoverable,
	SelectorViewportWidth,
	SelectorTag,
	SelectorMode,
	SelectorChild,
	SelectorAfterSibling,
	SelectorNextSibling,
	SelectorSelf,
	SelectorDescendant
} from "./Selector";

let selectorMap: { [key: string]: Selector } = {
	"empty": new SelectorDomEmpty(),
	"not-empty": new SelectorDomNotEmpty(),
	"even": new SelectorDomEven(),
	"odd": new SelectorDomOdd(),
	"first": new SelectorDomFirst(),
	"not-first": new SelectorDomNotFirst(),
	"last": new SelectorDomLast(),
	"not-last": new SelectorDomNotLast(),

	"active": new SelectorActive(),
	"focus": new SelectorFocus(),
	"hover": new SelectorHover(),
	"visited": new SelectorVisited(),

	"checked": new SelectorChecked(),
	"unchecked": new SelectorUnchecked(),
	"enabled": new SelectorEnabled(),
	"disabled": new SelectorDisabled(),
	"valid": new SelectorValid(),
	"invalid": new SelectorInvalid(),
	
	"after": new SelectorAfter(),
	"before": new SelectorBefore(),
	"placeholder": new SelectorPlaceholder(),
	"selection": new SelectorSelection(),
	"thumb": new SelectorThumb(),
	
	"print": new SelectorDevicePrint(),
	"screen": new SelectorDeviceScreen(),
	"speech": new SelectorDeviceSpeech(),
	"hoverable": new SelectorDeviceHoverable(),
	"not-hoverable": new SelectorDeviceNotHoverable(),

	"w3": new SelectorViewportWidth(375),
	"w6": new SelectorViewportWidth(640),
	"w7": new SelectorViewportWidth(768),
	"w10": new SelectorViewportWidth(1024),
	"w12": new SelectorViewportWidth(1280),
	"w14": new SelectorViewportWidth(1440),
	"w15": new SelectorViewportWidth(1536),
	"w19": new SelectorViewportWidth(1920),

	"a":          new SelectorTag("a"),
	"audio":      new SelectorTag("audio"),
	"b":          new SelectorTag("b"),
	"blockquote": new SelectorTag("blockquote"),
	"br":         new SelectorTag("br"),
	"button":     new SelectorTag("button"),
	"code":       new SelectorTag("code"),
	"canvas":     new SelectorTag("canvas"),
	"div":        new SelectorTag("div"),
	"em":         new SelectorTag("em"),
	"embed":      new SelectorTag("embed"),
	"figure":     new SelectorTag("figure"),
	"h1":         new SelectorTag("h1"),
	"h2":         new SelectorTag("h2"),
	"h3":         new SelectorTag("h3"),
	"h4":         new SelectorTag("h4"),
	"h5":         new SelectorTag("h5"),
	"h6":         new SelectorTag("h6"),
	"hr":         new SelectorTag("hr"),
	"i":          new SelectorTag("i"),
	"iframe":     new SelectorTag("iframe"),
	"img":        new SelectorTag("img"),
	"input":      new SelectorTag("input"),
	"label":      new SelectorTag("label"),
	"li":         new SelectorTag("li"),
	"object":     new SelectorTag("object"),
	"ol":         new SelectorTag("ol"),
	"option":     new SelectorTag("option"),
	"p":          new SelectorTag("p"),
	"picture":    new SelectorTag("picture"),
	"pre":        new SelectorTag("pre"),
	"q":          new SelectorTag("q"),
	"s":          new SelectorTag("s"),
	"section":    new SelectorTag("section"),
	"select":     new SelectorTag("select"),
	"small":      new SelectorTag("small"),
	"span":       new SelectorTag("span"),
	"strong":     new SelectorTag("strong"),
	"sub":        new SelectorTag("sub"),
	"sup":        new SelectorTag("sup"),
	"svg":        new SelectorTag("svg"),
	"table":      new SelectorTag("table"),
	"tbody":      new SelectorTag("tbody"),
	"td":         new SelectorTag("td"),
	"textarea":   new SelectorTag("textarea"),
	"tfoot":      new SelectorTag("tfoot"),
	"th":         new SelectorTag("th"),
	"thead":      new SelectorTag("thead"),
	"tr":         new SelectorTag("tr"),
	"u":          new SelectorTag("u"),
	"ul":         new SelectorTag("ul"),
	"video":      new SelectorTag("video"),
}

let regexpMode = /^mode-[a-zA-Z0-9\-]+\:/;
let regexpDescendant = /^\/(\.\.\/)+/;

export default function parseSelectorExpression(selectorExpression: string): Array<Selector> {
	// selectorsByElements is used to store selectors that are targeting
	// a single element grouped together, while separating them from
	// combinators and other such selector groups.
	// The reason is that such selector groups need to be applied in
	// forward order, while such selector groups and combinators in
	// reverse order.
	let selectorsByElements: Array<Array<Selector>> = [[]];

	let s = selectorExpression;

	while (0 < s.length) {
		// Combinators (except descendant combinator which is handled below)
		let selector: Selector|undefined = undefined;
		switch (s[0]) {
			case '/': {
				// Special case: descendant combinator(s) '/../'
				let match = s.match(regexpDescendant);
				if (match) {
					let matchStr = match[0];
					for (let i=4; i<=matchStr.length; i+=3) {
						selectorsByElements = appendCombinator(selectorsByElements, new SelectorDescendant());
					}
					s = s.substring(matchStr.length);
					continue;
				}

				// Child combinator
				selector = new SelectorChild();
				break;
			}
			case '~': {
				selector = new SelectorAfterSibling();
				break;
			}
			case '+': {
				selector = new SelectorNextSibling();
				break;
			}
			case '@': {
				selector = new SelectorSelf();
				break;
			}
		}
		if (selector !== undefined) {
			selectorsByElements = appendCombinator(selectorsByElements, selector);
			s = s.substring(1);
			continue;
		}


		// Selectors
		let pos = s.indexOf(":");
		if (-1 < pos) {
			let word = s.substring(0, pos);
			let selector = selectorMap[word];
			if (selector !== undefined) {
				selectorsByElements = appendSelector(selectorsByElements, selector);
				s = s.substring(pos+1);
				continue;
			}
		}

		let mode = s.match(regexpMode);
		if (mode) {
			let modeStr = mode[0];
			let className = modeStr.substring(0, modeStr.length - 1);
			selectorsByElements = appendSelector(selectorsByElements, new SelectorMode(className));
			s = s.substring(modeStr.length);
			continue;
		}

		throw new Error("invalid selector expression ["+selectorExpression+"]");
	}

	// Flatten
	let selectors: Array<Selector> = [];
	for (let i=selectorsByElements.length-1; 0<=i; i--) {
		let group = selectorsByElements[i];
		for (let selector of group) {
			selectors.push(selector);
		}
	}

	return selectors;
}

function appendSelector(selectorsByElements: Array<Array<Selector>>, selector: Selector): Array<Array<Selector>> {
	let lastIndex = selectorsByElements.length - 1;
	selectorsByElements[lastIndex].push(selector);
	return selectorsByElements;
}
function appendCombinator(selectorsByElements: Array<Array<Selector>>, combinator: Selector): Array<Array<Selector>> {
	selectorsByElements.push([ combinator ]);
	selectorsByElements.push([]);
	return selectorsByElements;
}

