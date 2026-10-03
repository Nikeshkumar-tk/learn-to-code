# Module 16 — Files, Paths & JSON

> **What you'll learn:** reading and writing files, appending, working with folders, building paths safely, JSON in depth, the `os` and `URL` built-ins — and the **load → modify → save** pattern that gives programs a memory.
> **Why it matters:** this is where your programs stop forgetting everything when they exit. It's also the bridge to real backends: your task API will store its tasks in a JSON file.

⏱️ About 3 hours · 📋 Prerequisites: Modules 13–15 (especially async/await)

```bash
cd modules/16-files-and-json
```

Files the examples create go into `modules/16-files-and-json/output/` (ignored by git). Delete that folder whenever you like.

---

## 1. Reading a file

```bash
node examples/01-read-file.js
```

```js
import { readFile } from "node:fs/promises";
const text = await readFile(filePath, "utf8");
```

- `node:fs/promises` gives promise-based functions you can `await`.
- `"utf8"` means "give me text". Without it you get raw bytes (a `Buffer`).
- A missing file throws an error with `error.code === "ENOENT"`.

> You'll also see `readFileSync` in scripts. It works, but blocks everything until done — fine for a quick script at startup, bad inside a server handling many requests. This course uses the promise versions.

---

## 2. ⚠️ cwd vs the file's folder

```bash
node examples/02-cwd-vs-dirname.js
cd ../..
node modules/16-files-and-json/examples/02-cwd-vs-dirname.js
cd modules/16-files-and-json
```

> 🧠 Relative paths are relative to **where the terminal is** (`process.cwd()`), not where the code file is. For files that belong to your code, build paths from `import.meta.dirname`:
> ```js
> path.join(import.meta.dirname, "..", "data", "tasks.json")
> ```

---

## 3. Writing & appending

```bash
node examples/03-write-and-append.js
```

| Function | Effect |
|---|---|
| `writeFile(path, text)` | create or **replace** the whole file |
| `appendFile(path, text)` | add to the end (creates the file if needed) |
| `mkdir(path, { recursive: true })` | create a folder (and parents); no error if it exists |

---

## 4. Folders

```bash
node examples/04-directories.js
```

`readdir` lists a folder; `stat` gives size and dates; `path.extname` filters by type.

---

## 5. The `path` module

```bash
node examples/05-path-module.js
```

`join`, `basename`, `extname`, `dirname`, `resolve`. Never glue paths with `"/"` yourself — Windows uses `\`.

---

## 6. ⭐ JSON

```bash
node examples/06-json.js
```

| | |
|---|---|
| `JSON.stringify(value, null, 2)` | object → pretty JSON text |
| `JSON.parse(text)` | JSON text → object (throws on invalid JSON) |

**Doesn't survive a round trip:** `Date` (becomes a string), `undefined` and functions (disappear). JSON is *data only*.

---

## 7. ⭐ Persistence: load → modify → save

```bash
node examples/07-load-modify-save.js
node examples/07-load-modify-save.js
node examples/07-load-modify-save.js
```

The count goes up — the data lives in a file, not in memory.

```text
load()   — read the file; if it doesn't exist yet, start with a default
modify   — change the data in memory with normal JavaScript
save()   — write the whole thing back
```

Note: `ENOENT` → use the default. **Any other error → rethrow.** A corrupted file should be loud, not silently replaced with empty data (that would delete everything on the next save!).

---

## 8. `os` and `URL`

```bash
node examples/08-os-and-url.js
```

`URL` parses web addresses into path and query parameters — exactly what Express does for `req.path` and `req.query`.

---

## 9. 🧩 Putting it together: a notes app with persistence

```bash
node examples/09-notes-app/notes.js add "Buy milk"
node examples/09-notes-app/notes.js add "Call the plumber"
node examples/09-notes-app/notes.js done 1
node examples/09-notes-app/notes.js
node examples/09-notes-app/notes.js remove 2
node examples/09-notes-app/notes.js nonsense
```

Read [`notes.js`](examples/09-notes-app/notes.js) carefully. It uses almost everything from Modules 01–16. Notice how it's divided into **data access**, **commands** and **entry point** — that's the structure you'll formalise in Module 17.

### 🧪 Experiment
1. Add a `clear` command that removes all completed notes.
2. Open `output/notes.json` in your editor, break the JSON (delete a `}`), and run `list`. What happens? Is that the right behaviour?

---

## 10. Exercises

| # | File | Practises |
|---|---|---|
| 16.1 | [`01-file-stats.js`](exercises/01-file-stats.js) | reading, splitting, reduce |
| 16.2 | [`02-csv-to-json.js`](exercises/02-csv-to-json.js) | read → transform → write |
| 16.3 | [`03-json-store.js`](exercises/03-json-store.js) | ⭐ a reusable persistence helper |
| 16.4 | [`04-log-scanner.js`](exercises/04-log-scanner.js) | folders, filtering by extension, text search |
| 16.5 | [`05-parse-request-url.js`](exercises/05-parse-request-url.js) | `URL`, query strings |

<details><summary>💡 16.1</summary>

`text.replace(/\n$/, "")` removes one newline at the very end. Then `split("\n")` gives the lines.
</details>
<details><summary>💡 16.2</summary>

Destructure: `const [headerLine, ...lines] = text.split("\n")`. Build each record with `headers.forEach((header, i) => record[header] = values[i])`.
</details>
<details><summary>💡 16.3</summary>

Same `load` as example 07, but with `filePath` and `defaultValue` coming from the closure. `update` is three lines: load, call `changeFn`, save.
</details>
<details><summary>💡 16.4</summary>

Write a helper that returns `[{ name, lines }]` for every `.log` file — both functions can use it.
</details>
<details><summary>💡 16.5</summary>

`Object.fromEntries(url.searchParams)` turns the params into a plain object.
</details>

**Common mistakes:** forgetting `await`; relative paths that depend on cwd; `writeFile` with an object instead of `JSON.stringify(...)`; overwriting a file without loading it first; catching *every* error as "file missing".

Solutions: [`solutions/`](solutions/)

---

## 11. Debug challenges 🐛

| File | Symptom |
|---|---|
| [`debug/01-wrong-folder.js`](debug/01-wrong-folder.js) | `ENOENT` — but the file exists! |
| [`debug/02-object-object.js`](debug/02-object-object.js) | Settings can't be loaded back |
| [`debug/03-due-date.js`](debug/03-due-date.js) | `getFullYear is not a function` |
| [`debug/04-one-long-line.js`](debug/04-one-long-line.js) | 3 entries logged, 1 counted |
| [`debug/05-vanishing-notes.js`](debug/05-vanishing-notes.js) | Only the last note survives |

> 🔍 **Technique — look at the file!** When file-based code misbehaves, open the file it wrote in your editor. Half these bugs are obvious the moment you see what was actually saved.

---

## 12. ✅ Self-check

- [ ] Why use `node:fs/promises` instead of `readFileSync` in a server?
- [ ] What's the difference between `writeFile` and `appendFile`?
- [ ] Why build paths from `import.meta.dirname`?
- [ ] What happens to a `Date` when it goes through `JSON.stringify` and `JSON.parse`?
- [ ] Describe load → modify → save. Why must non-ENOENT errors be rethrown?

## 🤖 Using Claude

```text
I'm going to store my app's data in a JSON file using load → modify → save.
What problems might this approach have as the app grows? Just list them —
I want to know the limits, not get a different implementation.
```

---

## 🛠️ Project time!

Go to **[Project Milestone 5 — Saving to files](../../project/milestones/M5-saving-to-files.md)**.

➡️ **Then:** [Module 17 — Structuring a Node App](../17-structuring-node-apps/README.md)
