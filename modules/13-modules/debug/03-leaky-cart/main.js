// @entry
// Debug 13.3 — Customers see each other's carts
// Run:  node debug/03-leaky-cart/main.js
// Expected:
//   Ana's cart: [ 'book' ]
//   Ben's cart: [ 'lamp' ]
//
// Hint: how many times does cart.js run? How many `items` arrays exist?

import * as anaCart from "./cart.js";
import * as benCart from "./cart.js";

anaCart.addItem("book");
benCart.addItem("lamp");

console.log("Ana's cart:", anaCart.items);
console.log("Ben's cart:", benCart.items);
