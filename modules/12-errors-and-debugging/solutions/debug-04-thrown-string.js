// Fixed. `throw "Card expired"` throws a plain STRING. Strings have no .message property,
// so error.message was undefined. Always throw Error objects.
function chargeCard(card) {
  if (card.expired) {
    throw new Error("Card expired");
  }
  return "charged";
}

try {
  chargeCard({ expired: true });
} catch (error) {
  console.log("Payment failed:", error.message);
}
