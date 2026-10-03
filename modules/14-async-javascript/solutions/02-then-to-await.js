// Solution 14.2
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

async function getAssigneeName(taskId) {
  const task = await findTask(taskId);
  const user = await findUser(task.assigneeId);
  return user?.name ?? "Unassigned";
}

async function getTaskReport(taskId) {
  try {
    const name = await getAssigneeName(taskId);
    return `Task ${taskId} is assigned to ${name}`;
  } catch (error) {
    return `Error: ${error.message}`;
  }
}

console.log(await getTaskReport(1));
// Note: `await` works on ANY promise, including ones built with .then() — like findTask.
