// The basic PERSISTENCE pattern: load -> modify -> save.
// Run this several times: the visit count survives between runs, because it lives in a file.
import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";

const dir = path.join(import.meta.dirname, "..", "output");
const file = path.join(dir, "visits.json");

async function load() {
  try {
    return JSON.parse(await readFile(file, "utf8"));
  } catch (error) {
    if (error.code === "ENOENT") return { visits: 0, history: [] }; // first run: no file yet
    throw error; // anything else (e.g. corrupted JSON) is a real problem — don't hide it
  }
}

async function save(data) {
  await mkdir(dir, { recursive: true });
  await writeFile(file, JSON.stringify(data, null, 2));
}

const data = await load();                        // 1. load
data.visits += 1;                                 // 2. modify
data.history.push(new Date().toISOString());
data.history = data.history.slice(-3);            //    (keep only the last 3)
await save(data);                                 // 3. save

console.log(`You have run this program ${data.visits} time(s).`);
console.log("Stored in:", file);
