// Exercise 12.3 — Custom errors → HTTP responses (preparing for Express!)
// Run:  node exercises/03-custom-errors.js
//
// 1. Create two error classes (copy the pattern from examples/07-custom-errors.js):
//      ValidationError(message)    -> name "ValidationError", statusCode 400
//      NotFoundError(resource, id) -> name "NotFoundError", statusCode 404,
//                                     message `${resource} ${id} not found`
//
// 2. getTask(tasks, id)
//      throws ValidationError("Task id must be a positive whole number") if id isn't one
//      throws NotFoundError("Task", id) if no task has that id
//      otherwise returns the task
//
// 3. handleGetTask(tasks, id) — this is the "boundary". It never throws. It returns:
//      success:            { status: 200, body: task }
//      a ValidationError:  { status: 400, body: { error: message } }
//      a NotFoundError:    { status: 404, body: { error: message } }
//      anything else:      { status: 500, body: { error: "Internal server error" } }
//    Hint: errors with a statusCode can share one branch.

const tasks = [
  { id: 1, title: "Learn try/catch" },
  { id: 2, title: "Learn custom errors" },
];

// Write your code below.



// ─────────────────────────────────────────────────────────────
// Checks — don't edit below.
// ─────────────────────────────────────────────────────────────
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
check("ValidationError is an Error", new ValidationError("x") instanceof Error, true);
check("NotFoundError message", new NotFoundError("Task", 7).message, "Task 7 not found");
check("NotFoundError statusCode", new NotFoundError("Task", 7).statusCode, 404);
check("200", handleGetTask(tasks, 2), { status: 200, body: { id: 2, title: "Learn custom errors" } });
check("404", handleGetTask(tasks, 99), { status: 404, body: { error: "Task 99 not found" } });
check("400 for text", handleGetTask(tasks, "abc"), { status: 400, body: { error: "Task id must be a positive whole number" } });
check("400 for negative", handleGetTask(tasks, -1).status, 400);
check("500 for unexpected", handleGetTask(null, 1), { status: 500, body: { error: "Internal server error" } });
