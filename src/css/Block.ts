import Declaration from './Declaration';

export default class Block {
	readonly declarations: Array<Declaration> = [];

	constructor(declarations: Array<Declaration>) {
		this.declarations = Object.assign([], declarations);
	}

	format(indentation: string, newLine: string, important: boolean): string {
		let s = "";
		for (let decl of this.declarations) {
			s += decl.format(indentation, newLine, important);
		}
		return s;
	}

	mapDeclarations(mapper: (decl: Declaration) => Array<Declaration>): Block {
		let newDeclarations = [] as Array<Declaration>;
		for (let decl of this.declarations) {
			let decls = mapper(decl);
			newDeclarations.push(...decls);
		}
		return new Block(newDeclarations);
	}

	addDeclaration(decl: Declaration): Block {
		let newDeclarations = [...this.declarations];
		newDeclarations.push(decl);
		return new Block(newDeclarations);
	}

	// overwrite merges block2 onto the current block while overwriting existing properties.
	// It preserves the property order, dropping properties from block that also
	// appear in block2, then appending all declarations from block2.
	overwrite(block2: Block): Block {
		let newDeclarations = [...this.declarations];

		// Index position of existing properties in the original block
		let propertyMap = {} as {[key: string]: number};
		for (let i=0; i<this.declarations.length; i++) {
			let decl = this.declarations[i];
			propertyMap[decl.property] = i;
		}

		// Append properties from block2, remove identical properties from block
		let matchFound = false;
		for (let decl of block2.declarations) {
			if (propertyMap[decl.property] !== undefined) {
				// Undefine
				let index = propertyMap[decl.property];
				newDeclarations[index]= new Declaration("", "");
				matchFound = true;
			}

			// Append new declaration
			newDeclarations.push(decl);
			propertyMap[decl.property] = newDeclarations.length - 1;
		}

		// If there were no matching properties, we are done
		if ( ! matchFound) {
			return new Block(newDeclarations);
		}

		// There were matching properties, create a new clean Block
		// containing only the defined declarations
		let newDeclarations2 = [] as Array<Declaration>;
		for (let decl of newDeclarations) {
			if (decl.property === "") {
				// Skip overwritten declaration
				continue
			}

			newDeclarations2.push(decl);
		}

		return new Block(newDeclarations2);
	}
}

