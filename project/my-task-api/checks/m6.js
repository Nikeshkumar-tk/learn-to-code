// Milestone 6 checks:  npm run check:m6
// Runs your CLI as a separate program (like you would in a terminal) against a temporary data file.
import fs from "node:fs/promises";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { check, section, summary, tempTasksFile, fileExists, readSource, projectRoot } from "./lib.js";

for (const file of ["src/config.js", "src/cli.js"]) {
  if (!fileExists(file)) {
    console.log(`❌ ${file} not found (see milestones/M6-cli-app.md)`);
    process.exit(1);
  }
}

const tasksFile = tempTasksFile();
process.env.TASKS_FILE = tasksFile;
process.env.PORT = "4321";

function cli(...args) {
  const result = spawnSync(process.execPath, [path.join("src", "cli.js"), ...args], {
    cwd: projectRoot,
    encoding: "utf8",
    env: { ...process.env, TASKS_FILE: tasksFile },
  });
  return { out: result.stdout.trim(), err: result.stderr.trim(), code: result.status };
}

try {
  section("Milestone 6 — config");
  const { config } = await import("../src/config.js");
  check("config.tasksFile comes from TASKS_FILE", config?.tasksFile, tasksFile);
  check("config.port is a NUMBER from PORT", config?.port, 4321);
  check("only config.js reads process.env (not the repository)", readSource("src/task-repository.js").includes("process.env"), false);

  section("Milestone 6 — CLI");
  check("add", cli("add", "Learn the CLI", "--priority=high"), { out: "Added task #1: Learn the CLI", err: "", code: 0 });
  check("add with a description", cli("add", "Write docs", "--description=For users").out, "Added task #2: Write docs");
  cli("add", "Tidy up", "--priority=low");
  check("list", cli("list").out, "[ ] #1 Learn the CLI (high)\n[ ] #2 Write docs (medium)\n[ ] #3 Tidy up (low)");
  check("done", cli("done", "1"), { out: "Completed task #1: Learn the CLI", err: "", code: 0 });
  check("list --pending", cli("list", "--pending").out, "[ ] #2 Write docs (medium)\n[ ] #3 Tidy up (low)");
  check("list --completed", cli("list", "--completed").out, "[x] #1 Learn the CLI (high)");
  check("list --priority=low", cli("list", "--priority=low").out, "[ ] #3 Tidy up (low)");
  check("list --search=docs", cli("list", "--search=docs").out, "[ ] #2 Write docs (medium)");
  check("list --sort=priority", cli("list", "--sort=priority").out.split("\n").map((l) => l.slice(4, 6)), ["#1", "#2", "#3"]);
  check("update", cli("update", "2", "--title=Write great docs", "--priority=high").out, "Updated task #2: [ ] #2 Write great docs (high)");
  check("stats", cli("stats").out, "Total: 3 | Completed: 1 | Pending: 2 | High: 2 | Medium: 0 | Low: 1");
  check("delete", cli("delete", "3").out, "Deleted task #3: Tidy up");
  check("data really is in the file", JSON.parse(await fs.readFile(tasksFile, "utf8")).length, 2);

  section("Milestone 6 — CLI errors");
  check("missing task -> stderr + exit code 1", cli("done", "99"), { out: "", err: "Error: Task 99 not found", code: 1 });
  check("invalid input -> stderr + exit code 1", cli("add", "Bad", "--priority=urgent"), { out: "", err: "Error: Priority must be one of: low, medium, high", code: 1 });
  check("bad id", cli("delete", "abc").err, "Error: Task id must be a positive whole number");
  const unknown = cli("dance");
  check("unknown command -> exit code 1 and usage", [unknown.code, unknown.err.startsWith('Error: Unknown command "dance"'), unknown.err.includes("Usage")], [1, true, true]);
} finally {
  await fs.rm(tasksFile, { force: true });
}
summary(6);
