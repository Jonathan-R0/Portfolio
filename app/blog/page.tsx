import Header from "@/components/Header";
import Link from "next/link";

const blogPosts = [
  {
    slug: "getting-started-with-my-blog",
    title: "Getting Started with my Blog :)",
    date: "11-12-2024",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-mono">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Blog 📝</h1>
        <div className="space-y-4">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
              <div className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors">
                <h2 className="text-xl font-bold">{post.title}</h2>
                <p className="text-gray-400">{post.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
