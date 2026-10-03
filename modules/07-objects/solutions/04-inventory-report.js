// Solution 07.4
const inventory = { pens: 40, notebooks: 3, staplers: 0, folders: 12 };

function totalItems(inventory) {
  let total = 0;
  for (const count of Object.values(inventory)) {
    total += count;
  }
  return total;
}

function lowStock(inventory, threshold) {
  const names = [];
  for (const [name, count] of Object.entries(inventory)) {
    if (count < threshold) names.push(name);
  }
  return names;
}

function restock(inventory, amount) {
  const result = {};
  for (const [name, count] of Object.entries(inventory)) {
    result[name] = count + amount;
  }
  return result;
}

console.log(totalItems(inventory), lowStock(inventory, 5), restock(inventory, 10));
