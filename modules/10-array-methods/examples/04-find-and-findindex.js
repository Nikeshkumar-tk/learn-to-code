// find(test): the FIRST item that passes, or undefined.          -> ONE item
// findIndex(test): the INDEX of the first item that passes, or -1. -> a position
//
// Use find when you want the thing. Use filter when you want ALL matching things (an array).

const users = [
  { id: 10, name: "Ana", role: "admin" },
  { id: 11, name: "Ben", role: "user" },
  { id: 12, name: "Cy", role: "user" },
];

const ben = users.find((user) => user.id === 11);
console.log(ben);

const missing = users.find((user) => user.id === 99);
console.log(missing);              // undefined -> always handle this case!
if (!missing) console.log("No user with id 99");

const firstUser = users.find((user) => user.role === "user");
const allUsers = users.filter((user) => user.role === "user");
console.log(firstUser);            // an object
console.log(allUsers);             // an array

const index = users.findIndex((user) => user.name === "Cy");
console.log("Cy is at index", index);
console.log(users.findIndex((user) => user.name === "Zed")); // -1
