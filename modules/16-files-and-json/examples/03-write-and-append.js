// Writing files: writeFile REPLACES the whole file. appendFile ADDS to the end.
import { writeFile, appendFile, readFile, mkdir } from "node:fs/promises";
import path from "node:path";

const outputDir = path.join(import.meta.dirname, "..", "output");
await mkdir(outputDir, { recursive: true }); // create the folder; no error if it already exists

const notesFile = path.join(outputDir, "notes.txt");

await writeFile(notesFile, "First line\n");           // creates or OVERWRITES
await appendFile(notesFile, "Second line\n");         // adds to the end
await appendFile(notesFile, `Written at ${new Date().toISOString()}\n`);

console.log(await readFile(notesFile, "utf8"));

await writeFile(notesFile, "Overwritten!\n");         // everything before is gone
console.log(await readFile(notesFile, "utf8"));

console.log("Look for the file in:", outputDir);
