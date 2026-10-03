// Debug 04.3 — The cart total is always just the last item
// Expected: "Cart total: 47"

const cartPrices = [10, 25, 12];
let total;

for (const price of cartPrices) {
  let total = 0;
  total += price;
}

console.log("Cart total:", total);
