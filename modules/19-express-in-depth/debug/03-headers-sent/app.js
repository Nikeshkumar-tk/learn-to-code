import express from "express";

export const app = express();
app.use(express.json());

export const tasks = [];

app.post("/tasks", (req, res) => {
  const { title } = req.body ?? {};
  if (!title) {
    res.status(400).json({ error: "title is required" });
  }
  const task = { id: tasks.length + 1, title };
  tasks.push(task);
  res.status(201).json(task);
});

app.get("/tasks", (req, res) => res.json(tasks));
