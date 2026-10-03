// Milestone 5 checks:  npm run check:m5
// Uses a TEMPORARY data file, so your real data/tasks.json is never touched.
import fs from "node:fs/promises";
import { check, section, summary, asyncErrorOf, tempTasksFile, fileExists, missing } from "./lib.js";

const tasksFile = tempTasksFile();
process.env.TASKS_FILE = tasksFile; // must be set BEFORE your modules are imported

for (const file of ["src/task-repository.js", "src/task-service.js"]) {
  if (!fileExists(file)) {
    console.log(`❌ ${file} not found (see milestones/M5-saving-to-files.md)`);
    process.exit(1);
  }
}

const repository = await import("../src/task-repository.js");
const service = await import("../src/task-service.js");
const readFileTasks = async () => JSON.parse(await fs.readFile(tasksFile, "utf8"));

try {
  section("Milestone 5 — repository");
  if (typeof repository.loadTasks !== "function" || typeof repository.saveTasks !== "function") {
    missing("loadTasks / saveTasks in src/task-repository.js");
  } else {
    check("loadTasks with no file yet -> []", await repository.loadTasks(), []);
    await repository.saveTasks([{ id: 1, title: "saved" }]);
    check("saveTasks writes JSON to the file", await readFileTasks(), [{ id: 1, title: "saved" }]);
    check("saveTasks pretty-prints (2 spaces)", (await fs.readFile(tasksFile, "utf8")).includes('\n  {\n    "id"'), true);
    check("loadTasks reads it back", await repository.loadTasks(), [{ id: 1, title: "saved" }]);
    await fs.writeFile(tasksFile, "{ this is not json");
    check("loadTasks THROWS on a corrupted file (never silently loses data)", (await asyncErrorOf(() => repository.loadTasks())).name, "SyntaxError");
    await fs.rm(tasksFile, { force: true });
  }

  section("Milestone 5 — service");
  const names = ["listTasks", "getTask", "createTask", "updateTask", "completeTask", "deleteTask", "getStats"];
  const absent = names.filter((name) => typeof service[name] !== "function");
  if (absent.length > 0) {
    absent.forEach((name) => missing(`${name} in src/task-service.js`));
  } else {
    check("listTasks starts empty", await service.listTasks(), []);
    const first = await service.createTask({ title: "Learn fs", priority: "high" });
    check("createTask returns the new task", [first.id, first.title, first.priority, first.completed], [1, "Learn fs", "high", false]);
    check("createTask saved it to the file", (await readFileTasks()).map((t) => t.title), ["Learn fs"]);
    await service.createTask({ title: "Learn JSON", description: "stringify and parse" });
    await service.createTask({ title: "Write README", priority: "low" });

    check("getTask accepts a STRING id (like from a URL)", (await service.getTask("2")).title, "Learn JSON");
    check("getTask missing -> NotFoundError", await asyncErrorOf(() => service.getTask(99)), { name: "NotFoundError", message: "Task 99 not found" });
    check("getTask bad id -> ValidationError", (await asyncErrorOf(() => service.getTask("abc"))).name, "ValidationError");
    check("createTask validates", await asyncErrorOf(() => service.createTask({ title: "" })), { name: "ValidationError", message: "Title is required" });

    const done = await service.completeTask("1");
    check("completeTask returns the updated task", done.completed, true);
    const updated = await service.updateTask(3, { title: "Write a great README" });
    check("updateTask returns the updated task", updated.title, "Write a great README");
    check("updates are persisted", (await readFileTasks()).map((t) => [t.id, t.completed, t.title]), [
      [1, true, "Learn fs"],
      [2, false, "Learn JSON"],
      [3, false, "Write a great README"],
    ]);

    check("listTasks { completed: false }", (await service.listTasks({ completed: false })).map((t) => t.id), [2, 3]);
    check("listTasks { priority: 'high' }", (await service.listTasks({ priority: "high" })).map((t) => t.id), [1]);
    check("listTasks { search: 'json' }", (await service.listTasks({ search: "json" })).map((t) => t.id), [2]);
    check("listTasks { sort: 'newest' }", (await service.listTasks({ sort: "newest" })).map((t) => t.id), [3, 2, 1]);
    check("getStats", await service.getStats(), { total: 3, completed: 1, pending: 2, byPriority: { high: 1, medium: 1, low: 1 } });

    const deleted = await service.deleteTask("2");
    check("deleteTask returns the deleted task", deleted.title, "Learn JSON");
    check("deleteTask removed it from the file", (await readFileTasks()).map((t) => t.id), [1, 3]);
    check("new ids continue after the highest id", (await service.createTask({ title: "Next" })).id, 4);
  }
} finally {
  await fs.rm(tasksFile, { force: true });
}
summary(5);
