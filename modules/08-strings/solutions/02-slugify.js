// Solution 08.2
function isLetterOrDigit(char) {
  return (char >= "a" && char <= "z") || (char >= "0" && char <= "9");
}

function slugify(title) {
  let slug = "";
  for (const char of title.toLowerCase()) {
    if (isLetterOrDigit(char)) {
      slug += char;
    } else if (slug !== "" && !slug.endsWith("-")) {
      // only add a dash if we've started AND the last character isn't already a dash
      slug += "-";
    }
  }
  if (slug.endsWith("-")) {
    slug = slug.slice(0, -1);
  }
  return slug;
}

console.log(slugify("  Learn Node.js: The Basics! "));
// Later you might meet "regular expressions", which can do this in one line.
// Writing it by hand first means you'll understand what that one line does.
