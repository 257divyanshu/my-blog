import { getAllPosts } from "@/lib/posts";

export default async function BlogPage() {
    const posts = await getAllPosts();

    return (
        <main className="prose mx-auto p-6">
            <h1 className="text-4xl font-bold mb-8">Blog</h1>

            <div className="space-y-12">
                {posts.map((post) => (
                    <article key={post.slug} className="border-b pb-6">
                        <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                        <p className="text-sm text-gray-500 mb-4">
                            {new Date(post.date).toLocaleDateString()}
                        </p>

                        <div
                            className="prose"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </article>
                ))}
            </div>
        </main>
    );
}
