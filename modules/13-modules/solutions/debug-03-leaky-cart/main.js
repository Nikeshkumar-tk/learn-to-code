// @entry
import { createCart } from "./cart.js";

const anaCart = createCart();
const benCart = createCart();

anaCart.addItem("book");
benCart.addItem("lamp");

console.log("Ana's cart:", anaCart.getItems());
console.log("Ben's cart:", benCart.getItems());
