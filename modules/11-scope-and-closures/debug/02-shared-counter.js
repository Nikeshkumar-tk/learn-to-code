// Debug 11.2 — Two "independent" counters share their count
// Expected:
//   page views: 1
//   page views: 2
//   button clicks: 1

let count = 0;

function createCounter(label) {
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
