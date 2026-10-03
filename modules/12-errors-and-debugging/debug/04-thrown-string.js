// Debug 12.4 — The error message is undefined
// Expected output:
//   Payment failed: Card expired

function chargeCard(card) {
  if (card.expired) {
    throw "Card expired";
  }
  return "charged";
}

try {
  chargeCard({ expired: true });
} catch (error) {
  console.log("Payment failed:", error.message);
}
