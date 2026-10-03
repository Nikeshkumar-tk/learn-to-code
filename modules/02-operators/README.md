# Module 02 — Operators

> **What you'll learn:** how to calculate, compare, and combine values with operators — and the classic traps (`==`, precedence, `||` vs `??`).
> **Why it matters:** every condition, calculation and default value you'll ever write is built from these.

⏱️ About 1.5 hours · 📋 Prerequisites: Module 01

```bash
cd modules/02-operators
```

> 💡 **Jargon — operator:** a symbol that takes value(s) and produces a new value. In `3 + 4`, `+` is the operator and `3`, `4` are its **operands**.

---

## 1. Arithmetic

```bash
node examples/01-arithmetic.js
```

The one people don't know: **`%` (remainder)**. `7 % 2` is `1` because 7 ÷ 2 = 3 remainder **1**. It's how you check "is this even?" (`n % 2 === 0`) or "every 3rd item" (`i % 3 === 0`).

### 🔮 Predict
What do these produce? Write answers, then add them to the file and check.
```js
10 % 3
10 % 5
2 + 10 / 2
(2 + 10) / 2
```

### 🧪 Experiment
`0.1 + 0.2` isn't `0.3`. Computers store decimals in binary and some can't be stored exactly. That's why money is often stored in **cents** (integers): `1050` instead of `10.50`.

---

## 2. Assignment shortcuts: `+=`, `-=`, `++`, `--`

```bash
node examples/02-assignment-operators.js
```

`x += 5` is just shorthand for `x = x + 5`. Nothing more. You'll see `count++` in loops constantly.

---

## 3. Comparison → booleans

```bash
node examples/03-comparison.js
```

> 🧠 A comparison is an **expression** — it *produces* `true` or `false`. That value can be stored, printed or combined, like any other value.

---

## 4. `===` vs `==`

```bash
node examples/04-equality.js
```

- `===` → "same type **and** same value". Predictable.
- `==` → converts types first, with confusing rules.

**Always use `===` / `!==`.** You'll see `==` in older code; now you know what to be suspicious of.

---

## 5. Logical operators: `&&`, `||`, `!`

```bash
node examples/05-logical.js
```

| Expression | Reads as | True when |
|---|---|---|
| `a && b` | a AND b | both are true |
| `a \|\| b` | a OR b | at least one is true |
| `!a` | NOT a | a is false |

### 🔮 Predict
```js
const isLoggedIn = true;
const isAdmin = false;
console.log(isLoggedIn && isAdmin);
console.log(isLoggedIn || isAdmin);
console.log(!isLoggedIn || isAdmin);
```

### 🧪 Experiment
In `05-logical.js`, find a combination of `hasTicket`, `isVip` and `age` where `canEnter` is `true` even though `age` is 16. Then remove the parentheses in `canEnter` — does the meaning change?

---

## 6. Default values with `??`

```bash
node examples/06-nullish-coalescing.js
```

`a ?? b` → "`a`, unless `a` is `null`/`undefined`; then `b`". You'll use this constantly in Node: `const port = process.env.PORT ?? 3000;`

`||` also gives defaults, but it treats `0`, `""` and `false` as missing. Use `??` when those could be real values.

---

## 7. Exercises

| # | File | Practises |
|---|---|---|
| 02.1 | [`01-bill-splitter.js`](exercises/01-bill-splitter.js) | arithmetic, precedence, rounding |
| 02.2 | [`02-even-odd.js`](exercises/02-even-odd.js) | `%`, `===`, `&&` |
| 02.3 | [`03-access-rules.js`](exercises/03-access-rules.js) | turning English rules into boolean logic |
| 02.4 | [`04-settings-defaults.js`](exercises/04-settings-defaults.js) | `??` vs `\|\|` |

Run each with `node exercises/<file>` and keep going until every line is ✅.

### Hints

<details><summary>02.1 — Bill splitter</summary>

15 percent of something is `something * 15 / 100`. Do the division *before* rounding. Rounding happens at the very end.
</details>
<details><summary>02.2 — Even/odd</summary>

`number % 2` gives the remainder. What remainder does an even number have? Compare it with `===`.
</details>
<details><summary>02.3 — Rules (hint 1)</summary>

Translate word by word: "AND" → `&&`, "OR" → `||`, "does NOT have" → `!`.
</details>
<details><summary>02.3 — Rules (hint 2)</summary>

`isOldEnough` already exists by the time you write `canRent` — reuse it!
</details>
<details><summary>02.4 — Defaults</summary>

Try it with `||` first. Which check fails? Why?
</details>

**Common mistakes:** using `=` (assign) when you meant `===` (compare); rounding before dividing; forgetting that `!` applies only to what's directly after it.

Solutions: [`solutions/`](solutions/)

---

## 8. Debug challenges 🐛

| File | Symptom | Type of bug |
|---|---|---|
| [`debug/01-average.js`](debug/01-average.js) | Average is 180 | logic |
| [`debug/02-age-gate.js`](debug/02-age-gate.js) | An 18-year-old is rejected | logic (types) |
| [`debug/03-muted.js`](debug/03-muted.js) | Muted user hears sound | logic |
| [`debug/04-points.js`](debug/04-points.js) | Points never change | logic |

None of these crash. That's the point — **logic bugs** are found by comparing *expected* vs *actual* output and asking "where does reality first differ from my expectation?"

> 🔍 **Technique — print the pieces:** if `a + b + c / 3` is wrong, print `c / 3` on its own. Break an expression into parts until one part surprises you.

---

## 9. 🏋️ Challenge

Leap years: a year is a leap year if it's divisible by 4, **except** years divisible by 100, **unless** also divisible by 400. Create `isLeapYear` as a single boolean expression for `const year = 2024;`. Test with 1900 (false), 2000 (true), 2023 (false), 2024 (true).

---

## 10. ✅ Self-check

- [ ] What does `%` do? Give a real use for it.
- [ ] Why should you prefer `===` over `==`?
- [ ] What's `true && false || true`? (Hint: `&&` happens before `||`.)
- [ ] When would `||` give a wrong default where `??` wouldn't?
- [ ] Why didn't `points + 25;` change `points`?

## 🤖 Using Claude

```text
Here is a boolean expression I wrote: [paste]
And here's the rule it should represent in English: [rule]
Without rewriting it, tell me if any case would give the wrong answer.
Let me find the fix myself.
```

➡️ **Next:** [Module 03 — Making Decisions](../03-decisions/README.md)
