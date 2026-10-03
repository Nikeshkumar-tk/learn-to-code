// @entry
// STAGE 5 — the payoff. A SECOND program reuses the same service and utilities.
// No copy-pasting, no duplicated rules. (Your Express API will reuse your task service the same way!)
//   node examples/stage-5-reuse/monthly-report.js
import { listExpenses } from "../stage-4-app/src/services/expense-service.js";
import { formatMoney, sumBy } from "../stage-4-app/src/utils/money.js";

const expenses = await listExpenses();

const byCategory = Object.groupBy
  ? Object.groupBy(expenses, (e) => e.category)  // newer built-in
  : expenses.reduce((groups, e) => ({ ...groups, [e.category]: [...(groups[e.category] ?? []), e] }), {});

console.log("Spending by category");
console.log("--------------------");
for (const [category, items] of Object.entries(byCategory)) {
  console.log(`${category.padEnd(10)} ${formatMoney(sumBy(items, (e) => e.amount)).padStart(10)}`);
}
if (expenses.length === 0) console.log("(no data yet — add some with stage-4-app first)");
