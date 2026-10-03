// Debug 06.4 — The numbered list is wrong
// Expected:
//   1. milk
//   2. eggs
//   3. bread

const shoppingList = ["milk", "eggs", "bread"];

for (let i = 1; i <= shoppingList.length; i++) {
  console.log(`${i}. ${shoppingList[i]}`);
}
