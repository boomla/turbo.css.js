
export default class ValueFloat32 {
	readonly value: number = 0;

	constructor(val: number) {
		this.value = val;
	}

	toCSS(): string {
		return this.value.toString();
	}
	negate(): ValueFloat32 {
		return new ValueFloat32(0 - this.value);
	}
	toClassName(): string {
		return this.toCSS();
	}
}

