// Functions created inside a loop capture the loop variable.
// With `let`, each round gets its OWN copy of i.

const greeters = [];
for (let i = 1; i <= 3; i++) {
  greeters.push(() => `Hello from round ${i}`);
}
for (const greet of greeters) {
  console.log(greet());          // 1, 2, 3 — as expected
}

// With old-style `var`, there's only ONE i shared by every function.
// By the time the functions run, the loop has finished and i is 4.
const brokenGreeters = [];
for (var j = 1; j <= 3; j++) {
  brokenGreeters.push(() => `Hello from round ${j}`);
}
for (const greet of brokenGreeters) {
  console.log(greet());          // 4, 4, 4 !
}
// One more reason to use let/const.
