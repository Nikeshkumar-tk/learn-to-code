// Fixed. "30" + 1 gives "301": when + sees a string on either side, it JOINS text.
// How to confirm the hypothesis: console.log(typeof ageInput)  -> "string".
// Fix: convert the text into a number first with Number(...).
const ageInput = "30";
const nextYearAge = Number(ageInput) + 1;

console.log("Next year you will be", nextYearAge);
