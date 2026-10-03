// Fixed. Two problems:
// 1. `let total = 0` INSIDE the loop created a brand-new variable every round
//    (a different `total` that only exists inside the { } — Module 11 explains this "scope").
// 2. The outer `total` was never given a starting value, so it stayed undefined.
// Accumulator rule: create and initialise BEFORE the loop, update INSIDE.
const cartPrices = [10, 25, 12];
let total = 0;

for (const price of cartPrices) {
  total += price;
}

console.log("Cart total:", total);
