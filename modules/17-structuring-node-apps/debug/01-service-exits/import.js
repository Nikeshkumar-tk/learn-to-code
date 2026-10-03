// @entry @expect-error
// Debug 17.1 — The bulk import stops at the first bad line
// Run:  node debug/01-service-exits/import.js
// Expected:
//   Imported 3 expenses, skipped 1:
//     - line 3: Amount must be a positive number
//
// The import should SKIP bad lines and report them — not die. Which layer is making
// a decision that isn't its job?
import { parseExpense } from "./service.js";

const lines = ["Coffee,3.5", "Train,12", "Mystery,abc", "Lunch,9"];
const imported = [];
const skipped = [];

for (const [index, line] of lines.entries()) {
  try {
    imported.push(parseExpense(line));
  } catch (error) {
    skipped.push(`line ${index + 1}: ${error.message}`);
  }
}

console.log(`Imported ${imported.length} expenses, skipped ${skipped.length}:`);
skipped.forEach((s) => console.log("  -", s));
