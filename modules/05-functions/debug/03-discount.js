// Debug 05.3 — The shop is losing money
// A 20% discount on a $50 item should cost $40.
// Expected: "You pay $40"

function discountedPrice(discountPercent, price) {
  return price - price * (discountPercent / 100);
}

const pay = discountedPrice(50, 20);
console.log(`You pay $${pay}`);
