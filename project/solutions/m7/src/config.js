// CONFIGURATION: read the environment once, validate it, export plain values.
// Nothing else in the app reads process.env.
import path from "node:path";

const port = Number(process.env.PORT ?? 3000);
if (!Number.isInteger(port) || port < 0 || port > 65535) {
  throw new Error(`PORT must be a whole number between 0 and 65535 (got "${process.env.PORT}")`);
}

export const config = {
  port,
  tasksFile: process.env.TASKS_FILE ?? path.join(import.meta.dirname, "..", "data", "tasks.json"),
};
