# Module 08 — Strings

> **What you'll learn:** how to search, slice, clean, split and format text — with realistic input like emails, URLs, CSV lines and log files.
> **Why it matters:** backends spend a huge amount of time handling text: request URLs, query strings, form input, file contents, headers. Messy input is the norm.

⏱️ About 2 hours · 📋 Prerequisites: Modules 01–07

```bash
cd modules/08-strings
```

---

## 1. Indexing, length & immutability

```bash
node examples/01-indexing-and-length.js
```

Strings behave like read-only arrays of characters: `text.length`, `text[0]`, `for...of`.

> 🧠 **Strings are immutable.** Every string method *returns a new string*. If you don't store the result, it's lost: `name = name.trim();`

---

## 2. Searching

```bash
node examples/02-searching.js
```

| Method | Question it answers |
|---|---|
| `includes(x)` | Is `x` anywhere in here? |
| `startsWith(x)` / `endsWith(x)` | Does it begin / end with `x`? |
| `indexOf(x)` / `lastIndexOf(x)` | Where is the first / last `x`? (`-1` if missing) |

All are **case-sensitive**. Normalise with `toLowerCase()` before comparing user input.

---

## 3. Extracting: `slice` & `substring`

```bash
node examples/03-extracting.js
```

`slice(start, end)` — **end is not included**. Negative numbers count from the end. Combine with `indexOf` to cut around a marker (`@`, `?`, `.`).

### 🔮 Predict
```js
"2026-03-14".slice(0, 4)
"2026-03-14".slice(5, 7)
"2026-03-14".slice(-2)
```

---

## 4. Cleaning input

```bash
node examples/04-cleaning.js
```

`trim`, `toLowerCase`, `toUpperCase`, `replace` (first match), `replaceAll` (every match). Methods can be **chained**: each returns a string, so you can call another method on it.

---

## 5. `split` & `join`

```bash
node examples/05-split-and-join.js
```

`split` turns a string into an array; `join` turns an array into a string. Together with array skills from Module 06, this is how you parse almost any text format.

---

## 6. Template literals & formatting

```bash
node examples/06-template-literals.js
```

Multi-line strings, expressions inside `${}`, and `padStart` / `padEnd` / `repeat` for neat output.

---

## 7. Putting it together: parsing a log line

```bash
node examples/07-parsing-a-log-line.js
```

### 🧪 Experiment
Change `line` to a `"WARN"` line from a different service. Does the code still work? What if the message has no `#`?

---

## 8. Exercises

| # | File | Practises |
|---|---|---|
| 08.1 | [`01-normalize-email.js`](exercises/01-normalize-email.js) | trim, lowercase, indexOf, validation |
| 08.2 | [`02-slugify.js`](exercises/02-slugify.js) | character-by-character processing |
| 08.3 | [`03-parse-csv.js`](exercises/03-parse-csv.js) | split, trim, Number, building objects |
| 08.4 | [`04-masking.js`](exercises/04-masking.js) | slice, repeat, padStart |
| 08.5 | [`05-query-string.js`](exercises/05-query-string.js) | parsing the thing Express will do for you |

<details><summary>💡 08.1 — isValidEmail</summary>

Write one early-return guard per rule. `indexOf("@")` gives `-1` if there's no `@` and `0` if it's first — both are invalid, so `at <= 0`.
</details>
<details><summary>💡 08.2 hint 1</summary>

Build a new string with a loop. For each char: is it a letter/digit? Add it. Otherwise, maybe add a `-`.
</details>
<details><summary>💡 08.2 hint 2</summary>

"Maybe" = only if the slug isn't empty yet and doesn't already end with `-`. Then remove a trailing `-` at the end.
</details>
<details><summary>💡 08.3</summary>

`const [name, email, age] = line.split(",");` then trim each. For the whole text: `split("\n")`, skip the first line, skip blank lines.
</details>
<details><summary>💡 08.4</summary>

`"1111".padStart(16, "*")` pads on the left to length 16.
</details>
<details><summary>💡 08.5</summary>

Handle the empty case first. `"page=2".split("=")` gives `["page", "2"]`.
</details>

**Common mistakes:** forgetting to store the result of a string method; off-by-one with `slice` (end is exclusive); case-sensitive comparisons; `replace` vs `replaceAll`.

Solutions: [`solutions/`](solutions/)

---

## 9. Debug challenges 🐛

| File | Symptom |
|---|---|
| [`debug/01-search.js`](debug/01-search.js) | Search finds nothing |
| [`debug/02-shout.js`](debug/02-shout.js) | `toUpperCase()` "doesn't work" |
| [`debug/03-file-extension.js`](debug/03-file-extension.js) | Wrong extensions, including a very weird one |
| [`debug/04-username.js`](debug/04-username.js) | Only the first space is replaced |

> 🔍 **Technique — make invisible characters visible:** print strings inside brackets: ``console.log(`[${value}]`)``. Hidden spaces and empty strings suddenly become obvious.

---

## 10. 🏋️ Challenge — Truncate & title case

- `truncate("Learn Node.js today", 10)` → `"Learn Node…"` (only add `…` if it was actually cut).
- `titleCase("learn NODE fast")` → `"Learn Node Fast"`.

---

## 11. ✅ Self-check

- [ ] Why does `name.toUpperCase();` on its own line do nothing useful?
- [ ] What does `"hello".slice(1, 3)` return? Why not 3 characters?
- [ ] How would you get the domain from an email?
- [ ] How do you make a search case-insensitive?
- [ ] **Recognise it:** `const token = req.headers.authorization?.split(" ")[1];` — what does this do to `"Bearer abc123"`?

## 🤖 Using Claude

```text
I need to extract [X] from text like this: [example input].
Don't write the code. Which string methods should I look into,
and in what order would I use them?
```

➡️ **Next:** [Module 09 — Functions as Values](../09-functions-as-values/README.md)
