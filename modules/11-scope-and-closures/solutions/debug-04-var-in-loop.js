// Fixed. With `var`, there is ONE `i` shared by all three arrow functions.
// They run after the loop has finished, when i === 3, and buttons[3] is undefined.
// With `let`, each round of the loop gets its own `i`, captured by that round's function.
const buttons = ["Save", "Edit", "Delete"];
const handlers = [];

for (let i = 0; i < buttons.length; i++) {
  handlers.push(() => console.log("Clicked", buttons[i]));
}
// Even simpler: for (const label of buttons) handlers.push(() => console.log("Clicked", label));

handlers[0]();
handlers[1]();
handlers[2]();
