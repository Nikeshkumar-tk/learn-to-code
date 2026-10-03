// @expect-error
// Debug 07.4 — "Cannot read properties of undefined"
// This is one of the most common errors in all of JavaScript. Learn to love it.
// Expected output:
//   Ana: ana.png
//   Ben: default-avatar.png      (Ben has no profile yet)

const users = [
  { name: "Ana", profile: { avatar: "ana.png" } },
  { name: "Ben" },
];

for (const user of users) {
  const avatar = user.profile.avatar;
  console.log(`${user.name}: ${avatar}`);
}
