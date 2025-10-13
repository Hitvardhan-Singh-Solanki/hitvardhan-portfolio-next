"use client";

import Link from "next/link";
import { CalendarDays, Clock, ExternalLink } from "lucide-react";
import { useHoverAnimation } from "@/lib/hooks/animations";

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
  const cardAnimation = useHoverAnimation({
    scale: 1.02,
    y: -4,
    duration: 0.3,
  });
  const iconAnimation = useHoverAnimation({
    scale: 1.1,
    rotation: 5,
    duration: 0.3,
  });

  return (
    <Link
      href={externalLink}
      target="_blank"
      rel="noopener noreferrer"
      ref={cardAnimation.elementRef}
      onMouseEnter={() => {
        cardAnimation.handleMouseEnter();
        iconAnimation.handleMouseEnter();
      }}
      onMouseLeave={() => {
        cardAnimation.handleMouseLeave();
        iconAnimation.handleMouseLeave();
      }}
      className="blog-card-content"
    >
      <div className="blog-header">
        <h2 className="blog-title">{title}</h2>
        <ExternalLink
          ref={iconAnimation.elementRef}
          className="blog-external-icon"
          size={20}
        />
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
