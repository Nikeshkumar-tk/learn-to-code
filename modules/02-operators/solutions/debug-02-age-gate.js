// Fixed. "18" === 18 is false (string vs number), and "18" > 18 is false too.
// Hypothesis test: console.log(typeof ageFromForm) -> "string".
// Fix: convert the input to a number ONCE, at the point where it enters the program.
const ageFromForm = "18";
const age = Number(ageFromForm);
const isAllowed = age >= 18; // >= says "18 or more" in one comparison

console.log("Allowed:", isAllowed);
