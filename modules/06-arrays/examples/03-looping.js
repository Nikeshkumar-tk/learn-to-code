const colors = ["red", "green", "blue"];

// for...of: when you only need each ITEM
for (const color of colors) {
  console.log(color);
}

// classic for: when you also need the INDEX (position)
for (let i = 0; i < colors.length; i++) {
  console.log(`${i + 1}. ${colors[i]}`);
}

// Building a NEW array in a loop (accumulator pattern with an array!)
const shouted = [];
for (const color of colors) {
  shouted.push(color.toUpperCase());
}
console.log(shouted);
console.log(colors); // unchanged
