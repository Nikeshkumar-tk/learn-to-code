# Milestone 4 — Split into modules

> **Start after:** Module 13 (Modules) · **Time:** ~1.5 hours
> **Concepts:** `export` / `import`, module boundaries, one job per file, refactoring safely

## 🎯 Objective

Turn `task-manager.js` into a small, organised set of modules — **without changing any behaviour**. The Milestone 4 check re-runs every check from Milestones 1–3 against your new files. If they pass, your refactor is safe.

## 📁 Files

**Create** a `src/` folder:

| File | Contains | Exports |
|---|---|---|
| `src/errors.js` | the two error classes | `ValidationError`, `NotFoundError` |
| `src/task-validation.js` | rules about valid data | `PRIORITIES`, `SORT_OPTIONS`, `validateTaskInput`, `parseId` |
| `src/task-logic.js` | the pure functions that work on task arrays | `createTask`, `nextId`, `addTask`, `countCompleted`, `findTaskById`, `getTaskById`, `completeTask`, `updateTask`, `deleteTask`, `filterTasks`, `searchTasks`, `sortTasks`, `getStats` |
| `src/format.js` | turning tasks into text | `formatTask`, `formatTaskList` |
| `src/demo.js` | your demo code (the entry point) | nothing — it imports and runs |

When the check passes, **delete `task-manager.js`** (it lives on in git history and in `solutions/m3`).

```bash
node src/demo.js
npm run check:m4
```

Add a script to `package.json` so `npm run demo` runs it: `"demo": "node src/demo.js"`.

## ✅ Expected behaviour

- `node src/demo.js` prints the same kind of output as your old demo.
- `npm run check:m4` → `79 passed, 0 failed` (or similar — the same checks as M1–M3).

## 💡 Hints

<details><summary>Hint 1 — a safe order</summary>

Move files **bottom-up**: first `errors.js` (it needs nothing), then `task-validation.js` (needs errors), then `task-logic.js` (needs both), then `format.js`, then `demo.js`. Run `node src/demo.js` after each step.
</details>

<details><summary>Hint 2 — who imports what?</summary>

Each file imports only what *it* uses. `task-logic.js` needs `ValidationError`, `NotFoundError`, `PRIORITIES`, `SORT_OPTIONS` and `validateTaskInput`. `demo.js` doesn't need the errors at all unless it catches specific ones.
</details>

<details><summary>Hint 3 — "is not defined yet (or isn't exported)"</summary>

The check imports each module as a namespace. A function you forgot to `export` looks like it doesn't exist. Add `export` in front of it.
</details>

## ⚠️ Common mistakes

- Missing `.js` in import paths (`"./errors"` → `ERR_MODULE_NOT_FOUND`).
- `import { formatTask } from "./format.js"` when `format.js` uses `export default` (or vice versa) — use named exports throughout.
- Circular imports (A imports B, B imports A). If something is mysteriously `undefined`, draw the import arrows.
- `console.log` inside `task-logic.js` — the logic should be pure; printing belongs in the entry point.

## 🏋️ Extension

Draw the dependency graph of your modules (who imports whom). There should be no cycles, and arrows should point "down" towards `errors.js`.

➡️ **Next:** Modules [14](../../modules/14-async-javascript/README.md), [15](../../modules/15-node-and-npm/README.md) and [16](../../modules/16-files-and-json/README.md) — then Milestone 5.
