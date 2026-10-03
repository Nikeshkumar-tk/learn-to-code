// Debug 07.2 — Editing a draft changes the published post
// We copy the post to make a draft, then edit the draft's metadata.
// Expected:
//   Published tags: [ 'node' ]
//   Draft tags: [ 'node', 'express' ]

const publishedPost = {
  title: "Intro to Node",
  meta: { tags: ["node"], views: 120 },
};

const draft = { ...publishedPost };
draft.title = "Intro to Node (updated)";
draft.meta.tags.push("express");

console.log("Published tags:", publishedPost.meta.tags);
console.log("Draft tags:", draft.meta.tags);
