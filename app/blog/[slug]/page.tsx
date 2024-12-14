import BlogPostClient from "@/components/BlogPostClient";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const blogPostTitles = ["getting-started-with-my-blog"];

export async function generateStaticParams() {
  return blogPostTitles.map((slug) => ({
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
