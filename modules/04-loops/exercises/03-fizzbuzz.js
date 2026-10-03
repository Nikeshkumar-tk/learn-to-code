// Exercise 04.3 — FizzBuzz (the classic, but you'll understand every line)
// Run:  node exercises/03-fizzbuzz.js
//
// For every number from 1 to 15 (inclusive), add ONE line to `output`:
//   "FizzBuzz" if divisible by both 3 and 5
//   "Fizz"     if divisible by 3
//   "Buzz"     if divisible by 5
//   the number otherwise
// End every line with "\n" (a newline character). Then print output.

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
check("1 to 15", output, "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz\n");
