# 🗺️ Course Roadmap

**Where you start:** you can get things done with AI, but code you didn't write feels like a black box.
**Where you end:** you can read unfamiliar Node.js code, write small programs yourself, debug methodically, and you've built a layered Express API from scratch — with Claude as a mentor rather than a ghostwriter.

---

## The big picture

```text
PHASE 1 — PROGRAMMING FUNDAMENTALS        "I can make the computer do things"
  00 Getting Started → 01 Values & Variables → 02 Operators → 03 Decisions → 04 Loops
                                   │
PHASE 2 — BUILDING BLOCKS                 "I can organise logic and data"
  05 Functions → 06 Arrays → 07 Objects (🛠️ Project M1) → 08 Strings
                                   │
PHASE 3 — THINKING IN FUNCTIONS           "I understand how modern JS code works"
  09 Functions as Values → 10 Array Methods → 11 Scope & Closures  🛠️ Project M2
                                   │
PHASE 4 — WRITING ROBUST CODE             "I can handle failure and organise code"
  12 Errors & Debugging → 13 Modules → 14 Async JavaScript         🛠️ Project M3, M4
                                   │
PHASE 5 — NODE.JS                          "I can build real programs"
  15 Node & npm → 16 Files & JSON → 17 Structuring Node Apps       🛠️ Project M5, M6
                                   │
PHASE 6 — EXPRESS                          "I can build a backend"
  18 HTTP & Express Basics → 19 Express in Depth                   🛠️ Project M7, M8 🏁
```

Total: **20 modules** (about 45–55 hours of focused work) plus **8 project milestones** (about 16 hours). Go at your own pace — consistency beats speed.

---

## Why this order? (prerequisites)

Every module only uses ideas from modules before it. Here's why each one sits where it does:

| # | Module | Comes after… because |
|---|---|---|
| 00 | Getting Started | — Everything starts with running a file and reading an error. |
| 01 | Values & Variables | You need to know how to run code. Values are what programs manipulate. |
| 02 | Operators | Operators combine **values** into new values. |
| 03 | Making Decisions | Conditions are built from **comparison and logical operators**. |
| 04 | Loops | Loops repeat code and stop based on **conditions**. The accumulator pattern is born here. |
| 05 | Functions | Functions package the **statements, conditions and loops** you can now write. |
| 06 | Arrays | Array helpers are written as **functions**; rest parameters need functions. |
| 07 | Objects | Objects often hold **arrays**; arrays of objects need both. Optional chaining lives here because it needs objects. |
| 08 | Strings | String methods return **arrays** (`split`) and are used to build **objects** (parsing). |
| 09 | Functions as Values | Needs solid **functions** *and* **arrays** — you rebuild `forEach`/`map`/`filter` from loops before meeting them. |
| 10 | Array Methods | Built-in **higher-order functions** — only meaningful once "functions are values" has clicked. `reduce` = the **accumulator** from 04. |
| 11 | Scope & Closures | Explains *why* the factories from 09 "remember" things. Needs nested functions. |
| 12 | Errors & Debugging | You now have enough code to have real bugs. Custom errors need objects. |
| 13 | Modules | Splitting code needs enough code to split, and clear function boundaries. |
| 14 | Async JavaScript | Promises are objects; `await` needs functions, errors (try/catch) and callbacks. Comes right before Node, where files and servers are async. |
| 15 | Node & npm | Now that the *language* is solid, meet the *runtime*: argv, env, npm, packages. |
| 16 | Files & JSON | File operations are **async**; JSON needs objects/arrays; paths need modules. |
| 17 | Structuring Node Apps | Needs modules, files, errors and config to have something worth structuring. |
| 18 | HTTP & Express Basics | Route handlers are **callbacks**, often **async**; responses are **JSON**; errors are thrown. Everything before this was preparation. |
| 19 | Express in Depth | Middleware = **higher-order functions + closures**; error handling = **custom errors**; routers = **modules**. |

### The functions thread (the spine of the course)

Functions are taught in deliberate steps so higher-order functions never feel like memorised syntax:

```text
05  write & call functions, return values, arrow syntax
 └─ 06  functions that take and return arrays; rest parameters
     └─ 07  functions stored in objects (methods); functions that build objects
         └─ 09  functions ARE values → callbacks → writing myMap/myFilter by hand → factories → composition
             └─ 10  the built-in versions: map, filter, find, reduce...
                 └─ 11  closures: why returned functions remember things
                     └─ 14  callbacks → promises → async functions
                         └─ 18/19  route handlers, middleware and middleware factories
```

---

## How the project grows with you

The project isn't an add-on at the end — it grows as you learn, so every concept gets used for real.

| Milestone | After module | What you add | Concepts it exercises |
|---|---|---|---|
| M1 | 07 | Task objects, create/add/format functions | objects, arrays, functions, loops |
| M2 | 10 | complete, update, delete, filter, search, sort, stats | map/filter/find/sort/reduce, strings |
| M3 | 12 | validation + custom errors | throw, error classes, guard clauses |
| M4 | 13 | split into `src/` modules | import/export, boundaries |
| M5 | 16 | save to `data/tasks.json` via repository + service | async/await, fs, JSON |
| M6 | 17 | a CLI + config | argv, env, layers, exit codes |
| M7 | 18 | an Express API | routes, params, query, body, status codes |
| M8 | 19 | router + middleware + central error handling | middleware, error handler, structure |

By M8 every layer of the app maps to a module you completed:

```text
task-routes.js  ← 18, 19      cli.js ← 15, 17      task-service.js ← 14, 16, 17
task-logic.js   ← 05–10       task-validation.js ← 03, 08, 12      errors.js ← 12
task-repository.js ← 16       config.js ← 15       middleware/ ← 19
```

---

## What's deliberately NOT here

To keep the focus on understanding, this course leaves out: the event loop and Node internals, streams in depth, worker threads and clustering, performance tuning, databases and ORMs, Docker/cloud/DevOps, microservices, and algorithm/LeetCode training. They're great *next* topics — and you'll learn them much faster with these foundations.

## Where to go next

- **Databases:** swap the JSON repository for SQLite or PostgreSQL — only `task-repository.js` should change. (That's the payoff of Module 17.)
- **Testing:** `node:test` in depth, test-driven development.
- **TypeScript:** types on top of everything you now know.
- **Authentication:** sessions, tokens, password hashing.
- **How Node works under the hood:** the event loop, streams, performance.
