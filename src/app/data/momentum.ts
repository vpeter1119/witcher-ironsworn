export class Momentum {
    private _value: number = 0;
    get value() { return this._value; }
    private _min: number = -6;
    get min() { return this._min; }
    private _max: number = 10;
    get max() { return this._max; }
    private _reset: number = 2;
    get reset() { return this._reset; }
    increase(): number { 
        if (this._value + 1 <= this._max) this._value++;
        return this._value;
    }
    decrease(): number { 
        if (this._value - 1 >= this._min) this._value--; 
        return this._value;
    }
    resetValue(): number {
        this._value = this.reset;
        return this._value;
    }
}