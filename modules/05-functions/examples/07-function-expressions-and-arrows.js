// Three ways to create a function. They mostly behave the same way.

// 1. Function declaration
function square1(n) {
  return n * n;
}

// 2. Function expression — a function stored in a variable
const square2 = function (n) {
  return n * n;
};

// 3. Arrow function — a shorter function expression
const square3 = (n) => {
  return n * n;
};

// Arrow function with an IMPLICIT return:
// if the body is a single expression, drop the { } and the word return.
const square4 = (n) => n * n;

console.log(square1(4), square2(4), square3(4), square4(4));

// More arrow shapes you'll see in real code:
const sayHi = () => "hi";                        // no parameters: empty ()
const add = (a, b) => a + b;                     // several parameters
const shout = text => text.toUpperCase() + "!";  // one parameter: () are optional
console.log(sayHi(), add(2, 3), shout("hey"));

// ⚠️ One difference: declarations can be called BEFORE the line they're written on
// ("hoisting"). Expressions and arrows cannot. Keep it simple: define first, then use.
