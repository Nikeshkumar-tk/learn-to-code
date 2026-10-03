// Exercise 11.1 — Read code like a computer (prediction practice)
// Run:  node exercises/01-predict-scope.js
//
// DON'T run the code in the "puzzles" section in your head with guesses — trace it line by line.
// For each puzzle, set the matching `answerN` variable to what you predict the puzzle returns.
// Then run the file to check. If you're wrong, find out WHY before moving on.

// ── Puzzles (don't change these) ──────────────────────────────
const x = "outer";
function puzzle1() {
  const x = "inner";
  return x;
}

function puzzle2() {
  return x;
}

function puzzle3() {
  let count = 0;
  function add() {
    count += 10;
  }
  add();
  add();
  return count;
}

function makeAdder(a) {
  return (b) => a + b;
}
function puzzle4() {
  const addTwo = makeAdder(2);
  const addTen = makeAdder(10);
  return addTwo(1) + addTen(1);
}

function puzzle5() {
  let result = "start";
  if (true) {
    let result = "block";
    result = result + "!";
  }
  return result;
}

// ── Your predictions ──────────────────────────────────────────
const answer1 = "???";
const answer2 = "???";
const answer3 = "???";
const answer4 = "???";
const answer5 = "???";

// ─────────────────────────────────────────────────────────────
// Checks — don't edit below.
// ─────────────────────────────────────────────────────────────
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
check("puzzle 1", answer1, puzzle1());
check("puzzle 2", answer2, puzzle2());
check("puzzle 3", answer3, puzzle3());
check("puzzle 4", answer4, puzzle4());
check("puzzle 5", answer5, puzzle5());
