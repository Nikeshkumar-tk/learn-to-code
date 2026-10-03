// Fixed. req.params values are ALWAYS strings: req.params.id is "1", and "1" === 1 is false.
// Convert once: Number(req.params.id). (Same bug as Module 02's age gate — it never goes away!)
import express from "express";

export const app = express();

const users = [
  { id: 1, name: "Ana" },
  { id: 2, name: "Ben" },
];

app.get("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((u) => u.id === id);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  res.json(user);
});
