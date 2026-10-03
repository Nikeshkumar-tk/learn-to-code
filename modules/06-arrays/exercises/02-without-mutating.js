// Exercise 06.2 — Change arrays WITHOUT mutating them
// Run:  node exercises/02-without-mutating.js
//
// Each function must RETURN A NEW ARRAY and leave the input array untouched.
// (No push/pop/shift/unshift/splice on the input!)
//
//   append(list, item)        -> new array with item at the end
//   prepend(list, item)       -> new array with item at the start
//   removeAt(list, index)     -> new array without the item at `index`
//   replaceAt(list, index, v) -> new array where position `index` holds v
//
// Tools: spread [...list] and slice(start, end).

// Write your code below.



// ─────────────────────────────────────────────────────────────
// Checks — don't edit below.
// ─────────────────────────────────────────────────────────────
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
const letters = ["a", "b", "c", "d"];
check("append", append(letters, "e"), ["a", "b", "c", "d", "e"]);
check("prepend", prepend(letters, "z"), ["z", "a", "b", "c", "d"]);
check("removeAt(1)", removeAt(letters, 1), ["a", "c", "d"]);
check("removeAt(0)", removeAt(letters, 0), ["b", "c", "d"]);
check("replaceAt(2, 'X')", replaceAt(letters, 2, "X"), ["a", "b", "X", "d"]);
check("original is untouched", letters, ["a", "b", "c", "d"]);
check("append returns a NEW array", append(letters, "e") !== letters, true);
