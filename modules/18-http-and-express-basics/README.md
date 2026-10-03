# Module 18 — HTTP & Express Basics

> **What you'll learn:** how HTTP works (requests, responses, methods, status codes, JSON), how to build a server with plain Node — and then how **Express** takes care of the chores: routes, route params, query params, request bodies and responses.
> **Why it matters:** this is the backend. Everything so far was preparation for this moment: your functions, arrays, objects, modules, async code and error handling now answer requests from the outside world.

⏱️ About 3.5 hours · 📋 Prerequisites: Modules 01–17 (really!)

```bash
cd modules/18-http-and-express-basics
npm install          # installs Express into this module's node_modules/
```

> 🖥️ **You'll need two terminals** for the server examples: one runs the server (it keeps running), the other sends requests. In VS Code, click the **+** or "split" icon in the terminal panel. Stop a server with **Ctrl + C**.

---

## 1. HTTP in five minutes

When an app talks to a backend, it sends a **request** and gets a **response**. That's HTTP.

```text
REQUEST                                    RESPONSE
POST /books HTTP/1.1          ──────▶      HTTP/1.1 201 Created
Content-Type: application/json             Content-Type: application/json

{ "title": "Dune" }           ◀──────      { "id": 3, "title": "Dune" }
```

| Part | Example | Meaning |
|---|---|---|
| **Method** | `GET`, `POST`, `PUT`, `PATCH`, `DELETE` | what to *do* |
| **Path** | `/books/3` | which *thing* |
| **Query** | `?author=tolkien&sort=year` | options for the request |
| **Headers** | `Content-Type: application/json` | metadata ("the body is JSON") |
| **Body** | `{ "title": "Dune" }` | data sent along (POST/PUT/PATCH) |
| **Status code** | `200`, `201`, `400`, `404`, `500` | what *happened* |

**JSON** is the language almost every API speaks — you already know it from Module 16.

---

## 2. A server with plain Node

```bash
node examples/01-http-server.js
```

In a second terminal:

```bash
node request.js GET /hello
```

Also open <http://localhost:3000/hello> in your browser.

> 🧠 A server is a program that **waits**. Every time a request arrives, Node calls your function with `req` (what was asked) and `res` (what you'll send back). One request → one call → one response.

`request.js` in this folder is a tiny tool to send requests (like `curl`). Read it — you understand every line.

---

## 3. Routing by hand — feel the pain

```bash
node examples/02-http-routing-by-hand.js
```

```bash
node request.js GET /books
node request.js GET /books/1
node request.js POST /books title="Dune" author="Frank Herbert"
node request.js GET /nope
```

Read the code. Matching paths, parsing ids, reading the body in pieces, `JSON.parse`, headers, `JSON.stringify`, 404s... **These chores are what Express does for you.** Now Express won't feel like magic.

---

## 4. Hello, Express

```bash
node examples/03-express-hello.js
```

```js
const app = express();
app.get("/about", (req, res) => {        // METHOD + PATH + HANDLER
  res.json({ name: "Book API" });        // send JSON (status 200 by default)
});
app.listen(3000);
```

> 🧠 `app.get(path, handler)` is a **higher-order function** (Module 09). You give Express a callback; Express calls it with `req` and `res` whenever a matching request arrives.

---

## 5. Methods = actions

```bash
node examples/04-routes-and-methods.js
```

| Method | Typical meaning | Example |
|---|---|---|
| GET | read | `GET /books`, `GET /books/2` |
| POST | create | `POST /books` |
| PUT / PATCH | replace / partially update | `PATCH /books/2` |
| DELETE | delete | `DELETE /books/2` |

The URL names the **resource** (books); the method names the **action**. That's the heart of a REST API.

---

## 6. Route parameters — `req.params`

```bash
node examples/05-route-params.js
```

```js
app.get("/books/:id", (req, res) => {
  const id = Number(req.params.id);   // ⚠️ params are always strings
  ...
});
```

Notice the **early returns** for 400 and 404 (Modules 03 and 05 are paying off).

---

## 7. Query parameters — `req.query`

```bash
node examples/06-query-params.js
```

`/books?author=tolkien&sort=year` → `req.query` is `{ author: "tolkien", sort: "year" }` — you wrote this parser yourself in Exercise 08.5. Filtering is just `filter`, sorting is `sort` (Module 10).

| Use **params** for… | Use **query** for… |
|---|---|
| identifying one resource: `/books/2` | filtering/sorting/paging a list: `/books?author=x` |

---

## 8. The request body — `req.body`

```bash
node examples/07-request-body.js
```

```bash
node request.js POST /books title="Dune" author="herbert" year=1965
node request.js POST /books author="nobody"
```

`app.use(express.json())` parses JSON bodies into `req.body`. Without it, `req.body` is `undefined` (Debug 18.3). Validate input and respond **400** if it's wrong; respond **201** with the new resource on success.

---

## 9. Status codes

```bash
node examples/08-status-codes.js
```

| Code | Use when |
|---|---|
| **200** OK | success, here's data |
| **201** Created | a POST created something |
| **204** No Content | success, nothing to return (often DELETE) |
| **400** Bad Request | the client sent invalid data |
| **404** Not Found | that resource doesn't exist |
| **500** Internal Server Error | our code broke |

`res.status(404).json({ error: "..." })` — `status()` returns `res`, so you can chain.

---

## 10. Splitting app and server

```bash
node examples/09-app-and-server/test-it.js
```

```text
app.js     — creates the app and its routes, exports it
server.js  — imports the app and calls listen(port)
test-it.js — imports the app, starts it on a random port, sends requests with fetch, stops it
```

Every exercise (and your project) uses this split, so `check.js` can test your app automatically.

---

## 11. Exercises

Each exercise has `app.js` (you write this), `server.js` (run it to try things by hand) and `check.js` (automatic checks).

| # | Folder | Practises |
|---|---|---|
| 18.1 | [`01-hello-api/`](exercises/01-hello-api/) | routes, JSON, params, query, 400 |
| 18.2 | [`02-quotes-api/`](exercises/02-quotes-api/) | filtering, route order, 400 vs 404 |
| 18.3 | [`03-notes-crud/`](exercises/03-notes-crud/) | ⭐ full CRUD with bodies and status codes |

```bash
node exercises/01-hello-api/check.js
node exercises/02-quotes-api/check.js
node exercises/03-notes-crud/check.js
```

To try by hand: `node exercises/03-notes-crud/server.js` in one terminal, then e.g. `node request.js POST /notes text="Buy milk"` in the other.

<details><summary>💡 18.1 — /add</summary>

`req.query.a` is a string or `undefined`. `Number(undefined)` is `NaN`. Check with `Number.isNaN`.
</details>
<details><summary>💡 18.2 — random</summary>

`Math.floor(Math.random() * quotes.length)` gives a random index. And mind the route order!
</details>
<details><summary>💡 18.3 hint 1</summary>

Start with GET and POST only. Run the checks. Add PUT, then DELETE. Small steps!
</details>
<details><summary>💡 18.3 hint 2</summary>

For 204, use `res.status(204).end()` — no body.
</details>

**Common mistakes:** forgetting `express.json()`; comparing `req.params.id` (string) with a number; forgetting `return` before an early response (then the code continues and tries to respond twice); a branch that never responds; putting `/things/:id` before `/things/special`.

Solutions: [`solutions/`](solutions/)

---

## 12. Debug challenges 🐛

Each folder has a buggy `app.js` and a `demo.js` that runs requests against it. Fix `app.js`, re-run `demo.js`.

| Folder | Symptom |
|---|---|
| [`debug/01-route-order/`](debug/01-route-order/) | `/tasks/stats` → "Task stats not found" |
| [`debug/02-always-404/`](debug/02-always-404/) | Every user is "not found" |
| [`debug/03-no-body/`](debug/03-no-body/) | POST returns a 500 HTML error page |
| [`debug/04-hanging-request/`](debug/04-hanging-request/) | Some requests never get an answer |

```bash
node debug/01-route-order/demo.js
```

> 🔍 **Technique — log the request:** add `console.log(req.method, req.path, req.params, req.query, req.body)` as the first line of a handler. You'll immediately see what Express actually gave you.

---

## 13. ✅ Self-check

- [ ] Name the parts of an HTTP request and of a response.
- [ ] What's the difference between `req.params`, `req.query` and `req.body`?
- [ ] Why is `Number(req.params.id)` necessary?
- [ ] When do you return 400? 404? 201? 204?
- [ ] What does `express.json()` do, and what happens without it?
- [ ] What chores does Express do that you had to do by hand with `node:http`?
- [ ] Why must every code path in a handler send exactly one response?

## 🤖 Using Claude

```text
Here is my Express route handler: [paste].
List the requests (method, path, body) I should send to test it properly,
including edge cases. Don't tell me if it handles them — I'll find out.
```

---

## 🛠️ Project time!

Go to **[Project Milestone 7 — An HTTP API with Express](../../project/milestones/M7-express-api.md)**.

➡️ **Then:** [Module 19 — Express in Depth](../19-express-in-depth/README.md)
