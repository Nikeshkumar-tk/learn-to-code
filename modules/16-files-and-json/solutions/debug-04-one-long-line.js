// Fixed. appendFile adds EXACTLY what you give it. With no "\n" at the end of each entry,
// all three entries were glued onto one line. Open output/audit.log to see it.
import { writeFile, appendFile, readFile, mkdir } from "node:fs/promises";
import path from "node:path";

const dir = path.join(import.meta.dirname, "..", "output");
const file = path.join(dir, "audit.log");
await mkdir(dir, { recursive: true });
await writeFile(file, "");

async function audit(message) {
  await appendFile(file, `${new Date().toISOString()} ${message}\n`);
}

await audit("user ana logged in");
await audit("task 7 deleted");
await audit("user ana logged out");

const lines = (await readFile(file, "utf8")).split("\n").filter((line) => line !== "");
console.log(`Audit log has ${lines.length} entries`);
