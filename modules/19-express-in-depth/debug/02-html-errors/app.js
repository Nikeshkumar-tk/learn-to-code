import express from "express";

export const app = express();

app.get("/orders/:id", (req, res) => {
  const error = new Error(`Order ${req.params.id} not found`);
  error.statusCode = 404;
  throw error;
});

// Our JSON error handler
app.use((err, req, res) => {
  res.status(err.statusCode ?? 500).json({ error: err.message });
});
