# Module 00 — Getting Started

> **What you'll learn:** what a program is, how to run JavaScript with Node.js, and how to read an error message without panicking.
> **Why it matters:** everything in this course is "write a file → run it → look at what happened". This module makes that loop feel normal.

⏱️ About 45 minutes · 📋 Prerequisites: none

---

## 0. Setup

1. Check that Node.js is installed. Open a terminal and type:

   ```bash
   node --version
   ```

   You should see `v20.x.x` or higher. If you see "command not found", install the **LTS** version from <https://nodejs.org> and reopen your terminal.

2. Move into this module's folder. **Every command in this README assumes you are here:**

   ```bash
   cd modules/00-getting-started
   ```

> 💡 **Jargon — terminal:** the text window where you type commands (PowerShell, Git Bash, the VS Code terminal…). **Command:** an instruction you type there and run with Enter.

---

## 1. What is a program? What is Node.js?

A **program** is a text file full of instructions. The computer reads them **from top to bottom** and does what they say.

**JavaScript** is the language we write the instructions in.
**Node.js** is a program that *reads and runs* JavaScript files on your computer. (JavaScript was born inside web browsers; Node lets it run anywhere — including on servers. That's how backends get built.)

So `node hello.js` means: *"Node, please read `hello.js` and do what it says."*

### ▶️ Run it

```bash
node examples/01-hello.js
```

Open [`examples/01-hello.js`](examples/01-hello.js) and look at it next to the output.

### 🧪 Experiment

1. Change the text inside the quotes. Save. Run again.
2. Duplicate the `console.log(...)` line. Predict the output, then run.

---

## 2. Top to bottom, one line at a time

### 🔮 Predict first

Open [`examples/02-top-to-bottom.js`](examples/02-top-to-bottom.js). **Before running it**, write down what you think the last four lines will print.

```bash
node examples/02-top-to-bottom.js
```

Were you right about `console.log("10 + 5")`?

> 🧠 **Key idea:** text in quotes is a **string**. JavaScript never "looks inside" a string to do maths — it prints it exactly. Without quotes, `10 + 5` is an **expression**: something JavaScript *calculates* into a value.

### 🧪 Experiment

1. Move "Step 3" above "Step 1". Run. The computer doesn't know the steps are numbered — it just obeys the order of lines.
2. Change `10 + 5` to `10 * 5`, then `10 / 4`, then `10 - 50`. Run after each change.

---

## 3. Comments — notes for humans

```bash
node examples/03-comments.js
```

Anything after `//` is ignored by Node. Use comments to explain *why* code exists. You'll also use them to temporarily switch a line off while experimenting (**commenting out**).

### 🧪 Experiment

In VS Code, put your cursor on a line and press `Ctrl + /` (Mac: `Cmd + /`). It toggles a comment. Un-comment the hidden line in `03-comments.js` and run again.

---

## 4. Your first error (on purpose)

```bash
node examples/04-first-error.js
```

You'll see something like:

```text
file:///.../examples/04-first-error.js:8
consol.log("Line 8 has a typo...");
^

ReferenceError: consol is not defined
    at file:///.../examples/04-first-error.js:8:1
```

### How to read it — in this order

| Look for | Here | What it tells you |
|---|---|---|
| **Error type** | `ReferenceError` | The *kind* of problem. ReferenceError = "you used a name I don't know". |
| **Message** | `consol is not defined` | The specific complaint. Read it literally. |
| **Location** | `04-first-error.js:8:1` | File, **line 8**, column 1. Go there. |

Lines 6 and 7 printed, but line 9 did not. **When a program crashes, it stops at the crash.**

> 🧠 **The most important habit in this whole course:** when you see an error, *read it* before doing anything else. It usually tells you what's wrong and where.

Fix the typo and run again.

---

## 5. Exercises

Try each one **before** looking at the solution. Ten minutes of struggling is how learning happens.

### Exercise 00.1 — Introduce yourself

- **Goal:** practise writing and running `console.log`.
- **Start:** [`exercises/01-introduce-yourself.js`](exercises/01-introduce-yourself.js)
- **Requirements:** print three lines — your name, what you want to build, and the result of `365 * 24` (calculated by JavaScript, not by you).
- **Run:** `node exercises/01-introduce-yourself.js`
- **Expected:** three lines; the last one is `8760`.

<details><summary>💡 Hint 1</summary>

You need three separate `console.log(...)` lines.
</details>
<details><summary>💡 Hint 2</summary>

Text needs quotes. Maths must *not* have quotes.
</details>

**Common mistakes:** forgetting to save before running (VS Code shows a ● on unsaved tabs); putting `365 * 24` in quotes.
**Solution:** [`solutions/01-introduce-yourself.js`](solutions/01-introduce-yourself.js)

### Exercise 00.2 — Fix the order

- **Goal:** order of lines = order of execution; practise commenting out.
- **Start:** [`exercises/02-fix-the-order.js`](exercises/02-fix-the-order.js)
- **Requirements:** rearrange the lines so the recipe is in order, then comment out "Eat".
- **Run:** `node exercises/02-fix-the-order.js`
- **Expected:** steps 1–4 in order; step 5 does not print.

**Solution:** [`solutions/02-fix-the-order.js`](solutions/02-fix-the-order.js)

---

## 6. Debug challenges 🐛

For every debug challenge in this course, follow the same routine:

```text
Run it → Read the error / compare the output → Find the line → Guess why (hypothesis) → Fix → Run again to confirm
```

Write your hypothesis down *before* changing anything — even one sentence. This habit is what separates "trying random things" from debugging.

### Debug 00.1 — Won't start

```bash
node debug/01-will-not-start.js
```

Nothing prints at all — not even the first line. Why would line 5 fail to print when the problem is on line 6?

<details><summary>💡 Hint</summary>

The error type is `SyntaxError`. Syntax errors are found *before* the program runs, while Node is reading the file. Look closely at the quotes on the line the error points to.
</details>

### Debug 00.2 — Wrong total

```bash
node debug/02-wrong-total.js
```

No error — but the output is wrong. This is a **logic bug**: the program does exactly what you told it, which isn't what you meant.

<details><summary>💡 Hint</summary>

Re-read section 2. What's the difference between `"10 + 20"` and `10 + 20`?
</details>

Explanations: [`solutions/debug-01-will-not-start.js`](solutions/debug-01-will-not-start.js) · [`solutions/debug-02-wrong-total.js`](solutions/debug-02-wrong-total.js)

---

## 7. ✅ Self-check

Answer out loud or in writing, without looking:

- [ ] What does `node some-file.js` do?
- [ ] In what order do the lines of a program run?
- [ ] What's the difference between `console.log("2 + 2")` and `console.log(2 + 2)`?
- [ ] When you see an error, what three things do you look for first?
- [ ] What's the difference between a syntax error and a logic bug?

## 🤖 Using Claude in this module

Don't ask Claude to fix errors yet. Practise asking it to *explain* one:

```text
Here is an error message I got: [paste]
Don't fix my code. Explain what each part of the error message means,
so I can find the problem myself.
```

Now read [`USING-CLAUDE.md`](../../USING-CLAUDE.md) — it explains how to use AI throughout this course.

---

➡️ **Next:** [Module 01 — Values & Variables](../01-values-and-variables/README.md) · Tick off this module in [`PROGRESS.md`](../../PROGRESS.md)
