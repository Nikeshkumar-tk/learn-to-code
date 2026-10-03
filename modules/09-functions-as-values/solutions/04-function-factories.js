// Solution 09.4
function makeDiscount(percent) {
  return (price) => price - price * (percent / 100);
}

function minLength(n) {
  return (text) => text.length >= n;
}

function makeTagger(tag) {
  return (message) => `[${tag}] ${message}`;
}

const blackFriday = makeDiscount(50);
const isStrongEnough = minLength(8);

console.log(blackFriday(80), isStrongEnough("abc"), makeTagger("WARN")("Disk almost full"));
