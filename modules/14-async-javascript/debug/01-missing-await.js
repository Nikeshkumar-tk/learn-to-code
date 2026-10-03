// Debug 14.1 — The user's name is undefined
// Expected: "Welcome back, Ana!"

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function getUser(id) {
  await wait(100);
  return { id, name: "Ana" };
}

const user = getUser(1);
console.log(`Welcome back, ${user.name}!`);
