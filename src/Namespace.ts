import type Block from "./css/Block";
import Order from "./css/Order";
import LibrarySource from "./LibrarySource";

interface UserSpaceUtility {
	utils: Array<string> | undefined;
	block: Block | undefined;
	userSpaceUtilityOrder: Order;
}

export default class Namespace {
	path: string;
	names: { [key: string]: UserSpaceUtility };

	constructor(path: string, names?: { [key: string]: UserSpaceUtility }) {
		this.path = path;
		if (names === undefined) {
			names = {};
		}
		this.names = names;
	}

	static evalLibrary(_libName: string, libPath: string, code: string): Namespace {
		let libSrc = LibrarySource.parse(libPath, code);

		let names = {} as { [key: string]: UserSpaceUtility };
		
		let i = 0;
		for (let utilityDefinition of libSrc.utils) {
			let util = names[utilityDefinition.name];
			if (util) {
				throw new Error("class ["+utilityDefinition.name+"] is defined multiple times in library ["+libPath+"]");
			}
			
			names[utilityDefinition.name] = {
				utils: utilityDefinition.utils,
				block: utilityDefinition.block,
				// User space utililties shall be overridable by base utilities, so we introduce them as having 2nd level order
				userSpaceUtilityOrder: new Order(0, i),
			}
			i++;
		}

		return new Namespace(libPath, names);
	}
	
	clone(): Namespace {
		var names = {} as { [key: string]: UserSpaceUtility };
		Object.assign(names, this.names);
		return new Namespace(this.path, names);
	}

	applyDefaults(defaultNs: Namespace): Namespace {
		let names: { [key: string]: UserSpaceUtility } = {};
		let i = 0;

		// First add the NOT overridden defaults
		let defaultKeys = Object.keys(defaultNs.names);
		for (let key of defaultKeys) {
			if (this.names[key]) {
				continue;
			}
			let utilityDefinition = defaultNs.names[key];

			names[key] = {
				utils: utilityDefinition.utils,
				block: utilityDefinition.block,
				// User space utililties shall be overridable by base utilities, so we introduce them as having 2nd level order
				userSpaceUtilityOrder: new Order(0, i),
			};

			i++;
		}


		// Then we append the overrides
		let thisKeys = Object.keys(this.names);
		for (let key of thisKeys) {
			let utilityDefinition = this.names[key];

			names[key] = {
				utils: utilityDefinition.utils,
				block: utilityDefinition.block,
				// User space utililties shall be overridable by base utilities, so we introduce them as having 2nd level order
				userSpaceUtilityOrder: new Order(0, i),
			};

			i++;
		}

		return new Namespace(this.path, names);
	}
};

