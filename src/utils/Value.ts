
export default interface Value {
	toString(): string;
	negate(): [negatedValue: Value, ok: boolean ];
}

