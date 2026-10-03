// Solution 10.2
const products = [
  { id: 1, name: "Mechanical Keyboard", price: 90, stock: 5 },
  { id: 2, name: "USB-C Cable", price: 12, stock: 0 },
  { id: 3, name: "Wireless Mouse", price: 35, stock: 12 },
  { id: 4, name: "Keyboard Wrist Rest", price: 18, stock: 3 },
];

const inStock = (products) => products.filter((p) => p.stock > 0);

const cheaperThan = (products, maxPrice) => products.filter((p) => p.price < maxPrice);

const searchByName = (products, text) =>
  products.filter((p) => p.name.toLowerCase().includes(text.toLowerCase()));

const findById = (products, id) => products.find((p) => p.id === id);

const positionOf = (products, id) => products.findIndex((p) => p.id === id);

const removeById = (products, id) => products.filter((p) => p.id !== id);

console.log(searchByName(products, "keyboard").map((p) => p.name));
