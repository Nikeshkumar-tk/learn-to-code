// Fixed. forEach ALWAYS returns undefined — it's for doing things, not building arrays.
// The callback's return values were thrown away. To build a new array, use map.
const prices = [10, 20, 30];

const withTax = prices.map((price) => price * 1.18);

console.log("Prices with tax:", withTax.map((p) => Math.round(p * 100) / 100));
