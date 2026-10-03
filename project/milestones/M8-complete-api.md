# Milestone 8 — The complete API 🏁

> **Start after:** Module 19 (Express in Depth) · **Time:** ~2 hours
> **Concepts:** routers, middleware, centralised error handling, 404 handling, logging

## 🎯 Objective

Refactor the API into a clean, professional shape: a router for tasks, a request pipeline of middleware, and **one** place that turns errors into responses. Behaviour stays the same (the M7 checks run again) — plus a few new features.

## 📁 Files

**Create:**

| File | Job |
|---|---|
| `src/task-routes.js` | `export const taskRouter = Router()` with all `/tasks` routes — paths relative to the mount point (`"/"`, `"/stats"`, `"/:id"`…). **No try/catch**: just throw / let errors propagate. |
| `src/middleware/request-logger.js` | logs `GET /tasks -> 200 (3ms)` after each response (`res.on("finish")`); stays silent when `process.env.NODE_ENV === "test"` |
| `src/middleware/not-found.js` | `404 { "error": "Route not found: GET /nope" }` |
| `src/middleware/error-handler.js` | `(err, req, res, next)`: invalid JSON body (`err.type === "entity.parse.failed"`) → `400 "Request body must be valid JSON"`; `statusCode` 400/404 → that status + message; anything else → log it + `500 "Internal server error"` |

**Change `src/app.js`** so it reads like the pipeline:

```text
requestLogger → express.json() → GET / → GET /health → /tasks router → notFound → errorHandler
```

New endpoints: `GET /` → `{ name: "Task API", endpoints: [ ...list of endpoint strings ] }` and `GET /health` → `{ status: "ok" }`.

```bash
npm run check:m8
```

## ✅ Expected behaviour

```text
$ node request.js GET /nope
404 Not Found
{ "error": "Route not found: GET /nope" }

$ node request.js GET /tasks          (with a corrupted data/tasks.json)
500 Internal Server Error
{ "error": "Internal server error" }     ← and the real error is logged in the server terminal
```

## 💡 Hints

<details><summary>Hint 1 — moving routes</summary>

Move one route at a time from `app.js` to the router, deleting its `try/catch`. Run the check after each move.
</details>

<details><summary>Hint 2 — why check the JSON error first?</summary>

The error `express.json()` throws for bad JSON *also* has `statusCode: 400`, but its message is a technical parser message. Handle it before the general 400/404 branch.
</details>

<details><summary>Hint 3 — the 4th parameter</summary>

Express recognises an error handler only if it has exactly 4 parameters — even if you never use `next`.
</details>

## ⚠️ Common mistakes

- Router paths that repeat the mount path (`router.get("/tasks/:id")` mounted at `/tasks` → `/tasks/tasks/:id`).
- Error handler registered before the routes, or with 3 parameters.
- `notFound` registered before the router.
- Leaking `err.message` for 500 errors (it might contain internal details).

## 🎉 You did it

Look at where you started: six empty functions in one file. You now have a layered backend with validation, persistence, a CLI and an HTTP API — and you understand every line of it.

**Before you celebrate,** go back to [`PROGRESS.md`](../../PROGRESS.md) and fill in the final reflection. Then pick an [extension challenge](../README.md#-extension-challenges-after-milestone-8).

## 🏋️ Extension

Write automated tests in `test/api.test.js` using `node:test` (see Module 19, example 07), run them with `node --test`, and add `"test": "node --test"` to your scripts.
