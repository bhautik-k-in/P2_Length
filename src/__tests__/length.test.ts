import { Length } from "../classes/length"
import { FOOT, INCH, MILE, YARD } from "../classes/logic"

describe("Length Calculations", () => {
    test("Inch should be converted to Foot", () => {
        expect(new Length(3, INCH).getOutput(FOOT)).toBe(0.25)
    });

    test("Foot should be converted to yard", () => {
        expect(new Length(3, FOOT).getOutput(YARD)).toBe(1)
    });

    test("Yard should be converted to Mile", () => {
        expect(new Length(3, YARD).getOutput(MILE)).toBe(0)
    });

    test("Mile should be converted to Inch", () => {
        expect(new Length(3, MILE).getOutput(INCH)).toBe(190080)
    });

    test("Yard should be converted to Inch", () => {
        expect(new Length(3, YARD).getOutput(INCH)).toBe(108)
    });

    test("Mile should be converted to Foot", () => {
        expect(new Length(3, MILE).getOutput(FOOT)).toBe(15840)
    });
})

