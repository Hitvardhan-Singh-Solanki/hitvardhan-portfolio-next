import { Heading } from "@/components/heading/heading";
import { blogs } from "@/data/blogs";
import { BlogCard } from "@/components/blog/blog-card";

export default function Blogs() {
  return (
    <main className="container mx-auto min-h-screen py-20 px-4">
      <div className="flex flex-col gap-8">
        <header className="space-y-4">
          <Heading>My Blog</Heading>
          <p className="text-lg text-[var(--muted-foreground)]">
            Thoughts, learnings, and insights about web development, software engineering, and technology.
          </p>
        </header>

        <section className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </section>
      </div>
    </main>
  );
}
