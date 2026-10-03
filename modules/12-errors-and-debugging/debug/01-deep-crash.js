// @expect-error
// Debug 12.1 — Read the stack trace. The crash line is NOT where the bug is.
// Expected output:
//   Ana's team: Backend
//   Ben's team: Frontend
//
// Steps: 1) Run it. 2) Read the stack trace top to bottom. 3) Which function received
// a bad value? 4) Which caller GAVE it that bad value? 5) Fix it there.

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
  const team = findTeam(user.team);
  return team.name;
}

for (const user of users) {
  console.log(`${user.name}'s team: ${teamNameFor(user)}`);
}
