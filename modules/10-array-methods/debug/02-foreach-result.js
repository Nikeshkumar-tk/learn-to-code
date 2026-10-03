// @expect-error
// Debug 10.2 — Where did my array go?
// Expected: Prices with tax: [ 11.8, 23.6, 35.4 ]

const prices = [10, 20, 30];

const withTax = prices.forEach((price) => price * 1.18);

console.log("Prices with tax:", withTax.map((p) => Math.round(p * 100) / 100));
