// Two special "nothing" values:
//   undefined -> "no value has been given yet" (JavaScript uses this automatically)
//   null      -> "intentionally empty" (YOU choose to put this)

let middleName;              // declared but never given a value
console.log(middleName);     // undefined
console.log(typeof middleName);

let selectedTask = null;     // "nothing is selected right now" — on purpose
console.log(selectedTask);
console.log(typeof selectedTask); // "object" — a famous historical quirk. Just remember it.

selectedTask = "Write tests";
console.log(selectedTask);
