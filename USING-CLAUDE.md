# 🤖 Using Claude While You Learn

> ## Think first. Ask AI second.

You've been using Claude Code to *get things done*. In this course you'll use it to *get better* — which needs a different approach. An AI that writes your exercise for you is like a friend who does your push-ups: the push-ups happen, but you don't get stronger.

This doesn't mean "don't use Claude". It means use it the way you'd use a great mentor sitting next to you: for nudges, explanations and reviews — not for doing the work.

---

## The help ladder

When you're stuck, climb **one rung at a time**. Most problems are solved before you reach the top.

```text
 1. Re-read the instructions and the error message — slowly, all of it.
 2. Run the code. Then add console.log() to SEE what's actually happening.
 3. Shrink the problem: test one function with one input in isolation.
 4. Explain the problem out loud (or in writing) — "rubber duck" debugging.
 5. Check the hints in the README, one at a time.
 6. ── 15 minutes of genuine effort ──
 7. Ask Claude for a HINT (not a solution).               ← prompts below
 8. Ask Claude to EXPLAIN a concept or piece of code.
 9. Write your solution. Then ask Claude to REVIEW it.
10. Last resort: look at the solution file — then close it and rewrite from memory.
```

> ⏱️ **The 15-minute rule:** struggle productively for about 15 minutes before asking for help. Less, and you skip the learning. Much more, and frustration takes over. If you've been stuck *and not making progress* for 15 minutes, it's time to ask.

---

## Copy-paste prompts

### 💡 Hint

```text
I am trying to solve this exercise: [paste the exercise description]

Here is my current code: [paste]

Do not give me the solution.
Give me one small hint that helps me reason about the problem.
```

### 🧑‍🏫 Explanation

```text
Explain this code to me like a mentor: [paste]

Focus on the programming concepts being used.
Do not rewrite the code.
```

### 🐛 Debugging

```text
I have tried debugging this myself.

Expected: [what should happen]
Actual: [exact error message or output]
Here is what I think is happening: [MY HYPOTHESIS]
Here is how I tested it: [what I tried]

Help me determine whether my reasoning is correct.
Do not immediately give me the final solution.
```

### 🔍 Review

```text
Review my implementation: [paste]

Do not rewrite it.

Tell me:
1. What is correct?
2. What could be improved?
3. What bugs or edge cases exist?
4. What programming concept should I reconsider?
```

### 🔀 Alternative approaches

```text
Here is my working solution: [paste]
What are two other ways to solve this? For each one, describe the approach in words only
(no code), and tell me one advantage and one disadvantage compared to mine.
```

### 🏗️ Architecture discussion

```text
I'm planning to [describe the feature].
My plan: [which files/layers change, and what each change is].
Don't write code. Does my plan put each responsibility in the right place?
What questions should I be asking myself?
```

### 🧪 Quiz me

```text
I just finished learning about [topic]. Ask me 5 questions, one at a time,
that test whether I really understand it — include one "predict the output" question
and one "find the bug" question. Wait for my answer before asking the next one.
Don't give me the answers until I've tried.
```

### 🔎 Read the error with me

```text
I got this error: [paste the full error]
Don't fix my code. Explain what each part of the error means
and which line I should look at first.
```

---

## 🚫 Prompts to avoid (while learning)

| Instead of… | Try… |
|---|---|
| "Implement the exercise." | The **hint** prompt |
| "Fix this." | The **debugging** prompt, with your hypothesis |
| "Write a function that…" | Write it yourself, then use the **review** prompt |
| "Why doesn't this work?" (with no thinking) | Do rungs 1–5 of the ladder first |
| Accepting code you can't explain | "Explain line 4 of what you wrote" — or don't use it |

> 🧠 **The rule for any AI-written code:** if you can't explain every line, you don't own it yet. Ask until you can, or don't use it.

---

## Claude Code specifics

Claude Code can **edit files directly**, which makes "just fix it" dangerously easy. While learning:

1. **This course folder has a [`CLAUDE.md`](CLAUDE.md)** that tells Claude Code to act as a mentor: give hints, ask guiding questions, and *not* write exercise or project solutions unless you explicitly ask. Read it — and feel free to adjust it.
2. Prefer asking Claude to **explain** or **review** over asking it to **edit**.
3. If you do let it change a file, read the diff and make sure you understand each change before accepting it.
4. Use it as a **conversation partner for decisions**: "Should this validation live in the route or the service?" is a great question. "Write my service" is not.

---

## How your AI use should evolve through the course

| Stage | Healthy use |
|---|---|
| Modules 00–05 | Explain error messages. Explain concepts in other words. Quiz me. |
| Modules 06–12 | Hints when stuck. Review my working solution. Alternative approaches. |
| Modules 13–19 | Architecture discussions. Code review. "What edge cases did I miss?" |
| The project | Plan first, check the plan with Claude, build it yourself, review together. |
| After the course | Let Claude write more — because now you can **read, judge and debug** what it writes. |

That last row is the real goal. Claude doesn't become less useful when you know how to program — it becomes *much* more useful, because you can direct it, catch its mistakes, and understand its output.
