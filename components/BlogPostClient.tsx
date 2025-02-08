"use client";

import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface BlogPost {
  slug: string;
  title: string;
  content: string;
  date: string;
}

export default function BlogPostClient() {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [content, setContent] = useState("");
  const [currentLine, setCurrentLine] = useState(0);
  const [isSkipped, setIsSkipped] = useState(false);

  const { slug } = useParams();

  useEffect(() => {
    fetch("/blogs.json")
      .then((response) => response.json())
      .then((data) => {
        const foundPost = data.find((post: BlogPost) => post.slug === slug);
        setPost(foundPost);
      })
      .catch((error) => console.error("Error fetching blog posts:", error));
  }, [slug]);

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
    if (post) {
      setContent(post.content.trim());
      setCurrentLine(post.content.trim().split("\n").length);
      setIsSkipped(true);
    }
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
