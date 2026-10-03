const tasks = ["email", "code"];

// Replace an item by index
tasks[0] = "reply to email";
console.log(tasks);

// Add/remove at the END
tasks.push("deploy");          // add to the end
console.log(tasks);
const last = tasks.pop();      // remove from the end (and get it back)
console.log("popped:", last, tasks);

// Add/remove at the START
tasks.unshift("coffee");       // add to the start
console.log(tasks);
const first = tasks.shift();   // remove from the start (and get it back)
console.log("shifted:", first, tasks);

// Remove from the MIDDLE with splice(startIndex, howMany)
const week = ["mon", "tue", "wed", "thu", "fri"];
week.splice(2, 1);             // at index 2, remove 1 item
console.log(week);             // wed is gone

// Find where something is
console.log(week.indexOf("thu"));  // 2
console.log(week.indexOf("sun"));  // -1 means "not found"
