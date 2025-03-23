import Link from "next/link";
import { CalendarDays, Clock, User } from "lucide-react";

interface BlogCardProps {
  id: number;
  title: string;
  author: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
}

export function BlogCard({ id, title, author, content, date, readTime, tags }: BlogCardProps) {
  return (
    <article className="group relative flex flex-col space-y-2 rounded-lg border border-[var(--secondary)] bg-[var(--background)] p-6 transition-all hover:border-[var(--primary)]">
      <Link href={`/blogs/${id}`}>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight text-[var(--foreground)] transition-colors group-hover:text-[var(--primary)]">
            {title}
          </h2>
          <div className="flex flex-wrap gap-4 text-sm text-[var(--muted-foreground)]">
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>{author}</span>
            </div>
            <div className="flex items-center gap-1">
              <CalendarDays className="h-4 w-4" />
              <time dateTime={date}>{date}</time>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{readTime}</span>
            </div>
          </div>
          <p className="text-[var(--muted-foreground)]">
            {content.length > 200 ? `${content.slice(0, 200)}...` : content}
          </p>
        </div>
      </Link>
      <div className="flex flex-wrap gap-2 pt-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center rounded-full bg-[var(--accent)] px-2.5 py-0.5 text-xs font-medium text-[var(--accent-foreground)]"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
