# Module 07 — Objects

> **What you'll learn:** how to group related data under names — creating and reading objects, nested data, optional chaining, methods, shorthand & computed properties, destructuring, spread, references, and `Object.keys/values/entries`.
> **Why it matters:** a task, a user, an HTTP request, a config file, a JSON response — they're all objects. Arrays of objects are the shape of nearly all application data.

⏱️ About 3 hours · 📋 Prerequisites: Modules 01–06

```bash
cd modules/07-objects
```

---

## 1. Creating & reading objects

```bash
node examples/01-creating-and-accessing.js
```

| | Arrays | Objects |
|---|---|---|
| Items are found by… | **position** (`list[0]`) | **name** (`task.title`) |
| Use for | ordered lists of similar things | describing one thing with several properties |

**Dot vs bracket:** `task.title` when you know the name while writing code. `task[key]` when the name is in a variable.

### 🔮 Predict
```js
const key = "priority";
console.log(task[key], task.key, task["key"]);
```

---

## 2. Changing objects

```bash
node examples/02-modifying-and-deleting.js
```

Assign to add or change; `delete` to remove. Missing properties are `undefined`, not errors.

---

## 3. Nested data & optional chaining `?.`

```bash
node examples/03-nested-and-optional-chaining.js
```

> 🧠 The error **`Cannot read properties of undefined (reading 'x')`** means "you wrote `something.x` and `something` was undefined". Look at what's to the *left* of `.x`.

`a?.b` → "if `a` is null/undefined, stop and give `undefined`; otherwise get `a.b`". Combine with `??` for a default:

```js
const city = user.profile?.address?.city ?? "Unknown";
```

---

## 4. Methods

```bash
node examples/04-methods.js
```

A **method** is a function stored in an object. `"hi".toUpperCase()`, `list.push(x)`, `Math.max()` — you've been calling methods since Module 01. Inside a method, `this` means "the object before the dot". We'll mostly avoid writing `this` in this course; recognising it is enough.

---

## 5. Shorthand & computed properties

```bash
node examples/05-shorthand-and-computed.js
```

```js
return { title, priority };         // shorthand for { title: title, priority: priority }
const update = { [fieldName]: value }; // computed: the key comes from a variable
```

---

## 6. Destructuring

```bash
node examples/06-destructuring.js
```

Object destructuring works **by name**. You'll see it constantly in Express:

```js
const { id } = req.params;
const { title, priority = "medium" } = req.body;
```

---

## 7. ⭐ Spread, references & copying

```bash
node examples/07-spread-and-references.js
```

Everything you learned about array references applies to objects.

```js
const updated = { ...task, completed: true };   // copy + change (no mutation)
const settings = { ...defaults, ...userChoices }; // merge; later wins
```

> ⚠️ **Spread is shallow.** Nested objects/arrays are still shared. Copy each level you change.

---

## 8. `Object.keys`, `Object.values`, `Object.entries`

```bash
node examples/08-keys-values-entries.js
```

These turn an object into an array so you can loop over it. `entries` + destructuring is the most useful:

```js
for (const [key, value] of Object.entries(obj)) { ... }
```

Objects also make great **lookup tables** (dictionaries): `statusMessages[code]`.

---

## 9. Arrays of objects

```bash
node examples/09-arrays-of-objects.js
```

This is exactly the data your task API will manage. Notice how much looping is needed to find/filter/collect — Module 10 will make each of those a one-liner.

---

## 10. Exercises

| # | File | Practises |
|---|---|---|
| 07.1 | [`01-user-factory.js`](exercises/01-user-factory.js) | creating & reading objects, shorthand |
| 07.2 | [`02-update-immutably.js`](exercises/02-update-immutably.js) | spread, nested copies |
| 07.3 | [`03-safe-access.js`](exercises/03-safe-access.js) | bracket notation, `?.`, `??` |
| 07.4 | [`04-inventory-report.js`](exercises/04-inventory-report.js) | `Object.values/entries`, building objects |
| 07.5 | [`05-word-frequency.js`](exercises/05-word-frequency.js) | objects as dictionaries |

<details><summary>💡 07.2 — moveTo</summary>

You need a new outer object **and** a new `address` object: `{ ...user, address: { ...user.address, city } }`.
</details>
<details><summary>💡 07.3 — getFirstTagName</summary>

`post.tags?.[0]` gives the first tag or `undefined`. Then `?.name`, then `??`.
</details>
<details><summary>💡 07.4 — restock</summary>

`const result = {};` then inside the loop `result[name] = count + amount;`
</details>
<details><summary>💡 07.5 hint 1</summary>

`counts[word]` is `undefined` the first time you see a word.
</details>
<details><summary>💡 07.5 hint 2</summary>

`counts[word] = (counts[word] ?? 0) + 1;` handles both cases in one line. Can you explain why?
</details>

**Common mistakes:** `obj.key` when the key is in a variable; thinking spread copies nested objects; misspelled property names silently giving `undefined`.

Solutions: [`solutions/`](solutions/)

---

## 11. Debug challenges 🐛

| File | Symptom |
|---|---|
| [`debug/01-dynamic-field.js`](debug/01-dynamic-field.js) | Every field shows `undefined` |
| [`debug/02-shallow-copy.js`](debug/02-shallow-copy.js) | Editing a draft changes the published post |
| [`debug/03-nothing-is-done.js`](debug/03-nothing-is-done.js) | 0 tasks done (really 2) |
| [`debug/04-cannot-read.js`](debug/04-cannot-read.js) | `TypeError: Cannot read properties of undefined` |

> 🔍 **Technique — print the whole object:** when a property seems wrong, `console.log(theObject)` and *look at the real keys*. Typos like `complete` vs `completed` jump out.

---

## 12. 🏋️ Challenge — Group by

Write `groupByPriority(tasks)` that turns an array of tasks into `{ high: [...], medium: [...], low: [...] }`. Use the dictionary pattern from 07.5.

---

## 13. ✅ Self-check

- [ ] When must you use bracket notation instead of dot notation?
- [ ] What does `user.profile?.name ?? "Anonymous"` do, step by step?
- [ ] What does "spread is shallow" mean? Show a bug it causes.
- [ ] How do you loop over an object's keys and values together?
- [ ] **Recognise it:** `const { title, completed = false } = req.body;` — what if the body has no `completed`?

## 🤖 Using Claude

```text
I'm modelling [describe your data]. Here's the object shape I came up with: [paste].
What questions should I ask myself about this design? Don't propose a new design.
```

---

## 🛠️ Project time!

You now know enough to start building. Go to **[Project Milestone 1 — Task data & functions](../../project/milestones/M1-task-data.md)**.

➡️ **Then:** [Module 08 — Strings](../08-strings/README.md)
