// CONFIGURATION — read the environment ONCE, validate it, and export plain values.
// Nothing else in the app touches process.env. To change where data lives, you change
// an environment variable, not code.
import path from "node:path";

const appRoot = path.join(import.meta.dirname, "..");

export const config = {
  dataFile: process.env.EXPENSES_FILE ?? path.join(appRoot, "data", "expenses.json"),
  currency: process.env.CURRENCY ?? "$",
};
