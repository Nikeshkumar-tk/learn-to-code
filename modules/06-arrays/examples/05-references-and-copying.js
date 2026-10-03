// ⚠️ Very important: a variable doesn't HOLD an array. It POINTS to (references) it.
// Assigning an array to another variable copies the POINTER, not the array.

const original = ["a", "b"];
const sameArray = original;      // two names, ONE array
sameArray.push("c");
console.log(original);           // [ 'a', 'b', 'c' ] — surprise!
console.log(original === sameArray); // true: same array

// To get an independent copy, make a NEW array with the same items:
const copy1 = [...original];     // spread (see next example)
const copy2 = original.slice();  // slice() with no arguments copies everything
copy1.push("d");
console.log(original);           // unchanged
console.log(copy1);
console.log(original === copy1);  // false: different arrays

// slice(start, end) copies PART of an array (end not included), without mutating.
const letters = ["a", "b", "c", "d", "e"];
console.log(letters.slice(1, 3)); // [ 'b', 'c' ]
console.log(letters.slice(2));    // from index 2 to the end
console.log(letters);             // unchanged

// Two arrays with the same contents are still DIFFERENT arrays:
console.log([1, 2] === [1, 2]);   // false
