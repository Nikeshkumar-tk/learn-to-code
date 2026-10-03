// @expect-error  (crashes on purpose)
// What happens if you try to reassign a const?

const planet = "Earth";
console.log("Before:", planet);

planet = "Mars";          // <- not allowed!
console.log("After:", planet);
