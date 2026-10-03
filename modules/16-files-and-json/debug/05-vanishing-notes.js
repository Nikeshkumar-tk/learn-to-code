// Debug 16.5 — Only the newest note survives
// Expected:
//   Notes: [ 'Buy milk', 'Call mum', 'Book dentist' ]
import { writeFile, readFile, mkdir, rm } from "node:fs/promises";
import path from "node:path";

const dir = path.join(import.meta.dirname, "..", "output");
const file = path.join(dir, "vanishing-notes.json");
await mkdir(dir, { recursive: true });
await rm(file, { force: true }); // start fresh every run

async function addNote(text) {
  const notes = [];
  notes.push(text);
  await writeFile(file, JSON.stringify(notes));
}

await addNote("Buy milk");
await addNote("Call mum");
await addNote("Book dentist");

console.log("Notes:", JSON.parse(await readFile(file, "utf8")));
