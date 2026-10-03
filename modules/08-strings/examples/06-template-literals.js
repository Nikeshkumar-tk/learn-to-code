// Template literals can span multiple lines and contain any expression.
const user = { name: "Ana", tasks: 3 };

const message = `Hi ${user.name},
You have ${user.tasks} task${user.tasks === 1 ? "" : "s"} today.
Total effort: ${user.tasks * 25} minutes.`;
console.log(message);

// Formatting helpers for neat terminal output:
console.log("5".padStart(3, "0"));       // "005"
console.log("Name".padEnd(10) + "|");    // pad with spaces to width 10
console.log("-".repeat(20));

const rows = [["Milk", 2], ["Bread", 1], ["Coffee", 12]];
for (const [item, qty] of rows) {
  console.log(`${item.padEnd(8)}${String(qty).padStart(4)}`);
}
