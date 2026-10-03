// new Promise((resolve, reject) => { ... })
//   call resolve(value) when the work succeeds
//   call reject(error)  when it fails
//
// You'll rarely write this in apps (libraries give you promises), but writing it once
// removes the mystery.

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function rollDice() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const value = Math.ceil(Math.random() * 6);
      if (value === 1) reject(new Error("Rolled a 1 — you lose!"));
      else resolve(value);
    }, 300);
  });
}

wait(500).then(() => console.log("Half a second has passed"));

rollDice()
  .then((value) => console.log("Rolled", value))
  .catch((error) => console.log(error.message))
  .finally(() => console.log("Dice game over")); // runs either way
