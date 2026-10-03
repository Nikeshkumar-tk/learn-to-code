// Debug 03.4 — Missing stock?
// `stock` is how many we have in the warehouse. undefined means "we don't know yet".
// Expected: "Sold out"     (because stock is 0)
// Then set stock to undefined -> expected "Stock information missing"
// Then set stock to 12        -> expected "In stock: 12"

const stock = 0;

if (!stock) {
  console.log("Stock information missing");
} else if (stock === 0) {
  console.log("Sold out");
} else {
  console.log("In stock:", stock);
}
