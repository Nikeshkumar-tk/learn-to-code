// Fixed. 0 is FALSY, so `!stock` was true for 0 as well as undefined —
// "sold out" and "unknown" were treated the same.
// When 0 is a meaningful value, check for the missing case explicitly.
const stock = 0;

if (stock === undefined) {
  console.log("Stock information missing");
} else if (stock === 0) {
  console.log("Sold out");
} else {
  console.log("In stock:", stock);
}
