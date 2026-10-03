// Fixed. Two off-by-one errors that half-cancel each other:
// the loop started at index 1 (skipping "milk") and went up to index 3 (undefined).
// Keep the INDEX zero-based, and add 1 only for the DISPLAY number.
const shoppingList = ["milk", "eggs", "bread"];

for (let i = 0; i < shoppingList.length; i++) {
  console.log(`${i + 1}. ${shoppingList[i]}`);
}
