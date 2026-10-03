// Entry point: the interface. Translates argv into service calls and results into output.
import { addStock, removeStock, lowStock } from "./service.js";
import { ValidationError, NotFoundError } from "./errors.js";

const [command, name, quantityText] = process.argv.slice(2);

async function main() {
  switch (command) {
    case "add": {
      const item = await addStock(name, Number(quantityText));
      return `${item.name}: ${item.quantity}`;
    }
    case "remove": {
      const item = await removeStock(name, Number(quantityText));
      return `${item.name}: ${item.quantity}`;
    }
    case "low": {
      const items = await lowStock(name === undefined ? 5 : Number(name));
      return items.length ? items.map((i) => `${i.name}: ${i.quantity}`).join("\n") : "Nothing is low on stock.";
    }
    default:
      throw new ValidationError("Usage: inventory add|remove <name> <qty> | low [threshold]");
  }
}

try {
  console.log(await main());
} catch (error) {
  if (error instanceof ValidationError || error instanceof NotFoundError) {
    console.error("Error:", error.message);
  } else {
    console.error("Unexpected error:", error);
  }
  process.exitCode = 1;
}
