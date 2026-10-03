// @expect-error
// Debug 15.3 — "Cannot find package"
// Run:  node debug/03-missing-package.js
// Expected: today's date, formatted like "Mon, 1 Jun 2026"
//
// This file uses a third-party library called dayjs. Read the error carefully:
// is the problem in YOUR code, or in your project setup?

import dayjs from "dayjs";

console.log(dayjs().format("ddd, D MMM YYYY"));
