# Milestone 3 — Validation & errors

> **Start after:** Module 12 (Errors & Debugging) · **Time:** ~2 hours
> **Concepts:** custom error classes, `throw`, guard clauses, validation, `try/catch` at a boundary

## 🎯 Objective

Make the task manager refuse bad data with **clear, specific errors** — the same errors your API will turn into `400` and `404` responses later.

## 📁 Files

- **Change:** `task-manager.js`

```bash
npm run check:m3         # also re-runs Milestones 1 and 2
```

## 🧩 What to implement

**1. Two error classes** (pattern from Module 12, example 07):

| Class | `name` | `statusCode` |
|---|---|---|
| `ValidationError` | `"ValidationError"` | `400` |
| `NotFoundError` | `"NotFoundError"` | `404` |

**2. `validateTaskInput(input, { partial = false } = {})`** — throws a `ValidationError` with **exactly** these messages, or returns nothing if the input is fine:

| Rule | Message |
|---|---|
| input isn't a plain object (null, array, string…) | `Task data must be an object` |
| a key that isn't allowed* | `Unknown field: <key>` |
| `partial` and no keys at all | `No changes provided` |
| title missing / not a string / blank (required unless `partial`; if `partial`, only checked when present) | `Title is required` |
| title longer than 100 characters (after trimming) | `Title must be at most 100 characters` |
| description present but not a string | `Description must be a string` |
| description longer than 500 | `Description must be at most 500 characters` |
| priority present but not low/medium/high | `Priority must be one of: low, medium, high` |
| completed present but not a boolean | `Completed must be true or false` |

\* Allowed keys: `title`, `description`, `priority` — plus `completed` when `partial` is true.

**3. `parseId(value)`** — turns `"3"` or `3` into `3`; anything that isn't a positive whole number throws `ValidationError("Task id must be a positive whole number")`. (Your API will receive ids as strings!)

**4. `getTaskById(tasks, id)`** — like `findTaskById`, but throws `NotFoundError("Task <id> not found")`.

**5. Use them:**
- `addTask` validates its input first.
- `completeTask`, `updateTask`, `deleteTask` throw `NotFoundError` for a missing id. `updateTask` validates changes with `{ partial: true }` and trims a new title/description.
- `filterTasks` throws for an invalid priority; `sortTasks` throws `ValidationError("Sort must be one of: id, priority, title, newest")` for an unknown sort.

## ✅ Expected behaviour

```js
try {
  addTask(tasks, { title: "  " });
} catch (error) {
  console.log(`${error.name} (${error.statusCode}): ${error.message}`);
}
// ValidationError (400): Title is required
```

Write a demo that tries several invalid operations in a loop and prints each error like this. Notice where the `try/catch` lives: in the **demo** (the boundary), not inside your functions.

## 💡 Hints

<details><summary>Hint 1 — checking for a plain object</summary>

`typeof null` is `"object"` and so is `typeof []`. You need three conditions: `typeof input !== "object" || input === null || Array.isArray(input)`.
</details>

<details><summary>Hint 2 — unknown fields</summary>

`Object.keys(input)` gives the keys. Loop over them and check each against an array of allowed keys with `includes`.
</details>

<details><summary>Hint 3 — "only when present"</summary>

For partial updates, a field that's `undefined` simply wasn't sent. The title rule becomes: `if (!partial || title !== undefined) { ...check title... }`.
</details>

<details><summary>Hint 4 — reuse!</summary>

`completeTask`, `updateTask` and `deleteTask` can all start with one line: `getTaskById(tasks, id);` — it throws if the task is missing, so the rest of the function can assume it exists (a guard clause).
</details>

## ⚠️ Common mistakes

- Throwing strings (`throw "Title is required"`) — no `.name`, no `.message`.
- Forgetting `super(message)` in the error class constructor.
- Messages that are *almost* right — the checks compare exactly (this is how API clients rely on them too).
- Catching errors inside `addTask` and returning `undefined` — the caller must learn that it failed.

## 🏋️ Extension

Make `validateTaskInput` collect **all** problems instead of stopping at the first, and throw one `ValidationError` whose message joins them with `"; "`. (Then switch back — the checks expect the first-problem behaviour. Which is better for an API user?)

➡️ **Next:** [Module 13](../../modules/13-modules/README.md) — then Milestone 4.
