import Utilities from "./Utilities";
import * as types from "./Types";
import Block from "../css/Block";
import Declaration from "../css/Declaration";

export default function registerSvgUtils(utils: Utilities) {
	utils.fn1("fill", new types.TypeColor(),
		function(arg: string): Block {
			return new Block([
				new Declaration("fill", arg.toString()),
			]);
		},
	)
	utils.fn1("stroke-c", new types.TypeColor(),
		function(arg: string): Block {
			return new Block([
				new Declaration("stroke", arg.toString()),
			]);
		},
	)
	utils.fn1("stroke", new types.TypeLengthPercentage(1, "px"),
		function(arg: string): Block {
			return new Block([
				new Declaration("stroke-width", arg.toString()),
			]);
		},
	)
}

