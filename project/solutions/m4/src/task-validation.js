// Rules about what valid task data looks like.
import { ValidationError } from "./errors.js";

export const PRIORITIES = ["low", "medium", "high"];
export const SORT_OPTIONS = ["id", "priority", "title", "newest"];

export function validateTaskInput(input, { partial = false } = {}) {
  if (typeof input !== "object" || input === null || Array.isArray(input)) {
    throw new ValidationError("Task data must be an object");
  }

  const allowedFields = partial ? ["title", "description", "priority", "completed"] : ["title", "description", "priority"];
  for (const key of Object.keys(input)) {
    if (!allowedFields.includes(key)) throw new ValidationError(`Unknown field: ${key}`);
  }
  if (partial && Object.keys(input).length === 0) {
    throw new ValidationError("No changes provided");
  }

  const { title, description, priority, completed } = input;

  if (!partial || title !== undefined) {
    if (typeof title !== "string" || title.trim() === "") throw new ValidationError("Title is required");
    if (title.trim().length > 100) throw new ValidationError("Title must be at most 100 characters");
  }
  if (description !== undefined) {
    if (typeof description !== "string") throw new ValidationError("Description must be a string");
    if (description.length > 500) throw new ValidationError("Description must be at most 500 characters");
  }
  if (priority !== undefined && !PRIORITIES.includes(priority)) {
    throw new ValidationError(`Priority must be one of: ${PRIORITIES.join(", ")}`);
  }
  if (completed !== undefined && typeof completed !== "boolean") {
    throw new ValidationError("Completed must be true or false");
  }
}

export function parseId(value) {
  const id = Number(value);
  if (!Number.isInteger(id) || id < 1) {
    throw new ValidationError("Task id must be a positive whole number");
  }
  return id;
}
