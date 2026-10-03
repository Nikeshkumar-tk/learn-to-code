# Module 01 — Values & Variables

> **What you'll learn:** what values are, the basic types (string, number, boolean, null, undefined), how to name values with `const` and `let`, and how expressions turn into values.
> **Why it matters:** every program is just values being created, named, combined and printed. When you read AI-generated code, 80% of it is this.

⏱️ About 1.5 hours · 📋 Prerequisites: Module 00

```bash
cd modules/01-values-and-variables
```

---

## 1. Values and types

**What:** a *value* is a piece of data: `"hello"`, `42`, `true`.
**Why types exist:** the type decides what you can do with a value. You can multiply numbers; you can't multiply names.

| Type | Examples | Used for |
|---|---|---|
| `string` | `"Ada"`, `'hi'`, `` `hi` `` | text |
| `number` | `42`, `3.14`, `-7` | maths, counts, prices |
| `boolean` | `true`, `false` | yes/no answers |
| `undefined` | `undefined` | "nothing given yet" |
| `null` | `null` | "deliberately empty" |

```bash
node examples/01-values.js
```

### 🔮 Predict
Before running: what will `typeof "42"` print? Why?

### 🧪 Experiment
1. Add `console.log(typeof -0.5)`. Predict first.
2. Add `console.log(typeof "true")`. Is it a boolean?

---

## 2. Variables — naming values

**What:** a variable is a **name that points to a value**.
**Why:** so you can reuse a value, and so your code explains itself. `secondsPerHour` means something; `3600` doesn't.

```js
const name = "Ada";
//    ^      ^
//    name   value
```

The `=` here does **not** mean "equals" like in maths. It means **"make this name point to this value"** (called *assignment*).

```bash
node examples/02-variables.js
```

### 🧪 Experiment
1. Change `birthYear` and run. Notice every line that uses it changes too — that's the point of variables.
2. Add a variable `hoursPerDay = 24` and use it to calculate `secondsPerDay`.

**Naming rules:** letters, digits, `_` and `$`; can't start with a digit; case-sensitive (`userName` ≠ `username`). The JavaScript convention is **camelCase**: `totalPrice`, `isLoggedIn`.

---

## 3. `let` vs `const` — and reassignment

| | Can point to a new value later? | Use when |
|---|---|---|
| `const` | ❌ No | **Default choice.** Most values never need to change. |
| `let` | ✅ Yes | Counters, totals, anything that changes over time. |

```bash
node examples/03-let-and-reassignment.js
node examples/04-const-cannot-change.js
```

The second one crashes on purpose. Read the error: what type is it? What line?

### 🔮 Predict
```js
let x = 5;
x = x + 1;
x = x * 2;
```
What is `x` at the end? Work it out line by line, then test it in a scratch file.

> 🧠 `score = score + 5` is not maths nonsense. JavaScript does it in two steps: **first** calculate the right side using the *current* value (`0 + 5`), **then** make `score` point to the result.

---

## 4. Expressions & template literals

An **expression** is any code that *produces a value*: `price * quantity`, `price > 10`, `"a" + "b"`, or even just `price`.

**Template literals** use backticks and `${ }` to put expressions inside text:

```js
`You owe $${price * quantity}`
```

```bash
node examples/05-expressions.js
```

### 🧪 Experiment
1. Change `quantity` to `1`. Read the sentence — does "notebooks" still make sense? (We'll fix that kind of thing in Module 03.)
2. Rewrite the template-literal line using `+` instead. Which is easier to read?

---

## 5. `null` and `undefined`

```bash
node examples/06-null-and-undefined.js
```

- `undefined` — JavaScript's way of saying "this has no value **yet**". You usually don't write it yourself.
- `null` — **you** write this to say "intentionally empty".

You'll meet `undefined` constantly when debugging: *"why is this undefined?"* usually means "I forgot to give it a value" or "I spelled the name wrong".

---

## 6. Exercises

Each exercise has **checks** at the bottom. Run the file: ❌ means not yet, ✅ means done. The checks will crash with a `ReferenceError` until you create the variables they look for — that's expected!

### Exercise 01.1 — Profile
- **Goal:** create variables of each basic type.
- **Start:** [`exercises/01-profile.js`](exercises/01-profile.js)
- **Run:** `node exercises/01-profile.js`
- **Expected:** your sentence prints, then 4 ✅.

<details><summary>💡 Hint</summary>

`null` is written without quotes. `"null"` would be a string.
</details>

**Common mistakes:** writing `"true"` (a string) instead of `true`; `Username` vs `username`.

### Exercise 01.2 — Shopping cart
- **Goal:** reassignment; choosing `let` vs `const`.
- **Start:** [`exercises/02-shopping-cart.js`](exercises/02-shopping-cart.js)
- **Run:** `node exercises/02-shopping-cart.js`
- **Expected:** two messages printed, then 3 ✅.

<details><summary>💡 Hint 1</summary>

If you get `TypeError: Assignment to constant variable`, which variable did you try to change?
</details>
<details><summary>💡 Hint 2</summary>

Changing `quantity` does **not** automatically change `total`. A variable stores a value, not a formula.
</details>

**Common mistakes:** writing `let quantity = quantity + 2` (you can't declare the same name twice — just `quantity = quantity + 2`).

### Exercise 01.3 — Swap
- **Goal:** understand that assignment *replaces* the old value.
- **Start:** [`exercises/03-swap.js`](exercises/03-swap.js)
- **Run:** `node exercises/03-swap.js`

<details><summary>💡 Hint 1</summary>

Try `cupA = cupB; cupB = cupA;` and print both. Why do both hold `"tea"`?
</details>
<details><summary>💡 Hint 2</summary>

Save one of the values in a third variable before you overwrite it.
</details>

### Exercise 01.4 — Receipt
- **Goal:** template literals with calculated values.
- **Start:** [`exercises/04-receipt.js`](exercises/04-receipt.js)
- **Run:** `node exercises/04-receipt.js`

<details><summary>💡 Hint</summary>

You need a literal `$` followed by `${...}`. Look at example 05.
</details>

**Common mistakes:** using normal quotes `"..."` instead of backticks — then `${}` is printed literally.

Solutions: [`solutions/`](solutions/) — only after a real attempt!

---

## 7. Debug challenges 🐛

Use the routine: **run → read → locate → hypothesise → fix → verify**. Write your hypothesis as a comment in the file *before* fixing.

| File | Symptom |
|---|---|
| [`debug/01-counter.js`](debug/01-counter.js) | Crashes after the first line |
| [`debug/02-age-next-year.js`](debug/02-age-next-year.js) | No crash, wrong answer (`301`?!) |
| [`debug/03-greeting.js`](debug/03-greeting.js) | `ReferenceError` — but the variable *is* defined… isn't it? |

<details><summary>💡 Debugging tool for 02</summary>

When a value behaves strangely, print its type: `console.log(typeof ageInput)`. Testing a hypothesis with a `console.log` is the simplest debugging tool there is — and professionals use it every day.
</details>

Explanations are in [`solutions/debug-*.js`](solutions/).

---

## 8. 🏋️ Challenge (optional)

Create `exercises/05-time.js`. Given `const totalSeconds = 7384;`, calculate and print `"2 hours, 3 minutes, 4 seconds"`. You'll need `Math.floor(x)` (rounds down) and `%` (remainder: `7 % 3` is `1`). Don't worry if this one is hard — `%` is covered properly in Module 02.

---

## 9. ✅ Self-check

- [ ] What's the difference between a value and a variable?
- [ ] When do you use `let` instead of `const`?
- [ ] What does `=` actually do?
- [ ] Why does `"5" + 1` give `"51"`?
- [ ] What's the difference between `null` and `undefined`?
- [ ] **Recognise it:** in `const port = process.env.PORT || 3000;` — what's the variable name? Is it allowed to change later?

## 🤖 Using Claude

```text
I think `let` and `const` differ like this: [your explanation].
Is my mental model correct? Point out anything I've got wrong,
but don't give me a full lecture.
```

➡️ **Next:** [Module 02 — Operators](../02-operators/README.md)
