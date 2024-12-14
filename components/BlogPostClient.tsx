"use client";

import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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

type BlogPostKeys = keyof typeof blogPosts;

export default function BlogPostClient() {
  const { slug } = useParams();
  const post = blogPosts[slug as BlogPostKeys];

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-mono">
      <main className="container mx-auto px-4 py-8">
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {post.title}
        </motion.h1>
        <motion.div
          className="prose prose-invert"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p>{post.content}</p>
        </motion.div>
        <Button className="mt-8">Back to Blog</Button>
      </main>
    </div>
  );
}
