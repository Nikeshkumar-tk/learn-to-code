# Module 05 — Functions

> **What you'll learn:** how to package logic into reusable, named functions — parameters, arguments, return values, defaults, early returns, arrow functions, and pure vs impure functions.
> **Why it matters:** functions are *the* building block of every program. Every Express route handler, every utility, every "service" is a function. If you understand functions, unfamiliar code stops being scary.

⏱️ About 3 hours (take a break in the middle!) · 📋 Prerequisites: Modules 01–04

```bash
cd modules/05-functions
```

---

## 1. Why functions?

```bash
node examples/01-why-functions.js
```

| Question | Answer |
|---|---|
| **What** is a function? | A named, reusable block of code that can take inputs and give back an output. |
| **Why** does it exist? | Write logic once, use it many times; give a name to an idea; fix bugs in one place. |
| **When** do I write one? | When you'd otherwise copy-paste, or when a chunk of code does one nameable job. |

> 🧠 **Mental model:** a function is a little machine. Inputs go in (parameters), it does work, an output comes out (`return`).

---

## 2. Declaring vs calling

```bash
node examples/02-declaring-and-calling.js
```

- **Declaring** (`function sayHello() { ... }`) builds the machine. Nothing runs.
- **Calling** (`sayHello()`) switches it on. The **`()`** is what makes it run.

### 🔮 Predict
What's printed by `console.log(sayHello)` (no parentheses)? Run it and see.

---

## 3. Parameters & arguments

```bash
node examples/03-parameters-and-arguments.js
```

```js
function greet(name, timeOfDay) { ... }   // parameters: placeholders
greet("Ada", "morning");                  // arguments: real values
```

Arguments are matched by **position**. Missing ones become `undefined`.

---

## 4. ⭐ Return values (the most important section)

```bash
node examples/04-return-values.js
```

> 🧠 **Key idea:** when a function returns, the **call is replaced by the returned value**.
> `double(3) + double(4)` → `6 + 8` → `14`.

### `return` vs `console.log` — the #1 beginner confusion

| | `console.log(x)` | `return x` |
|---|---|---|
| Who sees it? | **You**, on the screen | **The code** that called the function |
| Can the caller use the value? | ❌ No | ✅ Yes |
| Ends the function? | No | Yes, immediately |

A function without `return` gives back `undefined`.

### 🧪 Experiment
1. In `04-return-values.js`, change `doubleAndPrint` so `oops` holds `10`.
2. Add a line after `return` in `double`. Does it ever run?

---

## 5. Default parameters

```bash
node examples/05-default-parameters.js
```

`function createTask(title, priority = "medium")` — if `priority` isn't passed, it's `"medium"`.

---

## 6. Early returns (guard clauses)

```bash
node examples/06-early-return.js
```

Handle the special/invalid cases first and `return` immediately. The remaining code can assume everything is fine. This is *everywhere* in backend code:

```js
function getTask(id) {
  if (!id) return null;          // guard
  // ...normal work
}
```

---

## 7. Function expressions & arrow functions

```bash
node examples/07-function-expressions-and-arrows.js
```

These all create the same function:

```js
function square(n) { return n * n; }
const square = function (n) { return n * n; };
const square = (n) => { return n * n; };
const square = (n) => n * n;          // implicit return
```

You **must** be able to read all four — AI-generated code uses arrows constantly.

### 🔮 Predict
What does each return?
```js
const a = (x) => x + 1;
const b = (x) => { x + 1 };
const c = () => "hi";
```
<details><summary>Answer</summary>

`a(1)` → `2`. `b(1)` → `undefined` (with `{ }` you need `return`!). `c()` → `"hi"`.
</details>

---

## 8. Pure vs impure functions

```bash
node examples/08-pure-vs-impure.js
```

- **Pure:** output depends only on inputs; changes nothing outside. Easy to test.
- **Impure:** reads/changes outside state, prints, saves files, sends HTTP responses.

You need both. The skill is keeping calculations pure and side effects in obvious places.

---

## 9. Breaking problems down

```bash
node examples/09-breaking-problems-down.js
```

This is the real skill behind "I can write programs myself":

```text
1. Describe the whole task in one sentence.
2. List the smaller steps.
3. Turn each step into a function with a clear name and one job.
4. Write the "main" code by calling those functions.
```

---

## 10. Exercises

| # | File | Practises |
|---|---|---|
| 05.1 | [`01-greet.js`](exercises/01-greet.js) | declaring, `return`, default parameter |
| 05.2 | [`02-temperature.js`](exercises/02-temperature.js) | parameters, maths, helper functions |
| 05.3 | [`03-valid-username.js`](exercises/03-valid-username.js) | early returns, return inside a loop |
| 05.4 | [`04-arrow-rewrite.js`](exercises/04-arrow-rewrite.js) | arrow-function syntax |
| 05.5 | [`05-invoice.js`](exercises/05-invoice.js) | **decomposition** — functions calling functions |

Run with `node exercises/<file>`. If you see `ReferenceError: greet is not defined`, you haven't created the function yet (or misspelled it).

<details><summary>💡 05.1</summary>

`function greet(name = "friend") { ... }` — and remember: `return`, not `console.log`.
</details>
<details><summary>💡 05.2</summary>

Write `roundTo1` first and test it alone: `console.log(roundTo1(21.111))`.
</details>
<details><summary>💡 05.3 hint 1</summary>

One `if (...) return "...";` per rule, in the order listed.
</details>
<details><summary>💡 05.3 hint 2</summary>

Inside `for (const char of username)`, if `char === " "` you can `return` straight away.
</details>
<details><summary>💡 05.4</summary>

`const isEven = (n) => ...;` — the function name becomes the variable name.
</details>
<details><summary>💡 05.5 hint 1</summary>

`applyDiscount(200, 25)`: 25% of 200 is `200 * 25 / 100` = 50, so the result is 150.
</details>
<details><summary>💡 05.5 hint 2</summary>

In `invoiceTotal`, store each step in a well-named `const`, passing the previous result into the next function.
</details>

**Common mistakes:** printing instead of returning; using `{ }` in an arrow without `return`; passing arguments in the wrong order; forgetting the `()` when calling.

Solutions: [`solutions/`](solutions/)

---

## 11. Debug challenges 🐛

| File | Symptom |
|---|---|
| [`debug/01-area.js`](debug/01-area.js) | Area is `undefined` |
| [`debug/02-total-is-nan.js`](debug/02-total-is-nan.js) | Correct numbers print… but total is `NaN` |
| [`debug/03-discount.js`](debug/03-discount.js) | A $50 item with 20% off costs $10 (should be $40) |
| [`debug/04-all-positive.js`](debug/04-all-positive.js) | Says `[1, -2, 3]` is all positive |

> 🔍 **Technique — test a function in isolation:** add `console.log(itemCost(5, 3))` on its own. Is the function wrong, or the code that uses it? Narrowing down *where* the bug lives is half the work.

---

## 12. 🏋️ Challenge — Password strength

Write `passwordStrength(password)` returning `"weak"`, `"medium"` or `"strong"`. Decide the rules yourself (length, has a digit, has an uppercase letter…). Write each rule as its own small function (`hasDigit(password)` etc.) and combine them. Hint for checking a digit: `char >= "0" && char <= "9"`.

---

## 13. ✅ Self-check

- [ ] Explain parameter vs argument with an example.
- [ ] What does a function return if there's no `return`?
- [ ] Why can't the caller use a value that was only `console.log`ged?
- [ ] Rewrite `function add(a, b) { return a + b; }` as an arrow function from memory.
- [ ] What's a pure function? Name one thing that makes a function impure.
- [ ] **Recognise it:** in `app.get("/tasks", (req, res) => { ... })` — can you spot an arrow function with two parameters?

## 🤖 Using Claude

```text
I've split this problem into these functions: [list names + one-line purpose each].
Don't write any code. Is this a sensible breakdown? Is any function doing two jobs?
```

➡️ **Next:** [Module 06 — Arrays](../06-arrays/README.md)
