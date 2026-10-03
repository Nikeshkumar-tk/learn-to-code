# Module 14 — Asynchronous JavaScript

> **What you'll learn:** how to work with operations that finish *later* — callbacks, **promises**, and **`async` / `await`** — plus error handling, running things in parallel, and the classic mistakes.
> **Why it matters:** reading files, querying databases and handling HTTP requests are all asynchronous in Node. Every Express handler that touches data will use `await`.

⏱️ About 2.5 hours · 📋 Prerequisites: Modules 09 (callbacks), 12 (errors), 13 (modules)

```bash
cd modules/14-async-javascript
```

> ℹ️ **Scope note:** this module teaches you to *use* async code confidently. *How* Node schedules async work internally (the "event loop") is deliberately left for a later, advanced course. You don't need it to write correct apps.

---

## 1. Why async?

```bash
node examples/01-why-async.js
```

Slow operations (files, databases, networks) would freeze your program if Node waited for them. Instead, Node **starts** them, **carries on**, and **runs your code for the result** when it's ready.

> 🧠 **Mental model — the restaurant:** you order (start the work), get a buzzer, sit down and chat (carry on), and the buzzer goes off when the food is ready (the result arrives).

---

## 2. Callbacks (the old way)

```bash
node examples/02-async-callbacks.js
```

Pass a function to be called when the work is done: `callback(error, result)`. Works, but each dependent step nests deeper ("callback hell"). Recognise it in older code.

---

## 3. Promises

```bash
node examples/03-promises.js
node examples/04-creating-promises.js
```

A **promise** is an object for a future value — the buzzer. States: **pending → fulfilled** (has a value) **or rejected** (has an error).

- `.then(fn)` — run `fn` with the value
- `.catch(fn)` — run `fn` with the error
- `.finally(fn)` — run `fn` either way

---

## 4. ⭐ `async` / `await`

```bash
node examples/05-async-await.js
```

```js
async function showSummary(id) {
  const user = await getUser(id);          // pause here until the user arrives
  const orders = await getOrders(user.id); // then pause here
  ...
}
```

- `await` pauses **only this async function** until the promise settles, then gives you its value.
- An `async` function **always returns a promise** — so its caller needs `await` too.
- In ES modules you can `await` at the top level of a file.

### 🔮 Predict
```js
async function five() { return 5; }
console.log(five());
console.log(await five());
```

---

## 5. Errors with async/await

```bash
node examples/06-async-errors.js
```

A rejected promise + `await` = a thrown error. So you use the same `try` / `catch` / `finally` from Module 12.

> ⚠️ If a promise rejects and *nobody* handles it, Node crashes the program ("unhandled rejection"). See Debug 14.2.

---

## 6. Sequential vs parallel

```bash
node examples/07-sequential-vs-parallel.js
```

| Pattern | When |
|---|---|
| `await a(); await b();` | `b` needs `a`'s result |
| `await Promise.all([a(), b()])` | `a` and `b` are independent — start both, wait for both |

---

## 7. Common mistakes

```bash
node examples/08-common-mistakes.js
```

1. Forgetting `await` → you get `Promise { <pending> }` instead of the value.
2. `forEach(async ...)` → `forEach` doesn't wait. Use `for...of` or `Promise.all`.
3. `await` in a non-`async` function → `SyntaxError`.

---

## 8. Exercises

| # | File | Practises |
|---|---|---|
| 14.1 | [`01-wait-and-delay.js`](exercises/01-wait-and-delay.js) | creating a promise, async functions |
| 14.2 | [`02-then-to-await.js`](exercises/02-then-to-await.js) | translating `.then` chains to `await` |
| 14.3 | [`03-fake-database.js`](exercises/03-fake-database.js) | awaiting dependent calls, try/catch |
| 14.4 | [`04-parallel.js`](exercises/04-parallel.js) | `Promise.all` |
| 14.5 | [`05-retry.js`](exercises/05-retry.js) | loops + await + errors together |

<details><summary>💡 14.1 — wait</summary>

`return new Promise((resolve) => setTimeout(resolve, ms));` — `setTimeout` calls `resolve` for you after `ms`.
</details>
<details><summary>💡 14.2</summary>

Each `.then((x) => ...)` becomes `const x = await ...;`. The `.catch` becomes a `try/catch` around the awaits.
</details>
<details><summary>💡 14.3</summary>

Put both awaits inside one `try`. In `catch`, return `error.message`.
</details>
<details><summary>💡 14.4</summary>

`const [user, tasks, notifications] = await Promise.all([...])` — call the three functions *inside* the array so they all start immediately.
</details>
<details><summary>💡 14.5</summary>

A `for` loop over attempts. Inside: `try { return await fn(); } catch (error) { remember it }`. After the loop: `throw` the remembered error.
</details>

**Common mistakes:** missing `await`; `await` inside `forEach`; catching an error but then continuing as if the value exists; awaiting independent operations one by one.

Solutions: [`solutions/`](solutions/)

---

## 9. Debug challenges 🐛

| File | Symptom |
|---|---|
| [`debug/01-missing-await.js`](debug/01-missing-await.js) | `Welcome back, undefined!` |
| [`debug/02-crash-on-failure.js`](debug/02-crash-on-failure.js) | Whole program crashes when email fails |
| [`debug/03-foreach-total.js`](debug/03-foreach-total.js) | Total is `$0` |
| [`debug/04-slow-page.js`](debug/04-slow-page.js) | Works, but 3× slower than it should be |

> 🔍 **Technique:** when an async value looks wrong, `console.log` it. If you see `Promise { <pending> }`, you forgot an `await` somewhere.

---

## 10. ✅ Self-check

- [ ] Why doesn't Node just wait for slow operations?
- [ ] What are the three states of a promise?
- [ ] What does `await` do? What does an `async` function always return?
- [ ] How do you handle errors with `await`?
- [ ] When would you use `Promise.all`?
- [ ] Why doesn't `forEach` work with `await`?
- [ ] **Recognise it:** `app.get("/tasks", async (req, res) => { const tasks = await repo.findAll(); res.json(tasks); });`

## 🤖 Using Claude

```text
Here's an async function I wrote: [paste].
Without fixing it, tell me: is there any place where I forgot to await,
or where errors could go unhandled? Just point to the line numbers.
```

➡️ **Next:** [Module 15 — Node.js & npm](../15-node-and-npm/README.md)
