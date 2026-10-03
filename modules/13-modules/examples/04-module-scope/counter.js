// Code in a module runs ONCE — the first time any file imports it.
// After that, every importer shares the SAME exported values.
console.log("  (counter.js is being loaded — you'll see this only once)");

let count = 0; // private to this module; only the functions below can touch it

export function increment() {
  count++;
  return count;
}

export function current() {
  return count;
}
