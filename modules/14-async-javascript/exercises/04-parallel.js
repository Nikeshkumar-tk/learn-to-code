// Exercise 14.4 — Do independent work in parallel
// Run:  node exercises/04-parallel.js
//
// loadDashboard() must return { user, tasks, notifications } by calling the three
// loader functions below. Each takes ~150ms.
// Done one after another it would take ~450ms. Make it take ~150ms with Promise.all.

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function loadUser() {
  await wait(150);
  return { name: "Ana" };
}
async function loadTasks() {
  await wait(150);
  return ["Write tests", "Deploy"];
}
async function loadNotifications() {
  await wait(150);
  return 3;
}

// Write your code below.



// ─────────────────────────────────────────────────────────────
// Checks — don't edit below.
// ─────────────────────────────────────────────────────────────
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
const started = Date.now();
const dashboard = await loadDashboard();
const elapsed = Date.now() - started;
check("dashboard data", dashboard, { user: { name: "Ana" }, tasks: ["Write tests", "Deploy"], notifications: 3 });
check(`ran in parallel (took ${elapsed}ms, should be well under 300ms)`, elapsed < 300, true);
