// A function can also RETURN a new function. These are sometimes named "factories".

function makeMultiplier(factor) {
  return (number) => number * factor;   // a brand-new function is returned
}

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log(typeof double);   // "function"
console.log(double(10));      // 20
console.log(triple(10));      // 30

// Notice: double "remembers" factor = 2, even though makeMultiplier has finished.
// That memory is named a CLOSURE — Module 11 explains it properly.

// Real-world style: configure once, use many times
function makeGreeting(greeting) {
  return (name) => `${greeting}, ${name}!`;
}
const helloEnglish = makeGreeting("Hello");
const helloSpanish = makeGreeting("Hola");
console.log(helloEnglish("Ana"), helloSpanish("Ana"));

// Factories pair perfectly with HOFs:
function isLongerThan(n) {
  return (word) => word.length > n;
}
const words = ["hi", "hello", "hey", "greetings"];
console.log(words.filter(isLongerThan(3)));
