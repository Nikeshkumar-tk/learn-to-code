// Solution 01.4
const orderId = 1042;
const product = "Coffee";
const quantity = 2;
const unitPrice = 3.5;

const receipt = `Order #${orderId}: ${quantity} x ${product} = $${unitPrice * quantity}`;
console.log(receipt);
// Note "$${...}": the first $ is a plain dollar sign; "${" starts the expression.
