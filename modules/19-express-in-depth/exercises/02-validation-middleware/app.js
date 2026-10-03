// Exercise 19.2 — A reusable validation middleware
// Check: node exercises/02-validation-middleware/check.js
//
// Write validateBody(schema) — a middleware FACTORY. A schema looks like:
//
//   {
//     title:    { required: true, type: "string" },
//     priority: { oneOf: ["low", "medium", "high"] },
//     estimate: { type: "number" },
//   }
//
// Rules, for each field in the schema:
//   required: true  -> missing/undefined/"" (or only spaces) is an error:  "<field> is required"
//   type: "string"  -> if present, typeof must match:                      "<field> must be a string"
//   oneOf: [...]    -> if present, must be one of the options:             "<field> must be one of low, medium, high"
// Only report the FIRST problem per field. If there are errors, respond:
//   400 { error: "Validation failed", details: [ ...messages in schema order ] }
// Otherwise call next().
//
// Then use it on POST /tasks with the schema above.
import express from "express";

export const app = express();
app.use(express.json());

const tasks = [];

// Write validateBody here.

app.post("/tasks", (req, res) => {
  const task = { id: tasks.length + 1, ...req.body };
  tasks.push(task);
  res.status(201).json(task);
});
