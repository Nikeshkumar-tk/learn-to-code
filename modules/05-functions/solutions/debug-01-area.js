// Fixed. The function calculated `area`... and then ended without returning it.
// A function with no return statement returns undefined.
function calculateArea(width, length) {
  return width * length;
}

const roomArea = calculateArea(3, 4);
console.log(`Room area: ${roomArea} square metres`);
