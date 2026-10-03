// return sends a value BACK to whoever called the function.
// The call expression `double(5)` is then REPLACED by that value.

function double(number) {
  return number * 2;
}

const result = double(5);         // double(5) becomes 10
console.log(result);
console.log(double(3) + double(4)); // 6 + 8
console.log(double(double(2)));     // double(4) -> 8

// console.log is NOT the same as return!
function doubleAndPrint(number) {
  console.log(number * 2);        // shows it on screen... and that's all
}

const oops = doubleAndPrint(5);   // prints 10
console.log("oops is", oops);     // undefined — nothing was returned

// return also ENDS the function immediately.
function check(age) {
  return age >= 18;
  console.log("This line never runs");
}
console.log(check(20));
