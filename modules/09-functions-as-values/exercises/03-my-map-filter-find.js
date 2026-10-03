// Exercise 09.3 — Build map, filter and find yourself  ⭐ important
// Run:  node exercises/03-my-map-filter-find.js
//
// Write these three higher-order functions with plain loops.
// None of them may mutate the input array.
//
//   myMap(list, transform)  -> NEW array: transform(item) for every item
//                              myMap([1, 2, 3], (n) => n * 10)  -> [10, 20, 30]
//
//   myFilter(list, test)    -> NEW array: only items where test(item) is truthy
//                              myFilter([1, 2, 3, 4], (n) => n > 2) -> [3, 4]
//
//   myFind(list, test)      -> the FIRST item where test(item) is truthy,
//                              or undefined if none match
//
// Pass the index as a second argument to transform/test too: transform(item, index).

// Write your code below.



// ─────────────────────────────────────────────────────────────
// Checks — don't edit below.
// ─────────────────────────────────────────────────────────────
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
const nums = [1, 2, 3, 4];
check("myMap times 10", myMap(nums, (n) => n * 10), [10, 20, 30, 40]);
check("myMap to strings", myMap(nums, (n) => `#${n}`), ["#1", "#2", "#3", "#4"]);
check("myMap gets index", myMap(["a", "b"], (item, i) => item + i), ["a0", "b1"]);
check("myFilter > 2", myFilter(nums, (n) => n > 2), [3, 4]);
check("myFilter none", myFilter(nums, (n) => n > 100), []);
const users = [{ id: 1, name: "Ana" }, { id: 2, name: "Ben" }, { id: 3, name: "Bo" }];
check("myFind by id", myFind(users, (u) => u.id === 2), { id: 2, name: "Ben" });
check("myFind first match only", myFind(users, (u) => u.name.startsWith("B")), { id: 2, name: "Ben" });
check("myFind no match", myFind(users, (u) => u.id === 99), undefined);
check("input not mutated", nums, [1, 2, 3, 4]);
