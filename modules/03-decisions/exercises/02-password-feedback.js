// Exercise 03.2 — Password feedback
// Run:  node exercises/02-password-feedback.js
//
// Set `feedback` to:
//   "Password is required"            if password is empty
//   "Too short (min 8 characters)"    if it has fewer than 8 characters
//   "Do not use your username"        if it is exactly the same as the username
//   "Looks good"                      otherwise
//
// New tool: `password.length` gives the number of characters in the string.
// Think about ORDER: which rule should be checked first?

const username = "sam";
const password = "sunshine";
let feedback;

// Write your code below.



// ─────────────────────────────────────────────────────────────
// Checks — don't edit below.
// ─────────────────────────────────────────────────────────────
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
check('"sunshine" looks good', feedback, "Looks good");
