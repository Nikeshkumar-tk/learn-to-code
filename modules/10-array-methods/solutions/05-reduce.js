// Solution 10.5
const tasks = [
  { id: 1, title: "A", status: "todo", hours: 2 },
  { id: 2, title: "B", status: "doing", hours: 5 },
  { id: 3, title: "C", status: "done", hours: 1 },
  { id: 4, title: "D", status: "todo", hours: 3 },
  { id: 5, title: "E (a much longer title)", status: "done", hours: 4 },
];

const totalHours = (tasks) => tasks.reduce((sum, task) => sum + task.hours, 0);

const countByStatus = (tasks) =>
  tasks.reduce((counts, task) => {
    counts[task.status] = (counts[task.status] ?? 0) + 1;
    return counts;
  }, {});

const longestTitle = (tasks) =>
  tasks.reduce((longest, task) => (task.title.length > longest.length ? task.title : longest), "");

const indexById = (tasks) =>
  tasks.reduce((index, task) => {
    index[task.id] = task;
    return index;
  }, {});

const groupByStatus = (tasks) =>
  tasks.reduce((groups, task) => {
    groups[task.status] = groups[task.status] ?? [];
    groups[task.status].push(task.title);
    return groups;
  }, {});

console.log(totalHours(tasks), countByStatus(tasks), groupByStatus(tasks));
