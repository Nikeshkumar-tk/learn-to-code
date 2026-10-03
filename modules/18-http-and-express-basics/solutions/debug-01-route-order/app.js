// Fixed. Express tries routes IN THE ORDER THEY WERE ADDED and uses the first match.
// "/tasks/:id" matches "/tasks/stats" (with id = "stats"), so the stats route was never reached.
// Put specific paths BEFORE paths with parameters.
import express from "express";

export const app = express();

const tasks = [
  { id: 1, title: "Write code", completed: true },
  { id: 2, title: "Test code", completed: false },
];

app.get("/tasks/stats", (req, res) => {
  const done = tasks.filter((t) => t.completed).length;
  res.json({ total: tasks.length, done });
});

app.get("/tasks/:id", (req, res) => {
  const task = tasks.find((t) => t.id === Number(req.params.id));
  if (!task) return res.status(404).json({ error: `Task ${req.params.id} not found` });
  res.json(task);
});
