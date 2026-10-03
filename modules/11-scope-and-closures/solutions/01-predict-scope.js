// Solution 11.1 — with the reasoning:
// puzzle1: the inner `x` shadows the outer one -> "inner"
// puzzle2: no local x, so look outward: the file's x -> "outer"
// puzzle3: add() changes the OUTER count (no new declaration inside add) -> 20
// puzzle4: addTwo remembers a = 2, addTen remembers a = 10: 3 + 11 -> 14
// puzzle5: the `let result` inside the if-block is a DIFFERENT variable;
//          the outer result is never changed -> "start"
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

const answer1 = "inner";
const answer2 = "outer";
const answer3 = 20;
const answer4 = 14;
const answer5 = "start";
