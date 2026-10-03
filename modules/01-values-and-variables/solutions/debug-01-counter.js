// Fixed. The error was: "TypeError: Assignment to constant variable."
// `visitors` changes over time, so it must be declared with `let`, not `const`.
// Ask for every variable: "Will this name ever need to point to a new value?"
let visitors = 0;
console.log("Visitors:", visitors);

visitors = visitors + 1;
console.log("Visitors:", visitors);

visitors = visitors + 1;
console.log("Visitors:", visitors);
