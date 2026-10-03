// Fixed. Arguments match parameters by POSITION. The function expects
// (discountPercent, price) but was called with (price, discount).
// Two possible fixes: change the call, or change the function so the order is more natural.
// We changed the function — "price first" is how people think about it, so it's harder to misuse.
function discountedPrice(price, discountPercent) {
  return price - price * (discountPercent / 100);
}

const pay = discountedPrice(50, 20);
console.log(`You pay $${pay}`);
