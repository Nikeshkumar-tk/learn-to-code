// Exercise 17.1 — Refactor a messy script into a small application  ⭐
//
// This works, but everything is tangled. Run it a few times first:
//   node exercises/01-refactor-inventory/inventory.js add pens 10
//   node exercises/01-refactor-inventory/inventory.js remove pens 3
//   node exercises/01-refactor-inventory/inventory.js low 10
//
// STEP 1: Add a comment above each chunk naming its responsibility:
//         CONFIG / DATA ACCESS / VALIDATION / BUSINESS RULE / INTERFACE (argv + printing)
// STEP 2: Rebuild it in exercises/01-refactor-inventory/src/ with this structure:
//
//   src/config.js      export const config = { dataFile }
//                      dataFile = process.env.INVENTORY_FILE, or data/inventory.json in this exercise folder
//   src/errors.js      ValidationError, NotFoundError
//   src/repository.js  export loadItems(), saveItems(items)          (the only file using fs)
//   src/service.js     export addStock(name, quantity)   -> returns the updated item
//                      export removeStock(name, quantity)-> returns the updated item
//                      export lowStock(threshold)        -> array of items with quantity < threshold
//                      Throw ValidationError for bad input, NotFoundError for unknown items,
//                      ValidationError("Not enough <name> in stock") when removing too many.
//                      No console.log, no process.argv, no process.exit in here!
//   src/cli.js         the entry point: argv -> service -> printed output / exit code
//
// STEP 3: Run the checks:  node exercises/01-refactor-inventory/check.js
import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";

const file = process.env.INVENTORY_FILE ?? path.join(import.meta.dirname, "data", "inventory.json");
const [cmd, name, qtyText] = process.argv.slice(2);
let items = [];
try {
  items = JSON.parse(await readFile(file, "utf8"));
} catch (e) {
  if (e.code !== "ENOENT") throw e;
}
const qty = Number(qtyText);
if (cmd === "add") {
  if (!name || !Number.isInteger(qty) || qty <= 0) {
    console.log("Error: need a name and a positive whole quantity");
    process.exit(1);
  }
  const item = items.find((i) => i.name === name);
  if (item) item.quantity += qty;
  else items.push({ name, quantity: qty });
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, JSON.stringify(items, null, 2));
  console.log(`${name}: ${items.find((i) => i.name === name).quantity}`);
} else if (cmd === "remove") {
  const item = items.find((i) => i.name === name);
  if (!item) {
    console.log(`Error: no item called ${name}`);
    process.exit(1);
  }
  if (item.quantity < qty) {
    console.log(`Error: not enough ${name}`);
    process.exit(1);
  }
  item.quantity -= qty;
  await writeFile(file, JSON.stringify(items, null, 2));
  console.log(`${name}: ${item.quantity}`);
} else if (cmd === "low") {
  for (const i of items.filter((i) => i.quantity < (Number(name) || 5))) console.log(`${i.name}: ${i.quantity}`);
} else {
  console.log("Usage: inventory add|remove <name> <qty> | low [threshold]");
}
