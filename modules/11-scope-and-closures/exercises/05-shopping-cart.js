// Exercise 11.5 — A shopping cart module with private data
// Run:  node exercises/05-shopping-cart.js
//
// createCart() returns { addItem, removeItem, getItems, total, itemCount }.
// The items array must be private.
//
//   addItem(name, price, quantity = 1)
//      if an item with that name already exists, increase its quantity instead
//   removeItem(name)       -> removes that item completely
//   getItems()             -> returns a COPY of the items (so callers can't mutate the real list)
//   total()                -> sum of price * quantity
//   itemCount()            -> sum of all quantities
//
// Items look like: { name: "Book", price: 12, quantity: 2 }

// Write your code below.



// ─────────────────────────────────────────────────────────────
// Checks — don't edit below.
// ─────────────────────────────────────────────────────────────
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
const cart = createCart();
cart.addItem("Book", 12, 2);
cart.addItem("Pen", 2);
cart.addItem("Book", 12);
check("merges same item", cart.getItems(), [{ name: "Book", price: 12, quantity: 3 }, { name: "Pen", price: 2, quantity: 1 }]);
check("total", cart.total(), 38);
check("itemCount", cart.itemCount(), 4);
cart.getItems().push({ name: "Hack", price: 0, quantity: 99 });
check("getItems returns a copy", cart.itemCount(), 4);
cart.removeItem("Book");
check("removeItem", cart.getItems().map((i) => i.name), ["Pen"]);
check("second cart is independent", createCart().total(), 0);
