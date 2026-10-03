// @entry
// STAGE 2 — same file, but organised into functions with ONE job each.
//   node examples/stage-2-functions/expenses.js
// Better: each function can be read, tested and reused on its own.
// Still: one file, and the data still disappears.

function validateExpense(input) {
  if (!input.description?.trim()) throw new Error("Description is required");
  if (typeof input.amount !== "number" || input.amount <= 0) throw new Error("Amount must be a positive number");
}

function createExpense(input) {
  validateExpense(input);
  return { description: input.description.trim(), amount: input.amount, category: input.category ?? "other" };
}

function totalOf(expenses) {
  return expenses.reduce((sum, e) => sum + e.amount, 0);
}

function formatMoney(amount) {
  return `$${amount.toFixed(2)}`;
}

function formatExpense(e) {
  return `${e.description.padEnd(15)} ${formatMoney(e.amount)}  (${e.category})`;
}

// --- main ---
const expenses = [];
for (const input of [
  { description: "Coffee", amount: 3.5, category: "food" },
  { description: "Train ticket", amount: 12, category: "transport" },
  { description: "Refund?", amount: -5 },
]) {
  try {
    expenses.push(createExpense(input));
  } catch (error) {
    console.log(`Skipped "${input.description}": ${error.message}`);
  }
}
expenses.forEach((e) => console.log(formatExpense(e)));
console.log("Total:", formatMoney(totalOf(expenses)));
