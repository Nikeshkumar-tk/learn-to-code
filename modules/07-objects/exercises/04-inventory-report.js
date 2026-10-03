// Exercise 07.4 — Inventory report with Object.keys/values/entries
// Run:  node exercises/04-inventory-report.js
//
//   totalItems(inventory)            -> sum of all counts
//   lowStock(inventory, threshold)   -> array of item NAMES whose count is below threshold
//   restock(inventory, amount)       -> NEW object where every count is increased by amount
//                                       (hint: start with {} and use computed keys / bracket assignment)

const inventory = { pens: 40, notebooks: 3, staplers: 0, folders: 12 };

// Write your code below.



// ─────────────────────────────────────────────────────────────
// Checks — don't edit below.
// ─────────────────────────────────────────────────────────────
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
check("totalItems", totalItems(inventory), 55);
check("lowStock below 5", lowStock(inventory, 5), ["notebooks", "staplers"]);
check("restock by 10", restock(inventory, 10), { pens: 50, notebooks: 13, staplers: 10, folders: 22 });
check("original not mutated", inventory.pens, 40);
