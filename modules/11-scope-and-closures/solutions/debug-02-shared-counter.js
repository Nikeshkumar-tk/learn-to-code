// Fixed. `count` lived OUTSIDE createCounter, so there was only ONE count for everybody.
// Each call to createCounter must create its own variable — so declare it inside.
function createCounter(label) {
  let count = 0;
  return () => {
    count++;
    console.log(`${label}: ${count}`);
  };
}

const pageViews = createCounter("page views");
const buttonClicks = createCounter("button clicks");

pageViews();
pageViews();
buttonClicks();
