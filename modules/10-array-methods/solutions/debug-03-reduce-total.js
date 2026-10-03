// Fixed. Without an initial value, reduce uses the FIRST ITEM as the starting accumulator.
// So `sum` started as the Book OBJECT, and object + number turns into a string:
// "[object Object]5" + 30 -> "[object Object]530".
// Always give an initial value that has the same type as the result you want.
const cart = [
  { name: "Book", price: 12 },
  { name: "Pen", price: 5 },
  { name: "Bag", price: 30 },
];

const total = cart.reduce((sum, item) => sum + item.price, 0);

console.log("Cart total:", total);
