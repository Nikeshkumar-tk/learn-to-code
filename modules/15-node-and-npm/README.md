# Module 15 — Node.js & npm

> **What you'll learn:** what Node.js actually is, how programs receive input from the outside world (`process.argv`, environment variables, exit codes), and how to use **npm** — `package.json`, dependencies, scripts, `node_modules`, and the lock file.
> **Why it matters:** this is the bridge from "JavaScript exercises" to "Node.js applications". Every real project starts with a `package.json` and reads its config from the environment.

⏱️ About 2.5 hours · 📋 Prerequisites: Modules 01–14

```bash
cd modules/15-node-and-npm
```

---

## 1. What is Node.js?

```bash
node examples/01-node-vs-browser.js
```

> 🧠 **Node.js = the JavaScript language + abilities a browser doesn't give you** (files, processes, networking, environment). It's a *runtime*: a program that runs your JavaScript.

| | Browser | Node.js |
|---|---|---|
| Language | JavaScript | JavaScript |
| Extra powers | the web page (`document`), clicks | files, folders, network servers, `process` |
| Typical job | interactive pages | servers, scripts, tools |

**Try the REPL:** type `node` on its own. You get a prompt where each line runs immediately. Try `2 + 2`, `[1,2,3].map(n => n * 2)`, `process.version`. Exit with `.exit` or Ctrl + C twice. Great for quick experiments.

---

## 2. Command-line arguments — `process.argv`

```bash
node examples/02-process-argv.js hello 42 "two words"
node examples/03-parse-flags.js --name=Ana --times=3 --shout
```

`process.argv` is an array of strings. Your arguments start at index **2**, so you'll almost always write `process.argv.slice(2)`.

---

## 3. Environment variables — `process.env`

```bash
node examples/04-env-vars.js
```

Then set some (the syntax differs per terminal — it's in the file).

**What:** named settings provided by whatever starts your program.
**Why:** the same code runs differently in development vs production, and secrets stay out of your code.
**Gotcha:** values are **always strings** (or `undefined`). Convert with `Number(...)`.

### `.env` files

```bash
node examples/05-env-file/app.js
```

Follow the steps in [`examples/05-env-file/app.js`](examples/05-env-file/app.js): copy `.env.example` → `.env`, then run with `node --env-file=...`. **Never commit `.env`**; do commit `.env.example`.

---

## 4. Exit codes

```bash
node examples/06-exit-codes.js
node examples/06-exit-codes.js report.csv
```

`0` = success; anything else = failure. Set `process.exitCode = 1` when your script fails. Print errors with `console.error` (it goes to *stderr*, a separate output stream that tools treat as "errors").

---

## 5. ⭐ npm — the package manager

**npm** downloads code other people have published (*packages*) and manages your project's settings. It came with Node.

| Thing | What it is |
|---|---|
| `package.json` | Your project's ID card: name, scripts, dependencies, `"type": "module"` |
| **dependency** | a package your app needs to *run* (`npm install express`) |
| **devDependency** | a package only needed while *developing* — tests, linters (`npm install -D eslint`) |
| `node_modules/` | where installed packages live. Huge. **Never edit, never commit** (it's in `.gitignore`). Delete it any time and run `npm install` to rebuild |
| `package-lock.json` | records the *exact* versions installed, so everyone gets identical packages. **Do** commit it |
| `"^1.1.1"` | a version range: "1.1.1 or any newer 1.x.x" |
| npm scripts | named commands in `package.json`: `npm start`, `npm run dev`, `npm test` |
| `npx some-tool` | run a package's command without installing it permanently |

### ▶️ Run the example project

```bash
cd examples/07-npm-project
npm install
npm start
npm run dev     # restarts automatically when you save index.js — stop with Ctrl + C
cd ../..
```

After `npm install`, open `node_modules/` (just look!) and `package-lock.json`.

> 🧠 `import pc from "picocolors"` — no `./` and no `node:` → Node looks in `node_modules/`.

---

## 6. Exercises

| # | Folder | Practises |
|---|---|---|
| 15.1 | [`01-greet-cli/`](exercises/01-greet-cli/) | argv, flags, stderr, exit codes |
| 15.2 | [`02-calc-cli/`](exercises/02-calc-cli/) | a robust CLI: lookup table + throw + catch at the boundary |
| 15.3 | [`03-env-config/`](exercises/03-env-config/) | env vars, defaults, validation, testable design |
| 15.4 | [`04-npm-project/`](exercises/04-npm-project/) | `npm init`, install, scripts |

```bash
node exercises/01-greet-cli/check.js
node exercises/02-calc-cli/check.js
node exercises/03-env-config/check.js
node exercises/04-npm-project/check.js
```

<details><summary>💡 15.1</summary>

Write `parseArgs(args)` returning `{ name, times, shout }` first. Test it with `console.log(parseArgs(["Ana", "--shout"]))` before writing the rest.
</details>
<details><summary>💡 15.2</summary>

Have a `calculate(args)` function that **throws** for every problem. Then the main part is just `try { console.log(calculate(...)) } catch (error) { console.error(error.message); process.exitCode = 1; }`.
</details>
<details><summary>💡 15.3</summary>

`Number(env.PORT ?? 3000)` handles the default. Then validate with `Number.isInteger` and a range check.
</details>

**Common mistakes:** reading `process.argv[0]` instead of `[2]`; forgetting env vars are strings; printing errors with `console.log` and exiting with code 0; committing `node_modules` or `.env`; running `npm install` in the wrong folder.

Solutions: [`solutions/`](solutions/)

---

## 7. Debug challenges 🐛

| File | Symptom |
|---|---|
| [`debug/01-wrong-argument.js`](debug/01-wrong-argument.js) | Greets a file path instead of Ana |
| [`debug/02-next-port.js`](debug/02-next-port.js) | Next port after 3000 is 30001 (only when PORT is set!) |
| [`debug/03-missing-package.js`](debug/03-missing-package.js) | `Cannot find package 'dayjs'` |
| [`debug/04-silent-failure.js`](debug/04-silent-failure.js) | Invalid config, but the script "succeeds" |

---

## 8. ✅ Self-check

- [ ] What is a JavaScript runtime? What does Node add that browsers don't have?
- [ ] Why does `process.argv.slice(2)` appear in so many scripts?
- [ ] Why use environment variables instead of hard-coding a port or password?
- [ ] What's the difference between a dependency and a devDependency?
- [ ] What are `node_modules` and `package-lock.json`? Which one do you commit?
- [ ] What does `npm run dev` do in a project you've never seen? (Where would you look?)

## 🤖 Using Claude

```text
I'm looking at this package.json from an unfamiliar project: [paste].
Walk me through what each script probably does and what each dependency is for.
Don't suggest changes.
```

---

## 🛠️ Project time!

Go to **[Project Milestone 5 — Saving to files](../../project/milestones/M5-saving-to-files.md)** *after* Module 16 — it needs file-system skills. Carry on to Module 16 first.

➡️ **Next:** [Module 16 — Files, Paths & JSON](../16-files-and-json/README.md)
