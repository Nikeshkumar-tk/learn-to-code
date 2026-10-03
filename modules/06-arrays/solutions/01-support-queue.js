// Solution 06.1
const queue = [];

function addTicket(ticket) {
  return queue.push(ticket);
}

function urgentTicket(ticket) {
  return queue.unshift(ticket);
}

function serveNext() {
  return queue.shift(); // shift() on an empty array returns undefined — exactly what we want
}

function peek() {
  return queue[0];
}

function lastTicket() {
  return queue[queue.length - 1];
}

addTicket("example");
console.log(peek(), queue.length);
serveNext();
