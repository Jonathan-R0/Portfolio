"use client";

import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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
  const [content, setContent] = useState("");
  const [currentLine, setCurrentLine] = useState(0);
  const [isSkipped, setIsSkipped] = useState(false);

  const { slug } = useParams();
  const post = blogPosts[slug as BlogPostKeys];

  useEffect(() => {
    if (!post) return;

    const lines = post.content.trim().split("\n");
    const interval = setInterval(() => {
      if (currentLine < lines.length) {
        setContent((prev) => prev + lines[currentLine] + "\n");
        setCurrentLine((prev) => prev + 1);
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [post, currentLine]);

  const handleSkip = () => {
    setContent(post.content.trim());
    setCurrentLine(post.content.trim().split("\n").length);
    setIsSkipped(true);
  };

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-mono">
      <main className="container mx-auto px-4 py-8">
        <motion.h1
          className="text-4xl font-bold mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {post.title}
        </motion.h1>
        <motion.div
          className="bg-black p-4 rounded-lg relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <pre className="whitespace-pre-wrap">
            <code>{content}</code>
          </pre>
          {!isSkipped &&
            currentLine < post.content.trim().split("\n").length && (
              <div className="animate-pulse absolute bottom-4 right-4">_</div>
            )}
        </motion.div>
        {!isSkipped && currentLine < post.content.trim().split("\n").length && (
          <motion.div
            className="fixed bottom-8 right-8 z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              onClick={handleSkip}
              //variant="green"
              className="bg-green-500 hover:bg-green-600 text-gray-900 font-bold rounded-md"
            >
              Skip Animation
            </Button>
          </motion.div>
        )}
      </main>
    </div>
  );
}
