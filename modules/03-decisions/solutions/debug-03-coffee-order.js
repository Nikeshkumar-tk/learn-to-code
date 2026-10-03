// Fixed. Without `break`, a matched case "falls through" and runs every case below it,
// so price was set to 3, then 4, then 5.
const size = "small";
let price;

switch (size) {
  case "small":
    price = 3;
    break;
  case "medium":
    price = 4;
    break;
  case "large":
    price = 5;
    break;
  default:
    price = 0;
}

console.log("Price:", price);
