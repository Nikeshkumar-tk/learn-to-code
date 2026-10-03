// Solution 06.4
const leaderboard = ["Mo", "Lee", "Sam", "Kai", "Ivy"];

const [gold, silver, ...others] = leaderboard;

function splitName(fullName) {
  const parts = fullName.split(" ");
  return [parts[0], parts[1]];
  // also fine: return fullName.split(" ");
}

const [firstName, lastName] = splitName("Grace Hopper");

function headAndTail(list) {
  const [head, ...tail] = list;
  return [head, tail];
}

console.log(gold, silver, others, firstName, lastName, headAndTail([1, 2, 3]));
