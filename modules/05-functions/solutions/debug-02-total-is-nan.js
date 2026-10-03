// Fixed. itemCost PRINTED its result but didn't RETURN it, so each call gave undefined.
// undefined + undefined = NaN.
// Rule: if a caller needs the value, return it. Printing is for humans; returning is for code.
function itemCost(price, quantity) {
  return price * quantity;
}

const total = itemCost(5, 3) + itemCost(10, 2);
console.log("Order total:", total);
