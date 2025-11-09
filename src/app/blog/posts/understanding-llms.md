---
title: Understanding Large Language Models (LLMs) — The Brains Behind AI
date: 2025-11-08
description: A beginner-friendly guide to how Large Language Models (LLMs) work — from tokenization to evaluation — and why they’re the brains behind modern AI.
---

Welcome to my blog 👋

If you’ve ever wondered how ChatGPT seems to “understand” you — this post is for you.

Behind tools like ChatGPT, Gemini, Claude, and Copilot are Large Language Models (LLMs) — powerful AI systems that can understand and generate human language.
Let’s explore what makes them so capable, and how they’re evaluated to ensure they work reliably.

---

## 🏁 What Is an LLM?

A **Large Language Model (LLM)** is an AI system trained to **understand and generate human language**.
You’ve already interacted with many — ChatGPT, Gemini, Claude, Copilot — they’re all LLMs.

Think of an LLM as a **“statistical brain”** that predicts what word (or token) should come next in a sentence, based on everything it’s seen so far.

```
Input:   "Artificial intelligence is"
Model:   → predicts "changing"
          → then predicts "the"
          → then predicts "world"
Output:  "Artificial intelligence is changing the world."
```

---

## 🧩 The “Large” in LLMs

The *“large”* refers to:

* The **amount of data** it’s trained on (hundreds of billions of words)
* The **number of parameters** — think of parameters as tiny “knobs” or “dials” that the model tunes during training to adjust how it understands language patterns. GPT-4 and Gemini have **hundreds of billions** of parameters!

```
           +-----------------------------------+
Data  ---> | billions of sentences, books, web |
           +-----------------------------------+
             ↓  ↓  ↓  ↓  ↓
       billions of internal parameters
```

Each parameter adjusts slightly during training to help the model understand relationships between words, meaning, and context.

---

## ⚙️ How an LLM Works?

Let’s simplify the pipeline into **3 stages:**

```
         ┌───────────────────────────────┐
         │     Stage 1: Tokenization     │
         └───────────────────────────────┘
Input text is broken into smaller units (tokens).

"Hello world!" → ["Hello", " world", "!"]

```

```
         ┌──────────────────────────────────────────┐
         │     Stage 2: Encoding (Understanding)    │
         └──────────────────────────────────────────┘
Each token becomes a vector — a list of numbers that captures meaning.

"Hello" → [0.1, 0.9, -0.3, 0.4, ...]

These vectors go into a neural network (Transformer) that learns relationships.
```

```
         ┌────────────────────────────────────────┐
         │     Stage 3: Decoding (Generation)     │
         └────────────────────────────────────────┘
The model predicts the next token based on previous ones:

Input: "The sky is"
→ predicts "blue"
→ output: "The sky is blue"
```

That’s how every chatbot answer is built — **one token at a time**, extremely fast.

---

## 🧠 Why LLMs Are So Capable?

Because they’ve *seen* almost everything humans have written online —
and they’ve learned **patterns of reasoning, style, and structure**.

They don’t “think” like humans — they “guess” extremely well based on context.
That’s why they can:

* Write essays, code, and stories
* Answer factual questions
* Translate languages
* Simulate conversation

---

## ⚖️ Why Evaluate LLMs?

LLMs are powerful — but they’re not perfect.
They can:

* Make up facts (hallucinate)
* Be biased
* Miss key context
* Give inconsistent answers

So, just like humans are tested in exams, **LLMs must be tested** before being trusted — that’s where *evaluation techniques* come in.

---

## 🔍 Evaluating LLMs Is Hard

Unlike a simple math test where answers are either right or wrong,
LLMs produce **subjective, creative, or contextual** outputs.

Example:

```
Prompt: "Write a paragraph about the moon."
```

Output A:

> The moon is Earth's only natural satellite, influencing tides...

Output B:

> A glowing companion of the night sky, the moon inspires poets...

Which one is “better”?
There’s no single correct answer — that’s why evaluation is hard.

So researchers use multiple approaches:

* Human judgments (slow, expensive)
* Automated metrics (fast, limited)
* Hybrid or model-based evaluations (modern standard)

---

## 🧭 The Types of Evaluation

We can group LLM evaluation into **three main families**:

```
┌────────────────────────────┐
│  1️⃣ Human Evaluation      
│     - Humans rate outputs   
│     - Very reliable         
│     - Slow & costly         
└────────────────────────────┘
┌────────────────────────────┐
│  2️⃣ Automated Metrics     
│     - Scores via formulas   
│     - Fast & reproducible    
│     - May miss nuance       
└────────────────────────────┘
┌────────────────────────────────┐
│  3️⃣ Model-based Evaluation 
│     - LLM judges another LLM
│     - Scalable & modern       
│     - Needs careful prompt   
└────────────────────────────────┘
```


---

## ✍️ Summary:

> Large Language Models are statistical engines trained on vast text data to predict the next word.
> They don’t “think” — they pattern-match extremely well.
> Their creativity and inconsistency make evaluation challenging, leading to sophisticated testing techniques.

**Key takeaway diagram:**

```
Prompt → Tokenize → Encode → Generate → Evaluate → Improve
```

---

Thanks for reading till the end! 🙏

I hope this post helped you get a clearer picture of how LLMs actually work behind the scenes.
We’re just getting started — in the upcoming posts, we’ll explore how these models are judged and improved.

**See you in the next post 👋**