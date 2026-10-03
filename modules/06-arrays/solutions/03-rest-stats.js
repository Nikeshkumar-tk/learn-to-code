// Solution 06.3
function sum(...numbers) {
  let total = 0;
  for (const n of numbers) {
    total += n;
  }
  return total;
}

function average(...numbers) {
  if (numbers.length === 0) return 0; // avoid dividing by zero (0 / 0 is NaN)
  return sum(...numbers) / numbers.length;
}

function range(...numbers) {
  if (numbers.length === 0) return 0;
  return Math.max(...numbers) - Math.min(...numbers);
}

function averageOfArray(numbers) {
  return average(...numbers);
}

console.log(sum(1, 2, 3), average(2, 4, 9), range(4, 10, 1), averageOfArray([10, 20]));
