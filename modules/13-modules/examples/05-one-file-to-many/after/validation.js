// ONE JOB: decide whether input is acceptable. Knows nothing about storage or printing.
export function validateBook(input) {
  if (!input.title?.trim()) throw new Error("Title is required");
  if (!Number.isInteger(input.year)) throw new Error("Year must be a whole number");
}
