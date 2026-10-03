// Validation as middleware: check req.body BEFORE the handler runs,
// so handlers can assume the input is valid.
//
// Run:  node examples/04-validation-middleware.js
import express from "express";
import { runDemo } from "../demo-client.js";

// rules: an object of { fieldName: (value) => errorMessage or null }
function validateBody(rules) {
  return (req, res, next) => {
    const body = req.body ?? {};
    const errors = [];
    for (const [field, rule] of Object.entries(rules)) {
      const problem = rule(body[field]);
      if (problem) errors.push(`${field}: ${problem}`);
    }
    if (errors.length > 0) {
      return res.status(400).json({ error: "Validation failed", details: errors });
    }
    next();
  };
}

// Small reusable rule-makers
const requiredString = (value) => (typeof value === "string" && value.trim() ? null : "is required");
const oneOf = (...options) => (value) =>
  value === undefined || options.includes(value) ? null : `must be one of ${options.join(", ")}`;

const app = express();
app.use(express.json());

const books = [];

app.post(
  "/books",
  validateBody({ title: requiredString, author: requiredString, format: oneOf("paper", "ebook", "audio") }),
  (req, res) => {
    // No validation clutter here: if we got this far, the body is valid.
    const book = { id: books.length + 1, ...req.body };
    books.push(book);
    res.status(201).json(book);
  },
);

await runDemo(app, [
  { method: "POST", path: "/books", body: { title: "Dune", author: "Frank Herbert" } },
  { method: "POST", path: "/books", body: { title: "", format: "vinyl" } },
]);
