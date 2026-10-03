// Reusable, PURE helpers. No knowledge of expenses at all — could be used in any project.
export function formatMoney(amount) {
  return `$${amount.toFixed(2)}`;
}

export function sumBy(items, getNumber) {
  return items.reduce((sum, item) => sum + getNumber(item), 0);
}
