// The service: stores expenses. (Validation lives in the CLI... is that the right place?)
const expenses = [];

export function addExpense(description, amount) {
  const expense = { description, amount };
  expenses.push(expense);
  return expense;
}

export function total() {
  return expenses.reduce((sum, e) => sum + e.amount, 0);
}
