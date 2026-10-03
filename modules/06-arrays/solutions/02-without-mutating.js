// Solution 06.2
function append(list, item) {
  return [...list, item];
}

function prepend(list, item) {
  return [item, ...list];
}

function removeAt(list, index) {
  // everything before index + everything after index
  return [...list.slice(0, index), ...list.slice(index + 1)];
}

function replaceAt(list, index, value) {
  const copy = [...list];   // mutating a COPY is fine — nobody else can see it
  copy[index] = value;
  return copy;
}

console.log(removeAt(["a", "b", "c"], 1));
