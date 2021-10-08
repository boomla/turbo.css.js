
export default class ValueInt32 {
	readonly value: number = 0;

	constructor(val: number) {
		this.value = val;
	}

    toCSS(): string {
        return this.value.toString();
    }
    negate(): ValueInt32 {
        return new ValueInt32(0 - this.value);
    }
    toClassName(): string {
        return this.toCSS();
    }
}

