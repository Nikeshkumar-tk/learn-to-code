// Debug 11.3 — Prices come out as NaN
// Expected:
//   Book: 9
//   Lamp: 36

const discount = 0.1; // 10% storewide discount

function applyDiscount(price, discount) {
  return price - price * discount;
}

console.log("Book:", applyDiscount(10));
console.log("Lamp:", applyDiscount(40));
