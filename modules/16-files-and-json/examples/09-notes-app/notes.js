// @entry
// A small but complete app with FILE PERSISTENCE: a command-line notes manager.
//
//   node examples/09-notes-app/notes.js                     -> list notes
//   node examples/09-notes-app/notes.js add "Buy milk"      -> add a note
//   node examples/09-notes-app/notes.js done 1              -> mark note 1 as done
//   node examples/09-notes-app/notes.js remove 1            -> delete note 1
//
// Everything you've learned is in here: argv, async/await, fs, path, JSON, array methods,
// objects, errors and exit codes. Read it top to bottom — you should understand every line.
import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";

const DATA_FILE = path.join(import.meta.dirname, "..", "..", "output", "notes.json");

// ---- data access: the ONLY code that knows notes live in a file ----
async function loadNotes() {
  try {
    return JSON.parse(await readFile(DATA_FILE, "utf8"));
  } catch (error) {
    if (error.code === "ENOENT") return [];
    throw error;
  }
}

async function saveNotes(notes) {
  await mkdir(path.dirname(DATA_FILE), { recursive: true });
  await writeFile(DATA_FILE, JSON.stringify(notes, null, 2));
}

// ---- commands ----
async function addNote(text) {
  if (!text?.trim()) throw new Error("Note text is required");
  const notes = await loadNotes();
  const id = notes.reduce((max, n) => Math.max(max, n.id), 0) + 1;
  notes.push({ id, text: text.trim(), done: false });
  await saveNotes(notes);
  return `Added note #${id}`;
}

async function updateNote(idText, change) {
  const id = Number(idText);
  const notes = await loadNotes();
  const note = notes.find((n) => n.id === id);
  if (!note) throw new Error(`Note #${idText} not found`);
  const updated = change === "remove" ? notes.filter((n) => n.id !== id) : notes.map((n) => (n.id === id ? { ...n, done: true } : n));
  await saveNotes(updated);
  return change === "remove" ? `Removed note #${id}` : `Completed note #${id}`;
}

async function listNotes() {
  const notes = await loadNotes();
  if (notes.length === 0) return "No notes yet. Add one: node examples/09-notes-app/notes.js add \"Buy milk\"";
  return notes.map((n) => `${n.done ? "✔" : "•"} #${n.id} ${n.text}`).join("\n");
}

// ---- entry point: turn argv into a command ----
const [command = "list", ...rest] = process.argv.slice(2);

const commands = {
  list: () => listNotes(),
  add: () => addNote(rest.join(" ")),
  done: () => updateNote(rest[0], "done"),
  remove: () => updateNote(rest[0], "remove"),
};

try {
  const run = commands[command];
  if (!run) throw new Error(`Unknown command "${command}". Use: list | add | done | remove`);
  console.log(await run());
} catch (error) {
  console.error("Error:", error.message);
  process.exitCode = 1;
}
