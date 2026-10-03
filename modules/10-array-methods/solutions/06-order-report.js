// Solution 10.6
const orders = [
  { id: 1, customer: "Ana", amount: 120, status: "paid", items: ["mouse", "pad"] },
  { id: 2, customer: "Ben", amount: 300, status: "refunded", items: ["monitor"] },
  { id: 3, customer: "Ana", amount: 40, status: "paid", items: ["cable"] },
  { id: 4, customer: "Cy", amount: 200, status: "paid", items: ["keyboard", "mouse"] },
  { id: 5, customer: "Ben", amount: 15, status: "pending", items: ["cable"] },
];

const paidOrders = (orders) => orders.filter((order) => order.status === "paid");

const paidRevenue = (orders) => paidOrders(orders).reduce((sum, order) => sum + order.amount, 0);

function bestCustomer(orders) {
  const totals = paidOrders(orders).reduce((acc, order) => {
    acc[order.customer] = (acc[order.customer] ?? 0) + order.amount;
    return acc;
  }, {});
  // totals = { Ana: 160, Cy: 200 } -> pick the entry with the biggest value
  const [bestName] = Object.entries(totals).reduce((best, entry) => (entry[1] > best[1] ? entry : best));
  return bestName;
}

function productsSold(orders) {
  const allItems = paidOrders(orders).reduce((items, order) => [...items, ...order.items], []);
  // (order.items arrays could also be combined with .flatMap((order) => order.items))
  return allItems
    .filter((item, index) => allItems.indexOf(item) === index)
    .sort((a, b) => a.localeCompare(b));
}

const summary = (orders) => `${paidOrders(orders).length} paid orders, $${paidRevenue(orders)} revenue`;

console.log(summary(orders), bestCustomer(orders), productsSold(orders));
