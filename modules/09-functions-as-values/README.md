# Module 09 — Functions as Values

> **What you'll learn:** the idea that unlocks modern JavaScript — **functions are values**. You'll pass functions into functions (callbacks), return functions from functions (factories), compose functions, and build your own **higher-order functions**.
> **Why it matters:** `map`, `filter`, `reduce`, Express route handlers, middleware, event handlers, `.then()`, array sorting — all of them are "give a function to another function". Once this clicks, a huge amount of code becomes readable.

⏱️ About 3 hours · 📋 Prerequisites: Modules 05 (functions) and 06 (arrays) especially

```bash
cd modules/09-functions-as-values
```

> 🪜 This module climbs one step at a time. Don't skip ahead — each step depends on the previous one.

---

## Step 1 — Functions are values

```bash
node examples/01-functions-are-values.js
```

A function can be stored in a variable, an array or an object, just like `42` or `"hi"`.

> 🧠 **The single most important distinction in this module:**
> - `sayHi` → **the function itself** (a value you can hand to someone)
> - `sayHi()` → **call it now** and use the result

### 🔮 Predict
```js
const f = () => 5;
console.log(typeof f, typeof f());
```

---

## Step 2 — Passing functions as arguments

```bash
node examples/02-passing-functions.js
```

`announce(message, formatter)` doesn't know *how* to format — the caller decides by passing a function.

### 🧪 Experiment
Write a `robot` formatter that turns `"Hello team"` into `"HELLO-TEAM"` and pass it to `announce`.

---

## Step 3 — Callbacks

```bash
node examples/03-callbacks.js
```

A **callback** is a function you give to another function, for it to call later. The receiving function decides **when** to call it and **what arguments** to pass.

> 🧠 When reading `app.get("/tasks", (req, res) => {...})`: Express is the one that *calls* your arrow function, and Express decides to give it `req` and `res`.

---

## Step 4 — Building our own `forEach`

```bash
node examples/04-building-our-own-foreach.js
```

The loop lives in one place; callers say *what to do with each item*. Then we see the built-in `forEach` is the same thing.

---

## Step 5 — ⭐ From duplicated loops to a higher-order function

```bash
node examples/05-from-duplication-to-hof.js
```

This is *how* you invent a higher-order function:

```text
1. Notice two loops that are almost the same.
2. Find the ONE part that differs.
3. Turn that part into a function parameter.
```

> 💡 **Jargon — higher-order function (HOF):** a function that takes a function as an argument, or returns one. That's it. No magic.

---

## Step 6 — Functions that return functions

```bash
node examples/06-returning-functions.js
```

`makeMultiplier(2)` *returns* a new function. You configure once, then use many times. (How the returned function "remembers" `factor` is a **closure** — Module 11.)

### 🔮 Predict
```js
const add = (a) => (b) => a + b;
console.log(add(2)(3));
const addFive = add(5);
console.log(addFive(10));
```

---

## Step 7 — Composition

```bash
node examples/07-composition.js
```

Small single-purpose functions, chained so each output feeds the next input. `pipe(trim, lower, dashes)` reads like a recipe.

---

## Step 8 — A lookup table of functions

```bash
node examples/08-lookup-table-of-functions.js
```

"Pick behaviour by name" — the core idea behind routers (URL → handler function).

---

## Exercises

| # | File | Practises |
|---|---|---|
| 09.1 | [`01-pass-and-call.js`](exercises/01-pass-and-call.js) | calling a function you were given |
| 09.2 | [`02-each-and-count.js`](exercises/02-each-and-count.js) | writing HOFs, using them with arrays of objects |
| 09.3 | [`03-my-map-filter-find.js`](exercises/03-my-map-filter-find.js) | ⭐ build map / filter / find yourself |
| 09.4 | [`04-function-factories.js`](exercises/04-function-factories.js) | returning functions |
| 09.5 | [`05-pipe-and-dispatch.js`](exercises/05-pipe-and-dispatch.js) | composition, functions in objects |

<details><summary>💡 09.1 — applyTwice</summary>

Call `fn(value)`, then call `fn` again on what you got back.
</details>
<details><summary>💡 09.2 — countWhere using each</summary>

Create `let count = 0`, then call `each(list, (item) => { ... })`. Inside, call `test(item)`.
</details>
<details><summary>💡 09.3 hint 1</summary>

All three are "start empty, loop, return". The difference is what you do with the callback's answer.
</details>
<details><summary>💡 09.3 hint 2</summary>

In `myFilter`, push the **original item**, not `test(item)` (which is just true/false).
</details>
<details><summary>💡 09.4</summary>

`function makeDiscount(percent) { return (price) => ...; }` — the outer function returns the inner one *without calling it*.
</details>
<details><summary>💡 09.5 — pipe</summary>

Exactly the accumulator pattern: `let result = input; for (const fn of fns) result = fn(result);`
</details>

**Common mistakes:** passing `fn()` instead of `fn`; forgetting `return` in an arrow with `{ }`; forgetting to pass arguments when calling the callback; a factory that returns a value instead of a function.

Solutions: [`solutions/`](solutions/)

---

## Debug challenges 🐛

| File | Symptom |
|---|---|
| [`debug/01-not-a-function.js`](debug/01-not-a-function.js) | `TypeError: callback is not a function` |
| [`debug/02-undefined-everywhere.js`](debug/02-undefined-everywhere.js) | `[ undefined, undefined ]` |
| [`debug/03-silent-callback.js`](debug/03-silent-callback.js) | `Cannot read properties of undefined` inside the callback |
| [`debug/04-factory.js`](debug/04-factory.js) | `addGst is not a function` |

> 🔍 **Technique — check what you actually have:** `console.log(typeof callback, callback)` at the top of the receiving function. "is not a function" errors always mean *the thing you tried to call wasn't a function* — go find out what it was.

---

## 🏋️ Challenge — `once` and `times`

1. `once(fn)` returns a function that calls `fn` only the first time; later calls return the first result again. (You'll need a variable outside the returned function. Module 11 will explain why this works.)
2. `memoLog(fn)` returns a function that logs its arguments and result each time it's called, then returns the result.

---

## ✅ Self-check

- [ ] Explain the difference between `fn` and `fn()` to a friend.
- [ ] What's a callback? Who decides what arguments it receives?
- [ ] What makes a function "higher-order"?
- [ ] Describe the 3-step recipe for turning duplicated loops into a HOF.
- [ ] Write `const add = (a) => (b) => a + b;` from memory and explain `add(2)(3)`.
- [ ] **Recognise it:** in `app.use((req, res, next) => { ... })` — what's the HOF and what's the callback?

## 🤖 Using Claude

```text
Explain this code like a mentor: [paste code using callbacks/HOFs].
For each function, tell me: who defines it, who calls it, and with what arguments.
Don't rewrite it.
```

➡️ **Next:** [Module 10 — Array Methods](../10-array-methods/README.md)
