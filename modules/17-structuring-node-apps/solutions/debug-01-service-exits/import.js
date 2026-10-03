// @entry
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
