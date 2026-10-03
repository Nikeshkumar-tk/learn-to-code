// @entry
// STAGE 3 — split into modules by responsibility.
//   node examples/stage-3-modules/main.js
import { createExpense } from "./expenses.js";
import { formatMoney, sumBy } from "./money.js";

const expenses = [
  createExpense({ description: "Coffee", amount: 3.5, category: "food" }),
  createExpense({ description: "Train ticket", amount: 12, category: "transport" }),
];

expenses.forEach((e) => console.log(`${e.description.padEnd(15)} ${formatMoney(e.amount)}  (${e.category})`));
console.log("Total:", formatMoney(sumBy(expenses, (e) => e.amount)));
