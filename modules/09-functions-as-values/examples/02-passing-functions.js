// If functions are values, you can pass them INTO other functions as arguments.

function shout(text) {
  return text.toUpperCase() + "!";
}

function whisper(text) {
  return text.toLowerCase() + "...";
}

// `formatter` is a parameter that will hold a FUNCTION.
function announce(message, formatter) {
  return "📢 " + formatter(message);   // call whatever function we were given
}

console.log(announce("Hello team", shout));    // pass the function itself — no ()
console.log(announce("Hello team", whisper));

// You can also create the function right inside the call (an "inline" arrow function):
console.log(announce("Hello team", (text) => `~~ ${text} ~~`));

// The SAME announce function behaves differently depending on the function we pass in.
// That's the whole point: the caller decides part of the behaviour.
