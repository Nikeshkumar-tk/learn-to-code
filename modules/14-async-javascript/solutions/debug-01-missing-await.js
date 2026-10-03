// Fixed. getUser is async, so calling it returns a PROMISE, not the user.
// A Promise has no .name -> undefined. (console.log(user) would show Promise { <pending> }.)
// await unwraps the promise into its value.
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function getUser(id) {
  await wait(100);
  return { id, name: "Ana" };
}

const user = await getUser(1);
console.log(`Welcome back, ${user.name}!`);
