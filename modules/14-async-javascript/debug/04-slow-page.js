// Debug 14.4 — A slow page (performance bug, no error)
// Each profile takes 200ms to load, and they don't depend on each other.
// Expected: "Loaded 3 profiles in ~200ms"   (actual: run it!)

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function loadProfile(id) {
  await wait(200);
  return { id, name: `user-${id}` };
}

const start = Date.now();
const ids = [1, 2, 3];
const profiles = [];
for (const id of ids) {
  profiles.push(await loadProfile(id));
}

console.log(`Loaded ${profiles.length} profiles in ~${Math.round((Date.now() - start) / 100) * 100}ms`);
