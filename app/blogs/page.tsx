"use client";

import { Heading } from "@/components/heading/heading";
import { blogs } from "@/data/blogs";
import { BlogCard } from "@/components/blog/blog-card";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

gsap.registerPlugin(useGSAP);

export default function Blogs() {
  useGSAP(() => {
    const tl = gsap.timeline({
      duration: 0.75,
      ease: "power2.inOut",
    });

    tl.to(".blog-card", {
      y: -10,
      opacity: 1,
      stagger: 0.2,
    });
  });

  return (
    <main className="container mx-auto min-h-screen pt-20 px-4 lg:px-0">
      <div className="flex flex-col gap-8">
        <header className="space-y-4">
          <Heading>My Blog</Heading>
          <p className="text-lg opacity-80">
            Thoughts, learnings, and insights about distributed systems, AI,
            software engineering, and technology.
          </p>
        </header>

        <section className="grid gap-6 grid-cols-1 md:grid-cols-2">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-card opacity-0">
              <BlogCard {...blog} />
            </div>
          ))}
        </section>
      </div>
      <div className="h-10"></div>
    </main>
  );
}
