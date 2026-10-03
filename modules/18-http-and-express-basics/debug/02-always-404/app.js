import express from "express";

export const app = express();

const users = [
  { id: 1, name: "Ana" },
  { id: 2, name: "Ben" },
];

app.get("/users/:id", (req, res) => {
  const user = users.find((u) => u.id === req.params.id);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  res.json(user);
});
