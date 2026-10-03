// 1. "Which expenses belong to a month, totalled per category" is a RULE -> the service.
// 2. The `report` word and the printed table are the INTERFACE -> index.js.
// 3. The repository doesn't change: it still just loads and saves. That's the point of layers.
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
    id: Math.max(0, ...expenses.map((e) => e.id)) + 1,
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

function isMonth(text) {
  if (typeof text !== "string" || text.length !== 7 || text[4] !== "-") return false;
  const year = Number(text.slice(0, 4));
  const month = Number(text.slice(5));
  return Number.isInteger(year) && Number.isInteger(month) && month >= 1 && month <= 12;
}

export async function monthlyReport(month) {
  if (!isMonth(month)) throw new ValidationError("Month must look like YYYY-MM");
  const expenses = (await loadExpenses()).filter((e) => e.date.startsWith(month));
  const byCategory = expenses.reduce((totals, e) => {
    totals[e.category] = (totals[e.category] ?? 0) + e.amount;
    return totals;
  }, {});
  return { month, byCategory, total: sumBy(expenses, (e) => e.amount) };
}
