// Fixed. "Amount must be positive" is a BUSINESS RULE, so it belongs in the service —
// the one place EVERY interface goes through. When it lived in the CLI, any new entry point
// (the bank import) could skip it. Interfaces may still do friendly checks, but the
// service must protect its own data.
const expenses = [];

export function addExpense(description, amount) {
  if (typeof amount !== "number" || !(amount > 0)) {
    throw new Error("Amount must be a positive number");
  }
  const expense = { description, amount };
  expenses.push(expense);
  return expense;
}

export function total() {
  return expenses.reduce((sum, e) => sum + e.amount, 0);
}
