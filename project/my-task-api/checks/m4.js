// Milestone 4 checks:  npm run check:m4
// Runs the SAME checks as Milestones 1-3, but against your new modules in src/.
// If they all pass, your refactor didn't change any behaviour. That's the goal of a refactor!
import { runSuites, fileExists, readSource } from "./lib.js";

const required = ["src/errors.js", "src/task-validation.js", "src/task-logic.js", "src/format.js"];
const absent = required.filter((file) => !fileExists(file));
if (absent.length > 0) {
  console.log("❌ Missing files:\n  " + absent.join("\n  "));
  console.log("\nCreate them first (see milestones/M4-modules.md).");
  process.exit(1);
}

const logicSource = readSource("src/task-logic.js");
if (/console\.log|process\./.test(logicSource)) {
  console.log("⚠️  src/task-logic.js contains console.log or process.* — task logic should be pure (no printing).");
}

// Import each module as a namespace, then pull out the functions the checks expect.
// A function you forgot to export simply shows up as "not defined yet".
const prelude = `
import * as __errors from "./src/errors.js";
import * as __validation from "./src/task-validation.js";
import * as __logic from "./src/task-logic.js";
import * as __format from "./src/format.js";
const { ValidationError, NotFoundError } = __errors;
const { validateTaskInput, parseId } = __validation;
const { createTask, nextId, addTask, countCompleted, findTaskById, getTaskById, completeTask, updateTask,
        deleteTask, filterTasks, searchTasks, sortTasks, getStats } = __logic;
const { formatTask, formatTaskList } = __format;
`;

runSuites({ prelude, suites: ["m1.suite.js", "m2.suite.js", "m3.suite.js"], milestone: 4 });
