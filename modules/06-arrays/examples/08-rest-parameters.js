// REST parameter: ...name in a function's parameter list collects
// "all the remaining arguments" into an ARRAY.

function sumAll(...numbers) {
  console.log("numbers is an array:", numbers);
  let total = 0;
  for (const n of numbers) total += n;
  return total;
}

console.log(sumAll(1, 2));
console.log(sumAll(1, 2, 3, 4, 5));
console.log(sumAll());

// It can come after normal parameters (it must be LAST):
function logWithLabel(label, ...messages) {
  for (const message of messages) {
    console.log(`[${label}] ${message}`);
  }
}
logWithLabel("INFO", "Server started", "Listening on port 3000");

// Same three dots, opposite jobs:
//   SPREAD  (in a call or array literal)  -> unpacks an array into separate values
//   REST    (in parameters/destructuring) -> collects separate values into an array
const nums = [3, 4, 5];
console.log(sumAll(...nums)); // spread in, rest collects them again
