"use client";

import { Heading } from "@/components/heading/heading";
import { blogs } from "@/data/blogs";
import { BlogCard } from "@/components/blog/blog-card";
import { useStaggerAnimation } from "@/lib/hooks";
import "./blogs.scss";

export default function Blogs() {
  useStaggerAnimation(".blog-card");

  const totalBlogs = blogs.length;
  const allTopics = Array.from(new Set(blogs.flatMap((b) => b.tags)));
  const totalTopics = allTopics.length;

  return (
    <div className="blogs-page">
      <div className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="blogs-hero">
          <Heading>Blog</Heading>
          <p className="blogs-intro">
            Thoughts, learnings, and insights about distributed systems, AI,
            software engineering, and technology.
          </p>
        </div>

        {/* Stats */}
        <div className="blogs-stats">
          <div className="blogs-stat-card">
            <div className="blogs-stat-value">{totalBlogs}</div>
            <div className="blogs-stat-label">Articles</div>
          </div>
          <div className="blogs-stat-card">
            <div className="blogs-stat-value">{totalTopics}</div>
            <div className="blogs-stat-label">Topics</div>
          </div>
          <div className="blogs-stat-card">
            <div className="blogs-stat-value">Medium</div>
            <div className="blogs-stat-label">Platform</div>
          </div>
        </div>

        {/* Blogs Grid */}
        <div className="blogs-grid">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-card opacity-0">
              <BlogCard {...blog} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
