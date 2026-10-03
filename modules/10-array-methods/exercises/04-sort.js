// Exercise 10.4 — sort (without mutating!)
// Run:  node exercises/04-sort.js
//
//   cheapestFirst(products)   -> NEW array sorted by price, low to high
//   byName(products)          -> NEW array sorted by name A-Z (use localeCompare)
//   byPriority(tasks)         -> NEW array: high, then medium, then low.
//                                Tasks with the SAME priority are sorted by title A-Z.
//
// None may change the original arrays.

const products = [
  { name: "Mouse", price: 35 },
  { name: "cable", price: 12 },
  { name: "Keyboard", price: 90 },
];

const tasks = [
  { title: "Write docs", priority: "low" },
  { title: "Fix bug", priority: "high" },
  { title: "Deploy", priority: "medium" },
  { title: "Add tests", priority: "high" },
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
check("cheapestFirst", cheapestFirst(products).map((p) => p.price), [12, 35, 90]);
check("byName", byName(products).map((p) => p.name), ["cable", "Keyboard", "Mouse"]);
check("byPriority", byPriority(tasks).map((t) => t.title), ["Add tests", "Fix bug", "Deploy", "Write docs"]);
check("products not mutated", products.map((p) => p.name), ["Mouse", "cable", "Keyboard"]);
check("tasks not mutated", tasks[0].title, "Write docs");
