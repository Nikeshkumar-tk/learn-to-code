// SHADOWING: an inner variable with the SAME NAME hides the outer one.

const total = 100;

function calculate() {
  const total = 5;          // a different variable that happens to share the name
  console.log("inside:", total);
}

calculate();
console.log("outside:", total);   // unchanged

// Parameters shadow too:
const name = "global name";
function greet(name) {            // this `name` is the parameter
  return `Hello ${name}`;
}
console.log(greet("Ana"));
console.log(greet());             // undefined — it does NOT fall back to the outer `name`

// Shadowing isn't wrong, but it's a common source of confusion.
// If you see a surprising value, check for an inner variable with the same name.
