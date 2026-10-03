// Solution 11.5
function createCart() {
  let items = [];

  function addItem(name, price, quantity = 1) {
    const existing = items.find((item) => item.name === name);
    if (existing) {
      existing.quantity += quantity;
    } else {
      items.push({ name, price, quantity });
    }
  }

  function removeItem(name) {
    items = items.filter((item) => item.name !== name);
  }

  function getItems() {
    return items.map((item) => ({ ...item })); // copies of each item, in a new array
  }

  function total() {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  function itemCount() {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  }

  return { addItem, removeItem, getItems, total, itemCount };
}

const demoCart = createCart();
demoCart.addItem("Book", 12, 2);
console.log(demoCart.total());
