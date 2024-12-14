"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, BookOpen } from "lucide-react";
import Link from "next/link";
import emailjs from "emailjs-com";

const MAX_CHARS = 10000;
const WARN_THRESHOLD = 9900;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [charCount, setCharCount] = useState(0);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "message" && value.length > MAX_CHARS) {
      return;
    }
    setFormData({ ...formData, [name]: value });
    if (name === "message") {
      setCharCount(value.length);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.message.length > MAX_CHARS) {
      return;
    }
    setIsSubmitting(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_TEMPLATE_ID || "",
        formData,
        process.env.NEXT_PUBLIC_USER_ID || ""
      );
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setCharCount(0);
    } catch (error) {
      console.error("Error sending email:", error);
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20">
      <motion.h2
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Get in Touch 📬
      </motion.h2>
      <motion.form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-gray-800 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-gray-800 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
        <div className="mb-4 relative">
          <label htmlFor="message" className="block mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            maxLength={MAX_CHARS}
            className="w-full bg-gray-800 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          ></textarea>
          <div
            className={`absolute bottom-2 right-2 text-sm ${
              charCount > WARN_THRESHOLD ? "text-red-500" : "text-gray-400"
            }`}
          >
            {charCount}/{MAX_CHARS}
          </div>
        </div>
        <div className="flex items-center justify-between mb-4">
          <motion.button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-gray-900 font-bold py-2 px-4 rounded-md transition-colors flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isSubmitting || charCount > MAX_CHARS}
          >
            {isSubmitting ? (
              <motion.div
                className="w-6 h-6 border-t-2 border-gray-900 rounded-full animate-spin"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            ) : (
              <>
                <Send size={20} />
                <span>Send Message</span>
              </>
            )}
          </motion.button>
          <Link
            href="/blog"
            className="text-green-400 hover:text-green-500 transition-colors flex items-center space-x-2"
          >
            <BookOpen size={20} />
            <span>Check out my blog</span>
          </Link>
        </div>
      </motion.form>
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-md shadow-lg flex items-center space-x-2"
          >
            <CheckCircle size={24} />
            <span>Message sent successfully!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
