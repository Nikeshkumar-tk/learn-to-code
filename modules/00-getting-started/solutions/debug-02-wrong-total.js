// Fixed: "10 + 20" in quotes is TEXT, so JavaScript printed it exactly as written.
// Without quotes, 10 + 20 is a calculation and JavaScript prints the result.
// This is a LOGIC bug: no error message, just wrong output. Those are the sneaky ones.
console.log("Item 1 costs 10");
console.log("Item 2 costs 20");
console.log("Total price:", 10 + 20);
