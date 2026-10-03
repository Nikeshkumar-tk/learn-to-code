# Exercise 17.2 — Add a feature in the right places

Start by copying the stage-4 app into this folder:

```bash
# from modules/17-structuring-node-apps
cp -r examples/stage-4-app/src exercises/02-add-a-feature/src          # Git Bash / macOS / Linux
Copy-Item -Recurse examples/stage-4-app/src exercises/02-add-a-feature/src   # PowerShell
```

**Feature request:** *"I want to see my spending for one month, by category."*

```bash
node exercises/02-add-a-feature/src/index.js report 2026-03
```

```text
Report for 2026-03
food          $15.50
transport     $12.00
Total         $27.50
```

Before writing code, answer in a comment at the top of your service file:
1. Which **layer** owns "which expenses belong to a month, totalled per category"? (That's a rule → ...)
2. Which layer owns "the word `report` on the command line, and the printed table"?
3. Does the repository need to change at all?

Then implement:
- `monthlyReport(month)` in `src/services/expense-service.js`
  - `month` is `"YYYY-MM"`; throw `ValidationError("Month must look like YYYY-MM")` otherwise
  - returns `{ month, byCategory: { food: 15.5, transport: 12 }, total: 27.5 }`
- a `report` command in `src/index.js` that prints the table above

Check: `node exercises/02-add-a-feature/check.js`
