# Module 03 — Making Decisions

> **What you'll learn:** `if` / `else if` / `else`, nested conditions, truthy & falsy values, the ternary operator, and `switch`.
> **Why it matters:** this is how programs *react*. "If the user isn't logged in, return 401." "If the task doesn't exist, return 404." Every backend is full of these.

⏱️ About 2 hours · 📋 Prerequisites: Modules 01–02

```bash
cd modules/03-decisions
```

---

## 1. `if` / `else`

**What:** run some code *only when* a condition is true.

```js
if (condition) {
  // runs when condition is truthy
} else {
  // runs otherwise
}
```

The `{ }` is a **block** — a group of lines that belong together.

```bash
node examples/01-if-else.js
```

### 🧪 Experiment
1. Change `temperature` to `30`. Which branch runs? Why? (Hint: `>` vs `>=`.)
2. Delete the `else` block entirely. What happens when it's not hot?

---

## 2. `else if` — checking in order

```bash
node examples/02-else-if.js
```

> 🧠 **Key idea:** JavaScript checks conditions **top to bottom** and runs **only the first** matching block. Order is part of the logic.

### 🔮 Predict
What grade do `90`, `89.9`, `70` and `-5` get? Try each.

---

## 3. Nested conditions

```bash
node examples/03-nested-conditions.js
```

Both versions do the same thing. The flat one uses an **early exit** style: deal with the "go away" case first, then the rest. You'll see this pattern in every Express route handler:

```js
if (!task) {
  return res.status(404).json({ error: "Not found" });
}
// ...happy path continues here
```

---

## 4. Truthy and falsy

```bash
node examples/04-truthy-falsy.js
```

An `if` doesn't need a real boolean. The **6 falsy values** are:

```text
false   0   ""   null   undefined   NaN
```

Everything else is **truthy** — including `"0"`, `"false"` and `[]`.

Why it exists: it makes "is there anything here?" checks short: `if (searchText) { ... }`.
The danger: `0` and `""` are sometimes valid data (see Debug 03.4).

### 🔮 Predict
Truthy or falsy? `" "` (a space) · `-1` · `"null"` · `0.0`

---

## 5. The ternary operator

```bash
node examples/05-ternary.js
```

`condition ? a : b` is an **expression** — it produces a value — so it fits inside a template literal or a `const`. Great for small "this or that" choices. For anything bigger, use `if/else`.

---

## 6. `switch`

```bash
node examples/06-switch.js
```

Use it when you compare **one value** against **many exact options**. Don't forget `break` (see Debug 03.3).

### 🧪 Experiment
Set `day` to `"Sat"` (capital S). Which branch runs? Why? (`switch` uses `===`.)

---

## 7. Exercises

Each exercise's checks test **one** scenario. After they pass, change the inputs at the top and confirm these too:

| Exercise | Try these inputs | Expected |
|---|---|---|
| [03.1 Shipping](exercises/01-shipping-cost.js) | `150, "US"` · `45, "IN"` · `100, "IN"` | `0` · `5` · `0` |
| [03.2 Password](exercises/02-password-feedback.js) | `""` · `"abc"` · `"samsamsam"` with username `"samsamsam"` | required · too short · don't use username |
| [03.3 HTTP status](exercises/03-http-status.js) | `200` · `201` · `500` · `418` | OK/false · Created/false · Server Error/true · Unknown/true |
| [03.4 Task label](exercises/04-task-label.js) | `completed = false`, `priority = "low"` | `"[ ] Learn conditionals "` |

Run with `node exercises/<file>`.

<details><summary>💡 03.1 hint</summary>

Which rule beats all the others? Put it first.
</details>
<details><summary>💡 03.2 hint 1</summary>

`""` has length 0. If you check `length < 8` first, the empty password gets the "too short" message.
</details>
<details><summary>💡 03.2 hint 2</summary>

Compare strings with `===`: `password === username`.
</details>
<details><summary>💡 03.3 hint</summary>

Each `case` needs its own `break`. `default` handles "anything else".
</details>

**Common mistakes:** `=` instead of `===` inside `if (...)`; forgetting `break`; writing conditions in an order where an earlier branch "steals" cases from a later one.

Solutions: [`solutions/`](solutions/)

---

## 8. Debug challenges 🐛

| File | Symptom |
|---|---|
| [`debug/01-grades.js`](debug/01-grades.js) | Everyone scores a D |
| [`debug/02-everyone-is-admin.js`](debug/02-everyone-is-admin.js) | An editor is welcomed as admin |
| [`debug/03-coffee-order.js`](debug/03-coffee-order.js) | A small coffee costs 5 |
| [`debug/04-stock.js`](debug/04-stock.js) | "Sold out" is never printed |

> 🔍 **Technique — trace the branches:** put a `console.log("branch 1")`, `console.log("branch 2")`… at the top of each block. Run. Now you *see* which path the program took instead of guessing.

---

## 9. 🏋️ Challenge — Fizz-ish

Given `const n = 15;` print `"Fizz"` if divisible by 3, `"Buzz"` if divisible by 5, `"FizzBuzz"` if both, otherwise the number. Which condition must come first? (Next module, you'll run it for 1–100 with a loop.)

---

## 10. ✅ Self-check

- [ ] In an `if / else if / else` chain, how many blocks can run?
- [ ] Name all six falsy values.
- [ ] Is `"0"` truthy or falsy? Is `0`?
- [ ] When is a ternary better than `if/else`? When is it worse?
- [ ] What happens if you forget `break` in a `switch`?
- [ ] **Recognise it:** `if (!user) return res.status(401).send("Login required");` — when does this line run?

## 🤖 Using Claude

```text
Here's my if/else chain: [paste]
List some inputs I should test it with — including tricky edge cases —
but don't tell me whether my code handles them. I'll run them myself.
```

➡️ **Next:** [Module 04 — Loops](../04-loops/README.md)
