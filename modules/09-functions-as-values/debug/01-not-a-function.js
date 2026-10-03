// @expect-error
// Debug 09.1 — "callback is not a function"
// Expected:
//   Processing order 1...
//   ✉️  Email sent for order 1

function sendEmail(orderId) {
  console.log(`✉️  Email sent for order ${orderId}`);
}

function processOrder(orderId, callback) {
  console.log(`Processing order ${orderId}...`);
  callback(orderId);
}

processOrder(1, sendEmail());
