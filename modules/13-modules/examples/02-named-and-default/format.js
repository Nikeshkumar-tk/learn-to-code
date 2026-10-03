// A file can have MANY named exports and at most ONE default export.

// Named exports: imported with { braces } and the EXACT name.
export function formatMoney(amount) {
  return `$${amount.toFixed(2)}`;
}

export function formatDate(date) {
  return date.toISOString().slice(0, 10);
}

// Default export: "the main thing this file provides". Imported WITHOUT braces,
// and the importer chooses the name.
export default function formatTask(task) {
  return `[${task.completed ? "x" : " "}] ${task.title}`;
}
