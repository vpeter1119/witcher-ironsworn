export class Status {
    name: string = '';
    private _value: number = 0;
    get value() { return this._value; }
    set value(i: number) {
        if (i >= this.min && i <= this.max) this._value = i;
    }
    max = 5;
    min = 0;
    increase(): number {
        if (this._value < this.max) this._value++;
        return this._value;
    }
    decrease(): number {
        if (this._value > this.min) this._value--;
        return this._value;
    }
}
