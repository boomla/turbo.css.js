import Config from "./utils/Config";
import separateSelectorsAndUtilityFunction from "./separateSelectorsAndUtilityFunction";
import parseSelectorExpression from "./parseSelectorExpression";
import utilityClassNameToCssSelector from "./utilityClassNameToCssSelector";
import splitClassNames from "./splitClassNames";
import splitArgParts from "./splitArgParts";
import eatT1 from "./eatT1";
import applyNamespace from "./applyNamespace";
import LibrarySource from "./LibrarySource";
import Utilities from "./utils/Utilities";
import Value from "./utils/Value";
import Block from "./css/Block";
import Order from "./css/Order";
import Selector from "./css/Selector";
import SelectorList from "./css/SelectorList";
import SelectorSegment from "./css/SelectorSegment";
import Rule from "./css/Rule";
import RuleSet from "./css/RuleSet";
import MediaQuery from "./css/MediaQuery";
import StyleSheet from "./css/StyleSheet";
import { DefaultConfig, NoCompatConfig } from "./CONFIG";
import T1 from "./T1";

export default class Compiler {
	config: Config;
	utilities: Utilities;
	userSpaceUtilities: UserSpaceUtilities;

	constructor(config: Config) {
		this.config = config;
		this.utilities = new Utilities();
		this.utilities.registerBaseUtilities();
		this.userSpaceUtilities = {};
	}
	static newDefaultCompiler(): Compiler {
		return new Compiler(DefaultConfig);
	}
	static newNoCompatCompiler(): Compiler {
		return new Compiler(NoCompatConfig);
	}

	clone(): Compiler {
		let userSpaceUtilities: UserSpaceUtilities = {};
		let keys = Object.keys(this.userSpaceUtilities);
		for (let key of keys) {
			userSpaceUtilities[key] = this.userSpaceUtilities[key];
		}

		let newCompiler = new Compiler(this.config);
		newCompiler.utilities = this.utilities;
		newCompiler.userSpaceUtilities = userSpaceUtilities;
		
		return newCompiler;
	}

	format(sheet: StyleSheet, namespace: string, indentWith: string, newLine: string): string {
		sheet = sheet.sort();
		sheet = sheet.applyBrowserPrefixes(this.config.browserRewriteRules())
		return sheet.format(T1, namespace, indentWith, newLine);
	}

	addRewrite(sheet: StyleSheet, namespace: string, classes: string): [newSheet: StyleSheet, rewrittenClasses: string] {
		let classNames: Array<string>;
		[ sheet, classNames ] = this.add(sheet, classes);
		
		let namespacedClasses = T1 + " " + this.namespaceClasses(namespace, classNames);

		return [ sheet, namespacedClasses ];
	}

	add(sheet: StyleSheet, classes: string): [newSheet: StyleSheet, classNames: Array<string>] {
		let classNames = splitClassNames(classes);
		
		let utilityClassNames = eatT1(classNames);
		if ( ! utilityClassNames) {
			throw new Error("missing Turbo version identifier [t1] in ["+classes+"]");
		}

		sheet = this.compileAll(sheet, utilityClassNames, "");
		
		return [ sheet, utilityClassNames ];
	}

	namespaceClassNames(namespace: string, classNames: Array<string>): Array<string> {
		if (namespace === "") {
			return classNames;
		}

		let namespacedClassNames = [] as Array<string>;
		for (let className of classNames) {
			if (className === "") {
				continue;
			}
			if (className === "t1-root") {
				namespacedClassNames.push(className);
				continue;
			}
			namespacedClassNames.push(applyNamespace(className, namespace));
		}

		return namespacedClassNames;
	}

	namespaceClasses(namespace: string, classNames: Array<string>): string {
		return this.namespaceClassNames(namespace, classNames).join(" ");
	}

	compile(code: string): StyleSheet {
		let [ sheet,  ] = this.add(new StyleSheet(), code);
		return sheet;
	}

	compileAll(sheet: StyleSheet, classNames: Array<string>, definedName: string): StyleSheet {
		for (let className of classNames) {
			if (className === "") {
				continue;
			}
			
			let oneSheet = this.compileOne(className, definedName);
			sheet = sheet.libMergeStyleSheet(oneSheet);
		}

		return sheet;
	}

	compileOne(className: string, definedName: string): StyleSheet {
		let [ selectorExpression, utilityFn ] = separateSelectorsAndUtilityFunction(className);

		if (utilityFn.startsWith("mode-") || (utilityFn === "t1-root")) {
			return new StyleSheet();
		}

		let sheet = this.utilityClassNameToSheet(utilityFn, className, definedName);

		let selectorObjects = parseSelectorExpression(selectorExpression);
		for (let selectorObj of selectorObjects) {
			sheet = selectorObj.applyTo(sheet);
		}

		return sheet
	}

	utilityClassNameToSheet(utilityFn: string, className: string, definedName: string): StyleSheet {
		let userDefinedUtil = this.userSpaceUtilities[utilityFn];
		if (userDefinedUtil) {
			let name = className;
			if (definedName !== "") {
				name = definedName;
			}

			// Defined as raw CSS block or as a list of Turbo utilities
			if (userDefinedUtil.block !== undefined) {
				let selector = new Selector([ new SelectorSegment("." + name) ]);
				let selectors = new SelectorList([ selector ]);
				let rule = new Rule(selectors, userDefinedUtil.block, userDefinedUtil.orderForRawCss);
				let ruleSet = new RuleSet([ rule ]);
				let mq = new MediaQuery({
					ruleSet: ruleSet,
				});
				return new StyleSheet([ mq ]);
			}
			else {
				// Make the compiler happy. One of (.block or .utils) is always set.
				if (userDefinedUtil.utils === undefined) {
					throw new Error("unexpected #PI7oDxIhcuo0fnG26wfKjb1wudjnxTPd");
				}

				let sheet = this.compileAll(new StyleSheet(), userDefinedUtil.utils, name);

				// Update order to represent a higher level utility function
				let order = sheet.getMaxOrder();
				sheet = sheet.setOrder(order.append(1));

				return sheet;
			}
		}

		let [ block, order ] = this.baseUtilityClassNameToBlock(utilityFn);

		let name = className;
		if (definedName !== "") {
			name = definedName;
		}

		let escapedClassName = utilityClassNameToCssSelector(name);
		let selector = new Selector([ new SelectorSegment(escapedClassName) ]);
		let selectors = new SelectorList([ selector ]);

		let rule = new Rule(selectors, block, order);

		let ruleSet = new RuleSet([ rule ]);
		let mq = new MediaQuery({
			ruleSet: ruleSet,
		});

		return new StyleSheet([ mq ]);
	}

	baseUtilityClassNameToBlock(className: string): [block: Block, order: Order] {
		let [ parts, isNegative ] = splitArgParts(className);

		let errorMessages = [] as Array<string>;

		for (let i=parts.length; 0<i; i--) {
			let name = parts.slice(0, i).join("-");

			let utilsByName = this.utilities.utilities[name];
			if ( ! utilsByName) {
				continue;
			}

			let argParts = parts.slice(i);

			for (let util of utilsByName) {
				// Parse arguments according to the signature
				let args: Array<Value> | undefined;
				try {
					args = util.signature.parseArgs(this.config, argParts, isNegative);
				}
				catch(e) {
					let errMsg = e.toString();
					if (errMsg.startsWith("Error: ")) {
						errMsg = errMsg.substring(("Error: ").length);
					}
					throw new Error(errMsg + "\nin class name ["+className+"]");
				}
				if ( ! args) {
					continue;
				}

				// Call on success
				let block = util.fn({
					className: className,
					args: args,
				})
				return [ block, util.order ];
			}

			errorMessages.push("invalid arguments passed to utility function ["+name+"] in ["+className+"]");
		}

		if (0 < errorMessages.length) {
			throw new Error(errorMessages.join("\n"));
		}

		throw new Error("unkown utility function call ["+className+"]");
	}

	loadLibrary(path: string, code: string): Compiler {
		let libSrc = LibrarySource.parse(path, code);
		return this.libDefine(libSrc);
	}

	libDefine(libSrc: LibrarySource): Compiler {
		// Clone original
		let newCompiler = this.clone();
		
		// Compile and store new utilities
		for (let utilityDefinition of libSrc.utils) {
			let util = newCompiler.userSpaceUtilities[utilityDefinition.name]
			if (util) {
				throw new Error("utility ["+utilityDefinition.name+"] is already defined");
			}
			
			newCompiler.userSpaceUtilities[utilityDefinition.name] = {
				utils: utilityDefinition.utils,
				block: utilityDefinition.block,
				// User space utililties shall be overridable by base utilities, so we introduce them as having 2nd level order
				orderForRawCss: new Order(0, Object.keys(newCompiler.userSpaceUtilities).length),
			}
		}

		return newCompiler;
	}
}

interface UserSpaceUtilities {
	[key: string]: UserSpaceUtility;
};
interface UserSpaceUtility {
	utils: Array<string> | undefined;
	block: Block | undefined;
	orderForRawCss: Order;
}

