// Turning an object into arrays so you can loop over it.
const stock = { apples: 12, bananas: 0, cherries: 40 };

console.log(Object.keys(stock));    // [ 'apples', 'bananas', 'cherries' ]
console.log(Object.values(stock));  // [ 12, 0, 40 ]
console.log(Object.entries(stock)); // [ [ 'apples', 12 ], [ 'bananas', 0 ], ... ]

// Loop over key/value pairs with destructuring:
for (const [fruit, count] of Object.entries(stock)) {
  console.log(`${fruit}: ${count}`);
}

// Total of all values:
let total = 0;
for (const count of Object.values(stock)) {
  total += count;
}
console.log("Total fruit:", total);

// Objects as DICTIONARIES (lookup tables): fast "find by name"
const statusMessages = { 200: "OK", 404: "Not Found", 500: "Server Error" };
const code = 404;
console.log(statusMessages[code] ?? "Unknown");
