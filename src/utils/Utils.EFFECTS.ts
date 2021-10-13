import type Utilities from "./Utilities";
import * as types from "./Types";
import Block from "../css/Block";
import Declaration from "../css/Declaration";

export default function registerEffectUtils(utils: Utilities) {
	utils.fn1("shadow", new types.TypeShadow(),
		function(arg: string): Block {
			return new Block([
				new Declaration("box-shadow", arg.toString()),
			]);
		},
	)
	utils.fn1("shadow-outline", new types.TypeColor(),
		function(color: string): Block {
			return new Block([
				new Declaration("box-shadow", "0 0 0 3px " + color.toString()),
			]);
		},
	)
	utils.fn2("shadow",
		new types.TypeShadow(),
		new types.TypeKeyword("inset"),
		function(arg: string, _inset: string): Block {
			return new Block([
				new Declaration("box-shadow", arg.toString() + " inset"),
			]);
		},
	)
	utils.registerKeyword("shadow-contrast-inset", new Declaration("box-shadow", "0 0 0 1px rgba(0,0,0,0.04) inset"))
	utils.registerKeyword("shadow-none", new Declaration("box-shadow", "0 0 #0000"))

	utils.fn1("opacity", new types.TypeFloat32(0, 100, 0.01),
		function(arg: string): Block {
			return new Block([
				new Declaration("opacity", arg.toString()),
			]);
		},
	)
}
