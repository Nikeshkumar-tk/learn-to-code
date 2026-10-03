// Solution 08.4
function maskCard(cardNumber) {
  const lastFour = cardNumber.slice(-4);
  return lastFour.padStart(cardNumber.length, "*");
  // alternative: "*".repeat(cardNumber.length - 4) + lastFour
}

function maskEmail(email) {
  const at = email.indexOf("@");
  const name = email.slice(0, at);
  const domain = email.slice(at);           // includes the "@"
  return name[0] + "*".repeat(name.length - 1) + domain;
}

console.log(maskCard("4111111111111111"), maskEmail("ada@example.com"));
