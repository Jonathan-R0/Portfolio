import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { posts, postDate } from "@/lib/posts";

export const metadata: Metadata = { title: "Writing" };

export default function BlogPage() {
  return <main id="main-content" tabIndex={-1} className="page-width inner-page writing-page"><div className="page-intro"><h1>Writing.</h1><p>Thoughts, ideas, and things I’m working on.<br />Sometimes in English, a veces en español.</p></div><div className="article-list">{posts.map((post) => { const date = postDate(post.date); return <Link key={post.slug} href={`/blog/${post.slug}`} className="article-row"><time dateTime={date.iso}>{date.label}</time><h2>{post.title}</h2><ArrowUpRight size={26} aria-hidden="true" /></Link>; })}</div></main>;
}
