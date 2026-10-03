// Fixed. `await` inside the loop made each load wait for the previous one: 3 x 200ms = 600ms.
// The loads are independent, so start them all, then wait for all: ~200ms.
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function loadProfile(id) {
  await wait(200);
  return { id, name: `user-${id}` };
}

const start = Date.now();
const ids = [1, 2, 3];
const profiles = await Promise.all(ids.map((id) => loadProfile(id)));

console.log(`Loaded ${profiles.length} profiles in ~${Math.round((Date.now() - start) / 100) * 100}ms`);
