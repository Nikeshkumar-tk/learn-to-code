// Debug 05.2 — Total is NaN
// Expected output:
//   Order total: 35
// (NaN means "Not a Number" — the result of maths that made no sense.)

function itemCost(price, quantity) {
  console.log(price * quantity);
}

const total = itemCost(5, 3) + itemCost(10, 2);
console.log("Order total:", total);
