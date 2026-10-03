// Fixed. addNote started from an EMPTY array every time and then overwrote the file,
// so each save destroyed the previous notes. Persistence needs load -> modify -> save.
import { writeFile, readFile, mkdir, rm } from "node:fs/promises";
import path from "node:path";

const dir = path.join(import.meta.dirname, "..", "output");
const file = path.join(dir, "vanishing-notes.json");
await mkdir(dir, { recursive: true });
await rm(file, { force: true });

async function loadNotes() {
  try {
    return JSON.parse(await readFile(file, "utf8"));
  } catch (error) {
    if (error.code === "ENOENT") return [];
    throw error;
  }
}

async function addNote(text) {
  const notes = await loadNotes();
  notes.push(text);
  await writeFile(file, JSON.stringify(notes));
}

await addNote("Buy milk");
await addNote("Call mum");
await addNote("Book dentist");

console.log("Notes:", JSON.parse(await readFile(file, "utf8")));
