// The ternary operator is a compact if/else that PRODUCES A VALUE:
//     condition ? valueIfTrue : valueIfFalse

const itemCount = 1;
const label = itemCount === 1 ? "item" : "items";
console.log(`You have ${itemCount} ${label} in your cart.`);

const isOnline = false;
console.log(`Status: ${isOnline ? "🟢 online" : "⚪ offline"}`);

// The same thing written with if/else needs a `let`:
let status;
if (isOnline) {
  status = "🟢 online";
} else {
  status = "⚪ offline";
}
console.log(`Status: ${status}`);

// Use ternaries for SHORT choices between two values. Don't nest them — use if/else instead.
