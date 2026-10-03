# Module 12 — Errors & Debugging

> **What you'll learn:** the three kinds of errors, how to read stack traces, `try` / `catch` / `finally`, `throw`, custom error types — and, most importantly, **a repeatable debugging process** so you can fix problems without immediately asking AI.
> **Why it matters:** every programmer spends a large part of their time debugging. The difference between beginners and experienced developers isn't fewer bugs — it's a calm, systematic way of finding them.

⏱️ About 3 hours · 📋 Prerequisites: Modules 01–11

```bash
cd modules/12-errors-and-debugging
```

---

## ⭐ The debugging process

Read this first. Then use it for every debug challenge in this module — and for the rest of your life.

```text
1. Read the error          — the whole thing, slowly. Type, message, location.
2. Find where it happened  — file and line. Open it.
3. Understand the intent   — what was this code TRYING to do?
4. Reproduce it            — make it happen reliably, with the smallest input possible.
5. Form a hypothesis       — "I think X is happening because Y."
6. Test the hypothesis     — console.log, a smaller input, a breakpoint. Confirmed? Rejected?
7. Fix it                  — change ONE thing.
8. Verify the fix          — run it again. Did it work? Did anything else break?
```

> 🧠 **The trap to avoid:** changing random things until it works. Even when that "works", you don't know why — and the bug often comes back. Steps 5–6 are what make it *debugging* instead of guessing.

There's a [**debugging journal template**](debugging-journal-template.md) in this folder. Use it for the bigger bugs.

---

## 1. Three kinds of errors

```bash
node examples/01-three-kinds-of-errors.js
```

| Kind | When noticed | How you find it |
|---|---|---|
| **Syntax error** | before anything runs | Node tells you the line |
| **Runtime error** | when that line runs (crash) | error type + message + stack trace |
| **Logic error** | never, unless you look | compare *expected* vs *actual* |

---

## 2. Reading a stack trace

```bash
node examples/02-reading-a-stack-trace.js
```

The stack trace lists the function calls that were in progress, **innermost first**. The top shows where it *crashed*; the bug is often where the bad value was *created*, further down.

> 🧠 `Cannot read properties of undefined (reading 'street')` → "you wrote `X.street` and `X` was undefined". Find `X`. Then ask: *who gave me this undefined?*

---

## 3. `try` / `catch`

```bash
node examples/03-try-catch.js
```

If anything inside `try` throws, the rest of `try` is skipped and `catch` runs. The program continues afterwards.

Use it around code that can **realistically** fail and where you can do something useful: parsing user input, reading files, network calls.

---

## 4. `finally`

```bash
node examples/04-finally.js
```

Runs whether things succeeded or failed — even after a `return`. For clean-up and "always do this" logic.

---

## 5. `throw`

```bash
node examples/05-throw.js
```

When a function can't do its job, `throw new Error("clear message")`. The caller can't accidentally ignore it. Errors travel up through function calls until something catches them (or the program crashes with a stack trace).

---

## 6. Error objects

```bash
node examples/06-error-objects.js
```

`error.name`, `error.message`, `error.stack`, and `error instanceof SomeErrorType`. **Always throw `Error` objects, never strings.**

---

## 7. Custom errors

```bash
node examples/07-custom-errors.js
```

```js
class NotFoundError extends Error {
  constructor(resource, id) {
    super(`${resource} with id ${id} not found`);
    this.name = "NotFoundError";
    this.statusCode = 404;
  }
}
```

You don't need to understand classes deeply — copy this pattern. Custom errors let the code that catches them react differently (400 vs 404 vs 500). Your Express API will do exactly this.

---

## 8. Where to catch

```bash
node examples/08-where-to-catch.js
```

- **Low-level functions:** throw. Don't hide problems.
- **Boundaries** (top of the script, an HTTP route, "process each line"): catch and decide what to do.
- **Never** write an empty `catch {}`. A swallowed error turns a clear crash into a mysterious bug somewhere else.

---

## 9. Debugging tools

```bash
node examples/09-debugging-tools.js
```

- Labelled logs: `console.log({ query, page })`
- `console.table(arrayOfObjects)`
- `JSON.stringify(value, null, 2)` for nested data
- `typeof` when the type might be wrong (`"2"` vs `2`!)
- The **VS Code debugger**: breakpoints, stepping, hovering over variables (see the comments in the file)

### 🧪 Experiment
Set a breakpoint in `09-debugging-tools.js` and run it in a VS Code **JavaScript Debug Terminal**. Step through a few lines with F10.

---

## 10. Exercises

| # | File | Practises |
|---|---|---|
| 12.1 | [`01-safe-parse.js`](exercises/01-safe-parse.js) | try/catch, turning errors into values |
| 12.2 | [`02-validate-and-throw.js`](exercises/02-validate-and-throw.js) | validation, `throw` with clear messages |
| 12.3 | [`03-custom-errors.js`](exercises/03-custom-errors.js) | custom errors → HTTP-style responses |
| 12.4 | [`04-finally-cleanup.js`](exercises/04-finally-cleanup.js) | `finally`, re-throwing |

<details><summary>💡 12.1</summary>

Put `JSON.parse` inside `try` and return the success object from inside `try`. Return the failure object from `catch`.
</details>
<details><summary>💡 12.2 hint 1</summary>

One guard per rule, in order — exactly like the validation in Module 05, but `throw new Error(...)` instead of `return "..."`.
</details>
<details><summary>💡 12.2 hint 2</summary>

`typeof null` is `"object"`! Check `input === null` too.
</details>
<details><summary>💡 12.3</summary>

`handleGetTask` = `try { return { status: 200, ... } } catch (error) { ... }`. Inside catch, use `instanceof` to decide. What error does `null.find(...)` throw? Neither of yours — so it's a 500.
</details>
<details><summary>💡 12.4</summary>

`try { return job(); } catch (error) { log...; throw error; } finally { log... }`
</details>

**Common mistakes:** empty catch blocks; declaring a variable inside `try` and using it after; throwing strings; catching errors too early so the caller never learns something failed.

Solutions: [`solutions/`](solutions/)

---

## 11. Debug challenges 🐛

These are the most important part of this module. Use the 8-step process for each. Write your hypothesis as a comment before you fix anything.

| File | Symptom | Skill |
|---|---|---|
| [`debug/01-deep-crash.js`](debug/01-deep-crash.js) | `TypeError` deep in a call chain | reading stack traces; crash line ≠ bug line |
| [`debug/02-swallowed-error.js`](debug/02-swallowed-error.js) | Claims success, silently failed | spotting swallowed errors |
| [`debug/03-try-scope.js`](debug/03-try-scope.js) | `config is not defined` | try + block scope |
| [`debug/04-thrown-string.js`](debug/04-thrown-string.js) | Error message is `undefined` | what you throw matters |
| [`debug/05-grade-report.js`](debug/05-grade-report.js) | ⭐ 3 bugs, no crash, wrong output | full process: isolate, test, fix one at a time |

<details><summary>💡 For 05 — where to start</summary>

Don't look at the whole program. Test one function in isolation: add `console.log(average(["80", "90", "85"]))` near the top. Is it 85? If not, that's your first bug. Fix, re-run, compare again.
</details>

---

## 12. 🏋️ Challenge — Break it yourself

Take any **solution** from Modules 05–10. Introduce one subtle bug (off-by-one, wrong comparison, missing return). Close the file, wait a day, then debug it from the ✅/❌ output alone, using the journal template.

---

## 13. ✅ Self-check

- [ ] Name the three kinds of errors and how each is discovered.
- [ ] In a stack trace, where did the crash happen, and where might the bug actually be?
- [ ] When does `finally` run?
- [ ] Why throw `new Error("...")` instead of a string?
- [ ] Why is an empty `catch {}` dangerous?
- [ ] Recite the 8 debugging steps.
- [ ] **Recognise it:** `try { ... } catch (err) { next(err); }` — what do you think this does in Express?

## 🤖 Using Claude — the debugging prompt

Only after steps 1–6 of the process:

```text
I have tried debugging this myself.

Expected: [...]
Actual: [exact error/output]
Here is what I think is happening: [MY HYPOTHESIS]
Here is how I tested it: [...]

Help me determine whether my reasoning is correct.
Do not immediately give me the final solution.
```

---

## 🛠️ Project time!

Go to **[Project Milestone 3 — Validation & errors](../../project/milestones/M3-validation-and-errors.md)**.

➡️ **Then:** [Module 13 — Modules](../13-modules/README.md)
