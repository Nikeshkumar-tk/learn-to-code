// Exercise 10.2 — filter, find, findIndex
// Run:  node exercises/02-filter-find.js
//
// Write these functions (one array method each — no loops):
//   inStock(products)                -> products with stock > 0
//   cheaperThan(products, maxPrice)  -> products with price < maxPrice
//   searchByName(products, text)     -> products whose name contains text (case-insensitive)
//   findById(products, id)           -> the product with that id, or undefined
//   positionOf(products, id)         -> index of the product with that id, or -1
//   removeById(products, id)         -> NEW array without that product

const products = [
  { id: 1, name: "Mechanical Keyboard", price: 90, stock: 5 },
  { id: 2, name: "USB-C Cable", price: 12, stock: 0 },
  { id: 3, name: "Wireless Mouse", price: 35, stock: 12 },
  { id: 4, name: "Keyboard Wrist Rest", price: 18, stock: 3 },
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
const ids = (list) => list.map((p) => p.id);
check("inStock", ids(inStock(products)), [1, 3, 4]);
check("cheaperThan 20", ids(cheaperThan(products, 20)), [2, 4]);
check("searchByName 'keyboard'", ids(searchByName(products, "keyboard")), [1, 4]);
check("searchByName 'MOUSE'", ids(searchByName(products, "MOUSE")), [3]);
check("findById 3", findById(products, 3)?.name, "Wireless Mouse");
check("findById missing", findById(products, 99), undefined);
check("positionOf 4", positionOf(products, 4), 3);
check("positionOf missing", positionOf(products, 99), -1);
check("removeById 2", ids(removeById(products, 2)), [1, 3, 4]);
check("original still has 4", products.length, 4);
