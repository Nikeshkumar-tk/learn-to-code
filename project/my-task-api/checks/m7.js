// Milestone 7 checks:  npm run check:m7
import fs from "node:fs/promises";
import { summary, tempTasksFile, fileExists, isInstalled } from "./lib.js";
import { startApp, runApiSuite } from "./api-suite.js";

if (!isInstalled("express")) {
  console.log('❌ Express isn\'t installed. Run:  npm install express');
  process.exit(1);
}
for (const file of ["src/app.js", "src/server.js"]) {
  if (!fileExists(file)) {
    console.log(`❌ ${file} not found (see milestones/M7-express-api.md)`);
    process.exit(1);
  }
}

const tasksFile = tempTasksFile();
process.env.TASKS_FILE = tasksFile;
process.env.NODE_ENV = "test";
const { app } = await import("../src/app.js");
if (!app) {
  console.log("❌ src/app.js must export the app:  export const app = express();");
  process.exit(1);
}

const { send, stop } = await startApp(app);
try {
  await runApiSuite(send, tasksFile);
} finally {
  stop();
  await fs.rm(tasksFile, { force: true });
}
summary(7);
