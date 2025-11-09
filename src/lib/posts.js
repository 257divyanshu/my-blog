import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import remarkGfm from "remark-gfm";

const postsDirectory = path.join(process.cwd(), "src/app/blog/posts");

// Normalize frontmatter date to a full ISO string (keep time if provided)
function normalizeToIso(dateInput) {
  if (!dateInput) return null;

  // gray-matter may give a Date or a string
  const d = (dateInput instanceof Date) ? dateInput : new Date(dateInput);

  if (isNaN(d.getTime())) return null;
  return d.toISOString(); // e.g. "2025-11-07T18:42:00.000Z"
}

function safeDisplay(dateIso) {
  if (!dateIso) return "Unknown date";
  // Display only date on list; you already format nicely on the post page
  return dateIso.split("T")[0]; // "YYYY-MM-DD"
}

export function getAllPosts() {
  const filenames = fs.readdirSync(postsDirectory).filter(f => f.endsWith(".md"));

  console.log("\n[getAllPosts] filenames:", filenames);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    const raw = data.date ?? null;                // whatever is in frontmatter
    const iso = normalizeToIso(raw);              // full ISO (keeps time)
    const displayDate = safeDisplay(iso);         // for quick list display

    console.log(`[getAllPosts] ${filename} -> raw:`, raw, " iso:", iso, " display:", displayDate);

    return {
      slug: filename.replace(/\.md$/, ""),
      title: data.title || filename,
      // Store the full ISO so sorting is precise; renderers can format it
      date: iso || displayDate,
      description: data.description || "",
    };
  });

  // Sort by exact timestamp (desc). If time is missing, those fall to 00:00:00
  posts.sort((a, b) => {
    const ta = new Date(a.date).getTime();
    const tb = new Date(b.date).getTime();
    return (isNaN(tb) ? 0 : tb) - (isNaN(ta) ? 0 : ta);
  });

  console.log("[getAllPosts] sorted slugs:", posts.map(p => `${p.slug} (${p.date})`));

  return posts;
}

export async function getPostBySlug(slug) {
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContents);

  const iso = normalizeToIso(data.date ?? null);
  const displayDate = safeDisplay(iso);

  console.log(`[getPostBySlug] ${slug} -> raw:`, data.date, " iso:", iso, " display:", displayDate);

  const processed = await remark().use(remarkGfm).use(html).process(content);
  const htmlContent = processed.toString();

  return {
    slug,
    title: data.title || slug,
    date: iso || displayDate,  // keep full ISO if available
    description: data.description || "",
    content: htmlContent,
  };
}
