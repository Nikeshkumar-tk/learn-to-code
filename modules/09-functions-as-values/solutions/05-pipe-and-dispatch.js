// Solution 09.5
const trim = (text) => text.trim();
const collapseSpaces = (text) => text.replaceAll("  ", " ");
const capitalise = (text) => text.charAt(0).toUpperCase() + text.slice(1);

const operations = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => (b === 0 ? "Cannot divide by zero" : a / b),
};

function pipe(...fns) {
  return (input) => {
    let result = input;
    for (const fn of fns) {
      result = fn(result);
    }
    return result;
  };
}

const cleanTitle = pipe(trim, collapseSpaces, capitalise);

function calculate(a, operator, b) {
  const operation = operations[operator];
  if (!operation) {
    return "Unknown operator";
  }
  return operation(a, b);
}

console.log(cleanTitle("   learn  node  "), calculate(10, "/", 4));
