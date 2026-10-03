// The Express APP (Milestone 7). Routes live here for now; each one catches its own errors.
// (Notice how repetitive the try/catch blocks are — Milestone 8 fixes that.)
import express from "express";
import * as service from "./task-service.js";
import { ValidationError, NotFoundError } from "./errors.js";

export const app = express();
app.use(express.json());

function sendError(res, error) {
  if (error instanceof ValidationError) return res.status(400).json({ error: error.message });
  if (error instanceof NotFoundError) return res.status(404).json({ error: error.message });
  console.error("Unexpected error:", error);
  res.status(500).json({ error: "Internal server error" });
}

// Turns the strings in req.query into the options listTasks expects.
function parseListQuery(query) {
  const { completed, priority, search, sort } = query;
  let completedFilter;
  if (completed === "true") completedFilter = true;
  else if (completed === "false") completedFilter = false;
  else if (completed !== undefined) throw new ValidationError("completed must be true or false");
  return { completed: completedFilter, priority, search, sort };
}

app.get("/tasks", async (req, res) => {
  try {
    res.json(await service.listTasks(parseListQuery(req.query)));
  } catch (error) {
    sendError(res, error);
  }
});

// Must come BEFORE /tasks/:id, or "stats" would be treated as an id.
app.get("/tasks/stats", async (req, res) => {
  try {
    res.json(await service.getStats());
  } catch (error) {
    sendError(res, error);
  }
});

app.get("/tasks/:id", async (req, res) => {
  try {
    res.json(await service.getTask(req.params.id));
  } catch (error) {
    sendError(res, error);
  }
});

app.post("/tasks", async (req, res) => {
  try {
    res.status(201).json(await service.createTask(req.body));
  } catch (error) {
    sendError(res, error);
  }
});

app.patch("/tasks/:id", async (req, res) => {
  try {
    res.json(await service.updateTask(req.params.id, req.body));
  } catch (error) {
    sendError(res, error);
  }
});

app.patch("/tasks/:id/complete", async (req, res) => {
  try {
    res.json(await service.completeTask(req.params.id));
  } catch (error) {
    sendError(res, error);
  }
});

app.delete("/tasks/:id", async (req, res) => {
  try {
    await service.deleteTask(req.params.id);
    res.status(204).end();
  } catch (error) {
    sendError(res, error);
  }
});
