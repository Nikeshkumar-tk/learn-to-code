// await in a row = one AFTER another (sequential).
// Promise.all([...]) = start them all at once, wait for ALL (parallel).

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchProfile(name) {
  await wait(300);              // each "request" takes 300ms
  return { name };
}

let start = Date.now();
const a = await fetchProfile("ana");
const b = await fetchProfile("ben");
const c = await fetchProfile("cy");
console.log("Sequential:", [a, b, c].map((p) => p.name), `${Date.now() - start}ms`);

start = Date.now();
const profiles = await Promise.all([fetchProfile("ana"), fetchProfile("ben"), fetchProfile("cy")]);
console.log("Parallel:  ", profiles.map((p) => p.name), `${Date.now() - start}ms`);

// Use sequential when step 2 NEEDS the result of step 1 (getUser -> getOrders(user.id)).
// Use Promise.all when the tasks are independent.
// If ANY promise in Promise.all rejects, the whole Promise.all rejects.
