// === (strict equality) compares value AND type.
// ==  (loose equality) converts types first, which causes surprises.

console.log(5 === 5);     // true
console.log(5 === "5");   // false — number vs string
console.log(5 == "5");    // true  — == converted "5" into 5 behind your back

// Some famous == surprises:
console.log(0 == "");           // true  (?!)
console.log(null == undefined); // true
console.log(false == "0");      // true  (?!)

// The same with ===:
console.log(0 === "");           // false
console.log(null === undefined); // false
console.log(false === "0");      // false

// RULE FOR THIS COURSE: always use === and !==.
// When you see == in someone else's code, ask "did they mean to allow type conversion?"
