# Module 11 — Scope & Closures

> **What you'll learn:** where variables are visible (global, function and block scope), how JavaScript looks names up (lexical scope), shadowing, and **closures** — functions that remember the variables around them.
> **Why it matters:** half of all "why is this undefined?" bugs are scope bugs. And closures are behind factories, private state, ID generators, middleware configuration, and much of Express.

⏱️ About 2.5 hours · 📋 Prerequisites: Modules 05, 09

```bash
cd modules/11-scope-and-closures
```

---

## 1. Global & function scope

```bash
node examples/01-global-and-function-scope.js
```

**Scope** = the region of code where a variable exists. Variables declared inside a function exist only inside it — and a **fresh set** is created on every call.

---

## 2. Block scope

```bash
node examples/02-block-scope.js
```

`let` and `const` live inside the nearest `{ }`. Need a value after an `if`? Declare it **before** the `if`.

You'll still meet `var` in older code. It ignores blocks. Recognise it; don't write it.

### 🧪 Experiment
Uncomment the two `console.log` lines marked ❌, one at a time. Read each error.

---

## 3. Lexical scope — inner sees outer

```bash
node examples/03-lexical-scope.js
```

> 🧠 **Rule:** a function can see variables from where it was **written**: its own, then the enclosing function's, then outward to the file. Never inward.

---

## 4. Shadowing

```bash
node examples/04-shadowing.js
```

An inner variable with the same name hides the outer one. Parameters count! A missing argument is `undefined` — it doesn't "fall through" to an outer variable with the same name.

---

## 5. ⭐ Closures

```bash
node examples/05-closures.js
```

```js
function createCounter() {
  let count = 0;           // ← created fresh on every createCounter() call
  return () => ++count;    // ← this function keeps access to THAT count
}
```

> 🧠 **Mental model — the backpack:** when a function is created, it packs a backpack with the variables around it. Wherever it goes, it carries the backpack. Each `createCounter()` call packs a new backpack.

### 🔮 Predict
```js
const a = createCounter();
const b = createCounter();
a(); a(); b();
console.log(a(), b());
```

---

## 6. Private state

```bash
node examples/06-private-state.js
```

Variables in a closure can only be touched by the functions you return. That's real privacy — `account.balance` can't be changed from outside.

---

## 7. Closures in practice

```bash
node examples/07-closures-in-practice.js
```

ID generators, configured loggers, caches. You'll see this shape in Express too:

```js
function requireRole(role) {          // configure...
  return (req, res, next) => {        // ...returns middleware that remembers `role`
    if (req.user.role !== role) return res.sendStatus(403);
    next();
  };
}
app.delete("/tasks/:id", requireRole("admin"), handler);
```

---

## 8. Loops & closures

```bash
node examples/08-loops-and-closures.js
```

With `let`, every loop round has its own variable. With `var`, they all share one. Another reason for `let`/`const`.

---

## 9. Exercises

| # | File | Practises |
|---|---|---|
| 11.1 | [`01-predict-scope.js`](exercises/01-predict-scope.js) | **reading** code: predicting scope behaviour |
| 11.2 | [`02-counter.js`](exercises/02-counter.js) | closure state, returning an object of functions |
| 11.3 | [`03-id-generator.js`](exercises/03-id-generator.js) | closures (used in the project!) |
| 11.4 | [`04-once-and-memoize.js`](exercises/04-once-and-memoize.js) | closures wrapping other functions |
| 11.5 | [`05-shopping-cart.js`](exercises/05-shopping-cart.js) | private data + array methods |

<details><summary>💡 11.2</summary>

`let count = start;` inside `createCounter`, then `return { increment() {...}, ... }`. `reset` can use `start` — it's in the closure too.
</details>
<details><summary>💡 11.3</summary>

Return the id built from the *current* number, but increase the number before returning — store the id in a `const` first.
</details>
<details><summary>💡 11.4 — once</summary>

You need two remembered variables: "have I been called?" and "what was the result?".
</details>
<details><summary>💡 11.5 — getItems copy</summary>

`[...items]` copies the array, but the item objects are shared. `items.map((item) => ({ ...item }))` copies both levels.
</details>

**Common mistakes:** declaring the state variable *outside* the factory (shared by everyone); using a variable after its block ended; parameter shadowing an outer variable.

Solutions: [`solutions/`](solutions/)

---

## 10. Debug challenges 🐛

| File | Symptom |
|---|---|
| [`debug/01-block-scope.js`](debug/01-block-scope.js) | `ReferenceError: discount is not defined` |
| [`debug/02-shared-counter.js`](debug/02-shared-counter.js) | Button clicks start at 3 |
| [`debug/03-shadowed-config.js`](debug/03-shadowed-config.js) | Prices are `NaN` |
| [`debug/04-var-in-loop.js`](debug/04-var-in-loop.js) | Every button says `Clicked undefined` |

> 🔍 **Technique — ask "which variable?":** when a value is wrong, find *every* declaration with that name (Ctrl+F). Which one does this line actually use? Draw the scope boxes if you need to.

---

## 11. 🏋️ Challenge — Rate limiter

Write `createRateLimiter(maxCalls)` returning a function `tryCall()` that returns `true` for the first `maxCalls` calls and `false` after that, plus a `reset()` method. (Real APIs use this idea to stop abuse — with time windows added.)

---

## 12. ✅ Self-check

- [ ] What's the difference between function scope and block scope?
- [ ] Can an inner function see an outer variable? The reverse?
- [ ] What is a closure, in one sentence?
- [ ] Why do two counters from `createCounter()` not share their count?
- [ ] Why do we prefer `let` over `var` in loops?
- [ ] **Recognise it:** `const limiter = rateLimit({ max: 100 }); app.use(limiter);` — where might a closure be hiding?

## 🤖 Using Claude

```text
Here is my mental model of closures: [explain in your own words].
Give me one small code snippet that would test whether my model is right.
Don't tell me the output — I'll predict it and run it.
```

➡️ **Next:** [Module 12 — Errors & Debugging](../12-errors-and-debugging/README.md)
