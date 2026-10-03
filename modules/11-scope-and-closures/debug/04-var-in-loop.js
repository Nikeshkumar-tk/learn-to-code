// Debug 11.4 — Every button says the same thing
// We create one click handler per button. Expected:
//   Clicked Save
//   Clicked Edit
//   Clicked Delete

const buttons = ["Save", "Edit", "Delete"];
const handlers = [];

for (var i = 0; i < buttons.length; i++) {
  handlers.push(() => console.log("Clicked", buttons[i]));
}

handlers[0]();
handlers[1]();
handlers[2]();
