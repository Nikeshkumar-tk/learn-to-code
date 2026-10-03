// Milestone 8 checks:  npm run check:m8
import fs from "node:fs/promises";
import { check, section, summary, tempTasksFile, fileExists, readSource, isInstalled } from "./lib.js";
import { startApp, runApiSuite } from "./api-suite.js";

if (!isInstalled("express")) {
  console.log('❌ Express isn\'t installed. Run:  npm install express');
  process.exit(1);
}

section("Milestone 8 — structure");
const structure = ["src/task-routes.js", "src/middleware/not-found.js", "src/middleware/error-handler.js", "src/middleware/request-logger.js"];
for (const file of structure) check(`${file} exists`, fileExists(file), true);
check("no try/catch left in the routes", /\btry\s*\{/.test(readSource("src/task-routes.js")), false);
check("the error handler has 4 parameters", /\(\s*err\w*\s*,\s*req\s*,\s*res\s*,\s*next\s*\)/.test(readSource("src/middleware/error-handler.js")), true);

if (!fileExists("src/app.js")) {
  console.log("❌ src/app.js not found — finish Milestone 7 first.");
  summary(8);
  process.exit(1);
}

const tasksFile = tempTasksFile();
process.env.TASKS_FILE = tasksFile;
process.env.NODE_ENV = "test";
const { app } = await import("../src/app.js");
const { send, stop } = await startApp(app);

try {
  section("Milestone 8 — new endpoints & middleware");
  const root = await send("GET", "/");
  check("GET / describes the API", [root.status, root.body?.name, Array.isArray(root.body?.endpoints)], [200, "Task API", true]);
  check("GET /health", await send("GET", "/health"), { status: 200, body: { status: "ok" } });
  check("unknown route -> JSON 404", await send("GET", "/nope"), { status: 404, body: { error: "Route not found: GET /nope" } });
  check("invalid JSON body -> JSON 400", await send("POST", "/tasks", "{ title: oops", { raw: true }), {
    status: 400,
    body: { error: "Request body must be valid JSON" },
  });
  await runApiSuite(send, tasksFile);
} finally {
  stop();
  await fs.rm(tasksFile, { force: true });
}
summary(8);
