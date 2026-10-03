// Three kinds of problems you'll meet:
//
// 1. SYNTAX ERROR — the code isn't valid JavaScript. Node refuses to start.
//      console.log("hi"        <- missing )
//    Found: immediately, before anything runs. Usually the easiest to fix.
//
// 2. RUNTIME ERROR — valid code that crashes WHILE running.
//      undefinedThing.name     <- TypeError
//    Found: when that line runs. The error message + location point the way.
//
// 3. LOGIC ERROR — no crash at all, but the result is wrong.
//    Found: only by comparing what you GOT with what you EXPECTED. The hardest kind.

// A logic error, live:
function averageOf(numbers) {
  let total = 0;
  for (const n of numbers) total += n;
  return total / (numbers.length + 1);   // 🐛 why +1?
}

console.log("Average of 2, 4, 6 should be 4 ->", averageOf([2, 4, 6]));
// No error message will ever tell you about this bug. Only YOU can notice it.
// That's why we write checks (like the ✅/❌ lines in the exercises) — they turn
// logic errors into visible failures.
