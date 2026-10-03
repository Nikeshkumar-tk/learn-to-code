// Fixed. makeTaxAdder returned a NUMBER (NaN, since price was undefined), not a function.
// So addGst was NaN, and NaN(100) -> "addGst is not a function".
// A factory takes its configuration now and returns a function that takes the rest later.
function makeTaxAdder(rate) {
  return (price) => price + price * rate;
}

const addGst = makeTaxAdder(0.18);
const addVat = makeTaxAdder(0.05);

console.log(addGst(100));
console.log(addVat(100));
