// Fixed. sort() with no compare function sorts items as STRINGS:
// "1500" < "420" < "75" < "9" alphabetically, because "1" < "4" < "7" < "9".
// Give sort a numeric compare function. (b - a sorts descending, so no reverse needed.)
const scores = [420, 9, 1500, 75, 980];
const leaderboard = [...scores].sort((a, b) => b - a);

console.log(leaderboard);
