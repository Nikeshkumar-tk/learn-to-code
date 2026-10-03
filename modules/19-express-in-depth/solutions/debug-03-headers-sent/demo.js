// @entry
import { app } from "./app.js";
import { runDemo } from "../../demo-client.js";

await runDemo(app, [
  { method: "POST", path: "/tasks", body: { title: "Valid task" } },
  { method: "POST", path: "/tasks", body: {} },
  "GET /tasks",
]);
