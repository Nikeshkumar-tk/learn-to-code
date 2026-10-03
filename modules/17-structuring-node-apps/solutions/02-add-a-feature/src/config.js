import path from "node:path";

const appRoot = path.join(import.meta.dirname, "..");

export const config = {
  dataFile: process.env.EXPENSES_FILE ?? path.join(appRoot, "data", "expenses.json"),
  currency: process.env.CURRENCY ?? "$",
};
