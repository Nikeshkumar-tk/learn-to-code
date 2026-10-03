// Solution 03.1
// The free-shipping rule applies everywhere, so it must be checked FIRST.
const orderTotal = 45;
const country = "US";
let shippingCost;

if (orderTotal >= 100) {
  shippingCost = 0;
} else if (country === "IN") {
  shippingCost = 5;
} else {
  shippingCost = 20;
}

console.log(`Shipping: $${shippingCost}`);
