import Utilities from "./Utilities";
import * as types from "./Types";
import Block from "../css/Block";
import Declaration from "../css/Declaration";

export default function registerTransitionUtils(utils: Utilities) {
	utils.registerKeyword("transition-all",
		new Declaration("transition-property", "all"),
		new Declaration("transition-timing-function", "cubic-bezier(0.4, 0, 0.2, 1)"),
		new Declaration("transition-duration", "150ms"),
	)
	utils.registerKeyword("transition",
		new Declaration("transition-property", "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform"),
		new Declaration("transition-timing-function", "cubic-bezier(0.4, 0, 0.2, 1)"),
		new Declaration("transition-duration", "150ms"),
	)
	utils.fn1("transition",
		new types.TypeTransitionProperty(),
		function(arg: string): Block {
			return new Block([
				new Declaration("transition-property", arg.toString()),
				new Declaration("transition-timing-function", "cubic-bezier(0.4, 0, 0.2, 1)"),
				new Declaration("transition-duration", "150ms"),
			]);
		},
	)

	utils.registerKeyword("transition-none",
		new Declaration("transition-property", "none"),
	)
	utils.registerKeyword("transition-prop-none",
		new Declaration("transition-property", "none"),
	)
	utils.registerKeyword("transition-prop-all",
		new Declaration("transition-property", "all"),
	)
	utils.fn1("transition-prop",
		new types.TypeTransitionProperty(),
		function(arg: string): Block {
			return new Block([
				new Declaration("transition-property", arg.toString()),
			]);
		},
	)

	utils.fn1("delay", new types.TypeTime(),
		function(arg: string): Block {
			return new Block([
				new Declaration("transition-delay", arg.toString()),
			]);
		},
	)
	utils.fn1("duration", new types.TypeTime(),
		function(arg: string): Block {
			return new Block([
				new Declaration("transition-duration", arg.toString()),
			]);
		},
	)
	utils.registerKeyword("ease-linear",
		new Declaration("transition-timing-function", "linear"),
	)
	utils.registerKeyword("ease-in",
		new Declaration("transition-timing-function", "cubic-bezier(0.4, 0, 1, 1)"),
	)
	utils.registerKeyword("ease-out",
		new Declaration("transition-timing-function", "cubic-bezier(0, 0, 0.2, 1)"),
	)
	utils.registerKeyword("ease-in-out",
		new Declaration("transition-timing-function", "cubic-bezier(0.4, 0, 0.2, 1)"),
	)
}

