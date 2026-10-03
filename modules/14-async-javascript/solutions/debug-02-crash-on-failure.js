// Fixed. sendConfirmationEmail() was called WITHOUT await and without handling its error.
// When its promise rejected, nobody was listening — an "unhandled rejection" — and Node
// crashes the whole program for that. Also, "Done" printed before the email had even failed.
// Fix: await it inside try/catch, and decide that an email failure shouldn't cancel the order.
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function sendConfirmationEmail() {
  await wait(100);
  throw new Error("SMTP server unreachable");
}

async function placeOrder() {
  console.log("Order saved");
  try {
    await sendConfirmationEmail();
  } catch (error) {
    console.log("Could not send confirmation email:", error.message);
  }
  console.log("Done — the order is still valid");
}

await placeOrder();
