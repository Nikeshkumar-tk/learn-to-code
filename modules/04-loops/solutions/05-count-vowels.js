// Solution 04.5
const sentence = "learning to code one loop at a time";

let vowelCount = 0;
let spaceCount = 0;

for (const char of sentence) {
  if (char === " ") {
    spaceCount++;
    continue; // a space can't be a vowel, so skip the rest of this round
  }
  if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
    vowelCount++;
  }
}

const wordCount = spaceCount + 1;

console.log({ vowelCount, spaceCount, wordCount });
// After Module 08 you could write the vowel check as: "aeiou".includes(char)
