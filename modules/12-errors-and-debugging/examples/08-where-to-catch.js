// WHERE should you catch errors?
//
// Low-level functions: THROW when they can't do their job. Don't catch-and-hide.
// High-level code (the "boundary" — e.g. the top of a script, or an HTTP route):
//   CATCH, then decide what the user sees.

function parsePrice(text) {
  const price = Number(text);
  if (Number.isNaN(price)) throw new Error(`"${text}" is not a valid price`);
  return price;
}

function parseOrderLine(line) {
  const [item, priceText] = line.split(",");
  return { item, price: parsePrice(priceText) };  // no try/catch here: let errors travel up
}

function importOrders(lines) {
  const orders = [];
  const problems = [];
  for (const [index, line] of lines.entries()) {
    try {
      orders.push(parseOrderLine(line));          // ← the boundary: one bad line shouldn't stop the import
    } catch (error) {
      problems.push(`line ${index + 1}: ${error.message}`);
    }
  }
  return { orders, problems };
}

const result = importOrders(["pen,2", "book,twelve", "bag,30"]);
console.log(result.orders);
console.log(result.problems);

// ❌ The anti-pattern: "swallowing" errors
function badParse(text) {
  try {
    return JSON.parse(text);
  } catch {
    // nothing here — the error vanishes, the caller gets undefined, and a bug appears
    // somewhere else later, far away from the real cause. (See Debug 12.2)
  }
}
console.log(badParse("{oops"));
