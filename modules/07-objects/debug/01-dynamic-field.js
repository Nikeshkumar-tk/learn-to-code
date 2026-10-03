// Debug 07.1 — Sorting label is always undefined
// The user picks which field to show. Expected:
//   Showing priority: high
//   Showing title: Deploy app

const task = { title: "Deploy app", priority: "high" };

function showField(task, fieldName) {
  console.log(`Showing ${fieldName}: ${task.fieldName}`);
}

showField(task, "priority");
showField(task, "title");
