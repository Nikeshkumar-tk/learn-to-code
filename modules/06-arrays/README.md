# Module 06 — Arrays

> **What you'll learn:** ordered lists of values — indexing, adding/removing, looping, **mutation vs copying**, **references**, spread, destructuring and rest parameters.
> **Why it matters:** almost all real data comes in lists: tasks, users, orders, lines of a file. Your task API will be built on an array of tasks.

⏱️ About 3 hours · 📋 Prerequisites: Modules 01–05

```bash
cd modules/06-arrays
```

---

## 1. Creating arrays & indexing

```bash
node examples/01-creating-and-indexing.js
```

```js
const fruits = ["apple", "banana", "cherry"];
//                 0         1         2       <- indexes
```

> 🧠 Indexes start at **0**. The last item is at `length - 1`. Asking for an index that doesn't exist gives `undefined` (no error!).

### 🔮 Predict
For `const xs = [10, 20, 30, 40];` what are `xs[1]`, `xs.length`, `xs[xs.length - 1]`, `xs[4]`?

---

## 2. Modifying arrays

```bash
node examples/02-modifying.js
```

| Method | Does | Returns |
|---|---|---|
| `push(x)` | add to end | new length |
| `pop()` | remove from end | removed item |
| `unshift(x)` | add to start | new length |
| `shift()` | remove from start | removed item |
| `splice(i, n)` | remove `n` items at index `i` | array of removed items |
| `indexOf(x)` | find position | index, or `-1` |

All except `indexOf` **mutate** (change) the array.

---

## 3. Looping over arrays

```bash
node examples/03-looping.js
```

- `for...of` → when you need each **item**.
- `for (let i = 0; ...)` → when you also need the **index**.
- **Building a new array**: start with `[]`, `push` inside a loop, use it after. (The accumulator pattern again!)

---

## 4. ⭐ `const`, mutation and references

This section prevents a whole category of real bugs. Go slowly.

```bash
node examples/04-const-and-mutation.js
node examples/05-references-and-copying.js
```

> 🧠 **Mental model:** an array lives somewhere in memory. A variable holds an **arrow pointing to it** (a *reference*).
>
> ```text
> const a = ["x"];      a ──► ["x"]
> const b = a;          a ──► ["x"] ◄── b      (same array!)
> const c = [...a];     c ──► ["x"]           (a new array)
> ```

- `const` stops the **arrow** from moving. It doesn't stop you changing what's at the other end.
- `b = a` copies the arrow, not the array.
- `[...a]` or `a.slice()` makes a **new** array.
- `===` on arrays asks "same array?", not "same contents?".

### 🧪 Experiment
In `05-references-and-copying.js`, change `copy1.push("d")` to `sameArray.push("d")`. Predict what `original` prints.

---

## 5. Spread `...`

```bash
node examples/06-spread.js
```

Spread *unpacks* an array: combine arrays, copy them, add items without mutating, pass items as separate arguments.

---

## 6. Destructuring

```bash
node examples/07-destructuring.js
```

```js
const [first, second, ...rest] = ["a", "b", "c", "d"];
// first = "a", second = "b", rest = ["c", "d"]
```

You'll see it in real code like `const [user, setUser] = useState()` (React) or `const [key, value] = entry`.

---

## 7. Rest parameters

```bash
node examples/08-rest-parameters.js
```

| Syntax | Where | Job |
|---|---|---|
| `...` **spread** | in a call `f(...arr)` or array `[...arr]` | unpack array → separate values |
| `...` **rest** | in parameters `function f(...args)` or destructuring | collect separate values → array |

Same dots, opposite directions.

---

## 8. Arrays & functions: who owns the data?

```bash
node examples/09-arrays-and-functions.js
```

A function receives a **reference** to your array. If it mutates it, *you* see the change. Prefer functions that **return new arrays** unless mutation is the explicit job (like a queue).

---

## 9. Exercises

| # | File | Practises |
|---|---|---|
| 06.1 | [`01-support-queue.js`](exercises/01-support-queue.js) | push/unshift/shift, indexing |
| 06.2 | [`02-without-mutating.js`](exercises/02-without-mutating.js) | spread, slice, returning new arrays |
| 06.3 | [`03-rest-stats.js`](exercises/03-rest-stats.js) | rest parameters, spread into calls |
| 06.4 | [`04-destructuring.js`](exercises/04-destructuring.js) | destructuring with rest |
| 06.5 | [`05-build-arrays.js`](exercises/05-build-arrays.js) | building arrays with loops |

<details><summary>💡 06.1</summary>

`push` already returns the new length — so `return queue.push(ticket);` does two jobs in one line.
</details>
<details><summary>💡 06.2 — removeAt</summary>

"Everything before `index`" is `list.slice(0, index)`. "Everything after" is `list.slice(index + 1)`. Spread both into a new array.
</details>
<details><summary>💡 06.2 — replaceAt</summary>

Mutating a *copy* is fine. Copy first, then assign to the index.
</details>
<details><summary>💡 06.3</summary>

`average` can call `sum(...numbers)`. Watch out for dividing by `0` when there are no numbers.
</details>
<details><summary>💡 06.5 — reversed</summary>

Loop with a counting `for` loop starting from `list.length - 1` going down to `0`.
</details>

**Common mistakes:** `list[list.length]` (always `undefined`); thinking `const b = a` copies; forgetting `sort`, `splice`, `push` mutate.

Solutions: [`solutions/`](solutions/)

---

## 10. Debug challenges 🐛

| File | Symptom |
|---|---|
| [`debug/01-last-task.js`](debug/01-last-task.js) | Last task is `undefined` |
| [`debug/02-template-tasks.js`](debug/02-template-tasks.js) | Every employee gets everyone's tasks |
| [`debug/03-top-scores.js`](debug/03-top-scores.js) | Reading the top scores reorders the original |
| [`debug/04-print-list.js`](debug/04-print-list.js) | List skips milk and ends with `undefined` |

> 🔍 **Technique — check identity:** when data changes "by itself", ask *"are these the same array?"*. `console.log(a === b)` answers it in one line.

---

## 11. 🏋️ Challenge — Chunk

Write `chunk(list, size)` that splits an array into groups: `chunk([1,2,3,4,5], 2)` → `[[1,2],[3,4],[5]]`. (Used for pagination!) Don't mutate the input.

---

## 12. ✅ Self-check

- [ ] What's the index of the last item in an array of length `n`?
- [ ] Which methods mutate an array? Name four.
- [ ] Why does `const list = []; list.push(1);` work, but `list = [1]` fails?
- [ ] What's the difference between `const b = a` and `const b = [...a]`?
- [ ] Spread vs rest: what does each do?
- [ ] **Recognise it:** `const [first, ...others] = req.body.tags;` — what are `first` and `others`?

## 🤖 Using Claude

```text
Here's a function that takes an array: [paste]
Does it mutate its input? Answer only yes/no and point to the line —
I want to understand why myself.
```

➡️ **Next:** [Module 07 — Objects](../07-objects/README.md)
