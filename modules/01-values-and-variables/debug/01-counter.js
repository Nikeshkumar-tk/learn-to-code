// @expect-error
// Debug 01.1 — The visitor counter
// Expected output:
//   Visitors: 0
//   Visitors: 1
//   Visitors: 2

const visitors = 0;
console.log("Visitors:", visitors);

visitors = visitors + 1;
console.log("Visitors:", visitors);

visitors = visitors + 1;
console.log("Visitors:", visitors);
