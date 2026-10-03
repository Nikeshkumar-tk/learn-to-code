# Module 10 — Array Methods

> **What you'll learn:** the built-in higher-order array methods — `forEach`, `map`, `filter`, `find`, `findIndex`, `some`, `every`, `includes`, `sort`, `reduce` — and how to chain them.
> **Why it matters:** this is how modern JavaScript processes data. Your task API will use `find` to get a task by id, `filter` to search, `map` to update, and `reduce` for statistics.

⏱️ About 4 hours (split over two sessions) · 📋 Prerequisites: **Module 09** (you built `myMap`, `myFilter`, `myFind` there — these are the same ideas)

```bash
cd modules/10-array-methods
```

> 🧠 **The big idea:** every method here is a loop you've *already written by hand*. The method holds the loop; your callback holds the decision. When you're unsure what a method does, write the loop version — it'll tell you.

---

## 1. `forEach` — do something for each item

```bash
node examples/01-foreach.js
```

Returns `undefined`. Only for side effects (printing, saving). `for...of` does the same job.

---

## 2. ⭐ `map` — transform every item

```bash
node examples/02-map.js
```

```text
[ 🍎, 🍌, 🍒 ].map(slice)  →  [ 🍎🔪, 🍌🔪, 🍒🔪 ]     same length, each item transformed
```

**Ask:** "I have a list of X; do I want a list of Y, one for each X?" → `map`.

### 🔮 Predict
```js
[1, 2, 3].map((n) => n * n)
["a", "b"].map((s, i) => s + i)
[{ id: 1 }].map((o) => o.id)
[1, 2].map((n) => { n * 2 })
```
<details><summary>Answers</summary>

`[1, 4, 9]` · `["a0", "b1"]` · `[1]` · `[undefined, undefined]` (braces without `return`!)
</details>

### 🧪 Experiment
In `02-map.js`, change `({ ...task, completed: true })` to `{ ...task, completed: true }` (no parentheses). Run. Why does it break? (JavaScript reads `{` after `=>` as the start of a function body.)

---

## 3. ⭐ `filter` — keep some items

```bash
node examples/03-filter.js
```

```text
[ 🍎, 🍌, 🍒, 🥦 ].filter(isFruit)  →  [ 🍎, 🍌, 🍒 ]     same or fewer, items unchanged
```

The callback answers **yes/no** for each item. Note how *removing* an item without mutation is just "keep everything except it".

---

## 4. `find` & `findIndex` — one item

```bash
node examples/04-find-and-findindex.js
```

- `find` → the item, or `undefined`. **Always handle the `undefined` case** (→ a 404 in your API!)
- `filter` → always an array, even with one match.

---

## 5. `some`, `every`, `includes` — yes/no questions

```bash
node examples/05-some-every-includes.js
```

`includes` uses `===`, so it works for strings/numbers but not for finding objects by contents — use `some` for that.

---

## 6. `sort` — reorder (carefully)

```bash
node examples/06-sort.js
```

Two traps:
1. Without a compare function, numbers sort as text: `[10, 9, 100].sort()` → `[10, 100, 9]`.
2. `sort` **mutates**. Sort a copy: `[...list].sort(...)`.

Compare function: return negative → `a` first; positive → `b` first. `(a, b) => a - b` is ascending.

---

## 7. ⭐ `reduce` — many values into one

```bash
node examples/07-reduce.js
```

```js
array.reduce((accumulator, item) => newAccumulator, initialValue)
```

It's *exactly* the accumulator pattern from Module 04:

| Loop | reduce |
|---|---|
| `let sum = 0;` | `..., 0)` — the initial value |
| `for (const price of prices)` | reduce loops for you |
| `sum = sum + price;` | `(sum, price) => sum + price` — return the new accumulator |
| use `sum` after | the return value of `reduce` |

Run the example and watch the step-by-step trace. **Always return the accumulator. Always pass an initial value.**

### 🧪 Experiment
Remove the `0` at the end of the first reduce. Does it still work? Now try it on an empty array `[]`.

---

## 8. Chaining

```bash
node examples/08-chaining.js
```

`filter → map → reduce` reads like a recipe. To debug a chain, **split it into variables and log each step**.

---

## 9. Choosing the right method

```bash
node examples/09-choosing-a-method.js
```

| I want to end up with… | Method |
|---|---|
| same-length array, transformed | `map` |
| fewer items | `filter` |
| one item | `find` |
| a position | `findIndex` |
| true/false — any? all? contains? | `some` / `every` / `includes` |
| same items, new order | `sort` (on a copy) |
| a single value of any kind | `reduce` |
| nothing, just doing something | `forEach` / `for...of` |

---

## 10. Exercises

| # | File | Practises |
|---|---|---|
| 10.1 | [`01-map.js`](exercises/01-map.js) | map, returning objects |
| 10.2 | [`02-filter-find.js`](exercises/02-filter-find.js) | filter, find, findIndex |
| 10.3 | [`03-some-every-includes.js`](exercises/03-some-every-includes.js) | boolean questions, combining methods |
| 10.4 | [`04-sort.js`](exercises/04-sort.js) | compare functions, tie-breaking, no mutation |
| 10.5 | [`05-reduce.js`](exercises/05-reduce.js) | ⭐ reduce into numbers, strings, objects |
| 10.6 | [`06-order-report.js`](exercises/06-order-report.js) | real-world chaining |
| 10.7 | [`07-rewrite-loops.js`](exercises/07-rewrite-loops.js) | recognising which method a loop *is* |

<details><summary>💡 10.1 — initials</summary>

Inside the callback: split the name on `" "`, take `[0]` of each part. Callbacks can have `{ }` bodies with several lines — just `return` at the end.
</details>
<details><summary>💡 10.4 — tie-breaking</summary>

Compute the priority difference. If it's not `0`, return it. If it is `0`, return the title comparison.
</details>
<details><summary>💡 10.5 hint 1</summary>

Before writing any reduce, answer: *what's the initial value?* (`0`? `""`? `{}`?) It should look like the final answer for an empty list.
</details>
<details><summary>💡 10.5 hint 2 — groupByStatus</summary>

If `groups[task.status]` doesn't exist yet, create an empty array there first. Then push the title. Then **return groups**.
</details>
<details><summary>💡 10.6 — bestCustomer</summary>

Step 1: reduce paid orders into `{ Ana: 160, Cy: 200 }`. Step 2: `Object.entries(...)` gives `[["Ana", 160], ["Cy", 200]]` — find the entry with the biggest second value.
</details>
<details><summary>💡 10.7</summary>

Look at each loop: Does it push every item transformed? (map) Only some? (filter) Return true early? (some) Add into a total? (reduce)
</details>

**Common mistakes:** using `forEach` and expecting a returned array; `filter` when you wanted `find`; forgetting the initial value in `reduce`; forgetting to `return` the accumulator; `=` instead of `===` inside callbacks; sorting the original.

Solutions: [`solutions/`](solutions/)

---

## 11. Debug challenges 🐛

| File | Symptom |
|---|---|
| [`debug/01-sort-numbers.js`](debug/01-sort-numbers.js) | Leaderboard order is nonsense |
| [`debug/02-foreach-result.js`](debug/02-foreach-result.js) | `Cannot read properties of undefined (reading 'map')` |
| [`debug/03-reduce-total.js`](debug/03-reduce-total.js) | Total is `"[object Object]530"` |
| [`debug/04-everything-is-high.js`](debug/04-everything-is-high.js) | Filter returns everything — and changes the data! |
| [`debug/05-find-vs-filter.js`](debug/05-find-vs-filter.js) | Title is `undefined` |

> 🔍 **Technique — log inside the callback:** `list.filter((t) => { console.log(t); return t.done; })`. You'll see exactly what each call receives and decides.

---

## 12. 🏋️ Challenge

Implement `myReduce(list, reducer, initialValue)` with a plain loop, then rewrite `myMap` and `myFilter` from Module 09 **using only `myReduce`**. (This proves reduce can express any of the others.)

---

## 13. ✅ Self-check

- [ ] For each method, say what it *returns* (array? item? boolean? anything?).
- [ ] When would you use `find` instead of `filter`?
- [ ] Why does `[10, 9, 100].sort()` give a strange order? How do you fix it?
- [ ] Explain `reduce` using the words "accumulator" and "initial value".
- [ ] Why wrap an object in `( )` when returning it from an arrow function?
- [ ] **Recognise it:** `const task = tasks.find((t) => t.id === Number(req.params.id)); if (!task) return res.sendStatus(404);`

## 🤖 Using Claude

```text
I wrote this with a for loop: [paste].
Which array method(s) would express this more clearly? Just name them and say why —
I'll do the rewrite myself.
```

---

## 🛠️ Project time!

Go to **[Project Milestone 2 — Working with tasks](../../project/milestones/M2-working-with-tasks.md)**. You'll use `find`, `filter`, `map` and `reduce` on real task data.

➡️ **Then:** [Module 11 — Scope & Closures](../11-scope-and-closures/README.md)
