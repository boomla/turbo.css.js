import Config from "./utils/Config";
import separateSelectorsAndUtilityFunction from "./separateSelectorsAndUtilityFunction";
import parseSelectorExpression from "./parseSelectorExpression";
import utilityClassNameToCssSelector from "./utilityClassNameToCssSelector";
import splitClassNames from "./splitClassNames";
import splitArgParts from "./splitArgParts";
import eatT1 from "./eatT1";
import applyNamespace from "./applyNamespace";
import LibrarySource from "./LibrarySource";
import { LIBRARY_U1 } from "./LIBRARY_U1";
import Namespace from "./Namespace";
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

const MAX_STACK_LEVEL = 32;

// Compiler is a functional object holding all compiler data,
// including libraries. It is copy-on-write.
export default class Compiler {
	config: Config;
	utilities: Utilities;
	globalNamespace: Namespace;
	libraries: { [libPath: string]: Namespace };

	// imports caches the fact that the circular dependency check has been
	// performed on import.
	// The map is keyed by `contextPath + '|' + importPath`.
	imports: { [contextPath_importPath: string]: boolean };
	
	// dependedBy is an inverse library dependency graph for detecting
	// circular dependencies. It maps each library path to all library
	// paths which import on it.
	dependedBy: { [libPath: string]: string[] };
	
	// resolveCache caches library path resolution results
	// The map is keyed by `contextPath + '|' + libName`.
	resolveCache: { [contextPath_libName: string]: string };


	constructor(config: Config) {
		this.config = config;
		this.utilities = new Utilities();
		this.utilities.registerBaseUtilities();
		this.globalNamespace = new Namespace("");
		this.libraries = {};
		this.imports = {};
		this.dependedBy = {};
		this.resolveCache = {};
	}
	static newDefaultCompiler(): Compiler {
		return new Compiler(DefaultConfig);
	}
	static newNoCompatCompiler(): Compiler {
		return new Compiler(NoCompatConfig);
	}

	clone(): Compiler {
		let newCompiler = new Compiler(this.config);
		newCompiler.utilities = this.utilities;
		newCompiler.globalNamespace = this.globalNamespace.clone();
		Object.assign(newCompiler.libraries, this.libraries);
		Object.assign(newCompiler.imports, this.imports);
		Object.assign(newCompiler.dependedBy, this.dependedBy);
		Object.assign(newCompiler.resolveCache, this.resolveCache);
		
		return newCompiler;
	}

	format(sheet: StyleSheet, namespace: string, indentWith: string, newLine: string, important: boolean): string {
		sheet = sheet.sort();
		sheet = sheet.applyBrowserPrefixes(this.config.browserRewriteRules())
		return sheet.format(T1, namespace, indentWith, newLine, important);
	}

	addRewrite(sheet: StyleSheet, namespace: string, classes: string): [newCompiler: Compiler, newSheet: StyleSheet, rewrittenClasses: string] {
		let compiler: Compiler = this;
		let classNames: Array<string>;
		[ compiler, sheet, classNames ] = compiler.add(sheet, classes);
		
		let namespacedClasses = T1 + " " + compiler.namespaceClasses(namespace, classNames);

		if (classes.endsWith(" ")) {
			namespacedClasses += " ";
		}

		return [ compiler, sheet, namespacedClasses ];
	}

	add(sheet: StyleSheet, classes: string): [newCompiler: Compiler, newSheet: StyleSheet, classNames: Array<string>] {
		let classNames = splitClassNames(classes);
		
		let utilityClassNames = eatT1(classNames);
		if ( ! utilityClassNames) {
			throw new Error("missing Turbo version identifier [t1] in ["+classes+"]");
		}

		let compiler: Compiler = this;
		let stackLevel = 0;
		[ compiler, sheet ] = compiler.compileAll(compiler.globalNamespace, sheet, utilityClassNames, "", stackLevel);
		
		return [ compiler, sheet, utilityClassNames ];
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
			if ((className === "t1-start") || (className === "t1-all")) {
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

	compile(code: string): [ newCompiler: Compiler, newSheet: StyleSheet ] {
		let [ compiler, sheet,  ] = this.add(new StyleSheet(), code);
		return [ compiler, sheet ];
	}

	compileAll(ns: Namespace, sheet: StyleSheet, classNames: Array<string>, definedName: string, stackLevel: number): [newCompiler: Compiler, newSheet: StyleSheet] {
		let compiler: Compiler;
		compiler = this;
		let oneSheet: StyleSheet;

		for (let className of classNames) {
			if (className === "") {
				continue;
			}
			
			[ compiler, oneSheet ] = compiler.compileOne(ns, className, definedName, stackLevel);
			sheet = sheet.libMergeStyleSheet(oneSheet);
		}

		return [ compiler, sheet ];
	}

	compileOne(ns: Namespace, className: string, definedName: string, stackLevel: number): [newCompiler: Compiler, newSheet: StyleSheet] {
		let [ selectorExpression, utilityFn ] = separateSelectorsAndUtilityFunction(className);

		if (utilityFn.startsWith("mode-") || (utilityFn === "t1-start") || (utilityFn === "t1-all")) {
			return [ this, new StyleSheet() ];
		}

		let sheet: StyleSheet;
		let compiler: Compiler;
		let [ libName, libUtilityFn, isLibClass ] = isLibraryClassName(utilityFn);
		if (isLibClass) {
			[ compiler, sheet ] = this.libraryClassNameToSheet(ns, libName, libUtilityFn, className, definedName);
		} else {
			[ compiler, sheet ] = this.utilityClassNameToSheet(ns, utilityFn, className, definedName, stackLevel);
		}

		let selectorObjects = parseSelectorExpression(selectorExpression);
		for (let selectorObj of selectorObjects) {
			sheet = selectorObj.applyTo(sheet);
		}

		return [ compiler, sheet ];
	}

	utilityClassNameToSheet(ns: Namespace, utilityFn: string, className: string, definedName: string, stackLevel: number): [ newCompiler: Compiler, newSheet: StyleSheet ] {
		let userDefinedUtil = ns.names[utilityFn];
		if (userDefinedUtil) {
			let name = className;
			if (definedName !== "") {
				name = definedName;
			}

			// Defined as raw CSS block or as a list of Turbo utilities
			if (userDefinedUtil.block !== undefined) {
				let escapedClassName = utilityClassNameToCssSelector(name);
				let selector = new Selector([ new SelectorSegment(escapedClassName) ]);
				let selectors = new SelectorList([ selector ]);
				let rule = new Rule(selectors, userDefinedUtil.block, userDefinedUtil.orderForRawCss);
				let ruleSet = new RuleSet([ rule ]);
				let mq = new MediaQuery({
					ruleSet: ruleSet,
				});
				return [ this, new StyleSheet([ mq ]) ];
			}
			else {
				// Make the compiler happy. One of (.block or .utils) is always set.
				if (userDefinedUtil.utils === undefined) {
					throw new Error("unexpected #PI7oDxIhcuo0fnG26wfKjb1wudjnxTPd");
				}

				if (MAX_STACK_LEVEL <= stackLevel) {
					throw new Error("stack overflow ["+MAX_STACK_LEVEL+"]");
				}

				let [ newCompiler, sheet ] = this.compileAll(ns, new StyleSheet(), userDefinedUtil.utils, name, stackLevel + 1);

				// Update order to represent a higher level utility function
				let order = sheet.getMaxOrder();
				sheet = sheet.setOrder(order.append(1));

				return [ newCompiler, sheet ];
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

		return [ this, new StyleSheet([ mq ]) ];
	}

	libraryClassNameToSheet(ns: Namespace, libName: string, utilityFn: string, className: string, definedName: string): [ newCompiler: Compiler, newSheet: StyleSheet ] {
		let [ compiler, libNs ] = this.loadLibrary(ns, libName);

		let userDefinedUtil = libNs.names[utilityFn];
		if ( ! userDefinedUtil) {
			throw new Error("library ["+libName+"] contains no class name ["+utilityFn+"]");
		}

		let name = className;
		if (definedName !== "") {
			name = definedName;
		}

		// Defined as raw CSS block or as a list of Turbo utilities
		if (userDefinedUtil.block !== undefined) {
			let escapedClassName = utilityClassNameToCssSelector(name);
			let selector = new Selector([ new SelectorSegment(escapedClassName) ]);
			let selectors = new SelectorList([ selector ]);
			let rule = new Rule(selectors, userDefinedUtil.block, userDefinedUtil.orderForRawCss);
			let ruleSet = new RuleSet([ rule ]);
			let mq = new MediaQuery({
				ruleSet: ruleSet,
			});
			return [ compiler, new StyleSheet([ mq ]) ];
		}

		// Make the compiler happy - if block is set, utils is never undefined
		if (userDefinedUtil.utils === undefined) {
			throw new Error("unexpected undefined #PaqqhXcyMtdbARVs3J5jh9sCRrrvaHO2");
		}

		let sheet: StyleSheet;
		let stackLevel = 0;
		[ compiler, sheet ] = compiler.compileAll(libNs, new StyleSheet([]), userDefinedUtil.utils, name, stackLevel);

		// Update order to represent a higher level utility function
		let order = sheet.getMaxOrder();
		sheet = sheet.setOrder(order.append(1));

		return [ compiler, sheet ];
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
				catch(err: unknown) {
					if ( ! (err instanceof Error)) {
						throw new Error('unexpected error #aOsdugHa8zerh28fEsa834eZtb78fnsd');
					}
					let errMsg = err.toString();
					if (errMsg.startsWith("Error: ")) {
						errMsg = errMsg.substring(("Error: ").length);
					}
					throw new Error(errMsg + "\nin class name ["+className+"]");
				}
				if ( ! args) {
					continue;
				}

				const argsCSS = args.map((val) => val.toCSS(this.config));

				// Call on success
				let block = util.fn({
					className: className,
					args: argsCSS,
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

	eval(path: string, code: string): Compiler {
		let libSrc = LibrarySource.parse(path, code);
		return this.libDefine(libSrc);
	}

	libDefine(libSrc: LibrarySource): Compiler {
		// Clone original
		let newCompiler = this.clone();

		let i = Object.keys(newCompiler.globalNamespace.names).length;
		
		// Compile and store new utilities
		for (let utilityDefinition of libSrc.utils) {
			let util = newCompiler.globalNamespace.names[utilityDefinition.name]
			if (util) {
				throw new Error("utility ["+utilityDefinition.name+"] is already defined");
			}
			
			newCompiler.globalNamespace.names[utilityDefinition.name] = {
				utils: utilityDefinition.utils,
				block: utilityDefinition.block,
				// User space utililties shall be overridable by base utilities, so we introduce them as having 2nd level order
				orderForRawCss: new Order(0, i),
			};
			i++;
		}

		return newCompiler;
	}

	loadLibrary(ns: Namespace, libName: string): [ newCompiler: Compiler, libNs: Namespace ] {
		let compiler = this;

		let libPath = compiler.resolveCache[ns.path + "|" + libName];
		if ( ! libPath) {
			let maybeLibPath = compiler.config.resolveLibrary(ns.path, libName);
			if ( ! maybeLibPath) {
				return compiler.libNotFound(libName);
			} else {
				libPath = maybeLibPath;
			}
		}

		if (libPath === ns.path) {
			throw new Error("library can not import itself ["+ns.path+"]");
		}

		let libNs = compiler.libraries[libPath];
		if (libNs) {
			let newCompiler = compiler.assertNonCircularImport(ns.path, libPath);

			return [ newCompiler, libNs ];
		}

		let libCode = compiler.config.loadLibrary(libPath);

		libNs = Namespace.evalLibrary(libName, libPath, libCode);
		
		// Apply defaults
		switch (libName) {
			case "u1": {
				libNs.applyDefaults(LIBRARY_U1);
				break;
			}
		}

		let newCompiler = compiler.clone();
		newCompiler.libraries[libPath] = libNs;
		newCompiler.imports[ns.path + "|" + libPath] = true;
		newCompiler.dependedBy[libPath] = [
			ns.path,
		];
		newCompiler.resolveCache[ns.path + "|" + libName] = libPath;

		return [ newCompiler, libNs ];
	}

	// libNotFound loads a standard library or returns an error if the lib is unknown.
	libNotFound(libName: string): [ newCompiler: Compiler, libNs: Namespace ] {
		switch (libName) {
			case "u1": return [ this, LIBRARY_U1 ];
		}

		throw new Error("can not find library ["+libName+"]");
	}

	assertNonCircularImport(contextPath: string, importPath: string): Compiler {
		// Already imported?
		let alreadyChecked = this.imports[contextPath + "|" + importPath];
		if (alreadyChecked) {
			return this;
		}

		// Assert
		this.assertNoCircularDependenciesExistFor([ importPath, contextPath ]);

		// Cache
		let newCompiler = this.clone();
		newCompiler.imports[contextPath + "|" + importPath] = true;

		return newCompiler;
	}

	assertNoCircularDependenciesExistFor(reverseImportChain: string[]) {
		let lastPath = reverseImportChain[reverseImportChain.length - 1];

		let importingLibs = this.dependedBy[lastPath];
		for (let importingLibPath of importingLibs) {
			if (importingLibPath === "") {
				continue;
			}

			// assert chain does not contain current importingLibPath
			for (let i=0; i<reverseImportChain.length; i++) {
				let path = reverseImportChain[i];

				if (path === importingLibPath) {
					let importChain = reverseImportChain.slice(i);
					importChain.push(importingLibPath);
					importChain.reverse();
					throw new Error(formatCircularDependencyError(importChain));
				}
			}

			// Walk until top-of-chain is reached
			let newChain = reverseImportChain.slice(0);
			newChain.push(importingLibPath);
			this.assertNoCircularDependenciesExistFor(newChain);
		}
	}
}

function formatCircularDependencyError(importChain: string[]): string {
	let s = "circular dependency found:\n";

	for (let i=1; i<importChain.length; i++) {
		let importingLib = importChain[i-1];
		let importedLib = importChain[i];
		s += "  ["+importingLib+"] imports ["+importedLib+"]\n";
	}

	return s.trim();
}

function isLibraryClassName(utilityFn: string): [ libName: string, libUtilityFn: string, isLibClass: boolean ] {
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

