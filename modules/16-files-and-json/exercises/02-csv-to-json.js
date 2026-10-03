// Exercise 16.2 — Convert a CSV file into a JSON file
// Run:  node exercises/02-csv-to-json.js
//
// csvFileToJson(csvPath, jsonPath) — ASYNC:
//   1. read the CSV (first line = headers: name,email,city)
//   2. turn every other non-empty line into an object using the HEADERS as keys
//      (don't hard-code "name", "email", "city" — it should work for any headers!)
//   3. create the folder for jsonPath if needed (mkdir with recursive: true)
//   4. write the array as pretty JSON (2-space indent)
//   5. return the number of records written
import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";

const csvPath = path.join(import.meta.dirname, "..", "sample-data", "contacts.csv");
const jsonPath = path.join(import.meta.dirname, "..", "output", "contacts.json");

// Write your code below.



// ─────────────────────────────────────────────────────────────
// Checks — don't edit below.
// ─────────────────────────────────────────────────────────────
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
check("returns record count", await csvFileToJson(csvPath, jsonPath), 3);
const written = await readFile(jsonPath, "utf8");
check("file is pretty-printed", written.includes('\n  {\n    "name"'), true);
const records = JSON.parse(written);
check("first record", records[0], { name: "Ada Lovelace", email: "ada@example.com", city: "London" });
check("last record city", records[2].city, "New York");
