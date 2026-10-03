// The Express APP (Milestone 8): reads top to bottom like the request pipeline.
import express from "express";
import { taskRouter } from "./task-routes.js";
import { requestLogger } from "./middleware/request-logger.js";
import { notFound } from "./middleware/not-found.js";
import { errorHandler } from "./middleware/error-handler.js";

export const app = express();

app.use(requestLogger);
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: "Task API",
    endpoints: [
      "GET /health",
      "GET /tasks?completed=&priority=&search=&sort=",
      "GET /tasks/stats",
      "GET /tasks/:id",
      "POST /tasks",
      "PATCH /tasks/:id",
      "PATCH /tasks/:id/complete",
      "DELETE /tasks/:id",
    ],
  });
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/tasks", taskRouter);

app.use(notFound);
app.use(errorHandler);
