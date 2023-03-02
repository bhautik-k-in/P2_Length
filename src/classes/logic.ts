export class Logic {
    constructor(private readonly baseLogic: number) {
        this.baseLogic = baseLogic;
    }
    
    inOriginalState(value: number): number {
        return value * this.baseLogic;
    }

    inOtherState(value: number): number {
        return value / this.baseLogic;
    }
}

export const INCH = new Logic(1);
export const FOOT = new Logic(12);
export const YARD = new Logic(36);
export const MILE = new Logic(63360);
