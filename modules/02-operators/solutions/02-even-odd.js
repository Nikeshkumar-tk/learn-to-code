// Solution 02.2
const number = 12;

const isEven = number % 2 === 0;        // even numbers leave remainder 0 when divided by 2
const isMultipleOf3 = number % 3 === 0;
const isMultipleOf6 = isEven && isMultipleOf3;

console.log({ isEven, isMultipleOf3, isMultipleOf6 });
