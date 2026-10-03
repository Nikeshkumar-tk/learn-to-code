// When you pass an array to a function, the function gets a reference to THE SAME array.
// So a function can mutate the caller's array — sometimes on purpose, often by accident.

function addItemMutating(list, item) {
  list.push(item);         // changes the caller's array
  return list;
}

function addItemPure(list, item) {
  return [...list, item];  // builds a new array; the caller's array is untouched
}

const groceries = ["milk"];

const result1 = addItemPure(groceries, "eggs");
console.log("pure ->", groceries, result1);

const result2 = addItemMutating(groceries, "bread");
console.log("mutating ->", groceries, result2);
console.log(groceries === result2); // true — it returned the same array it mutated

// Prefer the pure version unless you have a reason not to. Fewer surprises.
