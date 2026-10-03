// COMPOSITION: building a bigger function by chaining small ones,
// where the output of one becomes the input of the next.

const trim = (text) => text.trim();
const lower = (text) => text.toLowerCase();
const dashes = (text) => text.replaceAll(" ", "-");

// By hand: read inside-out (awkward)
console.log(dashes(lower(trim("  Hello Big World  "))));

// A helper that composes ANY number of functions, left to right:
function pipe(...fns) {
  return (input) => {
    let result = input;
    for (const fn of fns) {
      result = fn(result);   // feed the previous result into the next function
    }
    return result;
  };
}

const toSlug = pipe(trim, lower, dashes);
console.log(toSlug("  Hello Big World  "));
console.log(toSlug("  Functions Are Values "));

// Each small function is easy to test alone. The pipeline reads like a recipe.
