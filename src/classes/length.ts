import { Logic } from "./logic";

export class Length {
    private readonly toBaseValue: number
    constructor(private readonly length: number, private readonly logic: Logic) {
        this.length = length;
        this.logic = logic;
        this.toBaseValue = logic.inOriginalState(this.length);
    }

    getOutput(shift: Logic): number {
        return +(shift.inOtherState(this.toBaseValue).toFixed(2));
    }
}

