// @expect-error  (crashes on purpose — read the stack trace!)
//
// When an error happens inside nested function calls, Node prints a STACK TRACE:
// the list of function calls that were "in progress" at the moment of the crash.

function formatAddress(address) {
  return `${address.street}, ${address.city}`;          // line 7: the crash happens here...
}

function formatUser(user) {
  return `${user.name} — ${formatAddress(user.address)}`; // line 11: ...called from here...
}

function printUsers(users) {
  for (const user of users) {
    console.log(formatUser(user));                        // line 16: ...called from here
  }
}

printUsers([
  { name: "Ana", address: { street: "1 Main St", city: "Pune" } },
  { name: "Ben" },                                        // 🐛 no address!
]);

// HOW TO READ IT:
//   TypeError: Cannot read properties of undefined (reading 'street')
//       at formatAddress (...02-reading-a-stack-trace.js:7:...)   <- WHERE it crashed
//       at formatUser    (...:11:...)                              <- who called that
//       at printUsers    (...:16:...)                              <- who called THAT
//       at ...:20                                                   <- where it all started
//
// The top line tells you where it crashed. But the BUG is often further down the stack:
// formatAddress is fine — the real question is "why did it receive undefined?"
