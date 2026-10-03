// Milestone 3 checks.
__lib.section("Milestone 3 — validation & errors");

const fixture = [
  { id: 1, title: "Write tests", description: "", completed: false, priority: "medium", createdAt: "2026-01-01T09:00:00.000Z" },
  { id: 2, title: "Deploy", description: "", completed: false, priority: "high", createdAt: "2026-01-02T09:00:00.000Z" },
];
const V = (message) => ({ name: "ValidationError", message });
const N = (message) => ({ name: "NotFoundError", message });

__lib.group("ValidationError / NotFoundError", typeof ValidationError === "function" && typeof NotFoundError === "function", () => {
  const v = new ValidationError("x");
  const n = new NotFoundError("x");
  __lib.check("ValidationError is an Error with statusCode 400", [v instanceof Error, v.statusCode, v.name, v.message], [true, 400, "ValidationError", "x"]);
  __lib.check("NotFoundError is an Error with statusCode 404", [n instanceof Error, n.statusCode, n.name, n.message], [true, 404, "NotFoundError", "x"]);
});

__lib.group("validateTaskInput", typeof validateTaskInput === "function", () => {
  const err = (input, options) => __lib.errorOf(() => validateTaskInput(input, options));
  __lib.check("valid input passes", err({ title: "Fine", description: "ok", priority: "low" }), "(no error thrown)");
  __lib.check("not an object", err(null), V("Task data must be an object"));
  __lib.check("arrays are not task data", err([]), V("Task data must be an object"));
  __lib.check("missing title", err({ priority: "low" }), V("Title is required"));
  __lib.check("blank title", err({ title: "   " }), V("Title is required"));
  __lib.check("title is a number", err({ title: 42 }), V("Title is required"));
  __lib.check("title too long", err({ title: "x".repeat(101) }), V("Title must be at most 100 characters"));
  __lib.check("description not a string", err({ title: "a", description: 5 }), V("Description must be a string"));
  __lib.check("description too long", err({ title: "a", description: "x".repeat(501) }), V("Description must be at most 500 characters"));
  __lib.check("bad priority", err({ title: "a", priority: "urgent" }), V("Priority must be one of: low, medium, high"));
  __lib.check("unknown field", err({ title: "a", colour: "red" }), V("Unknown field: colour"));
  __lib.check("'completed' is not allowed when creating", err({ title: "a", completed: true }), V("Unknown field: completed"));
  __lib.check("partial: only given fields are checked", err({ priority: "low" }, { partial: true }), "(no error thrown)");
  __lib.check("partial: completed must be a boolean", err({ completed: "yes" }, { partial: true }), V("Completed must be true or false"));
  __lib.check("partial: empty changes", err({}, { partial: true }), V("No changes provided"));
  __lib.check("partial: blank title still invalid", err({ title: "" }, { partial: true }), V("Title is required"));
});

__lib.group("parseId", typeof parseId === "function", () => {
  __lib.check("parseId('3') -> 3", parseId("3"), 3);
  __lib.check("parseId(7) -> 7", parseId(7), 7);
  for (const bad of ["abc", "0", "-1", "1.5", ""]) {
    __lib.check(`parseId(${JSON.stringify(bad)}) throws`, __lib.errorOf(() => parseId(bad)), V("Task id must be a positive whole number"));
  }
});

__lib.group("getTaskById", typeof getTaskById === "function", () => {
  __lib.check("getTaskById returns the task", getTaskById(fixture, 2)?.title, "Deploy");
  __lib.check("getTaskById throws NotFoundError", __lib.errorOf(() => getTaskById(fixture, 99)), N("Task 99 not found"));
});

__lib.group("addTask (with validation)", typeof addTask === "function", () => {
  __lib.check("addTask validates", __lib.errorOf(() => addTask(fixture, { title: "" })), V("Title is required"));
  __lib.check("addTask still works with valid input", addTask(fixture, { title: "New" })?.length, 3);
});

__lib.group("completeTask / deleteTask (missing ids)", typeof completeTask === "function" && typeof deleteTask === "function", () => {
  __lib.check("completeTask on a missing id throws", __lib.errorOf(() => completeTask(fixture, 99)), N("Task 99 not found"));
  __lib.check("deleteTask on a missing id throws", __lib.errorOf(() => deleteTask(fixture, 99)), N("Task 99 not found"));
});

__lib.group("updateTask (with validation)", typeof updateTask === "function", () => {
  __lib.check("updateTask on a missing id throws", __lib.errorOf(() => updateTask(fixture, 99, { title: "x" })), N("Task 99 not found"));
  __lib.check("updateTask validates changes", __lib.errorOf(() => updateTask(fixture, 1, { priority: "urgent" })), V("Priority must be one of: low, medium, high"));
  __lib.check("updateTask can change completed", updateTask(fixture, 1, { completed: true })?.[0]?.completed, true);
  __lib.check("updateTask trims a new title", updateTask(fixture, 1, { title: "  Tidy  " })?.[0]?.title, "Tidy");
});

__lib.group("filterTasks / sortTasks (invalid options)", typeof filterTasks === "function" && typeof sortTasks === "function", () => {
  __lib.check("filterTasks rejects an invalid priority", __lib.errorOf(() => filterTasks(fixture, { priority: "urgent" })), V("Priority must be one of: low, medium, high"));
  __lib.check("sortTasks rejects an unknown sort", __lib.errorOf(() => sortTasks(fixture, "colour")), V("Sort must be one of: id, priority, title, newest"));
});
