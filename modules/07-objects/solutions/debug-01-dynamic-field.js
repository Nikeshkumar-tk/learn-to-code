// Fixed. task.fieldName looks for a property literally called "fieldName".
// When the key is stored in a variable, you must use bracket notation: task[fieldName].
const task = { title: "Deploy app", priority: "high" };

function showField(task, fieldName) {
  console.log(`Showing ${fieldName}: ${task[fieldName]}`);
}

showField(task, "priority");
showField(task, "title");
