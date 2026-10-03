// Three classic async mistakes — recognise them in your own and AI-written code.

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function getPrice(item) {
  await wait(100);
  return { apple: 2, bread: 3 }[item];
}

// Mistake 1: forgetting await -> you get a Promise, not the value
const price = getPrice("apple");
console.log("Mistake 1:", price);                     // Promise { <pending> }
console.log("Mistake 1 fixed:", await getPrice("apple"));

// Mistake 2: async callbacks in forEach — forEach doesn't wait for them
let total = 0;
["apple", "bread"].forEach(async (item) => {
  total += await getPrice(item);
});
console.log("Mistake 2 total:", total);               // 0 — printed before the prices arrived

let fixedTotal = 0;
for (const item of ["apple", "bread"]) {
  fixedTotal += await getPrice(item);                 // for...of DOES wait
}
console.log("Mistake 2 fixed:", fixedTotal);

// Mistake 3: using await inside a function that isn't async -> SyntaxError
// function broken() { const p = await getPrice("apple"); }   // ❌ won't even start
async function works() {
  return await getPrice("bread");
}
console.log("Mistake 3 fixed:", await works());
