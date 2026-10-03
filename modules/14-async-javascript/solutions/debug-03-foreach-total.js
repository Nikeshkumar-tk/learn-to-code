// Fixed. forEach calls the async callbacks but does NOT wait for them.
// basketTotal returned `total` while all three prices were still loading -> 0.
// for...of with await processes each item and waits. (Or use Promise.all for parallel.)
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const prices = { milk: 2, bread: 3, coffee: 4 };

async function getPrice(item) {
  await wait(50);
  return prices[item];
}

async function basketTotal(items) {
  let total = 0;
  for (const item of items) {
    total += await getPrice(item);
  }
  return total;
  // Parallel alternative:
  // const all = await Promise.all(items.map((item) => getPrice(item)));
  // return all.reduce((sum, p) => sum + p, 0);
}

console.log(`Basket total: $${await basketTotal(["milk", "bread", "coffee"])}`);
