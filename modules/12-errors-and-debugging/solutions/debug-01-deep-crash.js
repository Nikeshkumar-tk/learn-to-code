// Fixed.
// The stack trace said: TypeError: Cannot read properties of undefined (reading 'name')
//   at teamNameFor   <- crash: team was undefined
// So findTeam returned undefined. Why? It was called with user.team — but users have
// `teamId`, not `team`. findTeam(undefined) can't match anything.
// Lesson: the crash line shows where the bad value was USED; the bug is where it was MADE.
// Bonus fix: make teamNameFor survive an unknown team instead of crashing.
const teams = [
  { id: "t1", name: "Backend" },
  { id: "t2", name: "Frontend" },
];

const users = [
  { name: "Ana", teamId: "t1" },
  { name: "Ben", teamId: "t2" },
];

function findTeam(teamId) {
  return teams.find((team) => team.id === teamId);
}

function teamNameFor(user) {
  const team = findTeam(user.teamId);
  return team?.name ?? "(no team)";
}

for (const user of users) {
  console.log(`${user.name}'s team: ${teamNameFor(user)}`);
}
