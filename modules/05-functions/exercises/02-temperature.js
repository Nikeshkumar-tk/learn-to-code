// Exercise 05.2 — Temperature converter
// Run:  node exercises/02-temperature.js
//
// Write two functions:
//   celsiusToFahrenheit(c)  -> c * 9 / 5 + 32
//   fahrenheitToCelsius(f)  -> (f - 32) * 5 / 9, ROUNDED to 1 decimal place
//
// Rounding to 1 decimal:  Math.round(value * 10) / 10
//
// Bonus: write roundTo1(value) as its own little function and use it.

// Write your code below.



// ─────────────────────────────────────────────────────────────
// Checks — don't edit below.
// ─────────────────────────────────────────────────────────────
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
check("0°C -> 32°F", celsiusToFahrenheit(0), 32);
check("100°C -> 212°F", celsiusToFahrenheit(100), 212);
check("-40°C -> -40°F", celsiusToFahrenheit(-40), -40);
check("98.6°F -> 37°C", fahrenheitToCelsius(98.6), 37);
check("50°F -> 10°C", fahrenheitToCelsius(50), 10);
check("70°F -> 21.1°C", fahrenheitToCelsius(70), 21.1);
