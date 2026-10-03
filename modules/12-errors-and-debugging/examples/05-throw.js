// throw creates an error ON PURPOSE.
// Use it when a function CAN'T do its job and continuing would be wrong.

function withdraw(balance, amount) {
  if (typeof amount !== "number" || Number.isNaN(amount)) {
    throw new Error("Amount must be a number");
  }
  if (amount <= 0) {
    throw new Error("Amount must be positive");
  }
  if (amount > balance) {
    throw new Error(`Insufficient funds: balance is ${balance}, tried to withdraw ${amount}`);
  }
  return balance - amount;
}

console.log(withdraw(100, 30));

for (const amount of [500, -5, "ten"]) {
  try {
    withdraw(100, amount);
  } catch (error) {
    console.log(`withdraw(100, ${JSON.stringify(amount)}) ->`, error.message);
  }
}

// Why throw instead of returning something like "error" or -1?
//  - The caller CAN'T accidentally ignore it and carry on with a bad value.
//  - The error travels up through as many function calls as needed until something catches it.
