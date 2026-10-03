// Exercise 03.1 — Shipping cost
// Run:  node exercises/01-shipping-cost.js
//
// Set `shippingCost` using these rules:
//   - Orders of $100 or more ship free (0), anywhere.
//   - Otherwise, domestic orders (country "IN") cost 5.
//   - Otherwise, international orders cost 20.
// Then print: "Shipping: $<cost>"
//
// The checks test the values below. Afterwards, try the other cases in the README table.

const orderTotal = 45;
const country = "US";
let shippingCost;

// Write your code below.



// ─────────────────────────────────────────────────────────────
// Checks — don't edit below.
// ─────────────────────────────────────────────────────────────
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
check("$45 to the US costs 20", shippingCost, 20);
