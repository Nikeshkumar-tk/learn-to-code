// Exercise 05.5 — Break a problem into small functions
// Run:  node exercises/05-invoice.js
//
// Build an invoice calculator out of small, PURE functions:
//
//   subtotal(price, quantity)          -> price * quantity
//   applyDiscount(amount, percent)     -> amount reduced by percent %
//   addTax(amount, taxPercent)         -> amount increased by taxPercent %
//   formatMoney(amount)                -> "$12.50" style string (use amount.toFixed(2))
//   invoiceTotal(price, quantity, discountPercent = 0, taxPercent = 18)
//       -> uses the functions above, in this order: subtotal -> discount -> tax,
//          and returns the FORMATTED string.
//
// Rule: invoiceTotal must not do any maths itself — it only calls the other functions.

// Write your code below.



// ─────────────────────────────────────────────────────────────
// Checks — don't edit below.
// ─────────────────────────────────────────────────────────────
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
check("subtotal(20, 3)", subtotal(20, 3), 60);
check("applyDiscount(200, 25)", applyDiscount(200, 25), 150);
check("addTax(100, 18)", addTax(100, 18), 118);
check("formatMoney(5)", formatMoney(5), "$5.00");
check("formatMoney(12.5)", formatMoney(12.5), "$12.50");
check("invoiceTotal(50, 2)", invoiceTotal(50, 2), "$118.00");
check("invoiceTotal(50, 2, 10)", invoiceTotal(50, 2, 10), "$106.20");
check("invoiceTotal(50, 2, 10, 0)", invoiceTotal(50, 2, 10, 0), "$90.00");
