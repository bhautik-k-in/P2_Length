import { Length } from "./classes/length";
import { FOOT, INCH, MILE, YARD } from "./classes/logic";

const x = 3;

const inchToYard = new Length(x, INCH)
console.log(`${x} INCH TO YARD ::: ${inchToYard.getOutput(YARD)} Yard`);

const yardToInch = new Length(x, YARD)
console.log(`${x} YARD TO INCH ::: ${yardToInch.getOutput(INCH)} INCH`);

console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");

const inchToFoot = new Length(x, INCH)
console.log(`${x} INCH TO FOOT ::: ${inchToFoot.getOutput(FOOT)} FOOT`);

const footToInch = new Length(x, FOOT)
console.log(`${x} FOOT TO INCH ::: ${footToInch.getOutput(INCH)} INCH`);

console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");

const footToYard = new Length(x, FOOT)
console.log(`${x} FOOT TO YARD ::: ${footToYard.getOutput(YARD)} YARD`);

const yardToFoot = new Length(x, YARD)
console.log(`${x} YARD TO FOOT ::: ${yardToFoot.getOutput(FOOT)} FOOT`);

console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");

const yardToMile = new Length(x, YARD)
console.log(`${x} YARD TO MILE ::: ${yardToMile.getOutput(MILE)} MILE`);

const mileToYard = new Length(x, MILE)
console.log(`${x} MILE TO YARD ::: ${mileToYard.getOutput(YARD)} YARD`);

console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");

const inchToMile = new Length(x, INCH)
console.log(`${x} INCH TO MILE ::: ${inchToMile.getOutput(MILE)} MILE`);

const mileToInch = new Length(x, MILE)
console.log(`${x} MILE TO INCH ::: ${mileToInch.getOutput(INCH)} INCH`);