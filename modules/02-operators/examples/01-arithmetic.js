// Arithmetic operators: they take numbers and produce a new number.

console.log(7 + 2);   // 9   addition
console.log(7 - 2);   // 5   subtraction
console.log(7 * 2);   // 14  multiplication
console.log(7 / 2);   // 3.5 division
console.log(7 % 2);   // 1   REMAINDER ("modulo"): 7 = 2*3 + 1
console.log(2 ** 3);  // 8   exponent: 2 * 2 * 2

// Precedence: * and / happen before + and -, just like in school maths.
console.log(2 + 3 * 4);     // 14, not 20
console.log((2 + 3) * 4);   // 20 — parentheses go first

// Useful helpers from Math:
console.log(Math.round(4.6)); // 5
console.log(Math.floor(4.6)); // 4 (always down)
console.log(Math.ceil(4.1));  // 5 (always up)

// Decimals are not always exact (true in almost every programming language):
console.log(0.1 + 0.2);       // 0.30000000000000004 !
