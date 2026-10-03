// Storing functions in an object lets you pick behaviour by NAME.
// This is how routers work: "for this URL, run that function".

const handlers = {
  hello: (name) => `Hello, ${name}`,
  bye: (name) => `Goodbye, ${name}`,
  shout: (name) => `HEY ${name.toUpperCase()}!!!`,
};

function run(command, name) {
  const handler = handlers[command];
  if (!handler) {
    return `Unknown command: ${command}`;
  }
  return handler(name);
}

console.log(run("hello", "Ana"));
console.log(run("shout", "Ana"));
console.log(run("dance", "Ana"));

// Compare with a big switch statement: adding a command here is just adding one property.
