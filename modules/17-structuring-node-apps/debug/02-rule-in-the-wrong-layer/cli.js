// The CLI checks the amount before calling the service.
import { addExpense } from "./service.js";

export function addFromCli(description, amountText) {
  const amount = Number(amountText);
  if (!(amount > 0)) {
    return `Error: amount must be positive`;
  }
  addExpense(description, amount);
  return `Added ${description}`;
}
