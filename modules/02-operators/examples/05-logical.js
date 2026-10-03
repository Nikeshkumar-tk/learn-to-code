// Logical operators combine booleans.
//   &&  AND -> true only if BOTH sides are true
//   ||  OR  -> true if AT LEAST ONE side is true
//   !   NOT -> flips true <-> false

const hasTicket = true;
const isVip = false;
const age = 16;

console.log(hasTicket && age >= 18);  // false: has ticket but too young
console.log(hasTicket || isVip);      // true: one is enough
console.log(!isVip);                  // true

// Store complicated rules in well-named variables:
const isAdult = age >= 18;
const canEnter = hasTicket && (isAdult || isVip);
console.log("Can enter?", canEnter);

// Truth table for &&  (try writing the one for || yourself)
console.log(true && true, true && false, false && true, false && false);
