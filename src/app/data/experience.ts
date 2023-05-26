import { BehaviorSubject } from 'rxjs';

export class Experience {
    private _value: number = 0;
    get value() { return this._value; }
    set value(i: number) {
        if (i >= this.min && i <= this.max) this._value = i;
    }
    value$: BehaviorSubject<number> = new BehaviorSubject<number>(this._value);
    private _used: number = 0;
    get used() { return this._used; }
    set used(i: number) {
        if (i >= this.min && i <= this.max) this._used = i;
    }
    used$: BehaviorSubject<number> = new BehaviorSubject<number>(this._used);
    min: number = 0;
    max: number = 30;
    spend(i: number): number {
        if (this.used + i <= this._value) this._used += i;
        return this._used;
    }
}
