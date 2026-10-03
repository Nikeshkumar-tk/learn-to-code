// PARAMETERS are the names in the declaration — placeholders for input.
// ARGUMENTS are the actual values you pass in when calling.

function greet(name, timeOfDay) {      // name, timeOfDay = parameters
  console.log(`Good ${timeOfDay}, ${name}!`);
}

greet("Ada", "morning");               // "Ada", "morning" = arguments
greet("Linus", "evening");

// Arguments are matched to parameters by POSITION, not by name.
greet("evening", "Linus");             // oops: Good Linus, evening!

// Missing arguments become undefined.
greet("Grace");
