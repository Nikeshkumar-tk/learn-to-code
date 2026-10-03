// Exercise 16.4 — Scan a folder of log files
// Run:  node exercises/04-log-scanner.js
//
// countErrors(logDir) — ASYNC. For every file ending in ".log" in logDir (skip other files):
//   count the lines that contain " ERROR ".
// Returns an object: { "api.log": 2, "worker.log": 1 }
//
// Then: errorReport(logDir) — ASYNC. Returns an ARRAY of strings, one per error line, like:
//   "api.log: GET /tasks/99 404 Task not found"
//   (the part after "ERROR ", trimmed) — files in alphabetical order, lines in file order.
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const logDir = path.join(import.meta.dirname, "..", "sample-data", "logs");

// Write your code below.



// ─────────────────────────────────────────────────────────────
// Checks — don't edit below.
// ─────────────────────────────────────────────────────────────
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
check("countErrors", await countErrors(logDir), { "api.log": 2, "worker.log": 1 });
check("errorReport", await errorReport(logDir), [
  "api.log: GET /tasks/99 404 Task not found",
  "api.log: POST /tasks 500 Database timeout",
  "worker.log: Email job failed: SMTP unreachable",
]);
