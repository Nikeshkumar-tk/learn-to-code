// Big problem: "Print a receipt for an order".
// Instead of one giant block of code, break it into small functions with clear names.
// Each one does ONE job and can be understood (and tested) on its own.

function lineTotal(price, quantity) {
  return price * quantity;
}

function applyDiscount(amount, percent) {
  return amount - amount * (percent / 100);
}

function formatMoney(amount) {
  return `$${amount.toFixed(2)}`; // toFixed(2): always show 2 decimal places
}

function receiptLine(name, price, quantity) {
  return `${name} x${quantity}: ${formatMoney(lineTotal(price, quantity))}`;
}

// Now the "main" logic reads almost like English:
console.log(receiptLine("Coffee", 3.5, 2));
console.log(receiptLine("Bagel", 2.25, 3));

const subtotal = lineTotal(3.5, 2) + lineTotal(2.25, 3);
console.log("Subtotal:", formatMoney(subtotal));
console.log("After 10% discount:", formatMoney(applyDiscount(subtotal, 10)));
