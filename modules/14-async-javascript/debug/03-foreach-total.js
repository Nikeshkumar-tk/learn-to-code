// Debug 14.3 — The basket total is 0
// Expected: "Basket total: $9"

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const prices = { milk: 2, bread: 3, coffee: 4 };

async function getPrice(item) {
  await wait(50);
  return prices[item];
}

async function basketTotal(items) {
  let total = 0;
  items.forEach(async (item) => {
    total += await getPrice(item);
  });
  return total;
}

console.log(`Basket total: $${await basketTotal(["milk", "bread", "coffee"])}`);
