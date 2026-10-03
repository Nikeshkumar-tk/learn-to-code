// Because return ends the function, you can handle special cases first
// and "exit early". This avoids deep nesting.

function describeAge(age) {
  if (age < 0) {
    return "invalid age";
  }
  if (age < 13) {
    return "child";
  }
  if (age < 20) {
    return "teenager";
  }
  return "adult";
}

console.log(describeAge(-4));
console.log(describeAge(8));
console.log(describeAge(15));
console.log(describeAge(42));
// No else needed: if an earlier return ran, we never reach the later lines.
