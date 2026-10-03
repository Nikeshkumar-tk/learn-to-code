// Fixed. String(settings) gives the useless text "[object Object]" — that's what got saved.
// Then JSON.parse("[object Object]") throws. Hypothesis check: open output/settings.json and look!
// Objects must be converted with JSON.stringify before writing.
import { writeFile, readFile, mkdir } from "node:fs/promises";
import path from "node:path";

const dir = path.join(import.meta.dirname, "..", "output");
const file = path.join(dir, "settings.json");
await mkdir(dir, { recursive: true });

const settings = { theme: "dark", fontSize: 14 };
await writeFile(file, JSON.stringify(settings, null, 2));
console.log("Saved.");

const loaded = JSON.parse(await readFile(file, "utf8"));
console.log("Loaded theme:", loaded.theme);
