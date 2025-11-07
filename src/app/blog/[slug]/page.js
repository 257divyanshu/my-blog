import { getPostBySlug, getAllPosts } from "@/lib/posts";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function PostPage({ params }) {
  const resolvedParams = (params instanceof Promise) ? await params : params;
  const { slug } = resolvedParams;
  const post = await getPostBySlug(slug);

  return (
    <main>
      <article className="prose lg:prose-lg prose-h1:text-4xl prose-h2:text-2xl prose-a:text-blue-600 prose-a:underline-offset-2 prose-img:rounded-xl prose-headings:font-semibold">
        <header className="mb-10 border-b border-gray-200 pb-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mb-3">
            {post.title}
          </h1>
          <time
            dateTime={post.date}
            className="block text-sm text-gray-500 font-medium"
          >
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </header>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>

      <div className="mt-12">
        <a href="/blog" className="text-blue-600 hover:underline">
          ← Back to all posts
        </a>
      </div>
    </main>
  );
}
