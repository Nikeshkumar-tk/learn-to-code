// const means the NAME can't point to a different array.
// It does NOT freeze the array's contents.

const cart = ["apple"];
cart.push("bread");     // ✅ allowed: changing the CONTENTS (mutation)
cart[0] = "pear";       // ✅ allowed
console.log(cart);

try {
  cart = ["new", "array"];  // ❌ not allowed: pointing the name somewhere else
} catch (error) {
  console.log("Error:", error.message); // (try/catch lets us show the error and keep going — Module 12)
}

// MUTATION = changing a value in place. push, pop, shift, unshift, splice,
// and assigning to an index all MUTATE the array.
