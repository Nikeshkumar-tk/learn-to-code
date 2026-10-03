// Debug 09.2 — The transformed list is full of undefined
// Expected: [ 'TASK: BUY MILK', 'TASK: WALK DOG' ]

function transformAll(list, transform) {
  const result = [];
  for (const item of list) {
    result.push(transform(item));
  }
  return result;
}

const labels = transformAll(["buy milk", "walk dog"], (task) => {
  `TASK: ${task.toUpperCase()}`;
});

console.log(labels);
