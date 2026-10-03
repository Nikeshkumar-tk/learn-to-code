// CommonJS — the OLDER Node module system. You'll see it in lots of existing code,
// tutorials and Stack Overflow answers. The .cjs extension tells Node to use it here.
function add(a, b) {
  return a + b;
}

module.exports = { add };            // instead of: export function add...
