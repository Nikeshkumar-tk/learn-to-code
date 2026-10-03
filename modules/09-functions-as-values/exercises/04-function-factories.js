// Exercise 09.4 — Functions that return functions
// Run:  node exercises/04-function-factories.js
//
//   makeDiscount(percent)  -> returns a function (price) => discounted price
//                             makeDiscount(10)(200) -> 180
//
//   minLength(n)           -> returns a function (text) => true if text.length >= n
//
//   makeTagger(tag)        -> returns a function (message) => `[${tag}] ${message}`
//
// Then create:
//   blackFriday  = a discount of 50%
//   isStrongEnough = a minLength of 8

// Write your code below.



// ─────────────────────────────────────────────────────────────
// Checks — don't edit below.
// ─────────────────────────────────────────────────────────────
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
check("makeDiscount returns a function", typeof makeDiscount(10), "function");
check("10% off 200", makeDiscount(10)(200), 180);
check("blackFriday(80)", blackFriday(80), 40);
check("isStrongEnough short", isStrongEnough("abc"), false);
check("isStrongEnough long", isStrongEnough("correcthorse"), true);
check("minLength(3) on 'abc'", minLength(3)("abc"), true);
const info = makeTagger("INFO");
check("makeTagger", info("Server started"), "[INFO] Server started");
check("filter with a factory", ["a", "abcd", "abc"].filter(minLength(3)), ["abcd", "abc"]);
