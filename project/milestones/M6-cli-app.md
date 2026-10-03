# Milestone 6 — A command-line app

> **Start after:** Module 17 (Structuring a Node App) · **Time:** ~2 hours
> **Concepts:** `process.argv`, flags, configuration, entry points, stderr & exit codes, layering

## 🎯 Objective

Give your app a real interface: a command-line tool that uses the service. Move configuration into one place.

## 📁 Files

**Create `src/config.js`:**

```js
export const config = {
  port: /* Number(process.env.PORT ?? 3000), validated: whole number 0–65535 */,
  tasksFile: /* process.env.TASKS_FILE ?? <project>/data/tasks.json */,
};
```

**Change `src/task-repository.js`** to use `config.tasksFile`. After this, **only `config.js` reads `process.env`**.

**Create `src/cli.js`** (the entry point) and **delete `src/demo.js`** (the CLI replaces it). Add `"cli": "node src/cli.js"` to `package.json` scripts.

| Command | Prints (stdout) |
|---|---|
| `add "Learn closures" --priority=high --description="..."` | `Added task #1: Learn closures` |
| `list` | the formatted list (`formatTaskList`) |
| `list --pending` / `--completed` / `--priority=high` / `--search=text` / `--sort=priority` | filtered list (flags can be combined) |
| `done 1` | `Completed task #1: Learn closures` |
| `update 1 --title="..." --priority=low --description="..."` | `Updated task #1: [ ] #1 New title (low)` |
| `delete 1` | `Deleted task #1: Learn closures` |
| `stats` | `Total: 3 \| Completed: 1 \| Pending: 2 \| High: 2 \| Medium: 0 \| Low: 1` |
| `help` (or no command) | usage text |

**Errors:** `ValidationError` / `NotFoundError` → print `Error: <message>` to **stderr** (`console.error`) and set `process.exitCode = 1`. An unknown command is a `ValidationError` whose message starts with `Unknown command "<name>"` followed by the usage text.

```bash
node src/cli.js add "Learn closures" --priority=high
npm run cli -- list --pending          # the -- passes the rest to your script
npm run check:m6
```

## ✅ Expected behaviour

```text
$ node src/cli.js add "Write the CLI" --priority=high
Added task #1: Write the CLI
$ node src/cli.js done 1
Completed task #1: Write the CLI
$ node src/cli.js done 99
Error: Task 99 not found          (exit code 1)
```

## 💡 Hints

<details><summary>Hint 1 — parsing</summary>

Write `parseArgs(args)` → `{ positional: [...], flags: {...} }`. Anything starting with `--` is a flag (`--sort=title` → `flags.sort = "title"`, `--pending` → `flags.pending = true`); everything else is positional (Module 15, example 03).
</details>

<details><summary>Hint 2 — one function per command</summary>

A lookup table (Module 09!): `const commands = { add: async ({ positional, flags }) => ..., list: ..., ... }`. Then `commands[name]` — and `undefined` means "unknown command".
</details>

<details><summary>Hint 3 — only pass flags that were given</summary>

`service.updateTask(id, { title: flags.title, priority: flags.priority })` sends `{ title: undefined, priority: undefined }` when no flags are given. That object has two **keys**, so "No changes provided" never triggers and the update silently does nothing. A small `pick(flags, ["title", "priority", "description"])` helper that copies only the flags that exist fixes it — try `update 1` with no flags before and after.
</details>

<details><summary>Hint 4 — the boundary</summary>

One `try/catch` around "run the command" at the bottom of `cli.js`. The service throws; the CLI decides how errors *look*.
</details>

## ⚠️ Common mistakes

- `process.argv[0]` / `[1]` are node and the script — your command is at index 2.
- Printing errors with `console.log` (stdout) and exiting with code 0.
- Putting validation in the CLI. The service already validates — the CLI just reports.
- `process.exit()` inside the service.

## 🏋️ Extension

Add `--json` to `list`: prints the tasks as JSON instead of text (handy for piping into other tools). Where does that code belong — CLI, service, or format?

➡️ **Next:** [Module 18](../../modules/18-http-and-express-basics/README.md) — then Milestone 7.
