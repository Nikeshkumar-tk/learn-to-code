// Debug 05.1 — Area is undefined
// Expected: "Room area: 12 square metres"

function calculateArea(width, length) {
  const area = width * length;
}

const roomArea = calculateArea(3, 4);
console.log(`Room area: ${roomArea} square metres`);
