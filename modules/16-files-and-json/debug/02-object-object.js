// @expect-error
// Debug 16.2 — Saved settings can't be loaded back
// Expected:
//   Saved.
//   Loaded theme: dark
import { writeFile, readFile, mkdir } from "node:fs/promises";
import path from "node:path";

const dir = path.join(import.meta.dirname, "..", "output");
const file = path.join(dir, "settings.json");
await mkdir(dir, { recursive: true });

const settings = { theme: "dark", fontSize: 14 };
await writeFile(file, String(settings));
console.log("Saved.");

const loaded = JSON.parse(await readFile(file, "utf8"));
console.log("Loaded theme:", loaded.theme);
