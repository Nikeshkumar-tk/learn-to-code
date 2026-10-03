// Exercise 04.4 — Savings goal
// Run:  node exercises/04-savings-goal.js
//
// You have `balance` saved. Every month you:
//   1. earn 1% interest on the current balance  (balance * 0.01)
//   2. then deposit `monthlyDeposit`
// How many months until balance is AT LEAST `goal`?
//
// Store the answer in `months`. You don't know the number of rounds in advance —
// which kind of loop fits best?
// Also print a line for every month: "Month 1: $1260.00"  (tip: balance.toFixed(2))

let balance = 1000;
const monthlyDeposit = 250;
const goal = 5000;
let months = 0;

// Write your code below.



// ─────────────────────────────────────────────────────────────
// Checks — don't edit below.
// ─────────────────────────────────────────────────────────────
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
check("months needed", months, 15);
check("goal reached", balance >= goal, true);
