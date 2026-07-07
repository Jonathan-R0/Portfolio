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
    <div className="site-shell">
      <Header />
      <main className="content-shell">
        <p className="section-kicker mt-6">Writing</p>
        <h1 className="section-title mb-8">Blog 📝</h1>
        <div className="mx-auto max-w-3xl space-y-4">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
              <div className="glass-panel rounded-3xl p-5 transition-all hover:-translate-y-1 hover:border-emerald-300/30 hover:bg-slate-800/60">
                <h2 className="text-xl font-semibold text-white">{post.title}</h2>
                <p className="mt-2 text-sm text-slate-400">{post.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
