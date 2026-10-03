// Fixed. The PARAMETER `discount` shadows the outer `discount`. When the caller doesn't
// pass a second argument, the parameter is undefined — it does NOT fall back to the
// outer variable. price * undefined = NaN.
// Fix: use a default parameter that points to the store-wide value (and give it a clearer name).
const STORE_DISCOUNT = 0.1;

function applyDiscount(price, discount = STORE_DISCOUNT) {
  return price - price * discount;
}

console.log("Book:", applyDiscount(10));
console.log("Lamp:", applyDiscount(40));
