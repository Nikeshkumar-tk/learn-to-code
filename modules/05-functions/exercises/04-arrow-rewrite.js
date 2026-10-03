// Exercise 05.4 — Rewrite as arrow functions
// Run:  node exercises/04-arrow-rewrite.js
//
// Below are three function declarations. Rewrite each one as an ARROW function
// stored in a const with the SAME name. Use the implicit-return form (no { } or return)
// where the body is a single expression.
// Delete (or comment out) the original declarations when you're done.

function isEven(n) {
  return n % 2 === 0;
}

function fullName(first, last) {
  return `${first} ${last}`;
}

function getTimestamp() {
  return "2026-01-01T00:00:00Z";
}

// ─────────────────────────────────────────────────────────────
// Checks — don't edit below.
// ─────────────────────────────────────────────────────────────
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
const isArrow = (fn) => typeof fn === "function" && !Object.hasOwn(fn, "prototype");
check("isEven(4)", isEven(4), true);
check("isEven(7)", isEven(7), false);
check("fullName", fullName("Ada", "Lovelace"), "Ada Lovelace");
check("getTimestamp", getTimestamp(), "2026-01-01T00:00:00Z");
check("isEven is an arrow function", isArrow(isEven), true);
check("fullName is an arrow function", isArrow(fullName), true);
check("getTimestamp is an arrow function", isArrow(getTimestamp), true);
