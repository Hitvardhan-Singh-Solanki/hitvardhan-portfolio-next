import { Heading } from "@/components/heading/heading";
import { blogs } from "@/data/blogs";
import { CalendarDays, Clock, User } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

export default function BlogPost({ params }: BlogPostPageProps) {
  const blog = blogs.find((b) => b.id === parseInt(params.id));

  if (!blog) {
    notFound();
  }

  return (
    <main className="container mx-auto min-h-screen py-20 px-4">
      <article className="mx-auto max-w-3xl">
        <Link
          href="/blogs"
          className="mb-8 inline-flex items-center text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
        >
          ← Back to blogs
        </Link>

        <header className="mb-8 space-y-4">
          <Heading>{blog.title}</Heading>

          <div className="flex flex-wrap gap-4 text-sm text-[var(--muted-foreground)]">
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <CalendarDays className="h-4 w-4" />
              <time dateTime={blog.date}>{blog.date}</time>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{blog.readTime}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-[var(--accent)] px-2.5 py-0.5 text-xs font-medium text-[var(--accent-foreground)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          {blog.content.split('\n\n').map((paragraph, index) => {
            if (paragraph.includes(':')) {
              const [heading, content] = paragraph.split(':');
              return (
                <div key={index} className="mb-6">
                  <h3 className="text-xl font-bold mb-2">{heading.trim()}</h3>
                  <p>{content.trim()}</p>
                </div>
              );
            }
            return <p key={index} className="mb-6">{paragraph}</p>;
          })}
        </div>
      </article>
    </main>
  );
}
