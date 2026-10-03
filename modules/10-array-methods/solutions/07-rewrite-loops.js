// Solution 10.7

// map: one email for each user (same length, transformed)
const getEmails = (users) => users.map((user) => user.email);

// filter: keep only some users, unchanged
const getActive = (users) => users.filter((user) => user.active);

// some: yes/no, does at least one match?
const hasAdmin = (users) => users.some((user) => user.role === "admin");

// reduce: many values -> one number
const totalAge = (users) => users.reduce((total, user) => total + user.age, 0);

// filter then map: keep some, then transform them
const activeEmails = (users) =>
  users.filter((user) => user.active).map((user) => user.email.toLowerCase());

console.log(activeEmails([{ email: "A@B.C", active: true }]));
