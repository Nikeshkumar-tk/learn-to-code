// Debug 10.3 — The cart total is a weird string
// Expected: "Cart total: 47"

const cart = [
  { name: "Book", price: 12 },
  { name: "Pen", price: 5 },
  { name: "Bag", price: 30 },
];

const total = cart.reduce((sum, item) => sum + item.price);

console.log("Cart total:", total);
