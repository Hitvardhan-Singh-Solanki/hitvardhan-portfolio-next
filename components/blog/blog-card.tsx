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
    <Link
      href={externalLink}
      target="_blank"
      rel="noopener noreferrer"
      className="blog-card-content"
    >
      <div className="blog-header">
        <h2 className="blog-title">{title}</h2>
        <ExternalLink className="blog-external-icon" size={20} />
      </div>

      <div className="blog-meta">
        <div className="blog-meta-item">
          <CalendarDays />
          <time dateTime={date}>{date}</time>
        </div>
        <div className="blog-meta-item">
          <Clock />
          <span>{readTime}</span>
        </div>
      </div>

      <p className="blog-description">{description}</p>

      <div className="blog-tags">
        {tags.map((tag) => (
          <span key={tag} className="blog-tag">
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
