---
title: Containerization 101 - Understanding the Basics
date: 2026-06-19
description: A beginner-friendly introduction to containerization, why it exists, how containers work, and why they became a cornerstone of modern software development.
---

A few days ago, I decided to add Redis to my backend development stack.

While following a Redis playlist, my instructor asked us to set up Redis locally using containers. The setup itself was surprisingly simple. I installed the required tooling, used a configuration file, and within a few minutes I had a Redis instance running on my machine.

The setup was easy.

What wasn't obvious to me was *what was happening underneath*.

Why was Redis running inside a container? What exactly is a container? Why has containerization become such a big deal in modern software development?

That curiosity led me down the rabbit hole of learning about containerization, and this article is a summary of what I learned.

---

## The Problem Containerization Solves

If you've been building software for a while, you've probably heard someone say:

> But it works on my machine.

This sentence summarizes one of the most common problems in software development.

Imagine you build an application on your laptop.

Your environment looks like this:

```text
Windows 11
Node.js v24
MongoDB 8
Redis 8
```

Everything works perfectly.

Now you share the same code with a teammate.

Their machine looks like this:

```text
Ubuntu Linux
Node.js v18
MongoDB 7
Redis not installed
```

Suddenly the application breaks.

The code is the same.

The problem is the environment.

Different machines may have:

* Different operating systems
* Different library versions
* Different runtime versions
* Different configurations

As a result, the same application can behave differently depending on where it is executed.

Containerization was created to solve this problem.

Instead of sharing only the source code, we package the application together with everything it needs to run.

That way, everyone gets the same environment and the same behavior.

---

## What Is a Container?

A container is a package that contains:

* Application code
* Runtime
* Dependencies
* Libraries
* Configuration

In other words, it contains everything required to run an application.

A useful analogy is a shipping container.

A shipping container can carry electronics, clothes, furniture, or food. The transportation system doesn't care about what's inside because everything follows the same standardized format.

Containers in software work similarly.

Instead of transporting goods, they transport applications.

As long as a machine supports containers, it can run the packaged application regardless of how the underlying environment is configured.

This makes applications portable and predictable.

---

## Containers vs Virtual Machines

To understand why containers became popular, we first need to understand Virtual Machines (VMs).

A Virtual Machine is essentially a computer running inside another computer.

For example, imagine you have a Windows laptop but want to run Ubuntu.

Instead of buying another machine, you can create an Ubuntu Virtual Machine.

A VM includes:

```text
Application
Libraries
Operating System
```

Every VM carries its own operating system.

This provides strong isolation, but it also consumes significant resources.

Now let's compare that with containers.

A container includes:

```text
Application
Libraries
Runtime
```

Notice what's missing.

A container does not include a complete operating system.

Instead, multiple containers share the operating system kernel of the host machine.

This idea is often called shared kernel architecture.

Because containers share the host kernel:

* They are smaller
* They start faster
* They consume less memory
* They require less disk space

Think of it like this:

A Virtual Machine is like giving every tenant an entire house.

A container is like giving every tenant an apartment in the same building.

Each tenant gets their own space, but they share common infrastructure.

As a result, containers are much more lightweight than Virtual Machines.

---

## Benefits of Containerization

Now that we understand what containers are, let's look at the major benefits they provide.

### 1. Portability

Containers can run across different environments without modification.

The same container can run on:

* A developer's laptop
* A testing server
* A production server
* A cloud platform

without requiring changes to the application.

This is often summarized as:

> Build once, run anywhere.

---

### 2. Consistency

One of the biggest deployment problems is that applications behave differently across environments.

Containers reduce this problem by ensuring that everyone runs the same packaged environment.

If the application works during development, there is a much higher chance it will work in testing and production as well.

This leads to fewer surprises after deployment.

---

### 3. Faster Deployment

Creating a new environment traditionally requires:

* Installing software
* Configuring dependencies
* Setting up runtime versions
* Verifying compatibility

Containers significantly reduce this setup effort.

New environments can be created and started very quickly, making development and deployment faster.

---

### 4. Scalability

Modern applications often need to handle increasing traffic.

Containers make it easy to create multiple instances of an application.

Instead of running a single instance, organizations can run many identical containers and distribute traffic among them.

This makes scaling applications much easier.

---

### 5. Resource Efficiency

Since containers share the host operating system kernel, they require fewer resources than Virtual Machines.

This means:

* Lower memory usage
* Lower CPU usage
* Lower storage requirements

As a result, more applications can run on the same hardware.

---

## Final Thoughts

After spending some time understanding the basics of containerization, I realized that it solves a very real problem: ensuring applications behave consistently across different environments.

At its core, containerization is about packaging an application together with everything it needs to run and making that package portable, predictable, and efficient.

Understanding this single idea helped me make sense of why modern software development relies so heavily on containers today.

**See you in the next post.**