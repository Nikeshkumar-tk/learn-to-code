// @expect-error
// Debug 14.2 — The whole program crashes when the email service is down
// Expected output:
//   Order saved
//   Could not send confirmation email: SMTP server unreachable
//   Done — the order is still valid

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function sendConfirmationEmail() {
  await wait(100);
  throw new Error("SMTP server unreachable");
}

async function placeOrder() {
  console.log("Order saved");
  sendConfirmationEmail();
  console.log("Done — the order is still valid");
}

await placeOrder();
await wait(200); // (keeps the program alive long enough to see what happens)
