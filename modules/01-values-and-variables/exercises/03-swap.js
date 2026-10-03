// Exercise 01.3 — Swap two values
// Run:  node exercises/03-swap.js
//
// You have two cups. One has coffee, one has tea.
// Swap their contents so cupA holds "tea" and cupB holds "coffee".
//
// Rules:
//  - Don't type the words "coffee" or "tea" in your code.
//  - Don't change the two `let` lines below.

let cupA = "coffee";
let cupB = "tea";

// Write your code below.



// ─────────────────────────────────────────────────────────────
// Checks — don't edit below.
// ─────────────────────────────────────────────────────────────
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
check("cupA now holds tea", cupA, "tea");
check("cupB now holds coffee", cupB, "coffee");
