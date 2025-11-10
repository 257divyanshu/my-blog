---
title: LLM Evaluation Technique 2 — Embedding Similarity
date: 2025-11-09T12:00:00
description: Learn how embedding similarity helps evaluate AI by comparing meanings, not words — a core technique used to measure the quality of LLM responses.
---

Welcome to my blog 👋

When evaluating AI, matching words isn’t enough — we need to measure meaning.

In this post, we’ll explore embedding similarity, a technique that turns text into numerical vectors so we can compare how closely two responses align in meaning.
It’s one of the simplest yet most powerful tools behind modern AI evaluation.

## 🧠 Concept Overview

Every word, sentence, or paragraph can be turned into a list of numbers — called an **embedding** — that represents its *meaning* in multi-dimensional space.
Then, we can **compare** two embeddings to see *how similar* their meanings are.

Think of it like this:

```
"Dog" → [0.7, 0.2, 0.9]
"Cat" → [0.6, 0.25, 0.85]
"Car" → [0.1, 0.8, 0.2]
```

If we plot them in space (imagine a 3D map),
“Dog” and “Cat” will be **closer** to each other than to “Car”.

That’s *semantic similarity* — “dog” and “cat” are conceptually closer.

---

### 🧩 Diagram

```
         🐶 Dog ●
                \
                 \
                  ● 🐱 Cat
                  
         🚗 Car                 ● 🍎 Apple
```

“Dog” and “Cat” are close — high similarity.
“Dog” and “Car” are far apart — low similarity.

---

## 🎯 Why It’s Used

Embedding similarity is **everywhere** in LLM evaluation and retrieval systems.
It’s used to automatically check *how close an AI’s answer is to a correct or reference answer.*

| Use Case                      | Example                                           |
| ----------------------------- | ------------------------------------------------- |
| **Answer Quality Evaluation** | Compare LLM’s answer to a gold-standard reference |
| **Semantic Search**           | Retrieve documents similar in meaning, not words  |
| **Summarization Evaluation**  | Compare generated summary to reference summary    |
| **Paraphrase Detection**      | Check if two sentences mean the same thing        |

Big companies (OpenAI, Google, Anthropic) use embedding-based metrics like **BERTScore**, **Sentence-BERT Similarity**, or **Cosine Similarity** for evaluating model quality automatically.

---

## ⚙️ How It Works

Let’s simplify this into four steps:

---

### 🧩 Step 1: Get Embeddings for Each Text

An embedding model (like `text-embedding-004` from Gemini or OpenAI’s `text-embedding-3-small`) is used to convert both:

* Reference text (ground truth or ideal answer)
* Candidate text (model’s output)

into numerical vectors.

```
Prompt: "What is gravity?"
Reference Answer → Embedding A
Model Answer     → Embedding B
```

---

### 🧩 Step 2: Compute Cosine Similarity

The **angle** between these two vectors — called *cosine similarity* — is calculated.

If two embeddings point in the same direction → similarity is **close to 1**.
If they are opposite → similarity is **close to -1**.

```
cosine_similarity = (A · B) / (||A|| * ||B||)
```

(They aren't calculated manually — libraries handle it.)

---

### 🧩 Step 3: Interpret the Score

| Score | Meaning                                |
| ----- | -------------------------------------- |
| ~1.0  | Almost identical in meaning            |
| ~0.7  | Semantically similar                   |
| ~0.4  | Some overlap, not identical            |
| ~0.0  | Unrelated meaning                      |
| < 0   | Opposite meaning (rare in LLM context) |

---

### 🧩 Step 4: Store and Visualize

Similarity scores are stored in the evaluation record:

```json
{
  "prompt": "Explain gravity",
  "model_output": "Gravity pulls objects toward Earth.",
  "reference_answer": "Gravity is the force that pulls objects toward one another.",
  "similarity_score": 0.93
}
```

Now these scores can be visualized in the Analytics Dashboard as a new metric.

---

## 📊 Example Visualization

```
Prompt: "What is the capital of Japan?"

Reference: "Tokyo"

Model A Output: "Tokyo" → Similarity: 1.00 ✅
Model B Output: "Osaka" → Similarity: 0.42 ❌
```

---
## ✍️ Summary

> When evaluating AI, exact word matching isn’t enough.
> “Embedding similarity” measures how close two texts are in *meaning*, not wording.
> By converting sentences into numerical vectors, we can compute how semantically similar an AI’s response is to a correct one.
> This approach powers tools like BERTScore and is widely used to measure LLM quality.

**The Embedding Similarity technique:**

* Works on *meaning*, not words.
* Uses *cosine similarity* to measure closeness.
* Is easy to compute using embedding APIs.
* Is great for factual, QA, or summarization tasks.

---

Thanks for reading till the end! 🙏

Understanding embedding similarity gives you a glimpse into how AI systems truly “understand” meaning beyond words.

In the next article, we’ll dive deeper into an evaluation technique that evaluates an AI model’s stability — **Self-Consistency Check**.

**See you in the next post 👋**