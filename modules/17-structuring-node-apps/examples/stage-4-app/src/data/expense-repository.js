// DATA ACCESS (a "repository") — the ONLY file that knows expenses are stored in a JSON file.
// If we switched to a database later, this is the only file we'd rewrite.
import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { config } from "../config.js";

export async function loadExpenses() {
  try {
    return JSON.parse(await readFile(config.dataFile, "utf8"));
  } catch (error) {
    if (error.code === "ENOENT") return [];
    throw error;
  }
}

export async function saveExpenses(expenses) {
  await mkdir(path.dirname(config.dataFile), { recursive: true });
  await writeFile(config.dataFile, JSON.stringify(expenses, null, 2));
}
