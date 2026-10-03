// Custom error types let callers tell DIFFERENT problems apart.
//
// `class X extends Error` means "X is a special kind of Error".
// You don't need to know much about classes for this — the pattern below is all you need.

class ValidationError extends Error {
  constructor(message) {
    super(message);                 // let Error set up message and stack
    this.name = "ValidationError";
    this.statusCode = 400;          // extra info that's useful later (HTTP status!)
  }
}

class NotFoundError extends Error {
  constructor(resource, id) {
    super(`${resource} with id ${id} not found`);
    this.name = "NotFoundError";
    this.statusCode = 404;
  }
}

const tasks = [{ id: 1, title: "Learn errors" }];

function getTask(id) {
  if (!Number.isInteger(id)) throw new ValidationError("id must be a whole number");
  const task = tasks.find((t) => t.id === id);
  if (!task) throw new NotFoundError("Task", id);
  return task;
}

for (const id of [1, 99, "abc"]) {
  try {
    console.log("Found:", getTask(id).title);
  } catch (error) {
    if (error instanceof ValidationError) {
      console.log(`400 Bad Request — ${error.message}`);
    } else if (error instanceof NotFoundError) {
      console.log(`404 Not Found — ${error.message}`);
    } else {
      throw error; // something unexpected: don't hide it!
    }
  }
}
