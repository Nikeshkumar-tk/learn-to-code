# Milestone 2 — Working with tasks

> **Start after:** Module 10 (Array Methods) · **Time:** ~2.5 hours
> **Concepts:** `map`, `filter`, `find`, `sort`, `reduce`, spread for updates, string search, lookup tables

## 🎯 Objective

Give the task manager real abilities: find, complete, update, delete, filter, search, sort and summarise — all **without mutating** the original array.

## 📁 Files

- **Change:** `task-manager.js` (add new functions above the Demo line)

```bash
npm run check:m2         # also re-runs the Milestone 1 checks
```

## 🧩 What to implement

| Function | Returns | Notes |
|---|---|---|
| `findTaskById(tasks, id)` | the task or `undefined` | `find` |
| `completeTask(tasks, id)` | new array, that task `completed: true` | `map` + spread — copy the task, don't modify it |
| `updateTask(tasks, id, changes)` | new array with changes applied | `id` and `createdAt` must **never** change |
| `deleteTask(tasks, id)` | new array without that task | `filter` |
| `filterTasks(tasks, { completed, priority })` | matching tasks | an option that's `undefined` is ignored |
| `searchTasks(tasks, query)` | tasks whose title **or** description contains the query | case-insensitive, query trimmed, `""` → all |
| `sortTasks(tasks, sortBy = "id")` | a sorted **copy** | `"id"`, `"title"` (A–Z), `"priority"` (high→low, ties by id), `"newest"` (createdAt, newest first) |
| `getStats(tasks)` | `{ total, completed, pending, byPriority: { high, medium, low } }` | `reduce`; all keys present even when 0 |

**Refactor too:** rewrite `nextId`, `formatTaskList` and `countCompleted` with array methods. The Milestone 1 checks must still pass.

For now, if an id doesn't exist, `completeTask` / `updateTask` / `deleteTask` can just return the tasks unchanged. (Milestone 3 changes that.)

## ✅ Expected behaviour

```js
let tasks = [];
tasks = addTask(tasks, { title: "Learn map", priority: "high" });
tasks = addTask(tasks, { title: "Write README", priority: "low" });
tasks = completeTask(tasks, 1);
console.log(formatTaskList(sortTasks(tasks, "priority")));
// [x] #1 Learn map (high)
// [ ] #2 Write README (low)
console.log(getStats(tasks));
// { total: 2, completed: 1, pending: 1, byPriority: { high: 1, medium: 0, low: 1 } }
```

## 💡 Hints

<details><summary>Hint 1 — completeTask / updateTask shape</summary>

`tasks.map((task) => task.id === id ? { ...task, completed: true } : task)`. Same idea for updates — and to protect `id`/`createdAt`, spread `changes` first and put `id: task.id, createdAt: task.createdAt` *after* it (later properties win).
</details>

<details><summary>Hint 2 — filterTasks with optional options</summary>

For each option: "either it wasn't given, or the task matches it":
`(completed === undefined || task.completed === completed)`. Combine with `&&`. Don't forget a default `= {}` for the options object.
</details>

<details><summary>Hint 3 — sorting by priority</summary>

Words can't be subtracted, numbers can. A lookup object `{ high: 1, medium: 2, low: 3 }` turns each priority into a number (Module 10, example 06). For ties, compare ids.
</details>

<details><summary>Hint 4 — choosing a sort function</summary>

Instead of an `if/else` chain, store compare functions in an object: `const SORTERS = { id: (a, b) => ..., title: ... }` and pick `SORTERS[sortBy]` (Module 09, example 08).
</details>

<details><summary>Hint 5 — getStats</summary>

What's the initial value? It should look like the answer for an empty array: `{ total: 0, completed: 0, pending: 0, byPriority: { high: 0, medium: 0, low: 0 } }`.
</details>

## ⚠️ Common mistakes

- `sort` without copying → the original array is reordered (the last check catches this).
- `filter` where you needed `find` (you get an array, not a task).
- `searchTasks` only lowercasing one side.
- `map` callback with `{ }` but no `return`.
- `(task) => { ...task, completed: true }` — needs parentheses: `({ ...task, completed: true })`.

## 🏋️ Extension

Add `groupByPriority(tasks)` → `{ high: [...], medium: [...], low: [...] }` and print a grouped list in the demo.

➡️ **Next:** [Module 11](../../modules/11-scope-and-closures/README.md). Milestone 3 starts after Module 12.
