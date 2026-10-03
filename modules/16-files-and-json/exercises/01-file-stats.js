// Exercise 16.1 — Read a file and describe it
// Run:  node exercises/01-file-stats.js
//
// fileStats(filePath) — ASYNC. Reads the file and returns:
//   { lines, nonEmptyLines, words, longestLine }
//   lines         -> number of lines (ignore one trailing newline at the very end)
//   nonEmptyLines -> lines that aren't blank
//   words         -> words separated by whitespace (hint: text.split(/\s+/) after trim — the /\s+/
//                    is a "regular expression" meaning "one or more whitespace characters")
//   longestLine   -> the text of the longest line
//
// The file to analyse is sample-data/article.txt. Build its path with import.meta.dirname.
import { readFile } from "node:fs/promises";
import path from "node:path";

const articlePath = path.join(import.meta.dirname, "..", "sample-data", "article.txt");

// Write your code below.



// ─────────────────────────────────────────────────────────────
// Checks — don't edit below.
// ─────────────────────────────────────────────────────────────
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
const stats = await fileStats(articlePath);
check("lines", stats.lines, 6);
check("nonEmptyLines", stats.nonEmptyLines, 5);
check("words", stats.words, 45);
check("longestLine", stats.longestLine, "It is often used to build web servers and command-line tools.");
