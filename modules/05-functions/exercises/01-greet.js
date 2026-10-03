// Exercise 05.1 — Your first function
// Run:  node exercises/01-greet.js
//
// Write a function called `greet` that:
//   - takes a `name` parameter
//   - RETURNS (not prints!) the string "Hello, <name>!"
//   - if no name is given, uses "friend" instead (default parameter)

// Write your code below.



// ─────────────────────────────────────────────────────────────
// Checks — don't edit below.
// ─────────────────────────────────────────────────────────────
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
check('greet("Ada")', greet("Ada"), "Hello, Ada!");
check('greet("Linus")', greet("Linus"), "Hello, Linus!");
check("greet() with no name", greet(), "Hello, friend!");
