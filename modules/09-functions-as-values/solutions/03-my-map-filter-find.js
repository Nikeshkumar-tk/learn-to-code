// Solution 09.3
// Look how similar these are. The loop is always the same; only what we do with
// the callback's answer changes. That's why they're worth having as functions.
function myMap(list, transform) {
  const result = [];
  for (let i = 0; i < list.length; i++) {
    result.push(transform(list[i], i));
  }
  return result;
}

function myFilter(list, test) {
  const result = [];
  for (let i = 0; i < list.length; i++) {
    if (test(list[i], i)) {
      result.push(list[i]);   // push the ORIGINAL item, not test's answer
    }
  }
  return result;
}

function myFind(list, test) {
  for (let i = 0; i < list.length; i++) {
    if (test(list[i], i)) {
      return list[i];          // stop at the first match
    }
  }
  return undefined;            // (a function with no return gives undefined anyway)
}

console.log(myMap([1, 2], (n) => n * 2), myFilter([1, 5], (n) => n > 2), myFind([1, 5], (n) => n > 2));
