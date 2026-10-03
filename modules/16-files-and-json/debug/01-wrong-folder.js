// @expect-error
// Debug 16.1 — ENOENT: no such file or directory
// Run from the module folder (like every command in this module):
//   node debug/01-wrong-folder.js
// Expected: prints the quote from sample-data/quote.txt
//
// The author said: "But the file IS there — sample-data is right next to the debug folder!"
import { readFile } from "node:fs/promises";

const quote = await readFile("../sample-data/quote.txt", "utf8");
console.log(quote);
