// Exercise 09.5 — Composition and a function lookup table
// Run:  node exercises/05-pipe-and-dispatch.js
//
// 1. pipe(...fns) -> returns a function that runs input through every fn, left to right.
//      pipe(f, g, h)(x) === h(g(f(x)))
//      With no functions, pipe()(x) should just return x.
//
// 2. Using pipe and the three small functions below, create `cleanTitle` that:
//      trims, collapses double spaces, and capitalises the first letter.
//
// 3. calculate(a, operator, b)
//      Use the `operations` object (fill it in!) to look up the right function.
//      Supported: "+", "-", "*", "/". Return "Unknown operator" for anything else.
//      Dividing by zero should return "Cannot divide by zero".

const trim = (text) => text.trim();
const collapseSpaces = (text) => text.replaceAll("  ", " ");
const capitalise = (text) => text.charAt(0).toUpperCase() + text.slice(1);

const operations = {
  // fill me in: "+": (a, b) => a + b, ...
};

// Write your code below.



// ─────────────────────────────────────────────────────────────
// Checks — don't edit below.
// ─────────────────────────────────────────────────────────────
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
check("pipe order", pipe((x) => x + 1, (x) => x * 10)(2), 30);
check("pipe with nothing", pipe()(7), 7);
check("cleanTitle", cleanTitle("   learn  node  "), "Learn node");
check("calculate +", calculate(2, "+", 3), 5);
check("calculate *", calculate(4, "*", 5), 20);
check("calculate /", calculate(10, "/", 4), 2.5);
check("calculate / 0", calculate(1, "/", 0), "Cannot divide by zero");
check("calculate unknown", calculate(2, "^", 3), "Unknown operator");
