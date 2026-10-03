// while (condition) { body } — keeps going as long as the condition is true.
// Use it when you DON'T know in advance how many rounds you need.

// How many times must we double 1 to pass 1000?
let value = 1;
let doublings = 0;

while (value <= 1000) {
  value = value * 2;
  doublings++;
}

console.log(`After ${doublings} doublings, value is ${value}`);

// ⚠️ Something inside the loop MUST eventually make the condition false.
// If not, you get an INFINITE LOOP. (Stop one with Ctrl + C in the terminal.)
