// Centralised ERROR HANDLING.
//  - Routes THROW errors (or they happen by accident).
//  - Express catches them — even in async handlers (Express 5) — and passes them to
//    the ERROR-HANDLING MIDDLEWARE: a middleware with FOUR parameters (err, req, res, next).
//  - That one place decides the status code and JSON shape for every error.
//
// Run:  node examples/06-error-handling.js
import express from "express";
import { runDemo } from "../demo-client.js";

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = "NotFoundError";
    this.statusCode = 404;
  }
}

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
    this.statusCode = 400;
  }
}

const app = express();
app.use(express.json());
const books = [{ id: 1, title: "The Hobbit" }];

// Notice: no try/catch, no res.status(...) for errors. Handlers just throw.
app.get("/books/:id", async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) throw new ValidationError("Book id must be a number");
  const book = books.find((b) => b.id === id);
  if (!book) throw new NotFoundError(`Book ${id} not found`);
  res.json(book);
});

app.get("/bug", () => {
  const settings = undefined;
  return settings.theme; // a real bug: TypeError
});

// 404 for unknown routes (after all routes)
app.use((req, res) => {
  res.status(404).json({ error: `Route not found: ${req.method} ${req.path}` });
});

// The error handler: MUST have 4 parameters, and MUST be added LAST.
app.use((err, req, res, next) => {
  const status = err.statusCode ?? 500;
  if (status === 500) {
    console.error("   [error handler] unexpected error:", err.message); // log the details for YOU
  }
  res.status(status).json({
    error: status === 500 ? "Internal server error" : err.message,     // hide internals from users
  });
});

await runDemo(app, ["GET /books/1", "GET /books/99", "GET /books/abc", "GET /bug", "GET /nope"]);

// Express 4 note: older code must call next(err) inside async handlers, because Express 4
// did NOT catch async errors automatically. You'll see `catch (err) { next(err) }` a lot.
