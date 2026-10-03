// The OLDEST way to handle async results: pass a callback (Module 09!) that gets called
// when the work is done. Node's convention is "error-first callbacks": callback(error, result).

const fakeUsers = { 1: { id: 1, name: "Ana" } };
const fakeOrders = { 1: [{ total: 20 }, { total: 35 }] };

function getUser(id, callback) {
  setTimeout(() => {
    const user = fakeUsers[id];
    if (!user) callback(new Error(`User ${id} not found`));
    else callback(null, user);
  }, 200);
}

function getOrders(userId, callback) {
  setTimeout(() => callback(null, fakeOrders[userId] ?? []), 200);
}

getUser(1, (error, user) => {
  if (error) return console.log("Error:", error.message);
  getOrders(user.id, (error, orders) => {
    if (error) return console.log("Error:", error.message);
    console.log(`${user.name} has ${orders.length} orders`);
    // Each extra step nests deeper... known as "callback hell". Promises fix this.
  });
});

getUser(42, (error) => {
  if (error) console.log("Error:", error.message);
});
