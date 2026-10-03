# Module 13 — Modules

> **What you'll learn:** how to split code across files with `export` and `import` — named vs default exports, module privacy, shared module state — and how to turn one big file into a small, organised multi-file program.
> **Why it matters:** no real project is one file. Express apps are dozens of files. Understanding *why* code is split (and how files talk to each other) is what makes unfamiliar codebases navigable.

⏱️ About 2.5 hours · 📋 Prerequisites: Modules 05–12

```bash
cd modules/13-modules
```

> ℹ️ From this module on, examples live in **folders** (several files work together). You run the "entry" file — usually `main.js`.

---

## 1. Why modules exist

Imagine your task app in one 2,000-line file. To fix a date-formatting bug you scroll through validation, storage and HTTP code. Two people editing it constantly collide. A helper named `format` clashes with another `format`.

Modules fix this:

| Problem | How modules help |
|---|---|
| Hard to find things | Each file has **one job** and a clear name |
| Accidental interference | Everything is **private** unless exported |
| Name clashes | Each file has its own scope |
| Reuse | Import the same function anywhere |

---

## 2. Your first module

```bash
node examples/01-first-module/main.js
```

```js
// math-utils.js
export function add(a, b) { ... }

// main.js
import { add } from "./math-utils.js";
```

- `./` = "same folder as this file", `../` = "one folder up".
- **The `.js` extension is required** in Node's ES modules.

### 🧪 Experiment
Try importing `secretHelper`. Read the error carefully — you'll meet it again in Debug 13.2.

---

## 3. Named vs default exports

```bash
node examples/02-named-and-default/main.js
```

| | Export | Import |
|---|---|---|
| **Named** (many per file) | `export function formatMoney` | `import { formatMoney } from "./format.js"` |
| **Default** (one per file) | `export default function formatTask` | `import anyName from "./format.js"` |

Braces ⇔ named. No braces ⇔ default. Mixing them up is the #1 module error.

---

## 4. Other import styles

```bash
node examples/03-import-styles/main.js
```

`import * as validate`, `import { x as y }`, `import path from "node:path"` (built-in), `import express from "express"` (npm package).

---

## 5. Module scope & shared state

```bash
node examples/04-module-scope/main.js
```

> 🧠 A module's code runs **once**, on first import. Every importer gets the **same** exported things. A module-level variable is like a closure variable that the whole app shares.

Great for a single shared store (your project's in-memory tasks!). A trap when you wanted separate copies (Debug 13.3).

---

## 6. ⭐ From one file to many

```bash
node examples/05-one-file-to-many/before.js
node examples/05-one-file-to-many/after/main.js
```

Same output, different organisation. Compare them side by side.

```text
after/
├── main.js        entry point — wires everything together, reads like a summary
├── books.js       data + operations (owns the array; nobody else touches it directly)
├── validation.js  rules about valid input
└── format.js      turning data into text
```

**How to decide where code goes** — ask about each function:
1. *What job does it do?* (store data? check input? display? coordinate?)
2. *Who needs it?* Import it only where it's needed.
3. *What should be private?* Export functions, not the raw data.

> ⚠️ Don't over-split. Three 10-line files can be harder to follow than one 30-line file. Split when a file has **several jobs** or is getting hard to navigate.

---

## 7. Recognising CommonJS (`require`)

```bash
node examples/06-commonjs-recognition/main.cjs
```

Lots of existing Node code (and AI answers!) uses `require` / `module.exports`. Same ideas, older syntax. The translation table is in the file. This course uses ES modules (`"type": "module"` in `package.json`).

---

## 8. Exercises

Each exercise is a folder. Run the `check.js` inside it.

| # | Folder | Practises |
|---|---|---|
| 13.1 | [`01-first-exports/`](exercises/01-first-exports/) | named + default exports, private helpers |
| 13.2 | [`02-split-the-file/`](exercises/02-split-the-file/) | ⭐ refactoring one file into modules |
| 13.3 | [`03-shared-store/`](exercises/03-shared-store/) | module-level state shared across files |

```bash
node exercises/01-first-exports/check.js
node exercises/02-split-the-file/check.js
node exercises/03-shared-store/check.js
```

> Before you start, the checks fail with errors like `does not provide an export named 'capitalize'` or `Cannot find module '.../contacts.js'`. That's expected — **the error message is your to-do list**: it names exactly the export or file that's missing.

<details><summary>💡 13.1</summary>

`export default function formatName(first, last) { ... }`. In `check.js`, look at how it's imported — that tells you exactly what your module must provide.
</details>
<details><summary>💡 13.2 hint 1</summary>

Create the three new files first, move code into them, add `export` to what others need. Then fix the imports in `app.js` until it runs again.
</details>
<details><summary>💡 13.2 hint 2</summary>

`formatList` uses `formatContact` — they're in the same file, so no import is needed between them.
</details>
<details><summary>💡 13.3</summary>

`key in settings` tells you whether the key exists. Return `{ ...settings }` for the copy.
</details>

**Common mistakes:** missing `.js` in import paths; braces for a default export (or no braces for a named one); exporting the raw array instead of functions; circular imports (A imports B imports A) — if you hit strange `undefined`s, check for that.

Solutions: [`solutions/`](solutions/)

---

## 9. Debug challenges 🐛

| Folder | Symptom |
|---|---|
| [`debug/01-cannot-find/`](debug/01-cannot-find/) | `ERR_MODULE_NOT_FOUND` |
| [`debug/02-no-such-export/`](debug/02-no-such-export/) | `does not provide an export named 'log'` |
| [`debug/03-leaky-cart/`](debug/03-leaky-cart/) | Two customers share one cart |

Run each with `node debug/<folder>/main.js`.

---

## 10. ✅ Self-check

- [ ] Why do modules exist? Give three reasons.
- [ ] What's the difference between named and default exports, in how you import them?
- [ ] Why is it usually better to export functions than the raw data array?
- [ ] How many times does a module's top-level code run if five files import it?
- [ ] Translate `const { readFile } = require("fs")` into ES module syntax.
- [ ] **Recognise it:** `import tasksRouter from "./routes/tasks.js"; app.use("/tasks", tasksRouter);`

## 🤖 Using Claude

```text
Here is how I plan to split my code into files: [list files + what goes in each].
Don't write any code. Are the responsibilities clear? Is anything in the wrong place,
or am I splitting too much?
```

---

## 🛠️ Project time!

Go to **[Project Milestone 4 — Split into modules](../../project/milestones/M4-modules.md)**.

➡️ **Then:** [Module 14 — Asynchronous JavaScript](../14-async-javascript/README.md)
