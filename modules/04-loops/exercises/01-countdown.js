// Exercise 04.1 — Countdown
// Run:  node exercises/01-countdown.js
//
// Using a for loop that counts DOWN from `start`, build the string:
//   "5 4 3 2 1 Liftoff!"
// and store it in the variable `output` (already created for you). Then print it.
//
// Accumulator pattern: start with "", and add to it on each round.

const start = 5;
let output = "";

// Write your code below.



// ─────────────────────────────────────────────────────────────
// Checks — don't edit below.
// ─────────────────────────────────────────────────────────────
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
check("countdown text", output, "5 4 3 2 1 Liftoff!");
