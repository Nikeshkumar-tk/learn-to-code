// A MODULE is just a file. Things inside it are PRIVATE unless you `export` them.

export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

// Not exported -> other files cannot use it. It's an internal helper.
function secretHelper() {
  return "you can't import me";
}

export const PI_ROUNDED = 3.14;
