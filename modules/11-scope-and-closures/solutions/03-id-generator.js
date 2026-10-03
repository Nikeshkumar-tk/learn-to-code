// Solution 11.3
function createIdGenerator(prefix, start = 1) {
  let next = start;
  return () => {
    const id = `${prefix}-${next}`;
    next++;
    return id;
  };
}

const nextTaskId = createIdGenerator("task");
console.log(nextTaskId(), nextTaskId());
