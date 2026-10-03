// Debug 10.1 — The leaderboard is in a strange order
// Expected: [ 1500, 980, 420, 75, 9 ]  (highest first)

const scores = [420, 9, 1500, 75, 980];
const leaderboard = scores.sort().reverse();

console.log(leaderboard);
