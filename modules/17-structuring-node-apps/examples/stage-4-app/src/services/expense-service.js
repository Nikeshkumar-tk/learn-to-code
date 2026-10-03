// SERVICE (business logic) — the RULES of the app: validation, ids, calculations.
// It doesn't know about the terminal (no console.log, no process.argv) or about HTTP.
// That's why the same service can be used by a CLI today and an Express API tomorrow.
import { loadExpenses, saveExpenses } from "../data/expense-repository.js";
import { ValidationError, NotFoundError } from "../errors.js";
import { sumBy } from "../utils/money.js";

const CATEGORIES = ["food", "transport", "home", "fun", "other"];

function validate(input) {
  if (!input.description?.trim()) throw new ValidationError("Description is required");
  if (typeof input.amount !== "number" || !(input.amount > 0)) {
    throw new ValidationError("Amount must be a positive number");
  }
  if (input.category !== undefined && !CATEGORIES.includes(input.category)) {
    throw new ValidationError(`Category must be one of: ${CATEGORIES.join(", ")}`);
  }
}

export async function addExpense(input) {
  validate(input);
  const expenses = await loadExpenses();
  const expense = {
    id: Math.max(0, ...expenses.map((e) => e.id)) + 1, // highest existing id + 1
    description: input.description.trim(),
    amount: input.amount,
    category: input.category ?? "other",
    date: input.date ?? new Date().toISOString().slice(0, 10),
  };
  await saveExpenses([...expenses, expense]);
  return expense;
}

export async function removeExpense(id) {
  const expenses = await loadExpenses();
  if (!expenses.some((e) => e.id === id)) throw new NotFoundError(`Expense ${id} not found`);
  await saveExpenses(expenses.filter((e) => e.id !== id));
}

export async function listExpenses({ category } = {}) {
  const expenses = await loadExpenses();
  return category ? expenses.filter((e) => e.category === category) : expenses;
}

export async function getSummary() {
  const expenses = await loadExpenses();
  return { count: expenses.length, total: sumBy(expenses, (e) => e.amount) };
}
