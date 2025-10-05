"use client";

import { blogs } from "@/data/blogs";
import { notFound } from "next/navigation";
import { useEffect } from "react";

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

export default function BlogPost({ params }: BlogPostPageProps) {
  const blog = blogs.find((b) => b.id === params.id);

  useEffect(() => {
    if (blog) {
      window.location.href = blog.externalLink;
    }
  }, [blog]);

  if (!blog) {
    notFound();
  }

  return (
    <main className="container mx-auto min-h-screen py-20 px-4 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Redirecting to Medium...</h1>
        <p className="text-lg opacity-70">
          You will be redirected to the blog post on Medium.
        </p>
      </div>
    </main>
  );
}
