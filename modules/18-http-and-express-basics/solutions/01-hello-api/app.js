// Solution 18.1
import express from "express";

export const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my API" });
});

app.get("/health", (req, res) => {
  res.json({ status: "ok", uptimeSeconds: process.uptime() });
});

app.get("/greet/:name", (req, res) => {
  res.json({ greeting: `Hello, ${req.params.name}!` });
});

app.get("/add", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  // Number(undefined) is NaN, so a missing param is caught by the same check
  if (req.query.a === undefined || req.query.b === undefined || Number.isNaN(a) || Number.isNaN(b)) {
    return res.status(400).json({ error: "a and b must be numbers" });
  }
  res.json({ result: a + b });
});
