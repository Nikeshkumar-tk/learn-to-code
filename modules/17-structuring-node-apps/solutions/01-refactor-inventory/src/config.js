import path from "node:path";

export const config = {
  dataFile: process.env.INVENTORY_FILE ?? path.join(import.meta.dirname, "..", "data", "inventory.json"),
};
