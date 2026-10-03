// Exercise 11.4 — once() and memoize()
// Run:  node exercises/04-once-and-memoize.js
//
// 1. once(fn) -> returns a new function that calls fn the FIRST time only.
//    Every later call returns the result of that first call without calling fn again.
//    (Useful for "connect to the database only once".)
//
// 2. memoize(fn) -> returns a new function that remembers results per argument.
//    If called again with the same (single) argument, return the remembered result
//    instead of calling fn again.

// Write your code below.



// ─────────────────────────────────────────────────────────────
// Checks — don't edit below.
// ─────────────────────────────────────────────────────────────
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
let connectCalls = 0;
const connect = once(() => {
  connectCalls++;
  return "connection #" + connectCalls;
});
check("once first call", connect(), "connection #1");
check("once second call returns same result", connect(), "connection #1");
check("fn called only once", connectCalls, 1);

let slowCalls = 0;
const slowDouble = (n) => {
  slowCalls++;
  return n * 2;
};
const fastDouble = memoize(slowDouble);
check("memoize result", fastDouble(21), 42);
check("memoize cached result", fastDouble(21), 42);
check("memoize different arg", fastDouble(5), 10);
check("underlying fn called twice, not three times", slowCalls, 2);
