// let and const are BLOCK-scoped: they exist only inside the nearest { }.
// Blocks: if, else, for, while, or even plain { }.

const temperature = 35;

if (temperature > 30) {
  const advice = "Stay hydrated";   // only exists inside this if-block
  console.log(advice);
}
// console.log(advice);  // ❌ ReferenceError — uncomment to see

for (let i = 0; i < 2; i++) {
  const doubled = i * 2;            // a NEW `doubled` every round
  console.log(i, doubled);
}
// console.log(i);       // ❌ ReferenceError — i only lives in the loop

// Need the value after the block? Declare it BEFORE the block:
let status;
if (temperature > 30) {
  status = "hot";
} else {
  status = "fine";
}
console.log(status);

// Old code uses `var`, which ignores blocks (it's function-scoped).
// Recognise it, but write let/const. var's looser rules cause bugs (see debug 04).
if (true) {
  var leaky = "I escape the block!";
}
console.log(leaky);
