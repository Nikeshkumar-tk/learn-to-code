// Fixed. process.argv[0] is the path to the node program, [1] is the script path.
// The user's first argument is at index 2. Usually you slice once and forget the offsets:
const [name = "stranger"] = process.argv.slice(2);
console.log(`Hello, ${name}!`);
