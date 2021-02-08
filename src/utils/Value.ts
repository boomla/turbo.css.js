
export default interface Value {
	toString(): string;
	negate(): Value|undefined;
}

