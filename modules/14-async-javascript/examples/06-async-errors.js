// With async/await, errors are handled with the try/catch you already know (Module 12).

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function chargeCard(amount) {
  await wait(200);
  if (amount > 100) throw new Error("Card declined: limit exceeded");
  return { receiptId: "R-" + amount };
}

async function checkout(amount) {
  console.log(`Checking out $${amount}...`);
  try {
    const receipt = await chargeCard(amount);   // if this rejects, we jump to catch
    console.log("Paid! Receipt:", receipt.receiptId);
  } catch (error) {
    console.log("Payment failed:", error.message);
  } finally {
    console.log("Checkout finished");
  }
}

await checkout(50);
await checkout(500);
