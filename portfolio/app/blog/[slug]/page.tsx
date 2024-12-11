"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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

export default function BlogPost() {
  const params = useParams();
  const [content, setContent] = useState("");
  const [currentLine, setCurrentLine] = useState(0);
  const [isSkipped, setIsSkipped] = useState(false);

  const post = blogPosts[params.slug as keyof typeof blogPosts];

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

  if (!post) return <div>Post not found</div>;

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-mono">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <motion.h1
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
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
              variant="default"
              className="bg-green-500 hover:bg-green-600 text-gray-900 font-bold flex items-center justify-center space-x-2 scale-in w-48 h-12 text-base"
            >
              Skip Animation
            </Button>
          </motion.div>
        )}
      </main>
      <Footer />
    </div>
  );
}
