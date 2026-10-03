// Solution 09.2
const tasks = [
  { title: "Fix bug", completed: false, priority: "high" },
  { title: "Write docs", completed: true, priority: "low" },
  { title: "Deploy", completed: false, priority: "high" },
  { title: "Email Sam", completed: true, priority: "high" },
];

function each(list, callback) {
  for (let i = 0; i < list.length; i++) {
    callback(list[i], i);
  }
}

function countWhere(list, test) {
  let count = 0;
  each(list, (item) => {
    if (test(item)) count++;
  });
  return count;
}

const doneCount = countWhere(tasks, (task) => task.completed);
const urgentCount = countWhere(tasks, (task) => task.priority === "high" && !task.completed);

console.log({ doneCount, urgentCount });
