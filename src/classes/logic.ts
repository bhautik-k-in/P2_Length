export class Logic {
    constructor(private readonly name: string, private readonly baseLogic: number, private readonly offset: number) {
        this.name = name;
        this.baseLogic = baseLogic;
        this.offset = offset;
    }
    
    inOriginalState(value: number): number {
        return (value - this.offset) * this.baseLogic;
    }

    inOtherState(value: number): number {
        return (value / this.baseLogic) + this.offset;
    }
}

export const INCH = new Logic("IN", 1, 0);
export const FOOT = new Logic("FT", 12, 0);
export const YARD = new Logic("YD", 36, 0);
export const MILE = new Logic("ML", 63360, 0);
