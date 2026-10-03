// Exercise 14.1 — Create and use promises
// Run:  node exercises/01-wait-and-delay.js
//
// 1. wait(ms) -> returns a Promise that resolves after ms milliseconds (use setTimeout)
//
// 2. delayedGreeting(name, ms) -> an ASYNC function that waits ms, then returns `Hello, ${name}!`
//
// 3. countdown(from) -> an ASYNC function that returns an array of numbers from `from` down to 1,
//    waiting 50ms before adding each number. countdown(3) -> [3, 2, 1] (after ~150ms)

// Write your code below.



// ─────────────────────────────────────────────────────────────
// Checks — don't edit below.
// ─────────────────────────────────────────────────────────────
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
check("wait returns a Promise", wait(1) instanceof Promise, true);
let t = Date.now();
await wait(120);
check("wait(120) waits at least ~120ms", Date.now() - t >= 110, true);
t = Date.now();
check("delayedGreeting", await delayedGreeting("Ana", 50), "Hello, Ana!");
check("delayedGreeting waited", Date.now() - t >= 45, true);
t = Date.now();
check("countdown(3)", await countdown(3), [3, 2, 1]);
check("countdown waited between numbers", Date.now() - t >= 140, true);
