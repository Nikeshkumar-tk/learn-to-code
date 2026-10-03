# Learn to Code: JavaScript & Node.js, for Real

An interactive course that takes you from **programming fundamentals** to **building a backend API with Node.js and Express** — by writing, running, breaking and fixing code, not by reading about it.

> You've been building things with Claude Code. This course is about the next step: **understanding** what that code does, writing it yourself, and debugging it calmly. You'll finish thinking:
>
> *"I don't need Claude to write everything for me. I understand programming concepts, I can reason about code, I can write small programs myself, I can debug problems — and I know how to use Claude effectively when I need help."*

---

## 🚀 Start here

1. **Install Node.js 20 or newer** (the LTS version from <https://nodejs.org>). Check with:
   ```bash
   node --version
   ```
2. **Open this folder in VS Code** (recommended) and open its terminal (`` Ctrl + ` ``).
3. **Read [`USING-CLAUDE.md`](USING-CLAUDE.md)** (5 minutes). It explains how to use AI *while learning*.
4. **Skim [`ROADMAP.md`](ROADMAP.md)** to see where you're going.
5. **Begin [Module 00 — Getting Started](modules/00-getting-started/README.md)** and run your first program:
   ```bash
   cd modules/00-getting-started
   node examples/01-hello.js
   ```

Keep [`PROGRESS.md`](PROGRESS.md) open in a tab and tick things off as you go.

---

## 🔁 How every module works

```text
Learn the idea (briefly) → Run a tiny example → Predict → Experiment → Explain why
        → Exercise (with automatic ✅/❌ checks) → Debug broken code → Self-check → Next
```

Each module folder looks like this:

```text
modules/05-functions/
├── README.md       the lesson: short explanations, what to run, what to predict, what to try
├── examples/       small runnable programs — run them, change them, break them
├── exercises/      your work: starter files with instructions and built-in checks
├── debug/          deliberately broken programs to diagnose and fix
└── solutions/      reference solutions + explanations of every bug (look AFTER trying!)
```

**Running things:** every command in a module's README assumes your terminal is *in that module's folder* (`cd modules/05-functions`). Then: `node examples/01-why-functions.js`, `node exercises/01-greet.js`, etc.

**Checks:** exercises end with automatic checks. Run the file — ❌ means "not yet", ✅ means done. You're finished when every line is ✅.

**Symbols you'll see:** ▶️ run this · 🔮 predict before running · 🧪 experiment · 🧠 key idea · ⚠️ common trap · 🐛 debug challenge · 💡 hint (click to expand) · 🏋️ optional challenge

---

## 📚 The modules

| # | Module | You'll be able to… |
|---|---|---|
| **Phase 1** | **Programming fundamentals** | |
| 00 | [Getting Started](modules/00-getting-started/README.md) | run programs and read error messages |
| 01 | [Values & Variables](modules/01-values-and-variables/README.md) | store and name data; understand types |
| 02 | [Operators](modules/02-operators/README.md) | calculate, compare, combine; avoid `==` and `\|\|` traps |
| 03 | [Making Decisions](modules/03-decisions/README.md) | write if / else / switch / ternaries; know truthy & falsy |
| 04 | [Loops](modules/04-loops/README.md) | repeat work; use the accumulator pattern |
| **Phase 2** | **Building blocks** | |
| 05 | [Functions](modules/05-functions/README.md) | break problems into small, reusable functions |
| 06 | [Arrays](modules/06-arrays/README.md) | work with lists; understand mutation & references |
| 07 | [Objects](modules/07-objects/README.md) | model real data; copy & update safely |
| 08 | [Strings](modules/08-strings/README.md) | clean, search and parse real-world text |
| **Phase 3** | **Thinking in functions** | |
| 09 | [Functions as Values](modules/09-functions-as-values/README.md) | write callbacks and your own higher-order functions |
| 10 | [Array Methods](modules/10-array-methods/README.md) | use map / filter / find / sort / reduce with confidence |
| 11 | [Scope & Closures](modules/11-scope-and-closures/README.md) | predict which variable is which; use closures |
| **Phase 4** | **Robust code** | |
| 12 | [Errors & Debugging](modules/12-errors-and-debugging/README.md) | debug methodically; throw and catch errors well |
| 13 | [Modules](modules/13-modules/README.md) | split code into files with import / export |
| 14 | [Async JavaScript](modules/14-async-javascript/README.md) | use promises and async / await correctly |
| **Phase 5** | **Node.js** | |
| 15 | [Node.js & npm](modules/15-node-and-npm/README.md) | use argv, env vars, exit codes, npm packages & scripts |
| 16 | [Files, Paths & JSON](modules/16-files-and-json/README.md) | read/write files; persist data as JSON |
| 17 | [Structuring a Node App](modules/17-structuring-node-apps/README.md) | grow a script into a layered application |
| **Phase 6** | **Express** | |
| 18 | [HTTP & Express Basics](modules/18-http-and-express-basics/README.md) | build a JSON API with routes, params, query & body |
| 19 | [Express in Depth](modules/19-express-in-depth/README.md) | use middleware, routers and central error handling |

## 🛠️ The project: a Task Management API

You build it **progressively** in [`project/`](project/README.md) — eight milestones that start right after Module 07 and finish after Module 19. It ends as a layered Express API with file persistence, validation, error handling and a CLI. Every milestone has automatic checks (`npm run check:m1` … `check:m8`).

---

## 🧰 Course files

| File | What it's for |
|---|---|
| [`ROADMAP.md`](ROADMAP.md) | The learning path and why it's in this order |
| [`PROGRESS.md`](PROGRESS.md) | Your progress tracker — run `npm run progress` for a summary |
| [`USING-CLAUDE.md`](USING-CLAUDE.md) | How to use AI to learn faster instead of skipping the learning |
| [`CLAUDE.md`](CLAUDE.md) | Tells Claude Code to act as your mentor in this folder (hints, not solutions) |
| [`modules/12-errors-and-debugging/debugging-journal-template.md`](modules/12-errors-and-debugging/debugging-journal-template.md) | A template for working through hard bugs |
| `tools/` | `npm run progress` (your summary), `npm run verify` and `npm run verify:project` (course self-tests) |

## ⚙️ Setup notes

- **Node.js 20+** is required (developed and tested on Node 24). Modules 18–19 and project milestones 7–8 need `npm install` (internet connection required once).
- **Terminal:** PowerShell, Command Prompt, Git Bash, macOS Terminal and Linux shells all work. Where commands differ (e.g. setting environment variables), both versions are shown.
- **Editor:** VS Code is recommended (built-in terminal, debugger, Markdown preview with clickable hints). To read the lessons nicely, right-click a `README.md` → **Open Preview**.
- **Git** is optional but recommended: `git init` and commit after each exercise to see your progress — and to undo experiments.

## ❓ FAQ

**I'm stuck.** Climb the help ladder in [`USING-CLAUDE.md`](USING-CLAUDE.md). Struggling for 10–15 minutes is part of learning, not a sign you're doing it wrong.

**Can I skip modules?** If you can pass a module's exercises and answer its self-check without help, yes. Otherwise, later modules will feel like magic again.

**Can I look at solutions?** After a genuine attempt. Then close the solution and rewrite it from memory.

**The checks crash with `ReferenceError: x is not defined`.** That means the checks are looking for something you haven't created yet (or misspelled). That's expected at the start of an exercise.
