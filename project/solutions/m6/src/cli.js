// ENTRY POINT (command line): turns argv into service calls and results into text.
//
//   node src/cli.js add "Learn closures" --priority=high --description="Module 11"
//   node src/cli.js list [--pending | --completed] [--priority=high] [--search=text] [--sort=priority]
//   node src/cli.js done 1
//   node src/cli.js update 1 --title="New title" --priority=low
//   node src/cli.js delete 1
//   node src/cli.js stats
import * as service from "./task-service.js";
import { formatTask, formatTaskList } from "./format.js";
import { ValidationError, NotFoundError } from "./errors.js";

const USAGE = `Usage:
  add "<title>" [--priority=low|medium|high] [--description="..."]
  list [--pending | --completed] [--priority=...] [--search=...] [--sort=id|priority|title|newest]
  done <id>
  update <id> [--title="..."] [--priority=...] [--description="..."]
  delete <id>
  stats`;

// Splits arguments into positional words and --flags (Module 15).
function parseArgs(args) {
  const positional = [];
  const flags = {};
  for (const arg of args) {
    if (arg.startsWith("--")) {
      const [key, ...rest] = arg.slice(2).split("=");
      flags[key] = rest.length ? rest.join("=") : true;
    } else {
      positional.push(arg);
    }
  }
  return { positional, flags };
}

// Copies only the flags that were given, so missing ones stay undefined.
function pick(flags, keys) {
  const result = {};
  for (const key of keys) {
    if (flags[key] !== undefined) result[key] = flags[key];
  }
  return result;
}

const commands = {
  async add({ positional, flags }) {
    const task = await service.createTask({ title: positional.join(" "), ...pick(flags, ["priority", "description"]) });
    return `Added task #${task.id}: ${task.title}`;
  },

  async list({ flags }) {
    let completed;
    if (flags.completed) completed = true;
    if (flags.pending) completed = false;
    const tasks = await service.listTasks({ completed, priority: flags.priority, search: flags.search, sort: flags.sort });
    return formatTaskList(tasks);
  },

  async done({ positional }) {
    const task = await service.completeTask(positional[0]);
    return `Completed task #${task.id}: ${task.title}`;
  },

  async update({ positional, flags }) {
    const task = await service.updateTask(positional[0], pick(flags, ["title", "priority", "description"]));
    return `Updated task #${task.id}: ${formatTask(task)}`;
  },

  async delete({ positional }) {
    const task = await service.deleteTask(positional[0]);
    return `Deleted task #${task.id}: ${task.title}`;
  },

  async stats() {
    const s = await service.getStats();
    return `Total: ${s.total} | Completed: ${s.completed} | Pending: ${s.pending} | High: ${s.byPriority.high} | Medium: ${s.byPriority.medium} | Low: ${s.byPriority.low}`;
  },

  async help() {
    return USAGE;
  },
};

const [commandName = "help", ...rest] = process.argv.slice(2);

try {
  const command = commands[commandName];
  if (!command) throw new ValidationError(`Unknown command "${commandName}"\n\n${USAGE}`);
  console.log(await command(parseArgs(rest)));
} catch (error) {
  if (error instanceof ValidationError || error instanceof NotFoundError) {
    console.error(`Error: ${error.message}`);
  } else {
    console.error("Unexpected error:", error);
  }
  process.exitCode = 1;
}
