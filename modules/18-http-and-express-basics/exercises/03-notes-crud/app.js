// Exercise 18.3 — Full CRUD for notes  ⭐ (rehearsal for your project)
// Check: node exercises/03-notes-crud/check.js
//
// Store notes in memory: { id, text, pinned }
//
//   GET    /notes            -> 200, all notes
//   GET    /notes/:id        -> 200 note | 404 { error: "Note <id> not found" }
//   POST   /notes            -> body { text, pinned? }
//                               text must be a non-empty string, else 400 { error: "text is required" }
//                               pinned defaults to false
//                               -> 201 with the new note (ids start at 1 and go up)
//   PUT    /notes/:id        -> body { text, pinned } replaces those fields (same validation)
//                               -> 200 updated note | 404 | 400
//   DELETE /notes/:id        -> 204 with no body | 404
//
// Don't forget: req.body only exists if you add the JSON middleware.
// Tip: write a small helper findNote(idText) that returns the note or undefined.
import express from "express";

export const app = express();

// Write your code below.
