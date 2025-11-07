import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import remarkGfm from "remark-gfm"; // ✅ supports bold, tables, emojis, etc.

const postsDirectory = path.join(process.cwd(), "src/app/blog/posts");

export function getAllPosts() {
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    const dateValue = data.date
      ? new Date(data.date).toISOString().split("T")[0]
      : "Unknown date";

    return {
      slug: filename.replace(/\.md$/, ""),
      title: data.title || filename,
      date: dateValue,
      description: data.description || "",
    };
  });

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getPostBySlug(slug) {
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContents);

  const processed = await remark()
    .use(remarkGfm)  // ✅ for full markdown support
    .use(html)       // ✅ converts markdown → HTML
    .process(content);

  const htmlContent = processed.toString();

  const dateValue = data.date
    ? new Date(data.date).toISOString().split("T")[0]
    : "Unknown date";

  return {
    slug,
    title: data.title || slug,
    date: dateValue,
    description: data.description || "",
    content: htmlContent, // ✅ HTML output
  };
}
