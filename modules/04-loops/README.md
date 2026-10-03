# Module 04 — Loops

> **What you'll learn:** how to repeat work with `for`, `while`, `do...while` and `for...of`; how to control loops with `break` and `continue`; and the **accumulator pattern** — the single most useful loop idea.
> **Why it matters:** programs process *lots* of things: every task, every request, every line in a file. Loops are how.

⏱️ About 2 hours · 📋 Prerequisites: Modules 01–03

```bash
cd modules/04-loops
```

---

## 1. Why loops?

```bash
node examples/01-why-loops.js
```

A loop says "do this thing N times" or "do this for every item" **once**, instead of copy-pasting.

---

## 2. The `for` loop

```bash
node examples/02-for-loop.js
```

```js
for (let i = 0; i < 5; i++) { ... }
//   start       keep going   after each round
//               while true
```

> 🧠 Read it as a story: *"Start with i at 0. While i is less than 5, run the body, then add 1 to i."*

### 🔮 Predict
How many times does each loop run? What's the last value printed?
```js
for (let i = 0; i < 3; i++)   console.log(i);
for (let i = 1; i <= 3; i++)  console.log(i);
for (let i = 10; i > 0; i -= 3) console.log(i);
```

### 🧪 Experiment
1. Make the first loop in `02-for-loop.js` print `0, 2, 4, 6, 8`.
2. Make it print `5, 4, 3, 2, 1, 0`.

---

## 3. `while` and `do...while`

```bash
node examples/03-while.js
node examples/04-do-while.js
```

| Use | When |
|---|---|
| `for` | you know how many times (or you're counting) |
| `while` | you repeat *until something happens* (goal reached, input valid…) |
| `do...while` | like `while` but must run at least once (rare) |

> ⚠️ **Infinite loops:** if the condition never becomes false, the loop never ends. Press **Ctrl + C** to stop the program. You'll cause one on purpose in Debug 04.1.

---

## 4. `for...of` — for each item

```bash
node examples/05-for-of.js
```

`for (const item of list)` is the most readable loop when you just want **every item**. You'll use it far more than counting `for` loops.

(Arrays — lists like `["a", "b"]` — get a whole module next-but-one. For now: they're a list, and `for...of` walks through it.)

---

## 5. `break` and `continue`

```bash
node examples/06-break-continue.js
```

- `continue` → "skip the rest of this round"
- `break` → "stop the whole loop"

---

## 6. ⭐ The accumulator pattern

```bash
node examples/07-accumulator-pattern.js
```

```text
1. Create a variable BEFORE the loop (the starting value)
2. Update it INSIDE the loop
3. Use it AFTER the loop
```

Sum, count, maximum, building a string — they're all the same shape. Learn this shape deeply. In Module 10 you'll see that `reduce` is exactly this, packaged as a function.

### 🧪 Experiment
Add a `lowest` accumulator to `07-accumulator-pattern.js`. What should it start at?

---

## 7. Nested loops

```bash
node examples/08-nested-loops.js
```

The inner loop finishes *completely* for each round of the outer loop. Change both `3`s to `5` — how many times does the inner body run now?

---

## 8. Exercises

| # | File | Practises |
|---|---|---|
| 04.1 | [`01-countdown.js`](exercises/01-countdown.js) | `for` counting down, building a string |
| 04.2 | [`02-score-stats.js`](exercises/02-score-stats.js) | `for...of`, several accumulators |
| 04.3 | [`03-fizzbuzz.js`](exercises/03-fizzbuzz.js) | loops + conditions + `%` |
| 04.4 | [`04-savings-goal.js`](exercises/04-savings-goal.js) | `while` when the count is unknown |
| 04.5 | [`05-count-vowels.js`](exercises/05-count-vowels.js) | looping over a string, `continue` |

Run with `node exercises/<file>`.

<details><summary>💡 04.1 — how do I get the spaces right?</summary>

Add `"5 "`, `"4 "`… then add `"Liftoff!"` *after* the loop.
</details>
<details><summary>💡 04.2 — what should `highest` start at?</summary>

If you start at `0` it works for these scores, but would break if every score were negative. Start at the first score: `scores[0]`.
</details>
<details><summary>💡 04.3 — 15 prints "Fizz"</summary>

Which `if` catches 15 first? Order matters (Module 03!).
</details>
<details><summary>💡 04.4 — which loop?</summary>

`while (balance < goal) { ... }`. Inside: interest, deposit, count the month.
</details>
<details><summary>💡 04.5 — checking for a vowel</summary>

`char === "a" || char === "e" || ...` is fine. Wordy, but clear.
</details>

**Common mistakes:** `<` vs `<=` (off by one); creating the accumulator *inside* the loop; forgetting to update the variable a `while` loop depends on.

Solutions: [`solutions/`](solutions/)

---

## 9. Debug challenges 🐛

| File | Symptom |
|---|---|
| [`debug/01-infinite-loop.js`](debug/01-infinite-loop.js) | Never stops (use **Ctrl + C**!) |
| [`debug/02-off-by-one.js`](debug/02-off-by-one.js) | Sum is 45, not 55 |
| [`debug/03-cart-total.js`](debug/03-cart-total.js) | Total is `undefined` |
| [`debug/04-find-user.js`](debug/04-find-user.js) | Says "Not found" for a user that exists |

> 🔍 **Technique — log every round:** put `console.log({ i, sum })` (or whatever variables matter) as the first line inside the loop. Watching values change round by round shows you *exactly* where reality departs from your expectation. Printing `{ i, sum }` with curly braces labels each value — handy!

---

## 10. 🏋️ Challenge — Triangle

Print this using nested loops (the number of rows comes from `const height = 4;`):

```text
*
**
***
****
```

Then make it print upside-down.

---

## 11. ✅ Self-check

- [ ] Explain the three parts of a `for (...)` header.
- [ ] When would you pick `while` instead of `for`?
- [ ] What's the difference between `break` and `continue`?
- [ ] Describe the accumulator pattern in three steps.
- [ ] Why must "not found" be decided *after* a search loop finishes?
- [ ] **Recognise it:** `for (const task of tasks) { if (task.completed) count++; }` — what does `count` hold at the end?

## 🤖 Using Claude

```text
I wrote this loop: [paste]
Before you say anything about it, I'll tell you what I think it prints: [your prediction].
Am I right? If not, give me a hint about which round I'm getting wrong.
```

➡️ **Next:** [Module 05 — Functions](../05-functions/README.md)
