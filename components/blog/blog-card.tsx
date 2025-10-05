"use client";

import Link from "next/link";
import { CalendarDays, Clock, ExternalLink } from "lucide-react";

interface BlogCardProps {
  id: string;
  title: string;
  author: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  externalLink: string;
}

export function BlogCard({
  title,
  description,
  date,
  readTime,
  tags,
  externalLink,
}: BlogCardProps) {
  return (
    <article
      className="group relative flex flex-col p-6 border rounded-xl transition-all duration-300 hover:scale-[1.02] opacity-100"
      style={{
        backgroundColor: "var(--card-bg)",
        borderColor: "var(--card-border)",
      }}
    >
      <Link href={externalLink} target="_blank" rel="noopener noreferrer">
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-start mb-3">
            <h2 className="text-xl font-semibold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors pr-2">
              {title}
            </h2>
            <ExternalLink
              className="w-5 h-5 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ color: "var(--primary)" }}
            />
          </div>

          <div className="flex flex-wrap gap-3 text-sm opacity-70 mb-4">
            <div className="flex items-center gap-1">
              <CalendarDays className="h-4 w-4" />
              <time dateTime={date}>{date}</time>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{readTime}</span>
            </div>
          </div>

          <p className="text-[var(--foreground)] opacity-80 mb-4 flex-grow leading-relaxed">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm rounded-full font-medium"
                style={{
                  backgroundColor: "var(--card-hover)",
                  color: "var(--primary)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
}
