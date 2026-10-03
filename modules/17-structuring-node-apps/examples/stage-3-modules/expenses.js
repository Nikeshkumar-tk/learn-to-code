// The expense RULES: what a valid expense is and how to create one.
export function createExpense(input) {
  if (!input.description?.trim()) throw new Error("Description is required");
  if (typeof input.amount !== "number" || input.amount <= 0) throw new Error("Amount must be a positive number");
  return { description: input.description.trim(), amount: input.amount, category: input.category ?? "other" };
}
