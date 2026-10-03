// Fixed. `sendEmail()` CALLS sendEmail immediately (with no orderId) and passes its
// RESULT (undefined) as the callback. Then callback(orderId) tries to call undefined.
// Pass the function itself — no parentheses: processOrder(1, sendEmail).
function sendEmail(orderId) {
  console.log(`✉️  Email sent for order ${orderId}`);
}

function processOrder(orderId, callback) {
  console.log(`Processing order ${orderId}...`);
  callback(orderId);
}

processOrder(1, sendEmail);
