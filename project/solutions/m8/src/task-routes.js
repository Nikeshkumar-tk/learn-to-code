// ROUTES: translate HTTP into service calls. No try/catch — errors are thrown and the
// error-handling middleware turns them into responses (Express 5 forwards async errors).
import { Router } from "express";
import * as service from "./task-service.js";
import { ValidationError } from "./errors.js";

export const taskRouter = Router();

function parseListQuery(query) {
  const { completed, priority, search, sort } = query;
  let completedFilter;
  if (completed === "true") completedFilter = true;
  else if (completed === "false") completedFilter = false;
  else if (completed !== undefined) throw new ValidationError("completed must be true or false");
  return { completed: completedFilter, priority, search, sort };
}

taskRouter.get("/", async (req, res) => {
  res.json(await service.listTasks(parseListQuery(req.query)));
});

taskRouter.get("/stats", async (req, res) => {
  res.json(await service.getStats());
});

taskRouter.get("/:id", async (req, res) => {
  res.json(await service.getTask(req.params.id));
});

taskRouter.post("/", async (req, res) => {
  res.status(201).json(await service.createTask(req.body));
});

taskRouter.patch("/:id", async (req, res) => {
  res.json(await service.updateTask(req.params.id, req.body));
});

taskRouter.patch("/:id/complete", async (req, res) => {
  res.json(await service.completeTask(req.params.id));
});

taskRouter.delete("/:id", async (req, res) => {
  await service.deleteTask(req.params.id);
  res.status(204).end();
});
