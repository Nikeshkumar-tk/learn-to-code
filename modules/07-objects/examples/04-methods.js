// A function stored in an object property is called a METHOD.

const counter = {
  count: 0,
  increment() {               // short method syntax
    this.count++;             // `this` = "the object this method was called on"
  },
  describe() {
    return `Count is ${this.count}`;
  },
};

counter.increment();
counter.increment();
console.log(counter.describe());

// You've been using methods all along!
console.log("hello".toUpperCase());   // a string method
const list = [3, 1, 2];
list.push(4);                         // an array method
console.log(Math.max(...list));       // Math is an object full of methods

// In this course we mostly write plain functions that take objects as parameters,
// e.g. describeCounter(counter), which avoids the trickier corners of `this`.
