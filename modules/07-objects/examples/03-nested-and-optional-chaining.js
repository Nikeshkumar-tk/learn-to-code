// Objects can contain objects and arrays — this is how real data looks.
const order = {
  id: "A-100",
  customer: {
    name: "Lin",
    address: { city: "Pune", zip: "411001" },
  },
  items: [
    { name: "Keyboard", price: 50 },
    { name: "Mouse", price: 20 },
  ],
};

console.log(order.customer.name);
console.log(order.customer.address.city);
console.log(order.items[1].name);           // array inside object, object inside array
console.log(order.items.length);

// Reading through something that doesn't exist CRASHES:
const guestOrder = { id: "A-101" };          // no customer!
try {
  console.log(guestOrder.customer.name);     // undefined.name -> TypeError
} catch (error) {
  console.log("Crash:", error.message);
}

// Optional chaining ?. — "if the thing on the left is null/undefined, stop and give undefined"
console.log(guestOrder.customer?.name);                 // undefined, no crash
console.log(guestOrder.customer?.address?.city ?? "Unknown city"); // combine with ??
console.log(order.customer?.address?.city ?? "Unknown city");
