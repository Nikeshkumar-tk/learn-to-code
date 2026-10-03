// Exercise 03.3 — Describe an HTTP status code
// Run:  node exercises/03-http-status.js
//
// Web servers answer every request with a status code. You'll use these in the Express module!
// Use a `switch` to set `meaning`:
//   200 -> "OK"
//   201 -> "Created"
//   400 -> "Bad Request"
//   404 -> "Not Found"
//   500 -> "Server Error"
//   anything else -> "Unknown"
//
// Then add an if/else AFTER the switch that sets `isError` to true when the code is 400 or above.

const statusCode = 404;
let meaning;
let isError;

// Write your code below.



// ─────────────────────────────────────────────────────────────
// Checks — don't edit below.
// ─────────────────────────────────────────────────────────────
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
check("404 means Not Found", meaning, "Not Found");
check("404 is an error", isError, true);
