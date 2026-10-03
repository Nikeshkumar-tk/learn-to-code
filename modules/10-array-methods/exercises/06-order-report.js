// Exercise 10.6 — A real report with chained methods
// Run:  node exercises/06-order-report.js
//
// Using chains of array methods:
//   1. paidRevenue(orders)       -> total of `amount` for orders with status "paid"
//   2. bestCustomer(orders)      -> name of the customer with the highest PAID total
//                                   (hint: reduce into { name: total } first, then find the max)
//   3. productsSold(orders)      -> sorted A-Z array of unique product names across PAID orders
//                                   (each order has an `items` array of product names)
//   4. summary(orders)           -> string like "3 paid orders, $360 revenue"

const orders = [
  { id: 1, customer: "Ana", amount: 120, status: "paid", items: ["mouse", "pad"] },
  { id: 2, customer: "Ben", amount: 300, status: "refunded", items: ["monitor"] },
  { id: 3, customer: "Ana", amount: 40, status: "paid", items: ["cable"] },
  { id: 4, customer: "Cy", amount: 200, status: "paid", items: ["keyboard", "mouse"] },
  { id: 5, customer: "Ben", amount: 15, status: "pending", items: ["cable"] },
];

// Write your code below.



// ─────────────────────────────────────────────────────────────
// Checks — don't edit below.
// ─────────────────────────────────────────────────────────────
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
check("paidRevenue", paidRevenue(orders), 360);
check("bestCustomer", bestCustomer(orders), "Cy");
check("productsSold", productsSold(orders), ["cable", "keyboard", "mouse", "pad"]);
check("summary", summary(orders), "3 paid orders, $360 revenue");
