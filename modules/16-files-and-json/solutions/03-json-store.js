// Solution 16.3
import { readFile, writeFile, mkdir, rm } from "node:fs/promises";
import path from "node:path";

function createJsonStore(filePath, defaultValue) {
  async function load() {
    try {
      const text = await readFile(filePath, "utf8");
      return JSON.parse(text);
    } catch (error) {
      if (error.code === "ENOENT") return defaultValue;
      throw error;
    }
  }

  async function save(data) {
    await mkdir(path.dirname(filePath), { recursive: true });
    await writeFile(filePath, JSON.stringify(data, null, 2));
  }

  async function update(changeFn) {
    const current = await load();
    const next = changeFn(current);
    await save(next);
    return next;
  }

  return { load, save, update };
}

// (A closure-based "module" from Module 11, with async functions from Module 14.)
