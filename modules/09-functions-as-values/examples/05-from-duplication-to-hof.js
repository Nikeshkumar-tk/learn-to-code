// HOW higher-order functions are discovered: by noticing duplicated loops.

const prices = [5, 20, 13, 80];

// Two loops that are ALMOST identical...
const cheap = [];
for (const p of prices) {
  if (p < 15) cheap.push(p);
}

const expensive = [];
for (const p of prices) {
  if (p > 50) expensive.push(p);
}
console.log(cheap, expensive);

// The ONLY difference is the test. So make the test a parameter — a function!
function keepIf(list, test) {
  const result = [];
  for (const item of list) {
    if (test(item)) result.push(item);
  }
  return result;
}

console.log(keepIf(prices, (p) => p < 15));
console.log(keepIf(prices, (p) => p > 50));
console.log(keepIf(prices, (p) => p % 2 === 0));
console.log(keepIf(["a", "node", "js"], (word) => word.length > 1)); // works for ANY list

// keepIf is a HIGHER-ORDER FUNCTION: a function that takes a function (or returns one).
// In Module 10 you'll meet its built-in twin: prices.filter((p) => p < 15)
