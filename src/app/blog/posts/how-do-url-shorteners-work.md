---
title: How Do URL Shorteners Work?
date: 2026-06-05
description: Ever wondered how long links turn into tiny codes like bit.ly/3xK9p instantly? Discover the beautiful engineering and simple math behind URL shorteners.
---

We see them everywhere on Twitter, LinkedIn, and SMS texts. Short, clean links like `bit.ly/3xK9p` that replace long web addresses. 

But have you ever wondered what actually happens behind the scenes when you click one? 

It turns out that URL shorteners don't do any complex magic. They operate as a **digital directory** using basic math and a standard web trick called **HTTP redirection**.

Let’s break it down.

---

## The Core Concept: The Two-Way Street

A URL shortener handles two simple jobs: 

* **Creation** (making the short link)
* **Redirection** (sending you to the right place).

### Phase 1: Creation
When you paste a long URL into a shortener, the system does two things:

1. **It generates a unique ID**: It saves your long URL into a database table. The database automatically assigns that row a unique number, like `125`.
2. **It translates that number into code**: The system uses an encoding method called **Base62 encoding** (which uses letters `a-z`, `A-Z`, and numbers `0-9`) to convert that unique number into a text token. 

In Base62 math, the number `125` translates directly to the short text token `cb`. The system appends this to its domain name, handing you: `short.ly/cb`.

---

## The Secret: The Short Text Token isn't stored in database!

Here is the most brilliant engineering secret of link shorteners: **The short text token (`cb`) is never stored in the database.** 

Why? Because the Base62 encoding math is completely reversible. The number `125` will *always* encode to `cb`, and the text token `cb` will *always* decode back to the number `125`. Storing the text token would just waste database space!

---

### Phase 2: Redirection

When a user clicks on `short.ly/cb`, the entire redirection process happens in a few milliseconds:

1. **The Request**: Your browser sends a message to the shortener’s server saying, *"Hey, what is at `/cb`?"*
2. **The Math Decode**: The server instantly translates the text token `cb` back into the numeric database ID: `125`.
3. **The Database Lookup**: The server asks the database, *"Give me the long URL stored at row ID `125`."* Relational databases can find a row by its number almost instantly.
4. **The Instant Jump**: The server finds the long URL and sends it back to your browser with an **HTTP 302 Redirect** status code. 

Your browser reads that redirect command and immediately jumps to the final website.

---

## Summary

URL shorteners are just clever translators. 

They take a long URL, store it into the database, generate its corresponding database number, turn that number into a short text token, append it to the domain name, and hand you the final short URL.

When you click that short link, the system captures the text token at the end of the URL, reverses the math to get the database ID, finds the corresponding long URL, and instantly sends you there with an HTTP redirect.

In my next post, I will share how to build and deploy a working version of this exact architecture using a cloud database and serverless functions. Stay tuned!

**See you in the next post.**