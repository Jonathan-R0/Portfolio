import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { posts, postDate } from "@/lib/posts";

export function generateStaticParams() {
  return posts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return { title: posts.find((post) => post.slug === slug)?.title || "Article" };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) notFound();
  const date = postDate(post.date);
  return <main id="main-content" tabIndex={-1} className="page-width inner-page"><article className="reading-article"><Link href="/blog" className="text-link"><ArrowLeft size={18} aria-hidden="true" /> All writing</Link><header><h1>{post.title}</h1><time dateTime={date.iso}>{date.label}</time></header><div className="article-prose">{post.content.trim().split(/\n\s*\n/).map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div></article></main>;
}
