// Exercise 09.1 — Passing and calling functions
// Run:  node exercises/01-pass-and-call.js
//
// 1. applyTwice(fn, value)
//      calls fn on value, then calls fn AGAIN on that result, and returns it.
//      applyTwice((x) => x + 3, 10) -> 16
//
// 2. collect(times, fn)
//      calls fn(i) for i = 0, 1, ... times-1 and returns an ARRAY of the results.
//      collect(4, (i) => i * i) -> [0, 1, 4, 9]
//
// 3. ifElse(condition, onTrue, onFalse)
//      calls onTrue() if condition is truthy, otherwise onFalse(), and returns what it returned.

// Write your code below.



// ─────────────────────────────────────────────────────────────
// Checks — don't edit below.
// ─────────────────────────────────────────────────────────────
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
check("applyTwice add 3", applyTwice((x) => x + 3, 10), 16);
check("applyTwice double", applyTwice((x) => x * 2, 5), 20);
check("applyTwice strings", applyTwice((s) => s + "!", "hey"), "hey!!");
check("collect squares", collect(4, (i) => i * i), [0, 1, 4, 9]);
check("collect labels", collect(2, (i) => `item-${i}`), ["item-0", "item-1"]);
check("ifElse true", ifElse(5 > 3, () => "yes", () => "no"), "yes");
check("ifElse false", ifElse("", () => "yes", () => "no"), "no");
