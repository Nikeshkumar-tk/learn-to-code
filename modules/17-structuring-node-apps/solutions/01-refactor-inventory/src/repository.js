import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { config } from "./config.js";

export async function loadItems() {
  try {
    return JSON.parse(await readFile(config.dataFile, "utf8"));
  } catch (error) {
    if (error.code === "ENOENT") return [];
    throw error;
  }
}

export async function saveItems(items) {
  await mkdir(path.dirname(config.dataFile), { recursive: true });
  await writeFile(config.dataFile, JSON.stringify(items, null, 2));
}
