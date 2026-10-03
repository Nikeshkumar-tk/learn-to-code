// Fixed. JSON has no Date type: JSON.stringify turned the Date into a STRING
// ("2026-07-01T00:00:00.000Z"). After parsing, dueDate is a string, and strings have no
// getFullYear method -> TypeError. Convert it back into a Date after loading.
import { writeFile, readFile, mkdir } from "node:fs/promises";
import path from "node:path";

const dir = path.join(import.meta.dirname, "..", "output");
const file = path.join(dir, "task-with-date.json");
await mkdir(dir, { recursive: true });

const task = { title: "Pay rent", dueDate: new Date("2026-07-01") };
await writeFile(file, JSON.stringify(task));

const raw = JSON.parse(await readFile(file, "utf8"));
const loaded = { ...raw, dueDate: new Date(raw.dueDate) };
console.log(`Task '${loaded.title}' is due in ${loaded.dueDate.getFullYear()}`);
