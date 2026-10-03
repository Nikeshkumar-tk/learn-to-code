// Milestone 2 checks.
__lib.section("Milestone 2 — working with tasks (array methods)");

const fixture = [
  { id: 1, title: "Write tests", description: "for the API", completed: false, priority: "medium", createdAt: "2026-01-01T09:00:00.000Z" },
  { id: 2, title: "Fix login bug", description: "users get logged out", completed: true, priority: "high", createdAt: "2026-01-03T09:00:00.000Z" },
  { id: 3, title: "Update README", description: "", completed: false, priority: "low", createdAt: "2026-01-02T09:00:00.000Z" },
  { id: 4, title: "Deploy", description: "after tests pass", completed: false, priority: "high", createdAt: "2026-01-04T09:00:00.000Z" },
];
const snapshot = JSON.stringify(fixture);
const ids = (list) => list?.map((t) => t.id);

__lib.group("findTaskById", typeof findTaskById === "function", () => {
  __lib.check("findTaskById finds the task", findTaskById(fixture, 3)?.title, "Update README");
  __lib.check("findTaskById returns undefined when missing", findTaskById(fixture, 99), undefined);
});

__lib.group("completeTask", typeof completeTask === "function", () => {
  const result = completeTask(fixture, 1);
  __lib.check("completeTask marks the task completed", result?.find((t) => t.id === 1)?.completed, true);
  __lib.check("completeTask leaves the others alone", result?.filter((t) => t.completed).length, 2);
  __lib.check("completeTask returns a new array and a new task object", result !== fixture && result?.[0] !== fixture[0], true);
});

__lib.group("updateTask", typeof updateTask === "function", () => {
  const result = updateTask(fixture, 3, { title: "Update the README", priority: "medium" });
  const updated = result?.find((t) => t.id === 3);
  __lib.check("updateTask applies the changes", [updated?.title, updated?.priority], ["Update the README", "medium"]);
  __lib.check("updateTask keeps the other fields", [updated?.description, updated?.createdAt], ["", "2026-01-02T09:00:00.000Z"]);
  // Either keep id/createdAt unchanged (Milestone 2) or reject those fields entirely (Milestone 3+).
  let isProtected;
  try {
    const sneaky = updateTask(fixture, 3, { id: 99, createdAt: "hacked" }).find((t) => t.title === "Update README");
    isProtected = sneaky?.id === 3 && sneaky?.createdAt === "2026-01-02T09:00:00.000Z";
  } catch (error) {
    isProtected = error.name === "ValidationError";
  }
  __lib.check("updateTask never changes id or createdAt", isProtected, true);
});

__lib.group("deleteTask", typeof deleteTask === "function", () => {
  __lib.check("deleteTask removes the task", ids(deleteTask(fixture, 2)), [1, 3, 4]);
});

__lib.group("filterTasks", typeof filterTasks === "function", () => {
  __lib.check("filterTasks { completed: false }", ids(filterTasks(fixture, { completed: false })), [1, 3, 4]);
  __lib.check("filterTasks { completed: true }", ids(filterTasks(fixture, { completed: true })), [2]);
  __lib.check("filterTasks { priority: 'high' }", ids(filterTasks(fixture, { priority: "high" })), [2, 4]);
  __lib.check("filterTasks with both", ids(filterTasks(fixture, { completed: false, priority: "high" })), [4]);
  __lib.check("filterTasks with no options returns everything", ids(filterTasks(fixture)), [1, 2, 3, 4]);
});

__lib.group("searchTasks", typeof searchTasks === "function", () => {
  __lib.check("searchTasks matches titles, case-insensitive", ids(searchTasks(fixture, "README")), [3]);
  __lib.check("searchTasks matches descriptions too", ids(searchTasks(fixture, "tests")), [1, 4]);
  __lib.check("searchTasks trims the query", ids(searchTasks(fixture, "  login ")), [2]);
  __lib.check("searchTasks with an empty query returns everything", ids(searchTasks(fixture, "")), [1, 2, 3, 4]);
});

__lib.group("sortTasks", typeof sortTasks === "function", () => {
  __lib.check("sortTasks 'priority' (high first, ties by id)", ids(sortTasks(fixture, "priority")), [2, 4, 1, 3]);
  __lib.check("sortTasks 'title' (A-Z)", ids(sortTasks(fixture, "title")), [4, 2, 3, 1]);
  __lib.check("sortTasks 'newest' (createdAt, newest first)", ids(sortTasks(fixture, "newest")), [4, 2, 3, 1]);
  __lib.check("sortTasks default is by id", ids(sortTasks([...fixture].reverse())), [1, 2, 3, 4]);
});

__lib.group("getStats", typeof getStats === "function", () => {
  __lib.check("getStats", getStats(fixture), { total: 4, completed: 1, pending: 3, byPriority: { high: 2, medium: 1, low: 1 } });
  __lib.check("getStats([]) still has every key", getStats([]), { total: 0, completed: 0, pending: 0, byPriority: { high: 0, medium: 0, low: 0 } });
});

__lib.check("none of these functions changed the original array", JSON.stringify(fixture), snapshot);
