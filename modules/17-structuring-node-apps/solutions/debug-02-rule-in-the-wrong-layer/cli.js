// The CLI now relies on the service for the rule and just translates the error to text.
import { addExpense } from "./service.js";

export function addFromCli(description, amountText) {
  try {
    addExpense(description, Number(amountText));
    return `Added ${description}`;
  } catch {
    return `Error: amount must be positive`;
  }
}
