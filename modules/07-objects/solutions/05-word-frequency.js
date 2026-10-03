// Solution 07.5
function countWords(text) {
  const counts = {};
  for (const word of text.split(" ")) {
    if (counts[word] === undefined) {
      counts[word] = 1;
    } else {
      counts[word]++;
    }
    // shorter: counts[word] = (counts[word] ?? 0) + 1;
  }
  return counts;
}

function mostCommonWord(text) {
  let bestWord = null;
  let bestCount = 0;
  for (const [word, count] of Object.entries(countWords(text))) {
    if (count > bestCount) {
      bestWord = word;
      bestCount = count;
    }
  }
  return bestWord;
}

console.log(countWords("the cat and the hat"), mostCommonWord("to be or not to be to"));
