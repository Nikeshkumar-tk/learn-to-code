// async/await: write async code that READS like normal top-to-bottom code.
//
//   async function f() { ... }  -> f always returns a promise
//   await somePromise            -> pause THIS function until the promise settles,
//                                   then give back its value (or throw its error)

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function getUser(id) {
  await wait(200);                       // pretend this is a database query
  if (id !== 1) throw new Error(`User ${id} not found`);
  return { id: 1, name: "Ana" };
}

async function getOrders(userId) {
  await wait(200);
  return [{ total: 20 }, { total: 35 }];
}

// Compare with the nested callbacks in example 02:
async function showSummary(id) {
  const user = await getUser(id);
  const orders = await getOrders(user.id);
  const total = orders.reduce((sum, o) => sum + o.total, 0);
  console.log(`${user.name}: ${orders.length} orders, $${total}`);
}

// In an ES module (this course), you can use await at the top level of a file:
await showSummary(1);
console.log("This prints AFTER the summary, because we awaited it.");
