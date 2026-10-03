// switch compares ONE value against many possible exact matches (using ===).

const day = "sat";

switch (day) {
  case "sat":
  case "sun":                       // two cases sharing one block
    console.log("Weekend 🎉");
    break;                          // break = "stop here, leave the switch"
  case "fri":
    console.log("Almost weekend");
    break;
  default:                          // runs if nothing matched (like a final else)
    console.log("Weekday");
}

// Try removing the `break` after "Weekend" and set day to "sat". What happens?
// Without break, execution "falls through" into the next case.
