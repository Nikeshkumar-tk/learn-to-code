// Methods that return arrays can be CHAINED: each one feeds the next.
// Read top to bottom like a recipe.

const orders = [
  { id: 1, customer: "Ana", total: 120, status: "paid" },
  { id: 2, customer: "Ben", total: 45, status: "refunded" },
  { id: 3, customer: "Ana", total: 80, status: "paid" },
  { id: 4, customer: "Cy", total: 300, status: "paid" },
  { id: 5, customer: "Ben", total: 60, status: "pending" },
];

// "Total revenue from paid orders over $50"
const revenue = orders
  .filter((order) => order.status === "paid")   // keep paid
  .filter((order) => order.total > 50)          // keep big ones
  .map((order) => order.total)                  // just the numbers
  .reduce((sum, total) => sum + total, 0);      // add them up
console.log("Revenue:", revenue);

// "Names of customers with paid orders, alphabetically, no duplicates"
const customers = orders
  .filter((order) => order.status === "paid")
  .map((order) => order.customer)
  .filter((name, index, all) => all.indexOf(name) === index) // keep first occurrence only
  .sort((a, b) => a.localeCompare(b));
console.log("Customers:", customers);

// Debugging a chain: break it apart and log each step!
const paid = orders.filter((order) => order.status === "paid");
console.log("after filter:", paid.length, "orders");
