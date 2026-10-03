// Exercise 01.2 — Shopping cart maths
// Run:  node exercises/02-shopping-cart.js
//
// 1. Create `pricePerItem` = 12 and `quantity` = 3.
// 2. Create `total` = pricePerItem times quantity (an expression — don't type 36).
// 3. Print the total with a template literal, e.g. "3 items cost $36".
// 4. The customer adds 2 more items. Increase `quantity` by 2 (reassign it).
// 5. Recalculate `total` and print it again.
//
// Think: which variables need `let` and which can be `const`?
//
// Write your code below.



// ─────────────────────────────────────────────────────────────
// Checks — don't edit below.
// ─────────────────────────────────────────────────────────────
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
check("pricePerItem is 12", pricePerItem, 12);
check("quantity ends at 5", quantity, 5);
check("total ends at 60", total, 60);
