// Solution 14.1
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function delayedGreeting(name, ms) {
  await wait(ms);
  return `Hello, ${name}!`;
}

async function countdown(from) {
  const numbers = [];
  for (let n = from; n >= 1; n--) {
    await wait(50);
    numbers.push(n);
  }
  return numbers;
}

console.log(await delayedGreeting("Ben", 10));
