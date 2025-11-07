import { getPostBySlug, getAllPosts } from "@/lib/posts";

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function PostPage({ params }) {
    // ✅ unwrap the promise
    const resolvedParams = (params instanceof Promise) ? await params : params;
    const { slug } = resolvedParams;

    console.log("Resolved slug:", slug);

    const post = await getPostBySlug(slug);

    return (
        <main className="prose mx-auto p-6">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <p className="text-sm text-gray-500 mb-8">{post.date}</p>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />

            <div className="mt-12">
                <a href="/blog" className="text-blue-600 hover:underline">
                    ← Back to all posts
                </a>
            </div>
        </main>
    );
}
