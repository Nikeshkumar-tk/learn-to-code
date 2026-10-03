// Exercise 06.1 — A support-ticket queue (mutating methods)
// Run:  node exercises/01-support-queue.js
//
// `queue` holds ticket names, oldest first. Write these functions — they SHOULD
// mutate `queue`, that's the point of a queue:
//
//   addTicket(ticket)   -> adds ticket to the END, returns the new queue length
//   urgentTicket(ticket)-> adds ticket to the FRONT, returns the new queue length
//   serveNext()         -> removes and RETURNS the ticket at the front
//                          (returns undefined if the queue is empty)
//   peek()              -> RETURNS the front ticket WITHOUT removing it
//   lastTicket()        -> RETURNS the last ticket without removing it
//
// Hint: push and unshift return the new length.

const queue = [];

// Write your code below.



// ─────────────────────────────────────────────────────────────
// Checks — don't edit below.
// ─────────────────────────────────────────────────────────────
function check(label, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  console.log(`${ok ? "✅" : "❌"} ${label}`);
  if (!ok) console.log(`   expected: ${JSON.stringify(expected)}\n   received: ${JSON.stringify(actual)}`);
}
check("addTicket returns length", addTicket("login broken"), 1);
addTicket("typo on homepage");
check("urgentTicket returns length", urgentTicket("site down!"), 3);
check("queue order", queue, ["site down!", "login broken", "typo on homepage"]);
check("peek", peek(), "site down!");
check("lastTicket", lastTicket(), "typo on homepage");
check("peek did not remove anything", queue.length, 3);
check("serveNext", serveNext(), "site down!");
check("queue after serve", queue, ["login broken", "typo on homepage"]);
serveNext();
serveNext();
check("serveNext on empty queue", serveNext(), undefined);
