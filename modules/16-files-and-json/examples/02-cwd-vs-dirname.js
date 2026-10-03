// ⚠️ THE #1 file-path gotcha:
// A relative path like "sample-data/quote.txt" is relative to the CURRENT WORKING DIRECTORY
// (the folder your terminal is in when you run `node`), NOT to the file containing the code.
//
// Try running this file from two different places:
//   (in modules/16-files-and-json)   node examples/02-cwd-vs-dirname.js
//   (in the course root)             node modules/16-files-and-json/examples/02-cwd-vs-dirname.js
import { readFile } from "node:fs/promises";
import path from "node:path";

console.log("process.cwd():        ", process.cwd());          // where the TERMINAL is
console.log("import.meta.dirname:  ", import.meta.dirname);    // where THIS FILE is

async function tryRead(label, filePath) {
  try {
    await readFile(filePath, "utf8");
    console.log(`✅ ${label} worked`);
  } catch (error) {
    console.log(`❌ ${label} failed: ${error.code}`);
  }
}

await tryRead("relative to cwd     ", "sample-data/quote.txt");
await tryRead("relative to the file", path.join(import.meta.dirname, "..", "sample-data", "quote.txt"));

// Rule: for files that belong to your code (data files, templates), build paths from
// import.meta.dirname. Then it works no matter where the program is started from.
