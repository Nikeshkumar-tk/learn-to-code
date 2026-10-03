// Solution 12.3
const tasks = [
  { id: 1, title: "Learn try/catch" },
  { id: 2, title: "Learn custom errors" },
];

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
    this.statusCode = 400;
  }
}

class NotFoundError extends Error {
  constructor(resource, id) {
    super(`${resource} ${id} not found`);
    this.name = "NotFoundError";
    this.statusCode = 404;
  }
}

function getTask(tasks, id) {
  if (!Number.isInteger(id) || id <= 0) {
    throw new ValidationError("Task id must be a positive whole number");
  }
  const task = tasks.find((t) => t.id === id);
  if (!task) {
    throw new NotFoundError("Task", id);
  }
  return task;
}

function handleGetTask(tasks, id) {
  try {
    return { status: 200, body: getTask(tasks, id) };
  } catch (error) {
    if (error instanceof ValidationError || error instanceof NotFoundError) {
      return { status: error.statusCode, body: { error: error.message } };
    }
    // Unexpected error (a bug!). In a real server you'd LOG it for yourself,
    // but never show internal details to the user.
    return { status: 500, body: { error: "Internal server error" } };
  }
}

console.log(handleGetTask(tasks, 1), handleGetTask(tasks, 5));
