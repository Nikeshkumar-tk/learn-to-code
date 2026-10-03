// Fixed. Express identifies error-handling middleware by its number of parameters: exactly FOUR.
// With (err, req, res) Express treated it as normal middleware (and it never ran for errors),
// so Express's built-in HTML error page answered instead. Add `next`, even if unused.
import express from "express";

export const app = express();

app.get("/orders/:id", (req, res) => {
  const error = new Error(`Order ${req.params.id} not found`);
  error.statusCode = 404;
  throw error;
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.status(err.statusCode ?? 500).json({ error: err.message });
});
