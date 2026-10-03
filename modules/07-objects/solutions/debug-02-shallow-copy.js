// Fixed. Spread makes a SHALLOW copy: draft got its own `title`, but draft.meta and
// publishedPost.meta point to the SAME inner object (and the same tags array).
// Test the hypothesis: console.log(draft.meta === publishedPost.meta) -> true.
// Fix: copy every level you're going to change.
const publishedPost = {
  title: "Intro to Node",
  meta: { tags: ["node"], views: 120 },
};

const draft = {
  ...publishedPost,
  title: "Intro to Node (updated)",
  meta: { ...publishedPost.meta, tags: [...publishedPost.meta.tags, "express"] },
};

console.log("Published tags:", publishedPost.meta.tags);
console.log("Draft tags:", draft.meta.tags);
// (structuredClone(publishedPost) makes a full deep copy too — useful, but know WHY you need it.)
