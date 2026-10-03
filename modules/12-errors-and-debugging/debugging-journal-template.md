# 🐛 Debugging Journal

Copy this block each time you debug something non-trivial. Filling it in *is* the debugging.

```text
Date:
File / feature:

1. EXPECTED  — what should happen?

2. ACTUAL    — what happens instead? (paste the exact error or output)

3. LOCATION  — which file/line does the error point to?
               Which function received a bad value? Which one created it?

4. REPRODUCE — the smallest input/steps that show the bug every time:

5. HYPOTHESIS — "I think ___ because ___"

6. TEST       — how I checked the hypothesis (console.log? smaller input? breakpoint?)
               Result: confirmed / rejected   (if rejected, go back to 5)

7. FIX        — what I changed:

8. VERIFY     — I re-ran it and: ...      Did anything else break?

9. LESSON     — what will I check first next time?
```

> If you get stuck at step 5 for more than 15 minutes, it's a great moment for the **debugging prompt** in [`USING-CLAUDE.md`](../../USING-CLAUDE.md) — you'll have everything Claude needs, and you'll only need a nudge.
