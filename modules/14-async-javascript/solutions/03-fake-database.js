// Solution 14.3
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

async function getUserSummary(userId) {
  try {
    const user = await db.findUser(userId);
    const orders = await db.findOrders(user.id);
    const total = orders.reduce((sum, order) => sum + order.total, 0);
    return `${user.name} has ${orders.length} orders totalling $${total}`;
  } catch (error) {
    return error.message;
  }
}

async function getBiggestOrder(userId) {
  const orders = await db.findOrders(userId);
  if (orders.length === 0) return null;
  return orders.reduce((biggest, order) => (order.total > biggest.total ? order : biggest));
}

console.log(await getUserSummary(1));
