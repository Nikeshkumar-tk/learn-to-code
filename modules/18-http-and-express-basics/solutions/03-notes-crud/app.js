// Solution 18.3
import express from "express";

export const app = express();
app.use(express.json());

let notes = [];
let nextId = 1;

function findNote(idText) {
  return notes.find((note) => note.id === Number(idText));
}

function isValidText(text) {
  return typeof text === "string" && text.trim() !== "";
}

app.get("/notes", (req, res) => {
  res.json(notes);
});

app.get("/notes/:id", (req, res) => {
  const note = findNote(req.params.id);
  if (!note) return res.status(404).json({ error: `Note ${req.params.id} not found` });
  res.json(note);
});

app.post("/notes", (req, res) => {
  const { text, pinned = false } = req.body ?? {};
  if (!isValidText(text)) return res.status(400).json({ error: "text is required" });
  const note = { id: nextId++, text: text.trim(), pinned: Boolean(pinned) };
  notes.push(note);
  res.status(201).json(note);
});

app.put("/notes/:id", (req, res) => {
  const note = findNote(req.params.id);
  if (!note) return res.status(404).json({ error: `Note ${req.params.id} not found` });
  const { text, pinned = false } = req.body ?? {};
  if (!isValidText(text)) return res.status(400).json({ error: "text is required" });
  const updated = { ...note, text: text.trim(), pinned: Boolean(pinned) };
  notes = notes.map((n) => (n.id === note.id ? updated : n));
  res.json(updated);
});

app.delete("/notes/:id", (req, res) => {
  const note = findNote(req.params.id);
  if (!note) return res.status(404).json({ error: `Note ${req.params.id} not found` });
  notes = notes.filter((n) => n.id !== note.id);
  res.status(204).end();
});
