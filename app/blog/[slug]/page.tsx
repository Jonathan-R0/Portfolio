import BlogPostClient from "@/components/BlogPostClient";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const blogPosts = {
  "getting-started-with-my-blog": {
    title: "Getting Started with my Blog :)",
    content: `
This is something that I've been wanting to do for a long time. I've always wanted to have a place where I can share my thoughts, ideas, and projects with the world!

Sometimes I will write in English, a veces en español, and maybe even in both languages! I hope you enjoy reading my posts as much as I enjoy writing them.

Stay tuned for more content! 🚀
    `,
  },
};

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-mono">
      <Header />
      <BlogPostClient />
      <Footer />
    </div>
  );
}
