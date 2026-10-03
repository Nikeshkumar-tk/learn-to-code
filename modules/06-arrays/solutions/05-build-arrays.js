// Solution 06.5
function numbersBetween(start, end) {
  const result = [];
  for (let n = start; n <= end; n++) {
    result.push(n);
  }
  return result;
}

function reversed(list) {
  const result = [];
  for (let i = list.length - 1; i >= 0; i--) {
    result.push(list[i]);
  }
  return result;
}

function onlyLongWords(words, min) {
  const result = [];
  for (const word of words) {
    if (word.length >= min) {
      result.push(word);
    }
  }
  return result;
}

console.log(numbersBetween(1, 5), reversed([1, 2, 3]), onlyLongWords(["hi", "hello"], 3));
// Keep onlyLongWords in mind. In Module 10 you'll discover `filter` does exactly this.
