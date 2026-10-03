// Debug 16.4 — The audit log has only 1 line
// Expected:
//   Audit log has 3 entries
import { writeFile, appendFile, readFile, mkdir } from "node:fs/promises";
import path from "node:path";

const dir = path.join(import.meta.dirname, "..", "output");
const file = path.join(dir, "audit.log");
await mkdir(dir, { recursive: true });
await writeFile(file, ""); // start fresh

async function audit(message) {
  await appendFile(file, `${new Date().toISOString()} ${message}`);
}

await audit("user ana logged in");
await audit("task 7 deleted");
await audit("user ana logged out");

const lines = (await readFile(file, "utf8")).split("\n").filter((line) => line !== "");
console.log(`Audit log has ${lines.length} entries`);
