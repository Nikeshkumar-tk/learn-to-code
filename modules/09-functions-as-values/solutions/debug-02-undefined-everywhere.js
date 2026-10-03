// Fixed. An arrow function with { } needs an explicit `return`.
// Without it, the callback returned undefined for every item.
// Either add `return`, or drop the braces to use the implicit return:
function transformAll(list, transform) {
  const result = [];
  for (const item of list) {
    result.push(transform(item));
  }
  return result;
}

const labels = transformAll(["buy milk", "walk dog"], (task) => `TASK: ${task.toUpperCase()}`);

console.log(labels);
