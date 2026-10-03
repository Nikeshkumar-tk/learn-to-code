// @expect-error
// Debug 09.4 — "addTax is not a function"
// makeTaxAdder(rate) should return a FUNCTION that adds that tax rate to a price.
// Expected:
//   118
//   105

function makeTaxAdder(rate, price) {
  return price + price * rate;
}

const addGst = makeTaxAdder(0.18);
const addVat = makeTaxAdder(0.05);

console.log(addGst(100));
console.log(addVat(100));
