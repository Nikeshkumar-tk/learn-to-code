// Solution 14.4
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

async function loadDashboard() {
  // Start all three at once; destructure the results in the same order.
  const [user, tasks, notifications] = await Promise.all([loadUser(), loadTasks(), loadNotifications()]);
  return { user, tasks, notifications };
}

console.log(await loadDashboard());
