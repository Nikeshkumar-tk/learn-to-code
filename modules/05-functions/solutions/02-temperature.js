// Solution 05.2
function roundTo1(value) {
  return Math.round(value * 10) / 10;
}

function celsiusToFahrenheit(c) {
  return (c * 9) / 5 + 32;
}

function fahrenheitToCelsius(f) {
  return roundTo1(((f - 32) * 5) / 9);
}

console.log(celsiusToFahrenheit(25), fahrenheitToCelsius(77));
