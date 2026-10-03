// Fixed. A module runs only ONCE, so `export const items = []` created a single array
// shared by everyone who imports the module — importing it "twice" changes nothing.
// When you need SEPARATE state per customer, export a FACTORY (Module 11!) instead.
export function createCart() {
  const items = [];
  return {
    addItem(item) {
      items.push(item);
    },
    getItems() {
      return [...items];
    },
  };
}
