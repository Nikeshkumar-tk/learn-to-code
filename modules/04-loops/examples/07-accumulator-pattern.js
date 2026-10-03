// THE most important loop pattern: the ACCUMULATOR.
//   1. Create a variable BEFORE the loop with a starting value
//   2. Update it INSIDE the loop
//   3. Use it AFTER the loop
// Remember this shape. In Module 10 you'll meet `reduce`, which is this exact pattern.

const prices = [12, 5, 30, 8];

let total = 0;                    // 1. start
for (const price of prices) {
  total += price;                 // 2. update
}
console.log("Total:", total);     // 3. use

// Same pattern, different questions:
let expensiveCount = 0;
let highest = prices[0];          // start with the first price (prices[0] = "item number 0")
let summary = "";

for (const price of prices) {
  if (price > 10) expensiveCount++;
  if (price > highest) highest = price;
  summary += `$${price} `;
}

console.log("Items over $10:", expensiveCount);
console.log("Highest:", highest);
console.log("Summary:", summary);
