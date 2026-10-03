// Solution 02.4
// ?? only falls back for null/undefined, so `false` (a real choice) is kept.
// With || the notifications line would wrongly become true.
const savedPageSize = undefined;
const savedLanguage = "fr";
const savedNotifications = false;

const pageSize = savedPageSize ?? 20;
const language = savedLanguage ?? "en";
const notifications = savedNotifications ?? true;

console.log({ pageSize, language, notifications });
