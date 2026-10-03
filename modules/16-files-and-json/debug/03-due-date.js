// @expect-error
// Debug 16.3 — Dates break after saving
// Expected: "Task 'Pay rent' is due in 2026"
import { writeFile, readFile, mkdir } from "node:fs/promises";
import path from "node:path";

const dir = path.join(import.meta.dirname, "..", "output");
const file = path.join(dir, "task-with-date.json");
await mkdir(dir, { recursive: true });

const task = { title: "Pay rent", dueDate: new Date("2026-07-01") };
await writeFile(file, JSON.stringify(task));

const loaded = JSON.parse(await readFile(file, "utf8"));
console.log(`Task '${loaded.title}' is due in ${loaded.dueDate.getFullYear()}`);
