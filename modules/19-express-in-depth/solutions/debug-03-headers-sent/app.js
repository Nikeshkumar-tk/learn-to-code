// Fixed. Without `return`, the handler sent the 400 and then KEPT GOING: it created an
// invalid task and tried to send a second response -> "Cannot set headers after they are
// sent to the client" (ERR_HTTP_HEADERS_SENT). The client saw a correct-looking 400, but
// bad data was saved. Always `return` when you send an early response.
import express from "express";

export const app = express();
app.use(express.json());

export const tasks = [];

app.post("/tasks", (req, res) => {
  const { title } = req.body ?? {};
  if (!title) {
    return res.status(400).json({ error: "title is required" });
  }
  const task = { id: tasks.length + 1, title };
  tasks.push(task);
  res.status(201).json(task);
});

app.get("/tasks", (req, res) => res.json(tasks));
