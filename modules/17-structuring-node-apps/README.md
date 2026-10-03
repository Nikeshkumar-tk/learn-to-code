# Module 17 — Structuring a Node App

> **What you'll learn:** how a quick script grows into a small, well-organised application — entry point, configuration, utilities, services, data access — and, more importantly, **why** each separation exists.
> **Why it matters:** this is the shape of nearly every Node backend. When you open an unfamiliar Express project and see `routes/`, `services/`, `data/`, `config.js`, you'll know what lives where and why. And your project is about to become one.

⏱️ About 2.5 hours · 📋 Prerequisites: Modules 12–16

```bash
cd modules/17-structuring-node-apps
```

---

## The journey: one app, five stages

We'll follow one expense tracker as it grows. Run each stage and **read the code side by side**.

### Stage 1 — A script

```bash
node examples/stage-1-script/expenses.js
```

Top to bottom, everything inline. **This is fine** for a one-off task! Don't build an architecture for a 20-line script.

### Stage 2 — Functions

```bash
node examples/stage-2-functions/expenses.js
```

Same file, but each job has a named function. You can now read, test and reuse pieces.

### Stage 3 — Modules

```bash
node examples/stage-3-modules/main.js
```

Generic helpers (`money.js`) are separate from expense rules (`expenses.js`).

### Stage 4 — A small application ⭐

```bash
node examples/stage-4-app/src/index.js add Coffee 3.5 food
node examples/stage-4-app/src/index.js add "Train ticket" 12 transport
node examples/stage-4-app/src/index.js list
node examples/stage-4-app/src/index.js add Snack -2
node examples/stage-4-app/src/index.js remove 99
```

```text
stage-4-app/
├── data/                         (created at runtime — the JSON "database")
└── src/
    ├── index.js                  ENTRY POINT   — the interface: argv in, text out, exit codes
    ├── config.js                 CONFIGURATION — reads the environment once
    ├── errors.js                 shared error types
    ├── utils/money.js            UTILITIES     — generic, pure helpers
    ├── services/expense-service.js  SERVICE    — the business rules
    └── data/expense-repository.js   DATA ACCESS — the only code that touches the file
```

### Stage 5 — Reuse (the payoff)

```bash
node examples/stage-5-reuse/monthly-report.js
```

A completely different program reuses the same service. **Your Express API will do exactly this with your task service.**

---

## Why separate? (the important part)

| Layer | Its one job | It must NOT… | Why the separation pays off |
|---|---|---|---|
| **Entry point / interface** | translate the outside world (argv, HTTP) into function calls, and results into output | contain business rules | You can add a second interface (CLI + API) without duplicating rules |
| **Service** | the rules: validation, calculations, ids | print, read argv, exit, know about HTTP or files | Rules live in one place; easy to test with plain function calls |
| **Data access (repository)** | load and save data | contain rules | Switch from JSON file to a database by rewriting one file |
| **Config** | read and validate settings once | be scattered across the codebase | One place to see every setting |
| **Utils** | small generic helpers | know about your domain | Reusable anywhere |

> 🧠 **Dependency direction:** `index.js → service → repository`. Never backwards. The service doesn't know who calls it; the repository doesn't know why data is being saved.

### How to decide where a line of code goes

Ask: *"If I replaced the terminal with a web API, would this line need to change?"*
- **Yes** → it belongs in the interface (entry point / route).
- **No, but it would change if I swapped JSON files for a database** → data access.
- **Neither** → it's a business rule → service.

### ⚠️ Don't over-engineer

Four layers for a 50-line script is worse than one file. Add structure when you feel the pain: the file is hard to navigate, you need to reuse logic, or you're adding a second interface. No "enterprise" patterns needed.

---

## Exercises

| # | Folder | Practises |
|---|---|---|
| 17.1 | [`01-refactor-inventory/`](exercises/01-refactor-inventory/) | ⭐ turning a tangled script into layers |
| 17.2 | [`02-add-a-feature/`](exercises/02-add-a-feature/) | adding a feature to the right layers |

```bash
node exercises/01-refactor-inventory/check.js
node exercises/02-add-a-feature/check.js
```

<details><summary>💡 17.1 hint 1 — start here</summary>

Do STEP 1 (labelling with comments) properly. Once every chunk has a label, the files almost write themselves.
</details>
<details><summary>💡 17.1 hint 2</summary>

The old code used `process.exit(1)` for errors. In the service, `throw new ValidationError(...)` instead. The CLI catches and decides.
</details>
<details><summary>💡 17.1 hint 3</summary>

`check.js` sets `INVENTORY_FILE` to a temp file before importing your code, so your `config.js` must read `process.env.INVENTORY_FILE`.
</details>
<details><summary>💡 17.2</summary>

Filter by `e.date.startsWith(month)`, then reduce into `{ category: total }` (Module 10!).
</details>

**Common mistakes:** `console.log` or `process.exit` inside a service; reading `process.env` all over the place; the repository containing rules ("don't save negative amounts"); splitting into so many tiny files that nothing is readable.

Solutions: [`solutions/`](solutions/)

---

## Debug challenges 🐛

These bugs aren't typos — they're **design** bugs: code in the wrong layer.

| Folder | Symptom |
|---|---|
| [`debug/01-service-exits/`](debug/01-service-exits/) | Bulk import dies at the first bad line |
| [`debug/02-rule-in-the-wrong-layer/`](debug/02-rule-in-the-wrong-layer/) | A negative expense sneaks in |

```bash
node debug/01-service-exits/import.js
node debug/02-rule-in-the-wrong-layer/main.js
```

---

## ✅ Self-check

- [ ] Name the layers of stage 4 and the one job of each.
- [ ] Why must a service never call `process.exit` or `console.log`?
- [ ] Which file would change if you moved from a JSON file to a database?
- [ ] Why read `process.env` only in `config.js`?
- [ ] When is it *wrong* to add this structure?
- [ ] **Recognise it:** in an Express project you see `routes/tasks.js`, `services/task-service.js`, `db/task-repository.js`. What lives in each?

## 🤖 Using Claude

```text
Here's the folder structure and a one-line description of each file in my app: [paste].
Act as a code reviewer. Point out any responsibility that seems to be in the wrong layer,
and explain why. Don't rewrite anything.
```

---

## 🛠️ Project time!

Go to **[Project Milestone 6 — A command-line app](../../project/milestones/M6-cli-app.md)**.

➡️ **Then:** [Module 18 — HTTP & Express Basics](../18-http-and-express-basics/README.md)
