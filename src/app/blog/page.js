import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main>
      <h1 className="text-4xl font-bold mb-8">All Posts</h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="block group"
            >
              <h2 className="text-2xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                {post.date}
              </p>
              {post.description && (
                <p className="text-gray-700 mt-2 line-clamp-2">
                  {post.description}
                </p>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
