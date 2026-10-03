// Solution 01.2
// pricePerItem never changes -> const.  quantity and total change -> let.
const pricePerItem = 12;
let quantity = 3;
let total = pricePerItem * quantity;
console.log(`${quantity} items cost $${total}`);

quantity = quantity + 2;
total = pricePerItem * quantity; // total does NOT update by itself — you must recalculate it
console.log(`Wait, ${quantity} items cost $${total}`);
