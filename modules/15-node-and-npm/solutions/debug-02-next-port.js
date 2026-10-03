// Fixed. Environment variables are ALWAYS strings. "3000" + 1 -> "30001".
// (When PORT wasn't set, the default 3000 was a number, so the bug only appeared
//  when the variable WAS set — a classic "works on my machine" bug.)
// Convert once, at the edge of the program, and validate if it matters.
const port = Number(process.env.PORT ?? 3000);
const nextPort = port + 1;

console.log(`Port ${port} busy, trying ${nextPort}`);
