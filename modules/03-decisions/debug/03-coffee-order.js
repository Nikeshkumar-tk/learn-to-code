// Debug 03.3 — The very expensive small coffee
// Expected: "Price: 3"
// Change size to "medium" and "large" too — what should those print?

const size = "small";
let price;

switch (size) {
  case "small":
    price = 3;
  case "medium":
    price = 4;
  case "large":
    price = 5;
    break;
  default:
    price = 0;
}

console.log("Price:", price);
