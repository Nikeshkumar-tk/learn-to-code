# Milestone 7 — An HTTP API with Express

> **Start after:** Module 18 (HTTP & Express Basics) · **Time:** ~2.5 hours
> **Concepts:** Express routes, `req.params`, `req.query`, `req.body`, status codes, app/server split

## 🎯 Objective

Expose your service over HTTP. You'll write **no new business logic** — the routes just translate HTTP into service calls. That's the payoff of Milestones 4–6.

## 📁 Files

```bash
npm install express      # adds it to package.json "dependencies"
```

Add scripts: `"start": "node src/server.js"` and `"dev": "node --watch src/server.js"`.

**Create `src/app.js`** — `export const app = express();` with `express.json()` and the routes below.
**Create `src/server.js`** — imports `app` and `config`, calls `app.listen(config.port, ...)`.

| Route | Calls | Success |
|---|---|---|
| `GET /tasks` | `service.listTasks(parsedQuery)` | 200 |
| `GET /tasks/stats` | `service.getStats()` | 200 |
| `GET /tasks/:id` | `service.getTask(req.params.id)` | 200 |
| `POST /tasks` | `service.createTask(req.body)` | **201** |
| `PATCH /tasks/:id` | `service.updateTask(id, req.body)` | 200 |
| `PATCH /tasks/:id/complete` | `service.completeTask(id)` | 200 |
| `DELETE /tasks/:id` | `service.deleteTask(id)` | **204**, no body |

**Errors** (for now, in every route): wrap the call in `try/catch` and map:
`ValidationError` → 400, `NotFoundError` → 404, anything else → `console.error` it and respond `500 { "error": "Internal server error" }`. Error bodies are always `{ "error": message }`. A small `sendError(res, error)` helper avoids repeating the mapping.

**Query parsing:** `req.query` values are strings. `completed=true` → `true`, `completed=false` → `false`, anything else → `ValidationError("completed must be true or false")`. Pass `priority`, `search` and `sort` straight through — the logic already validates them.

```bash
npm run dev                                   # terminal 1
node request.js POST /tasks title="Ship it"   # terminal 2
node request.js GET /tasks/stats
npm run check:m7
```

## ✅ Expected behaviour

```text
$ node request.js POST /tasks title="Ship it" priority=high
201 Created
{ "id": 1, "title": "Ship it", ... }

$ node request.js GET /tasks/99
404 Not Found
{ "error": "Task 99 not found" }
```

And the CLI still works on the **same data** — try `npm run cli -- list` after creating tasks over HTTP!

## 💡 Hints

<details><summary>Hint 1 — async handlers</summary>

The service is async, so handlers are `async (req, res) => { ... await service.x(...) ... }`.
</details>

<details><summary>Hint 2 — "Task stats not found"?</summary>

Route order (Module 18, debug 01). `/tasks/stats` must be registered before `/tasks/:id`.
</details>

<details><summary>Hint 3 — 204</summary>

`res.status(204).end()` — no `.json()`.
</details>

## ⚠️ Common mistakes

- Forgetting `express.json()` → `req.body` is `undefined`.
- Forgetting `await` → you send `{}` (an un-awaited Promise serialises to `{}`).
- Converting ids in the routes *and* in the service — `parseId` in the service is enough.
- Leaving a code path that never responds (request hangs).

## 🏋️ Extension

Count how many lines of `try/catch` boilerplate you wrote. Milestone 8 will delete all of them — keep the number for comparison.

➡️ **Next:** [Module 19](../../modules/19-express-in-depth/README.md) — then the final milestone.
