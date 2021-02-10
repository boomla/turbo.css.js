import Utilities from "./Utilities";
import Value from "./Value";
import * as types from "./Types";
import Block from "../css/Block";
import Declaration from "../css/Declaration";

export default function registerTableUtils(utils: Utilities) {
	utils.fn1("border",
		new types.TypeKeywordValueMap({
			"collapse": "collapse",
			"separate": "separate",
		}),
		function(arg: Value): Block {
			return new Block([
				new Declaration("border-collapse", arg.toString()),
			]);
		},
	)
	utils.fn1("table",
		new types.TypeKeywordValueMap({
			"auto": "auto",
			"fixed": "fixed",
		}),
		function(arg: Value): Block {
			return new Block([
				new Declaration("table-layout", arg.toString()),
			]);
		},
	)
}

