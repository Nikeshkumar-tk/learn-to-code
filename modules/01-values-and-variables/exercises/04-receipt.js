// Exercise 01.4 — Build a receipt line
// Run:  node exercises/04-receipt.js
//
// Using the variables below, create a variable called `receipt` whose value is EXACTLY:
//
//   "Order #1042: 2 x Coffee = $7"
//
// Requirements:
//  - Use a template literal (backticks and ${ }).
//  - The 7 must be CALCULATED from unitPrice and quantity.
//  - Don't type 1042, 2, 7 or Coffee inside your template — use the variables.

const orderId = 1042;
const product = "Coffee";
const quantity = 2;
const unitPrice = 3.5;

// Write your code below.



// ─────────────────────────────────────────────────────────────
// Checks — don't edit below.
// ─────────────────────────────────────────────────────────────
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
check("receipt text is exactly right", receipt, "Order #1042: 2 x Coffee = $7");
