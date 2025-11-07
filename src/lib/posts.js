import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "src/app/blog/posts");

export async function getAllPosts() {
  const filenames = fs.readdirSync(postsDirectory);

  const posts = await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");

      const { data, content } = matter(fileContents);

      const processed = await remark().use(html).process(content);
      const htmlContent = processed.toString();

      return {
        slug: filename.replace(/\.md$/, ""),
        title: data.title || filename,
        date: data.date || "",
        content: htmlContent,
      };
    })
  );

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}
