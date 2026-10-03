// The problem: the same logic copy-pasted in three places.
const price1 = 100;
const priceWithTax1 = price1 + price1 * 0.18;
console.log(priceWithTax1);

const price2 = 250;
const priceWithTax2 = price2 + price2 * 0.18;
console.log(priceWithTax2);

// The tax rate changes to 20%. Now you must find and fix EVERY copy. Miss one = bug.

// The solution: write the logic ONCE, give it a name, and reuse it.
function addTax(price) {
  return price + price * 0.18;
}

console.log(addTax(100));
console.log(addTax(250));
console.log(addTax(999));
