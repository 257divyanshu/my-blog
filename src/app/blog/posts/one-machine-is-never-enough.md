---
title: One Machine Is Never Enough - A Beginner's Introduction to Distributed Systems
date: 2026-09-19T10:00:00
description: You use distributed systems every day, hiding behind every app you open. Here's what they actually are and what makes them so hard to build.
---

Welcome to my blog 👋

You open Instagram. A photo loads in milliseconds. You're in India, the person who posted it is in New York, and the server handling your request might be sitting in Singapore.

No single machine did all of that. And honestly, no single machine ever could.

That's what distributed systems are about.

---

## What Is a Distributed System?

At its core, a distributed system is just a bunch of computers working together to look like one system to the person using it.

You don't see the individual machines. You don't know how many there are or where they're sitting. You just open the app, and it works.

The idea is pretty simple when you put it that way. But making it actually work? That's a whole different story.

---

## Why Can't One Machine Just Handle Everything?

Let's say you've built an app and put it on a single server. Things are going great. Then one day, your app blows up and a million people try to use it at the same time.

Your single machine starts to sweat. It slows down. Then it crashes.

That's because one machine has real limits:

- It runs out of storage as your data grows
- It slows down when too many users hit it at once
- If it goes down, your entire app goes down with it

So the natural answer is: use more machines, spread the load. And that's exactly where distributed systems come in.

The tricky part, though, is that making multiple machines behave like one reliable machine is genuinely hard. More on that in a bit.

---

## You Already Use Distributed Systems Every Day

Here's something interesting: you don't need to work at a big tech company to interact with distributed systems. You're already doing it, all the time.

**YouTube** doesn't serve your video from a single server in one location. It stores copies of that video across data centers all over the world and serves it from whichever one is closest to you. That's why a video loads just as fast in Mumbai as it does in Manchester.

**WhatsApp** handles billions of messages every day. When you hit send, your message doesn't go to one machine. It travels through a whole network of servers handling routing, delivery, encryption, and storage, all quietly in the background.

**Google Search** gives you results in under a second for billions of queries a day. That's physically impossible on a single machine. Thousands of machines working in parallel make that happen.

**Git**, is itself a distributed system. Every developer has a full copy of the repository on their own machine. There's no single master copy that everyone depends on.

These aren't some exotic, enterprise-only technologies. They're the backbone of pretty much every app that operates at scale.

---

## The Core Challenge: Coordination

So adding more machines sounds like a straightforward fix, right? Not quite.

With one machine, life is simple. Data lives in one place. You write something, you read it back, it's there. Easy.

But once you have ten machines, things get complicated fast:

- If a user updates their profile, which machine holds the latest version?
- If two machines receive the same write request at the same time, which one wins?
- What happens if one machine crashes right in the middle of an operation?
- How does machine A even know what machine B is doing right now?

These are coordination problems, and in distributed systems, you can't sidestep them. Every design decision you make is really just a different way of managing this coordination.

And here's the uncomfortable truth: there's no perfect answer. Do you make the system always available, even if the data might be slightly out of date? Or do you make sure the data is always accurate, even if it means the system is sometimes unavailable? You always have to give something up.

---

## The Key Trade-off: Reliability vs Complexity

A single machine is simple, but fragile.

A distributed system is resilient, but complex.

That's the central trade-off, and it's worth sitting with for a moment.

When Netflix distributes its systems across thousands of machines, one machine crashing doesn't bring the app down. But now Netflix engineers have to think carefully about what happens when machines disagree with each other, when the network connecting them gets slow, when data needs to stay in sync across different continents.

The complexity is the price you pay for scale and reliability. There's no way around it.

---


## Wrapping Up

Distributed systems exist because one machine is never enough. Not at scale, not for reliability, not for a global user base.

The idea is simple: multiple machines, working together, appearing as one.

The execution is where things get interesting: coordination, consistency, failures, and trade-offs at every step.

Every major app you use today is sitting on top of distributed systems. The more you understand about how they work, even at a high level, the better you'll get at reasoning about the software you build and use.

This is just the start. Distributed systems go much deeper than what we've covered here, and the rabbit hole is genuinely fascinating the further you go down it. But those are conversations for another post.

For now, the one thing to hold onto: **it's never just one machine.**

**See you in the next post.**