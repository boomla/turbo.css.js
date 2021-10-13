import type Config from "./Config";
import type Type from "./Type";
import ValueString from './ValueString';

export default class TypeTransitionProperty implements Type {
	constructor() {
		// NOP
	}

	parse(_: Config, strArgs: Array<string>): [arg: ValueString, remainder: Array<string>] | undefined {
		let properties = [] as Array<string>;

		for (let s of strArgs) {
			switch (s) {
				case "color":          properties.push("color");            break;
				case "bgColor":        properties.push("background-color"); break;
				case "borderColor":    properties.push("border-color");     break;
				case "fill":           properties.push("fill");             break;
				case "stroke":         properties.push("stroke");           break;
				case "opacity":        properties.push("opacity");          break;
				case "shadow":         properties.push("box-shadow");       break;
				case "transform":      properties.push("transform");        break;
				case "width":          properties.push("width");            break;
				case "height":         properties.push("height");           break;
				case "top":            properties.push("top");              break;
				case "right":          properties.push("right");            break;
				case "bottom":         properties.push("bottom");           break;
				case "left":           properties.push("left");             break;
				case "colors":         properties.push("color", "background-color", "border-color", "fill", "stroke"); break;
				default:               return undefined;
			}
		}

		if (properties.length === 0) {
			return undefined;
		}

		let value = new ValueString(properties.join(", "));

		return [ value, [] ];
	}
}

