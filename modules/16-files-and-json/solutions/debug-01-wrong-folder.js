// Fixed. Relative paths in fs are resolved from process.cwd() — the folder the TERMINAL is in
// (modules/16-files-and-json) — not from the folder this file is in. From the module folder,
// "../sample-data" points OUTSIDE the module, to modules/sample-data, which doesn't exist.
// Fix: build the path from import.meta.dirname, so it works from any terminal folder.
import { readFile } from "node:fs/promises";
import path from "node:path";

const quote = await readFile(path.join(import.meta.dirname, "..", "sample-data", "quote.txt"), "utf8");
console.log(quote);
