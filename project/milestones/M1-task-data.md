# Milestone 1 — Task data & functions

> **Start after:** Module 07 (Objects) · **Time:** ~1.5 hours
> **Concepts:** objects, arrays, functions, default parameters, destructuring, loops, spread, template literals

## 🎯 Objective

Model a task as an object and write the first functions that create, add, count and display tasks — all in one file.

## 📁 Files

- **Change:** `my-task-api/task-manager.js` (the starter already has empty functions for you)

```bash
cd project/my-task-api
node task-manager.js     # run your demo
npm run check:m1         # run the checks
```

> The checks run everything **above** the `// ===== Demo` line. Keep that line, and put experiments below it.

## 🧩 What to implement

| Function | Returns | Example |
|---|---|---|
| `createTask(id, input)` | a new task object | `createTask(1, { title: " Learn " })` → `{ id: 1, title: "Learn", description: "", completed: false, priority: "medium", createdAt: "2026-…Z" }` |
| `nextId(tasks)` | highest id + 1 (1 if empty) | `nextId([{id: 1}, {id: 5}])` → `6` |
| `addTask(tasks, input)` | a **new** array with the new task added | the original array must not change |
| `formatTask(task)` | one line of text | `"[ ] #1 Learn objects (high)"` / `"[x] #2 Done thing (low)"` |
| `formatTaskList(tasks)` | lines joined with `"\n"` | `"No tasks yet."` for an empty array |
| `countCompleted(tasks)` | a number | |

Requirements:
- `title` and `description` are **trimmed**.
- `description` defaults to `""`, `priority` to `"medium"`.
- `completed` always starts as `false`.
- `createdAt` is `new Date().toISOString()`.
- Use **loops** for `nextId`, `formatTaskList` and `countCompleted` — you'll rewrite them with array methods in Milestone 2.

## ✅ Expected behaviour

With the demo lines uncommented, `node task-manager.js` prints something like:

```text
[ ] #1 Learn objects (high)
[ ] #2 Practise loops (medium)
0 of 2 done
```

and `npm run check:m1` ends with `0 failed`.

## 💡 Hints

<details><summary>Hint 1 — createTask's input</summary>

Destructure the input with defaults right in the parameter list (Module 07, section 6):
`function createTask(id, { title, description = "", priority = "medium" }) { ... }`
</details>

<details><summary>Hint 2 — addTask</summary>

Two steps: make the task (using `nextId`), then return `[...tasks, task]`. Don't `push` onto `tasks` — that would change the caller's array.
</details>

<details><summary>Hint 3 — formatTaskList without a trailing newline</summary>

Build the string with `+= line + "\n"` and call `.trimEnd()` at the end. (Or collect lines in an array and `join("\n")` — even neater.)
</details>

## ⚠️ Common mistakes

- Forgetting to `return` — the checks then show `received: undefined`.
- `nextId` returning `tasks.length + 1` — breaks once a task is deleted (ids `[1, 3]` → next should be `4`, not `3`).
- Mutating with `push` in `addTask`.
- `"[ ]"` vs `"[]"` — read the expected output character by character.

## 🏋️ Extension

Add a `summary(tasks)` function that returns `"2 of 5 tasks done (40%)"`. Handle 0 tasks without printing `NaN%`.

➡️ **Next:** carry on with [Module 08](../../modules/08-strings/README.md). Milestone 2 starts after Module 10.
