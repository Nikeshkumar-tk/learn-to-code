# Module 19 — Express in Depth

> **What you'll learn:** **middleware** (what it is, how `next()` works, why order matters), route-specific middleware and middleware factories, validation middleware, **routers**, centralised **error handling**, and how a well-structured Express app is organised — plus a first taste of automated tests.
> **Why it matters:** this is what turns "some routes in a file" into a real, maintainable API. It's also what makes unfamiliar Express codebases readable: once you see the request pipeline, everything has a place.

⏱️ About 3.5 hours · 📋 Prerequisites: Module 18

```bash
cd modules/19-express-in-depth
npm install
```

> 💡 In this module, every example starts the app, sends some requests and prints the results — **one command, no second terminal**. The helper that does this is [`demo-client.js`](demo-client.js); you understand everything in it.

---

## 1. ⭐ Middleware

```bash
node examples/01-middleware-basics.js
```

A **middleware** is a function `(req, res, next)` that runs *before* your routes. It can inspect or change `req`, send a response itself, or call `next()` to pass the request along.

```text
request → [logger] → [add requestTime] → [timer] → [express.json] → [route handler] → response
             next()        next()           next()        next()
```

> 🧠 `app.use(fn)` = "run `fn` for every request". You already used middleware: `express.json()`!

### 🧪 Experiment
Remove `next()` from the logger in `01-middleware-basics.js`. Run it. What happens to the requests? (Debug 19.1 is this bug in the wild.)

---

## 2. Order matters

```bash
node examples/02-middleware-order.js
```

Express runs things **in the order they were added** and stops at the first response. A middleware added *after* all routes only sees requests nobody answered — that's how you build a JSON 404.

---

## 3. Route-specific middleware & factories

```bash
node examples/03-route-middleware.js
```

```js
app.get("/private", requireApiKey, handler);
app.delete("/everything", requireApiKey, requireRole("admin"), handler);
```

`requireRole("admin")` is a **factory** that returns a middleware remembering `"admin"` — a closure (Module 11) and a higher-order function (Module 09) working together.

---

## 4. Validation middleware

```bash
node examples/04-validation-middleware.js
```

Check `req.body` *before* the handler, so handlers can trust their input. Respond with **400** and a helpful list of problems.

---

## 5. Routers

```bash
node examples/05-routers/main.js
```

```js
// routes/books.js
const router = Router();
router.get("/", ...);        // GET /books
router.get("/:id", ...);     // GET /books/:id
export default router;

// app.js
app.use("/books", booksRouter);
```

Router paths are **relative to the mount path** (Debug 19.4 is what happens when you forget).

---

## 6. ⭐ Centralised error handling

```bash
node examples/06-error-handling.js
```

- Route handlers just **throw** (custom errors from Module 12, with a `statusCode`).
- Express catches errors — including from `async` handlers (Express 5) — and calls the **error-handling middleware**:

```js
app.use((err, req, res, next) => {          // ⚠️ exactly FOUR parameters
  const status = err.statusCode ?? 500;
  res.status(status).json({ error: status === 500 ? "Internal server error" : err.message });
});
```

- Add it **last**. Never leak internal error details in a 500 response — log them for yourself instead.

> 📜 **Express 4 note:** older code wraps async handlers in `try { ... } catch (err) { next(err); }` because Express 4 didn't forward async errors. Recognise it; Express 5 does it for you.

---

## 7. A well-structured Express app

```bash
node examples/07-structured-app/test/books.test.js
node examples/07-structured-app/src/server.js     # try it by hand, then Ctrl + C
```

```text
07-structured-app/
├── src/
│   ├── server.js                 starts listening (the only file that knows the port)
│   ├── app.js                    builds the pipeline: logger → json → routers → 404 → errors
│   ├── routes/books-router.js    HTTP ⇄ service calls. Thin!
│   ├── services/book-service.js  the rules (no req/res — reusable, testable)
│   ├── middleware/               request-logger, not-found, error-handler
│   └── errors.js                 AppError, ValidationError, NotFoundError
└── test/books.test.js            automated tests with node:test
```

This is the same layering you learned in Module 17 — the **router** has simply replaced the CLI as the interface. **Your project will look like this.**

**Tests:** `npm test` runs `node --test`. The test file starts the app on a random port and makes assertions with `node:assert`. It's the professional version of the ✅/❌ checks you've used all along.

---

## 8. Exercises

| # | Folder | Practises |
|---|---|---|
| 19.1 | [`01-request-middleware/`](exercises/01-request-middleware/) | writing middleware, `res.on("finish")`, order |
| 19.2 | [`02-validation-middleware/`](exercises/02-validation-middleware/) | middleware factories, reusable validation |
| 19.3 | [`03-routers-and-errors/`](exercises/03-routers-and-errors/) | ⭐ refactor to routers + error handler |

```bash
node exercises/01-request-middleware/check.js
node exercises/02-validation-middleware/check.js
node exercises/03-routers-and-errors/check.js
```

<details><summary>💡 19.1</summary>

Three `app.use(...)` calls before the routes. Blocked requests must still be logged → which two must come before `blockBots`?
</details>
<details><summary>💡 19.2 hint 1</summary>

Write a helper `problemWith(field, value, rule)` that returns a message or `null`. Then `map` over `Object.entries(schema)` and `filter` out the `null`s.
</details>
<details><summary>💡 19.2 hint 2</summary>

Check "missing" first. If a field is missing and not required, there's no problem — skip the other checks.
</details>
<details><summary>💡 19.3</summary>

Move one route at a time into the router and run the check after each move. Inside the router, paths become `"/"` and `"/:id"`.
</details>

**Common mistakes:** middleware that never calls `next()`; an error handler with three parameters; error handler added before the routes; router paths that repeat the mount path; sending a response without `return` and then continuing.

Solutions: [`solutions/`](solutions/)

---

## 9. Debug challenges 🐛

Fix `app.js` (or its routes), then re-run `demo.js`.

| Folder | Symptom |
|---|---|
| [`debug/01-stuck-requests/`](debug/01-stuck-requests/) | Requests with the *right* key hang forever |
| [`debug/02-html-errors/`](debug/02-html-errors/) | An HTML error page instead of JSON |
| [`debug/03-headers-sent/`](debug/03-headers-sent/) | `Cannot set headers after they are sent` — and bad data saved |
| [`debug/04-router-paths/`](debug/04-router-paths/) | Every book route is a 404 |

```bash
node debug/01-stuck-requests/demo.js
```

---

## 10. ✅ Self-check

- [ ] What is middleware? What three things can it do with a request?
- [ ] What happens if a middleware neither responds nor calls `next()`?
- [ ] Why must the 404 handler and the error handler be added last?
- [ ] How does Express know a middleware is an error handler?
- [ ] Why should a 500 response hide the error's details?
- [ ] What goes in a router vs a service?
- [ ] **Recognise it:** `app.use(cors()); app.use(helmet()); app.use("/api/v1/users", authenticate, usersRouter);` — what's middleware, what's a factory, what's a router?

## 🤖 Using Claude

```text
Here's the app.js of an Express project I'm reading: [paste].
Describe the request pipeline in order — what each app.use does to a request —
as a numbered list. Don't suggest changes.
```

---

## 🛠️ Project time!

Go to **[Project Milestone 8 — The complete API](../../project/milestones/M8-complete-api.md)**. This is the finish line. 🏁
