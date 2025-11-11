---
title: How I Built This Blog
date: 2025-11-07
description: A behind-the-scenes look at how I built my personal blog from scratch using Next.js, Tailwind, and Markdown.
---

Welcome to my blog 👋  

This is my very first post on **divyanshusahu.com/blog**, and fittingly, it’s about how I built this very blog from scratch.  

No blog builders, no templates, just a clean, modern tech stack and a clear goal to build something fast, minimal, and fully mine.

In this post, I’ll share:
- The **decisions** I made along the way  
- The **tech stack** I chose (and why)  
- How I structured the blog’s **architecture**  
- What I plan to add next  

---

## 💭 Why I Built It Myself

Sure, I could’ve used platforms like WordPress, Ghost, or Medium.  
But as a developer, I didn’t just want a blog, I wanted to **understand** the blog.

I wanted to know exactly:
- How each page gets generated  
- How Markdown files turn into web pages  
- How deployment and domains work end-to-end  

Building it myself gave me full control, crystall clear clarity, and freedom to tweak or extend it however I like.

---

## ⚙️ Choosing the Tech Stack

Here’s the exact stack behind **divyanshusahu.com/blog**, and why I picked each piece.

### 🏗 Framework: Next.js
I chose **Next.js** because it’s stable, well-supported, and built for both static and dynamic content.  

It gave me:
- **File-based routing** → perfect for `/blog/[slug]` posts  
- **Static generation** → lightning-fast performance  
- **App Router (v15)** → modern, component-driven architecture  

Plus, deployment on Vercel (Next.js’ home) is frictionless.

---

### 🎨 Styling: Tailwind CSS
I used **Tailwind CSS** for styling. 

It’s minimal, utility-first, and lets me design in code without switching contexts.  
With Tailwind Typography, my Markdown posts look great with zero extra CSS.

A single class like:
```html
<article className="prose lg:prose-lg">
````

instantly turns plain HTML into a beautifully readable article.

---

### 📝 Content: Markdown

Every blog post is just a `.md` file living inside:

```
src/app/blog/posts/
```

I used **gray-matter** to parse the frontmatter (title, date, description)
and **remark** + **remark-html** to convert Markdown into HTML.

I add a new `.md` file → and it goes live!

---

### ☁️ Deployment: Vercel

The project lives on **Vercel**, and the flow couldn’t be smoother:

* Push to `main` branch
* Vercel auto-builds and deploys
* Live at `divyanshusahu.com/blog` within seconds

No manual FTP uploads, no servers to maintain. Pure developer joy.

---

### 🌐 Domain: Namecheap

I bought my domain **divyanshusahu.com** from Namecheap.

Connecting it to Vercel took just a few minutes. I added DNS records and then SSL came automatically.
Now, my custom domain points directly to my Vercel project.

---

## 📁 Folder Structure

Here’s how the blog is organized under the hood:

```
src/
 ├─ app/
 │   ├─ blog/
 │   │   ├─ [slug]/page.js
 │   │   ├─ page.js
 │   │   └─ posts/
 │   │       └─ how-i-built-this-blog.md
 │   ├─ layout.js
 │   └─ globals.css
 └─ lib/
     └─ posts.js
```

Each Markdown file inside `/posts/` automatically becomes a blog post like:
`/blog/how-i-built-this-blog`.

The App Router and static params handle everything at build time, no manual routing needed.

---

## ⌚ The Development Flow

Here’s the order I followed while building this:

1. Initialized a new Next.js project using `create-next-app`
2. Cleaned out the boilerplate and added `/blog` route
3. Added Markdown parsing with `gray-matter` and `remark`
4. Created dynamic post pages with `/blog/[slug]`
5. Fixed async params for Next.js 15 compatibility
6. Styled everything using Tailwind + Typography plugin
7. Deployed on Vercel and linked my domain

This whole setup gave me a workflow I truly own.

---

## 🔗 The GitHub Repository

The full source code is open and available here: [github.com/257divyanshu/my-blog](https://github.com/257divyanshu/my-blog)

Feel free to explore it, fork it, or use it as a starting point for your own blog.

---

## ✨ What’s Next

This is only **version 1** of my blog — simple and clean.
But I’ve got plans for future improvements:

* 🌙 Dark mode toggle
* 🧠 SEO meta tags + Open Graph cards
* 📰 RSS feed
* 💬 Comment system (maybe Giscus)
* 📈 Analytics and performance insights

---

## 🙌 Closing Thoughts

Thanks for reading till the end! 🙏

This blog is something I built not just to share posts, but to share *how* I build things.

I’ll be writing about my learnings, projects, and experiments, from full-stack development to AI, right here.

Thanks for visiting, and feel free to check out the code on
[GitHub](https://github.com/257divyanshu/my-blog) or reach out if you’re building something similar!

---

**See you in the next post 👋**