import Value from "./Value";

export default interface Call {
	className: string;
	args: Array<Value>;
}

