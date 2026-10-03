// Fixed. "TypeError: Cannot read properties of undefined (reading 'avatar')" means:
// "you wrote X.avatar, and X was undefined". So the question is: which X? -> user.profile.
// Ben has no profile, so user.profile is undefined.
// Fix: optional chaining + a default.
const users = [
  { name: "Ana", profile: { avatar: "ana.png" } },
  { name: "Ben" },
];

for (const user of users) {
  const avatar = user.profile?.avatar ?? "default-avatar.png";
  console.log(`${user.name}: ${avatar}`);
}
