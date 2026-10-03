# 🛠️ Final Project — Task Management API

You'll build a real backend for managing tasks — **yourself**, one milestone at a time, as you learn each concept. It starts as a handful of functions in one file and ends as a layered Express API with file persistence, validation, error handling and a command-line interface.

> **This folder does not contain a finished app for you to copy.** It contains a starting point, a guide for each milestone, and automatic checks that tell you when you're done. Reference solutions exist (see the end), but the learning happens when *you* write it.

---

## 🎯 Project goal

```text
A REST API where you can create, list, view, update, complete, delete, filter and search tasks,
with data saved to a JSON file — plus a command-line tool that uses the same code.
```

A task:

```js
{
  id: 1,
  title: "Learn higher-order functions",
  description: "Practice map, filter and reduce",
  completed: false,
  priority: "high",                       // "low" | "medium" | "high"
  createdAt: "2026-03-01T10:00:00.000Z"   // ISO date string — JSON-friendly
}
```

---

## 🗺️ Milestones

Each milestone unlocks after certain course modules. Don't start one early — it depends on what those modules teach.

| # | Milestone | Start after | You'll practise | Check |
|---|---|---|---|---|
| 1 | [Task data & functions](milestones/M1-task-data.md) | Module 07 | objects, arrays, functions, loops, spread | `npm run check:m1` |
| 2 | [Working with tasks](milestones/M2-working-with-tasks.md) | Module 10 | map / filter / find / sort / reduce, strings | `npm run check:m2` |
| 3 | [Validation & errors](milestones/M3-validation-and-errors.md) | Module 12 | throw, custom errors, guard clauses | `npm run check:m3` |
| 4 | [Split into modules](milestones/M4-modules.md) | Module 13 | import/export, module boundaries | `npm run check:m4` |
| 5 | [Saving to files](milestones/M5-saving-to-files.md) | Module 16 | async/await, fs, JSON, repository + service | `npm run check:m5` |
| 6 | [A command-line app](milestones/M6-cli-app.md) | Module 17 | argv, config, entry points, layers | `npm run check:m6` |
| 7 | [An HTTP API with Express](milestones/M7-express-api.md) | Module 18 | routes, params, query, body, status codes | `npm run check:m7` |
| 8 | [The complete API](milestones/M8-complete-api.md) | Module 19 | routers, middleware, error handling | `npm run check:m8` |

```text
M1 data ─▶ M2 logic ─▶ M3 rules ─▶ M4 modules ─▶ M5 persistence ─▶ M6 CLI ─▶ M7 HTTP ─▶ M8 polished API
  (one file: task-manager.js)        (src/ folder from here on) ───────────────────────────────────────▶
```

---

## ✅ Prerequisites

- Node.js 20 or newer (`node --version`)
- The course modules listed in the table above, in order

## 🚀 Setup

```bash
cd project/my-task-api
node task-manager.js        # prints a welcome line — you're ready
npm run check:m1            # lots of ❌ — that's your to-do list!
```

No `npm install` is needed until Milestone 7 (when you add Express).

---

## 🏗️ Architecture (where you'll end up)

```text
my-task-api/
├── package.json
├── request.js                  a tiny HTTP client for trying your API (from Module 18)
├── data/tasks.json             your data (created automatically; ignored by git)
├── checks/                     the milestone checks — don't edit
└── src/
    ├── server.js               starts the HTTP server               (M7)
    ├── app.js                  the Express pipeline                  (M7, M8)
    ├── task-routes.js          HTTP  ⇄ service                       (M8)
    ├── middleware/             request-logger, not-found, error-handler (M8)
    ├── cli.js                  command line ⇄ service                (M6)
    ├── config.js               settings from environment variables   (M6)
    ├── task-service.js         operations: load → logic → save       (M5)
    ├── task-repository.js      the only code that touches the file   (M5)
    ├── task-logic.js           pure functions on arrays of tasks     (M1–M4)
    ├── task-validation.js      what valid task data looks like       (M3–M4)
    ├── format.js               tasks → text                          (M1–M4)
    └── errors.js               ValidationError, NotFoundError        (M3–M4)
```

**Why it's split this way** (Module 17):

```text
    HTTP request                     terminal command
         │                                  │
   task-routes.js  (M8)               cli.js  (M6)          ← interfaces: translate the outside world
         └──────────────┬───────────────────┘
                 task-service.js                            ← operations: load → logic → save
                 │                │
        task-logic.js     task-repository.js                ← pure rules  |  storage
        task-validation.js        │
                            data/tasks.json
```

Two interfaces, **one** set of rules. When you add the HTTP API in Milestone 7 you won't rewrite any logic — you'll reuse it.

---

## 🌐 API endpoints (Milestones 7–8)

| Method | Path | Body | Success | Errors |
|---|---|---|---|---|
| GET | `/` | – | 200 API description (M8) | |
| GET | `/health` | – | 200 `{ status: "ok" }` (M8) | |
| GET | `/tasks` | – | 200 array | 400 bad query |
| GET | `/tasks?completed=true&priority=high&search=api&sort=priority` | – | 200 filtered array | 400 |
| GET | `/tasks/stats` | – | 200 `{ total, completed, pending, byPriority }` | |
| GET | `/tasks/:id` | – | 200 task | 400 bad id · 404 |
| POST | `/tasks` | `{ title, description?, priority? }` | **201** new task | 400 |
| PATCH | `/tasks/:id` | any of `{ title, description, priority, completed }` | 200 updated task | 400 · 404 |
| PATCH | `/tasks/:id/complete` | – | 200 completed task | 400 · 404 |
| DELETE | `/tasks/:id` | – | **204** no body | 400 · 404 |

Every error response looks like `{ "error": "Human-readable message" }`. Unexpected errors give `500 { "error": "Internal server error" }` — never internal details.

Query options: `completed` = `true`/`false` · `priority` = `low`/`medium`/`high` · `search` = text in title or description · `sort` = `id`/`priority`/`title`/`newest`.

### Trying it by hand (Milestone 7+)

```bash
npm run dev                                   # terminal 1 — restarts when you save
node request.js GET /tasks                    # terminal 2
node request.js POST /tasks title="Learn Express" priority=high
node request.js PATCH /tasks/1/complete
node request.js GET "/tasks?completed=true"
```

---

## 🐛 Debugging guidance

When a check fails:

1. **Read the first ❌ only.** Later failures are often caused by the first.
2. Compare `expected` and `received` character by character. Is it the type? (`"1"` vs `1`) A missing field? Key casing?
3. Reproduce it yourself in a tiny script or in the demo section: call the function with the same input and `console.log` the result.
4. Form a hypothesis *before* changing code. Write it down.
5. Check one thing at a time. Re-run the check after every change.
6. For HTTP problems: log `req.method, req.path, req.params, req.query, req.body` at the top of the handler.
7. For file problems: **open `data/tasks.json`** and look at what was actually saved.

Use the [debugging journal template](../modules/12-errors-and-debugging/debugging-journal-template.md) for anything that takes more than 15 minutes.

## ⚠️ Common mistakes (across the whole project)

- Comparing a string id from the URL/CLI with a number id (`"1" !== 1`) — use `parseId`.
- Mutating the tasks array or task objects instead of returning new ones.
- Forgetting `await` (you'll see `Promise { <pending> }` or empty results).
- Saving without loading first — wiping the file.
- Sending a response without `return`, then sending another.
- Putting rules (validation) in the routes/CLI instead of the service/logic, so one interface can bypass them.
- `/tasks/:id` defined before `/tasks/stats`.

## 🏋️ Extension challenges (after Milestone 8)

Pick any — each one exercises a different skill:

1. **Due dates** — add an optional `dueDate` (`"YYYY-MM-DD"`), validate it, add `GET /tasks?overdue=true`.
2. **Tags** — `tags: ["work", "urgent"]`, filter with `?tag=work`. (Arrays inside objects!)
3. **Pagination** — `?page=2&limit=10`, respond with `{ items, page, limit, total }`.
4. **Bulk actions** — `POST /tasks/complete-all`, `DELETE /tasks?completed=true`.
5. **Automated tests** — write `test/api.test.js` with `node:test` (see Module 19 example 07).
6. **API key** — a middleware that requires `x-api-key` matching `process.env.API_KEY` for every non-GET request.
7. **Undo delete** — move deleted tasks to `data/trash.json`; add `POST /tasks/:id/restore`.
8. **A tiny front end** — serve an `index.html` with `express.static` that lists tasks using `fetch`.

> 💬 For each challenge, first write down which **files/layers** need to change and why. Then check your plan with the architecture prompt in [USING-CLAUDE.md](../USING-CLAUDE.md).

---

## 🔑 Reference solutions

[`solutions/m1`](solutions/m1) … [`solutions/m8`](solutions/m8) contain one possible solution for each milestone. Rules for using them:

1. Only after you've passed the checks — to compare approaches — **or** after a genuine 30+ minutes stuck *and* asking for a hint first.
2. Never copy-paste. If you look, close the file and write it yourself from memory.
3. Different from yours ≠ better than yours. If your checks pass, ask: *what does each version do better?*
