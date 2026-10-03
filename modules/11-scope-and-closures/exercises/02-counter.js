// Exercise 11.2 — A counter with private state
// Run:  node exercises/02-counter.js
//
// createCounter(start = 0) returns an OBJECT with four functions:
//   increment()  -> adds 1, returns the new value
//   decrement()  -> subtracts 1, but never below 0; returns the new value
//   reset()      -> back to the ORIGINAL start value; returns it
//   value()      -> returns the current value
//
// The count itself must NOT be reachable from outside (no counter.count property).

// Write your code below.



// ─────────────────────────────────────────────────────────────
// Checks — don't edit below.
// ─────────────────────────────────────────────────────────────
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
const c = createCounter();
check("starts at 0", c.value(), 0);
c.increment();
check("increment", c.increment(), 2);
check("decrement", c.decrement(), 1);
c.decrement();
check("never below 0", c.decrement(), 0);
const d = createCounter(5);
d.increment();
check("custom start", d.value(), 6);
check("reset goes to start", d.reset(), 5);
check("counters are independent", c.value(), 0);
check("count is private", Object.keys(c).sort(), ["decrement", "increment", "reset", "value"]);
