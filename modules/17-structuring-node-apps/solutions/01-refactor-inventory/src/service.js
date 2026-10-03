// Business rules only: no fs, no argv, no printing.
import { loadItems, saveItems } from "./repository.js";
import { ValidationError, NotFoundError } from "./errors.js";

function validateInput(name, quantity) {
  if (typeof name !== "string" || name.trim() === "") throw new ValidationError("Item name is required");
  if (!Number.isInteger(quantity) || quantity <= 0) throw new ValidationError("Quantity must be a positive whole number");
}

export async function addStock(name, quantity) {
  validateInput(name, quantity);
  const items = await loadItems();
  const existing = items.find((item) => item.name === name);
  const updatedItem = { name, quantity: (existing?.quantity ?? 0) + quantity };
  const updatedItems = existing ? items.map((item) => (item.name === name ? updatedItem : item)) : [...items, updatedItem];
  await saveItems(updatedItems);
  return updatedItem;
}

export async function removeStock(name, quantity) {
  validateInput(name, quantity);
  const items = await loadItems();
  const existing = items.find((item) => item.name === name);
  if (!existing) throw new NotFoundError(`No item called ${name}`);
  if (existing.quantity < quantity) throw new ValidationError(`Not enough ${name} in stock`);
  const updatedItem = { ...existing, quantity: existing.quantity - quantity };
  await saveItems(items.map((item) => (item.name === name ? updatedItem : item)));
  return updatedItem;
}

export async function lowStock(threshold = 5) {
  const items = await loadItems();
  return items.filter((item) => item.quantity < threshold);
}
