# Milestone 5 — Saving to files

> **Start after:** Module 16 (Files, Paths & JSON) · **Time:** ~2 hours
> **Concepts:** async/await, `fs/promises`, `path`, JSON, load → modify → save, repository and service layers

## 🎯 Objective

Tasks currently vanish when the program ends. Store them in `data/tasks.json`, with a clean separation between **storage** (repository) and **operations** (service).

## 📁 Files

**Create:**

### `src/task-repository.js` — the only code that touches the file

```js
export async function loadTasks()        // -> array of tasks ([] if the file doesn't exist yet)
export async function saveTasks(tasks)   // -> writes pretty JSON (2-space indent), creating data/ if needed
```

- The file path is `process.env.TASKS_FILE` if set, otherwise `data/tasks.json` **inside the project folder** (build it from `import.meta.dirname` — Module 16, section 2).
- Missing file (`ENOENT`) → `[]`. Any other error (e.g. corrupted JSON) → **rethrow**. Never silently replace data.

### `src/task-service.js` — the operations the app offers

Each function: **load → use the pure logic → save (if anything changed) → return the result**.

| Function | Returns |
|---|---|
| `listTasks({ completed, priority, search, sort } = {})` | filtered → searched → sorted tasks |
| `getTask(id)` | the task (id may be a **string** — use `parseId`) |
| `createTask(input)` | the new task |
| `updateTask(id, changes)` | the updated task |
| `completeTask(id)` | the updated task |
| `deleteTask(id)` | the deleted task |
| `getStats()` | the stats object |

```bash
npm run check:m5      # uses a temporary file — your real data/tasks.json is untouched
```

Update `src/demo.js` to use the service (with `await`) and run it twice — the tasks should still be there the second time.

## ✅ Expected behaviour

```bash
node src/demo.js      # creates some tasks
node src/demo.js      # ids keep counting up — the data survived!
```

Open `data/tasks.json` in your editor and look at it.

## 💡 Hints

<details><summary>Hint 1 — name clash</summary>

The service's `createTask(input)` and the logic's `createTask(id, input)` share a name. Import the logic as a namespace: `import * as logic from "./task-logic.js";` then call `logic.addTask(...)`.
</details>

<details><summary>Hint 2 — returning the right task</summary>

After `const updated = logic.addTask(tasks, input)`, the new task is the last item: `updated[updated.length - 1]` (or `updated.at(-1)`). For update/complete, find it in the new array with `logic.getTaskById`.
</details>

<details><summary>Hint 3 — string ids</summary>

`getTask("2")` must work. Call `parseId(id)` once at the start of each function that takes an id and use the number from then on.
</details>

<details><summary>Hint 4 — reuse Module 16</summary>

Exercise 16.3 (`createJsonStore`) and example 07 are 90% of the repository.
</details>

## ⚠️ Common mistakes

- Forgetting `await` before `loadTasks()` → `tasks.filter is not a function` (you're calling it on a Promise).
- A relative path like `"data/tasks.json"` → the file ends up wherever you ran `node` from.
- Saving the **old** array instead of the new one the logic returned.
- Catching every error in `loadTasks` and returning `[]` → one typo in the file and the next save deletes everything.

## 🏋️ Extension

Add `src/backup.js`: copies `data/tasks.json` to `data/backups/tasks-<timestamp>.json`, keeping only the newest 5 backups (`readdir`, `sort`, `rm`).

➡️ **Next:** [Module 17](../../modules/17-structuring-node-apps/README.md) — then Milestone 6.
