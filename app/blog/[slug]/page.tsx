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
    <div className="site-shell">
      <Header />
      <BlogPostClient />
      <Footer />
    </div>
  );
}
