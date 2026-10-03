// Solution 05.5
function subtotal(price, quantity) {
  return price * quantity;
}

function applyDiscount(amount, percent) {
  return amount - amount * (percent / 100);
}

function addTax(amount, taxPercent) {
  return amount + amount * (taxPercent / 100);
}

function formatMoney(amount) {
  return `$${amount.toFixed(2)}`;
}

function invoiceTotal(price, quantity, discountPercent = 0, taxPercent = 18) {
  const beforeDiscount = subtotal(price, quantity);
  const afterDiscount = applyDiscount(beforeDiscount, discountPercent);
  const afterTax = addTax(afterDiscount, taxPercent);
  return formatMoney(afterTax);
}

console.log(invoiceTotal(50, 2, 10));
// Notice: each step has a NAME. If the total is wrong, you can console.log each step
// and find exactly which one misbehaves.
