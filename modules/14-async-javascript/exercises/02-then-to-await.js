// Exercise 14.2 — Rewrite .then() chains with async/await
// Run:  node exercises/02-then-to-await.js
//
// getTaskReport and getAssigneeName below use .then()/.catch().
// Rewrite BOTH as `async function`s using await and try/catch. Same names, same results.

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const db = {
  tasks: [{ id: 1, title: "Ship it", assigneeId: 7 }],
  users: [{ id: 7, name: "Kai" }],
};
const findTask = (id) =>
  wait(30).then(() => {
    const task = db.tasks.find((t) => t.id === id);
    if (!task) throw new Error(`Task ${id} not found`);
    return task;
  });
const findUser = (id) => wait(30).then(() => db.users.find((u) => u.id === id));

// ── Rewrite these two ──────────────────────────────────────────
function getAssigneeName(taskId) {
  return findTask(taskId)
    .then((task) => findUser(task.assigneeId))
    .then((user) => user?.name ?? "Unassigned");
}

function getTaskReport(taskId) {
  return getAssigneeName(taskId)
    .then((name) => `Task ${taskId} is assigned to ${name}`)
    .catch((error) => `Error: ${error.message}`);
}

// ─────────────────────────────────────────────────────────────
// Checks — don't edit below.
// ─────────────────────────────────────────────────────────────
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
check("assignee name", await getAssigneeName(1), "Kai");
check("report", await getTaskReport(1), "Task 1 is assigned to Kai");
check("report for missing task", await getTaskReport(5), "Error: Task 5 not found");
check("getAssigneeName is async", getAssigneeName.constructor.name, "AsyncFunction");
check("getTaskReport is async", getTaskReport.constructor.name, "AsyncFunction");
check("no .then left", /\.then\(|\.catch\(/.test(String(getAssigneeName) + String(getTaskReport)), false);
