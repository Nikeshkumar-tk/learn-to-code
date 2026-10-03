// Solution 14.5
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function retry(fn, attempts) {
  let lastError;
  for (let attempt = 1; attempt <= attempts; attempt++) {
    try {
      return await fn(); // `return await` inside try: so a rejection is caught HERE
    } catch (error) {
      lastError = error;
      if (attempt < attempts) await wait(20);
    }
  }
  throw lastError;
}

console.log(await retry(async () => "worked first time", 3));
