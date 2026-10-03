// Exercise 14.3 — Work with an async "database"
// Run:  node exercises/03-fake-database.js
//
// The `db` object below pretends to be a database: every function is async and slow.
// (Don't change it.) Write:
//
//   getUserSummary(userId)
//     -> "Ana has 2 orders totalling $150"
//     -> if the user doesn't exist (db.findUser throws), return "User 9 not found"
//        (i.e. return the error's message — don't let it crash)
//
//   getBiggestOrder(userId)
//     -> the order object with the largest `total` for that user, or null if they have none

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const db = {
  async findUser(id) {
    await wait(50);
    const user = [{ id: 1, name: "Ana" }, { id: 2, name: "Ben" }].find((u) => u.id === id);
    if (!user) throw new Error(`User ${id} not found`);
    return user;
  },
  async findOrders(userId) {
    await wait(50);
    return [
      { id: "o1", userId: 1, total: 100 },
      { id: "o2", userId: 1, total: 50 },
    ].filter((o) => o.userId === userId);
  },
};

// Write your code below.



// ─────────────────────────────────────────────────────────────
// Checks — don't edit below.
// ─────────────────────────────────────────────────────────────
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
check("summary for Ana", await getUserSummary(1), "Ana has 2 orders totalling $150");
check("summary for Ben", await getUserSummary(2), "Ben has 0 orders totalling $0");
check("summary for missing user", await getUserSummary(9), "User 9 not found");
check("biggest order", await getBiggestOrder(1), { id: "o1", userId: 1, total: 100 });
check("no orders", await getBiggestOrder(2), null);
